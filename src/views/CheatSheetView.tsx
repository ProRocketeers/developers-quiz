import { useDeferredValue, useMemo, useState } from "react";
import CheatSheetBlockView from "../components/cheatSheet/CheatSheetBlockView";
import { HighlightedText } from "../components/cheatSheet/HighlightedText";
import {
  CHEAT_SHEET_LANGUAGE_LABELS,
  CHEAT_SHEET_LANGUAGE_QUERY_PARAM,
  CHEAT_SHEET_LANGUAGES,
  type CheatSheetLanguage,
} from "../constants/cheatSheets";
import { CERTIFICATION_ROUTES } from "../constants/certifications";
import {
  filterSection,
  parseSearchTerms,
  splitIntoSections,
  type FilteredCheatSheetSection,
} from "../services/cheatSheetSearch";
import type { CertificationCheatSheet, CheatSheetDocument } from "../types";
import "./CheatSheetView.css";

interface Props {
  cheatSheet: CheatSheetDocument;
  metadata: CertificationCheatSheet;
  language: CheatSheetLanguage;
  pageHref: string;
}

function buildLanguageHref(pageHref: string, language: CheatSheetLanguage) {
  return `${pageHref}?${CHEAT_SHEET_LANGUAGE_QUERY_PARAM}=${language}`;
}

function formatMatchSummary(sections: FilteredCheatSheetSection[]): string {
  const matchCount = sections.reduce(
    (total, section) => total + section.matchCount,
    0,
  );
  if (matchCount === 0) {
    return "Nic nenalezeno. Zkuste jiné slovo nebo druhý jazyk taháku.";
  }
  const chapterLabel = sections.length === 1 ? "kapitole" : "kapitolách";
  return `Nalezeno ${matchCount}× v ${sections.length} ${chapterLabel}`;
}

function CheatSheetView({ cheatSheet, metadata, language, pageHref }: Props) {
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);
  const sections = useMemo(() => splitIntoSections(cheatSheet), [cheatSheet]);
  const terms = useMemo(() => parseSearchTerms(deferredQuery), [deferredQuery]);
  const visibleSections = useMemo(
    () =>
      sections
        .map((section) => filterSection(section, terms))
        .filter(
          (section): section is FilteredCheatSheetSection => section !== null,
        ),
    [sections, terms],
  );
  const isSearching = terms.length > 0;

  return (
    <div className="cheat-sheet-page">
      <a className="cheat-sheet-back" href={CERTIFICATION_ROUTES.home}>
        ← Zpět na certifikace
      </a>

      <div className="cheat-sheet-toolbar">
        <input
          type="search"
          className="cheat-sheet-search"
          placeholder="Hledat v taháku, např. serving, artifact, plateau…"
          aria-label="Hledat v taháku"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoFocus
        />
        <nav className="cheat-sheet-languages" aria-label="Jazyk taháku">
          {CHEAT_SHEET_LANGUAGES.map((option) => (
            <a
              key={option}
              href={buildLanguageHref(pageHref, option)}
              aria-current={option === language ? "page" : undefined}
            >
              {CHEAT_SHEET_LANGUAGE_LABELS[option]}
            </a>
          ))}
        </nav>
        <div className="cheat-sheet-downloads">
          {metadata.files.map((file) => (
            <a key={file.href} href={file.href} download>
              {file.label}
            </a>
          ))}
        </div>
        {isSearching && (
          <p className="cheat-sheet-match-summary" role="status">
            {formatMatchSummary(visibleSections)}
          </p>
        )}
      </div>

      <div className="cheat-sheet-layout">
        <nav className="cheat-sheet-toc" aria-label="Obsah taháku">
          {visibleSections
            .filter((section) => section.heading)
            .map((section) => (
              <a key={section.id} href={`#${section.id}`}>
                <span>{section.heading}</span>
                {isSearching && <small>{section.matchCount}</small>}
              </a>
            ))}
        </nav>

        <article className="cheat-sheet-content" lang={language}>
          {visibleSections.map((section) => (
            <section key={section.id} className="cheat-sheet-section">
              {section.heading && (
                <h2 id={section.id}>
                  <HighlightedText text={section.heading} terms={terms} />
                </h2>
              )}
              {section.blocks.map((block, index) => (
                <CheatSheetBlockView key={index} block={block} terms={terms} />
              ))}
            </section>
          ))}
        </article>
      </div>
    </div>
  );
}

export default CheatSheetView;
