import type { CertificationCheatSheet } from "../../types";
import "./CheatSheetDownload.css";

interface Props {
  cheatSheet: CertificationCheatSheet;
}

function CheatSheetDownload({ cheatSheet }: Props) {
  return (
    <section className="cheat-sheet">
      <div className="cheat-sheet-text">
        <h3>{cheatSheet.title}</h3>
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
    </section>
  );
}

export default CheatSheetDownload;
