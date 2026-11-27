import type {
  CheatSheetBlock,
  CheatSheetTableCell,
  CheatSheetTableRow,
} from "../../types";
import { HighlightedParagraph, HighlightedText } from "./HighlightedText";

interface Props {
  block: CheatSheetBlock;
  terms: string[];
}

interface TableCellProps {
  cell: CheatSheetTableCell;
  isHeader: boolean;
  terms: string[];
}

function TableCell({ cell, isHeader, terms }: TableCellProps) {
  const CellTag = isHeader ? "th" : "td";
  return (
    <CellTag
      colSpan={cell.colSpan}
      style={cell.fill ? { backgroundColor: `#${cell.fill}` } : undefined}
    >
      {cell.paragraphs.map((paragraph, index) => (
        <p key={index}>
          <HighlightedParagraph paragraph={paragraph} terms={terms} />
        </p>
      ))}
    </CellTag>
  );
}

interface TableRowProps {
  row: CheatSheetTableRow;
  terms: string[];
}

function TableRow({ row, terms }: TableRowProps) {
  return (
    <tr>
      {row.cells.map((cell, index) => (
        <TableCell
          key={index}
          cell={cell}
          isHeader={row.isHeader ?? false}
          terms={terms}
        />
      ))}
    </tr>
  );
}

function CheatSheetBlockView({ block, terms }: Props) {
  switch (block.type) {
    case "title":
      return (
        <h1 className="cheat-sheet-title">
          <HighlightedText text={block.text} terms={terms} />
        </h1>
      );
    case "heading":
      return (
        <h3 id={block.id} className="cheat-sheet-subheading">
          <HighlightedText text={block.text} terms={terms} />
        </h3>
      );
    case "paragraph":
      return (
        <p>
          <HighlightedParagraph paragraph={block.runs} terms={terms} />
        </p>
      );
    case "listItem":
      return (
        <p className="cheat-sheet-list-item">
          <HighlightedParagraph paragraph={block.runs} terms={terms} />
        </p>
      );
    case "image":
      return (
        <img
          className="cheat-sheet-image"
          src={block.src}
          alt={block.alt}
          width={block.width}
          height={block.height}
          loading="lazy"
        />
      );
    case "callout":
      return (
        <aside className="cheat-sheet-callout">
          <strong>
            <HighlightedText text={block.title} terms={terms} />
          </strong>
          {block.paragraphs.map((paragraph, index) => (
            <p key={index}>
              <HighlightedParagraph paragraph={paragraph} terms={terms} />
            </p>
          ))}
        </aside>
      );
    case "table": {
      const headerRows = block.rows.filter((row) => row.isHeader);
      const bodyRows = block.rows.filter((row) => !row.isHeader);
      return (
        <div className="cheat-sheet-table-wrapper">
          <table className="cheat-sheet-table">
            {headerRows.length > 0 && (
              <thead>
                {headerRows.map((row, index) => (
                  <TableRow key={index} row={row} terms={terms} />
                ))}
              </thead>
            )}
            <tbody>
              {bodyRows.map((row, index) => (
                <TableRow key={index} row={row} terms={terms} />
              ))}
            </tbody>
          </table>
        </div>
      );
    }
  }
}

export default CheatSheetBlockView;
