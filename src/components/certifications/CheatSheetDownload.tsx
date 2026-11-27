import type { CertificationCheatSheet } from "../../types";
import "./CheatSheetDownload.css";

interface Props {
  cheatSheet: CertificationCheatSheet;
}

function CheatSheetDownload({ cheatSheet }: Props) {
  return (
    <section className="documents-subpanel">
      <h4>Taháky</h4>
      <div className="cheat-sheet">
        <div className="cheat-sheet-text">
          <strong>{cheatSheet.title}</strong>
          <p>{cheatSheet.description}</p>
        </div>
        <div className="cheat-sheet-actions">
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
