/**
 * Převede tahák ve formátu .docx na JSON pro webovou stránku s fulltextovým hledáním.
 *
 * Parser počítá se strukturou, kterou generuje náš tahák (nadpisy, odrážky,
 * tabulky bez vnoření, inline obrázky). Na obecné Word dokumenty určený není.
 *
 * Použití:
 *   bun scripts/cheat-sheet-to-json.ts --input <tahak.docx> --output <tahak.json> \
 *     --images-dir <public/...> --images-url </...>
 */
import { execFileSync } from "node:child_process";
import {
  copyFileSync,
  mkdirSync,
  mkdtempSync,
  readFileSync,
  rmSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { basename, join } from "node:path";
import type {
  CheatSheetBlock,
  CheatSheetDocument,
  CheatSheetParagraph,
  CheatSheetRun,
  CheatSheetTableCell,
  CheatSheetTableRow,
} from "../src/types";

interface CliOptions {
  input: string;
  output: string;
  imagesDir: string;
  imagesUrl: string;
}

const EMU_PER_PIXEL = 9525;
const CALLOUT_FILL = "FFF6E3";
const TOP_LEVEL_BLOCK_PATTERN =
  /<w:tbl>[\s\S]*?<\/w:tbl>|<w:p[ >][\s\S]*?<\/w:p>/g;

function parseCliOptions(args: string[]): CliOptions {
  const readOption = (name: string): string => {
    const index = args.indexOf(`--${name}`);
    const value = index >= 0 ? args[index + 1] : undefined;
    if (!value) {
      throw new Error(`Chybí povinný parametr --${name}`);
    }
    return value;
  };

  return {
    input: readOption("input"),
    output: readOption("output"),
    imagesDir: readOption("images-dir"),
    imagesUrl: readOption("images-url"),
  };
}

function decodeXmlEntities(text: string): string {
  return text
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&apos;/g, "'")
    .replace(/&amp;/g, "&");
}

function readAttribute(xml: string, pattern: RegExp): string | undefined {
  return pattern.exec(xml)?.[1];
}

function parseRun(runXml: string): CheatSheetRun | null {
  const text = [...runXml.matchAll(/<w:t(?: [^>]*)?>([^<]*)<\/w:t>/g)]
    .map((match) => decodeXmlEntities(match[1] ?? ""))
    .join("");
  if (!text) {
    return null;
  }

  const run: CheatSheetRun = { text };
  if (runXml.includes("<w:b/>")) {
    run.isBold = true;
  }
  if (runXml.includes("<w:i/>")) {
    run.isItalic = true;
  }
  return run;
}

function mergeAdjacentRuns(runs: CheatSheetRun[]): CheatSheetRun[] {
  const merged: CheatSheetRun[] = [];
  for (const run of runs) {
    const previous = merged.at(-1);
    const hasSameFormatting =
      previous?.isBold === run.isBold && previous?.isItalic === run.isItalic;
    if (previous && hasSameFormatting) {
      previous.text += run.text;
    } else {
      merged.push({ ...run });
    }
  }
  return merged;
}

function parseParagraphRuns(paragraphXml: string): CheatSheetParagraph {
  const runs = [...paragraphXml.matchAll(/<w:r>[\s\S]*?<\/w:r>/g)]
    .map((match) => parseRun(match[0]))
    .filter((run): run is CheatSheetRun => run !== null);
  return mergeAdjacentRuns(runs);
}

function toPlainText(paragraph: CheatSheetParagraph): string {
  return paragraph.map((run) => run.text).join("");
}

function slugify(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

class ImageCollector {
  private readonly copiedFiles = new Map<string, string>();

  constructor(
    private readonly extractedDir: string,
    private readonly relationships: Map<string, string>,
    private readonly options: CliOptions,
  ) {}

  collect(relationshipId: string): string {
    const target = this.relationships.get(relationshipId);
    if (!target) {
      throw new Error(
        `Obrázek s relationship ${relationshipId} nemá cíl v document.xml.rels`,
      );
    }

    const cachedUrl = this.copiedFiles.get(target);
    if (cachedUrl) {
      return cachedUrl;
    }

    const fileName = basename(target);
    copyFileSync(
      join(this.extractedDir, "word", target),
      join(this.options.imagesDir, fileName),
    );
    const url = `${this.options.imagesUrl}/${fileName}`;
    this.copiedFiles.set(target, url);
    return url;
  }
}

function parseImage(
  paragraphXml: string,
  images: ImageCollector,
  alt: string,
): CheatSheetBlock {
  const relationshipId = readAttribute(paragraphXml, /r:embed="([^"]+)"/);
  const widthEmu = Number(readAttribute(paragraphXml, /<wp:extent cx="(\d+)"/));
  const heightEmu = Number(
    readAttribute(paragraphXml, /<wp:extent cx="\d+" cy="(\d+)"/),
  );
  if (!relationshipId || !widthEmu || !heightEmu) {
    throw new Error(`Obrázek v sekci "${alt}" nemá r:embed nebo rozměry`);
  }

  return {
    type: "image",
    src: images.collect(relationshipId),
    alt,
    width: Math.round(widthEmu / EMU_PER_PIXEL),
    height: Math.round(heightEmu / EMU_PER_PIXEL),
  };
}

