import { useState } from "react";
import { COURSE_MATERIALS } from "../../constants/courseMaterials";
import type { CourseMaterialId } from "../../types";
import {
  CourseMaterialDownloadError,
  downloadCourseMaterial,
} from "../../utils/downloadCourseMaterial";
import "./CourseMaterialsDownload.css";

interface Props {
  materialIds: CourseMaterialId[];
}

function getErrorMessage(error: unknown): string {
  return error instanceof CourseMaterialDownloadError
    ? error.message
    : "Stažení se nezdařilo, zkuste to prosím znovu.";
}

function CourseMaterialsDownload({ materialIds }: Props) {
  const [password, setPassword] = useState("");
  const [downloadingId, setDownloadingId] = useState<CourseMaterialId | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const download = async (id: CourseMaterialId) => {
    setErrorMessage(null);
    setDownloadingId(id);
    try {
      await downloadCourseMaterial(COURSE_MATERIALS[id], password);
    } catch (error) {
      setErrorMessage(getErrorMessage(error));
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section className="course-materials">
      <div className="course-materials-text">
        <h3>Podklady z kurzu</h3>
        <p>
          Oficiální materiály kurzu ArchiMate 3.2 (The Open Group) ke stažení po
          zadání hesla. Slouží jen pro vlastní studium.
        </p>
      </div>

      <label className="course-materials-password">
        <span>Heslo</span>
        <input
          type="password"
          value={password}
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      {errorMessage && (
        <p className="course-materials-error" role="alert">
          {errorMessage}
        </p>
      )}

      <ul className="course-materials-list">
        {materialIds.map((id) => (
          <li key={id}>
            <div>
              <strong>{COURSE_MATERIALS[id].label}</strong>
              <span>{COURSE_MATERIALS[id].description}</span>
            </div>
            <button
              type="button"
              className="course-materials-button"
              disabled={password === "" || downloadingId !== null}
              onClick={() => download(id)}
            >
              {downloadingId === id ? "Stahuji…" : "Stáhnout PDF"}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseMaterialsDownload;
