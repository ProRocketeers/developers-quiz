import { useDeferredValue, useMemo, useState } from "react";
import CheatSheetBlockView from "../components/cheatSheet/CheatSheetBlockView";
import { HighlightedText } from "../components/cheatSheet/HighlightedText";
import { CHEAT_SHEET_LANGUAGE_QUERY_PARAM } from "../constants/cheatSheets";
import { CERTIFICATION_ROUTES } from "../constants/certifications";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { useTranslations } from "../i18n/localeContext";
import { LOCALES, type Locale } from "../i18n/locales";
import type { Messages } from "../i18n/messages";
import {
  filterSection,
  parseSearchTerms,
  splitIntoSections,
  type FilteredCheatSheetSection,
} from "../services/cheatSheetSearch";
import type { CertificationCheatSheet, CheatSheetDocument } from "../types";
import "./CheatSheetView.css";

type CheatSheetPageMessages = Messages["certifications"]["cheatSheetPage"];

interface CheatSheetProps {
  cheatSheet: CheatSheetDocument;
  metadata: CertificationCheatSheet;
  language: Locale;
  pageHref: string;
}

interface Props extends CheatSheetProps {
  locale: Locale;
}

function buildLanguageHref(pageHref: string, language: Locale) {
  return `${pageHref}?${CHEAT_SHEET_LANGUAGE_QUERY_PARAM}=${language}`;
}

function formatMatchSummary(
  sections: FilteredCheatSheetSection[],
  t: CheatSheetPageMessages,
): string {
  const matchCount = sections.reduce(
    (total, section) => total + section.matchCount,
    0,
  );
  if (matchCount === 0) {
    return t.noResults;
  }
  return t.matchSummary(matchCount, sections.length);
}

export default function CheatSheetView({ locale, ...cheatSheetProps }: Props) {
  return (
    <LocaleProvider locale={locale}>
      <CheatSheet {...cheatSheetProps} />
    </LocaleProvider>
  );
}

function CheatSheet({
  cheatSheet,
  metadata,
  language,
  pageHref,
}: CheatSheetProps) {
  const t = useTranslations().certifications.cheatSheetPage;
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
        {t.back}
      </a>

      <div className="cheat-sheet-toolbar">
        <input
          type="search"
          className="cheat-sheet-search"
          placeholder={t.searchPlaceholder}
          aria-label={t.searchLabel}
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          autoFocus
        />
        <nav className="cheat-sheet-languages" aria-label={t.languageNavLabel}>
          {LOCALES.map((option) => (
            <a
              key={option}
              href={buildLanguageHref(pageHref, option)}
              aria-current={option === language ? "page" : undefined}
            >
              {t.languages[option]}
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
            {formatMatchSummary(visibleSections, t)}
          </p>
        )}
      </div>

      <div className="cheat-sheet-layout">
        <nav className="cheat-sheet-toc" aria-label={t.tableOfContentsLabel}>
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