function parseTableCell(cellXml: string): CheatSheetTableCell {
  const cell: CheatSheetTableCell = {
    paragraphs: [...cellXml.matchAll(/<w:p[ >][\s\S]*?<\/w:p>/g)]
      .map((match) => parseParagraphRuns(match[0]))
      .filter((paragraph) => paragraph.length > 0),
  };

  const fill = readAttribute(cellXml, /<w:shd [^>]*w:fill="([0-9A-Fa-f]{6})"/);
  if (fill) {
    cell.fill = fill.toUpperCase();
  }
  const colSpan = Number(readAttribute(cellXml, /<w:gridSpan w:val="(\d+)"/));
  if (colSpan > 1) {
    cell.colSpan = colSpan;
  }
  return cell;
}

function parseTableRow(rowXml: string): CheatSheetTableRow {
  const row: CheatSheetTableRow = {
    cells: [...rowXml.matchAll(/<w:tc>[\s\S]*?<\/w:tc>/g)].map((match) =>
      parseTableCell(match[0]),
    ),
  };
  if (rowXml.includes("<w:tblHeader")) {
    row.isHeader = true;
  }
  return row;
}

function parseTable(tableXml: string): CheatSheetBlock {
  const rows = [...tableXml.matchAll(/<w:tr[ >][\s\S]*?<\/w:tr>/g)].map(
    (match) => parseTableRow(match[0]),
  );
  const firstCell = rows[0]?.cells[0];
  const isCallout =
    rows.length === 1 &&
    rows[0]?.cells.length === 1 &&
    firstCell?.fill === CALLOUT_FILL;

  if (isCallout && firstCell) {
    const [title = [], ...paragraphs] = firstCell.paragraphs;
    return { type: "callout", title: toPlainText(title), paragraphs };
  }
  return { type: "table", rows };
}

function parseParagraph(
  paragraphXml: string,
  images: ImageCollector,
  currentHeading: string,
): CheatSheetBlock | null {
  if (paragraphXml.includes("<w:drawing>")) {
    return parseImage(paragraphXml, images, currentHeading);
  }

  const runs = parseParagraphRuns(paragraphXml);
  const text = toPlainText(runs);
  if (!text.trim()) {
    return null;
  }

  const style = readAttribute(paragraphXml, /<w:pStyle w:val="([^"]+)"/);
  switch (style) {
    case "Title":
      return { type: "title", text };
    case "Heading1":
      return { type: "heading", level: 1, text, id: slugify(text) };
    case "Heading2":
      return { type: "heading", level: 2, text, id: slugify(text) };
    case "ListParagraph":
      return { type: "listItem", runs };
    default:
      return { type: "paragraph", runs };
  }
}

function parseBlocks(
  documentXml: string,
  images: ImageCollector,
): CheatSheetBlock[] {
  const bodyStart = documentXml.indexOf("<w:body>");
  if (bodyStart < 0) {
    throw new Error("document.xml neobsahuje <w:body>");
  }

  const blocks: CheatSheetBlock[] = [];
  let currentHeading = "";
  for (const match of documentXml
    .slice(bodyStart)
    .matchAll(TOP_LEVEL_BLOCK_PATTERN)) {
    const blockXml = match[0];
    const block = blockXml.startsWith("<w:tbl>")
      ? parseTable(blockXml)
      : parseParagraph(blockXml, images, currentHeading);
    if (!block) {
      continue;
    }
    if (block.type === "heading" || block.type === "title") {
      currentHeading = block.text;
    }
    blocks.push(block);
  }
  return blocks;
}

function readRelationships(extractedDir: string): Map<string, string> {
  const relationshipsXml = readFileSync(
    join(extractedDir, "word/_rels/document.xml.rels"),
    "utf8",
  );
  return new Map(
    [
      ...relationshipsXml.matchAll(
        /<Relationship Id="([^"]+)"[^>]*Target="([^"]+)"/g,
      ),
    ].map((match) => [match[1] ?? "", match[2] ?? ""]),
  );
}

function convertCheatSheet(options: CliOptions): CheatSheetDocument {
  const extractedDir = mkdtempSync(join(tmpdir(), "cheat-sheet-"));
  try {
    execFileSync("unzip", ["-q", "-o", options.input, "-d", extractedDir]);
    rmSync(options.imagesDir, { recursive: true, force: true });
    mkdirSync(options.imagesDir, { recursive: true });

    const images = new ImageCollector(
      extractedDir,
      readRelationships(extractedDir),
      options,
    );
    const documentXml = readFileSync(
      join(extractedDir, "word/document.xml"),
      "utf8",
    );
    return { blocks: parseBlocks(documentXml, images) };
  } finally {
    rmSync(extractedDir, { recursive: true, force: true });
  }
}

const options = parseCliOptions(process.argv.slice(2));
const cheatSheet = convertCheatSheet(options);
writeFileSync(options.output, `${JSON.stringify(cheatSheet)}\n`);
console.log(
  `${options.input} → ${options.output} (${cheatSheet.blocks.length} bloků)`,
);
