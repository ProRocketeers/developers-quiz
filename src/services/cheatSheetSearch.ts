import type {
  CheatSheetBlock,
  CheatSheetDocument,
  CheatSheetParagraph,
  CheatSheetTableRow,
} from "../types";

export interface CheatSheetSection {
  id: string;
  heading: string | null;
  blocks: CheatSheetBlock[];
}

export interface FilteredCheatSheetSection extends CheatSheetSection {
  matchCount: number;
}

const INTRO_SECTION_ID = "uvod";

/**
 * Normalizuje po jednotlivých znacích, aby výsledek měl stejnou délku jako
 * vstup. Díky tomu lze nalezené pozice použít přímo pro zvýraznění v originálu.
 */
export function normalizeForSearch(text: string): string {
  return text
    .split("")
    .map((char) => (char.normalize("NFD")[0] ?? char).toLowerCase())
    .join("");
}

export function parseSearchTerms(query: string): string[] {
  return normalizeForSearch(query).split(/\s+/).filter(Boolean);
}

function paragraphText(paragraph: CheatSheetParagraph): string {
  return paragraph.map((run) => run.text).join("");
}

function rowText(row: CheatSheetTableRow): string {
  return row.cells
    .flatMap((cell) => cell.paragraphs.map(paragraphText))
    .join(" ");
}

function blockText(block: CheatSheetBlock): string {
  switch (block.type) {
    case "title":
    case "heading":
      return block.text;
    case "paragraph":
    case "listItem":
      return paragraphText(block.runs);
    case "callout":
      return [block.title, ...block.paragraphs.map(paragraphText)].join(" ");
    case "table":
      return block.rows.map(rowText).join(" ");
    case "image":
      return "";
  }
}

function containsAllTerms(text: string, terms: string[]): boolean {
  const normalizedText = normalizeForSearch(text);
  return terms.every((term) => normalizedText.includes(term));
}

export function splitIntoSections(
  cheatSheet: CheatSheetDocument,
): CheatSheetSection[] {
  const sections: CheatSheetSection[] = [
    { id: INTRO_SECTION_ID, heading: null, blocks: [] },
  ];

  for (const block of cheatSheet.blocks) {
    const isTopLevelHeading = block.type === "heading" && block.level === 1;
    if (isTopLevelHeading) {
      sections.push({ id: block.id, heading: block.text, blocks: [] });
      continue;
    }
    sections.at(-1)?.blocks.push(block);
  }

  return sections.filter(
    (section) => section.heading !== null || section.blocks.length > 0,
  );
}

function filterTableRows(
  block: Extract<CheatSheetBlock, { type: "table" }>,
  terms: string[],
): CheatSheetBlock | null {
  const matchingRows = block.rows.filter(
    (row) => !row.isHeader && containsAllTerms(rowText(row), terms),
  );
  if (matchingRows.length === 0) {
    return null;
  }

  const headerRows = block.rows.filter((row) => row.isHeader);
  return { ...block, rows: [...headerRows, ...matchingRows] };
}

function filterBlock(
  block: CheatSheetBlock,
  terms: string[],
): CheatSheetBlock | null {
  if (block.type === "table") {
    return filterTableRows(block, terms);
  }
  return containsAllTerms(blockText(block), terms) ? block : null;
}

function countMatchedBlocks(blocks: CheatSheetBlock[]): number {
  return blocks.reduce((count, block) => {
    if (block.type === "heading") {
      return count;
    }
    if (block.type === "table") {
      return count + block.rows.filter((row) => !row.isHeader).length;
    }
    return count + 1;
  }, 0);
}

/**
 * Sekce, jejíž nadpis odpovídá dotazu, se zobrazí celá. Jinak zůstanou jen
 * odpovídající bloky; u tabulek jen odpovídající řádky (plus záhlaví), což je
 * podstatné hlavně u rozsáhlé matice vztahů.
 */
export function filterSection(
  section: CheatSheetSection,
  terms: string[],
): FilteredCheatSheetSection | null {
  if (terms.length === 0) {
    return { ...section, matchCount: 0 };
  }

  if (section.heading && containsAllTerms(section.heading, terms)) {
    return { ...section, matchCount: 1 };
  }

  const matchedBlocks = section.blocks
    .map((block) => filterBlock(block, terms))
    .filter((block): block is CheatSheetBlock => block !== null);
  if (matchedBlocks.length === 0) {
    return null;
  }

  return {
    ...section,
    blocks: matchedBlocks,
    matchCount: countMatchedBlocks(matchedBlocks),
  };
}

export interface HighlightSegment {
  text: string;
  isMatch: boolean;
}

export function splitByMatches(
  text: string,
  terms: string[],
): HighlightSegment[] {
  if (terms.length === 0) {
    return [{ text, isMatch: false }];
  }

  const normalizedText = normalizeForSearch(text);
  const isMatchedChar = new Array<boolean>(text.length).fill(false);
  for (const term of terms) {
    let index = normalizedText.indexOf(term);
    while (index >= 0) {
      isMatchedChar.fill(true, index, index + term.length);
      index = normalizedText.indexOf(term, index + term.length);
    }
  }

  const segments: HighlightSegment[] = [];
  for (let index = 0; index < text.length; index++) {
    const isMatch = isMatchedChar[index] ?? false;
    const previous = segments.at(-1);
    if (previous && previous.isMatch === isMatch) {
      previous.text += text[index];
    } else {
      segments.push({ text: text[index] ?? "", isMatch });
    }
  }
  return segments;
}
