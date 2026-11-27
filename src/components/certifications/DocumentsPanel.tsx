import type { CertificationCheatSheet, CourseMaterialId } from "../../types";
import CheatSheetDownload from "./CheatSheetDownload";
import CourseMaterialsDownload from "./CourseMaterialsDownload";
import "./DocumentsPanel.css";

interface Props {
  cheatSheet: CertificationCheatSheet | undefined;
  courseMaterialIds: CourseMaterialId[] | undefined;
}

function DocumentsPanel({ cheatSheet, courseMaterialIds }: Props) {
  return (
    <section className="documents-panel">
      <h3>Dokumenty</h3>
      {cheatSheet && <CheatSheetDownload cheatSheet={cheatSheet} />}
      {courseMaterialIds && (
        <CourseMaterialsDownload materialIds={courseMaterialIds} />
      )}
    </section>
  );
}

export default DocumentsPanel;
