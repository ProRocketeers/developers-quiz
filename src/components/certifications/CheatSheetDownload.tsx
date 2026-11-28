import { useTranslations } from "../../i18n/localeContext";
import type { CertificationCheatSheet } from "../../types";
import "./CheatSheetDownload.css";

interface Props {
  cheatSheet: CertificationCheatSheet;
}

function CheatSheetDownload({ cheatSheet }: Props) {
  const t = useTranslations().certifications.documents;

  return (
    <section className="documents-subpanel">
      <h4>{t.cheatSheets}</h4>
      <div className="cheat-sheet">
        <div className="cheat-sheet-text">
          <strong>{cheatSheet.title}</strong>
          <p>{cheatSheet.description}</p>
        </div>
        <div className="cheat-sheet-actions">
          {cheatSheet.pageHref && (
            <a
              className="cheat-sheet-link cheat-sheet-link--primary"
              href={cheatSheet.pageHref}
            >
              {t.openCheatSheetOnline}
            </a>
          )}
          {cheatSheet.files.map((file) => (
            <a
              key={file.href}
              className="cheat-sheet-link"
              href={file.href}
              download
            >
              {file.label}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default CheatSheetDownload;
