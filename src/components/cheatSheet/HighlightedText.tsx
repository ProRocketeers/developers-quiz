import type { CheatSheetParagraph } from "../../types";
import { splitByMatches } from "../../services/cheatSheetSearch";

interface HighlightedTextProps {
  text: string;
  terms: string[];
}

export function HighlightedText({ text, terms }: HighlightedTextProps) {
  return splitByMatches(text, terms).map((segment, index) =>
    segment.isMatch ? <mark key={index}>{segment.text}</mark> : segment.text,
  );
}

interface HighlightedParagraphProps {
  paragraph: CheatSheetParagraph;
  terms: string[];
}

export function HighlightedParagraph({
  paragraph,
  terms,
}: HighlightedParagraphProps) {
  return paragraph.map((run, index) => {
    const content = <HighlightedText text={run.text} terms={terms} />;
    if (run.isBold) {
      return <strong key={index}>{content}</strong>;
    }
    if (run.isItalic) {
      return <em key={index}>{content}</em>;
    }
    return <span key={index}>{content}</span>;
  });
}
