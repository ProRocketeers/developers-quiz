import { useState } from "react";
import { COURSE_MATERIALS } from "../../constants/courseMaterials";
import { useCourseMaterialsPassword } from "../../hooks/useCourseMaterialsPassword";
import type { PasswordStatus } from "../../hooks/useCourseMaterialsPassword";
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

const PASSWORD_STATUS_MESSAGES: Record<PasswordStatus, string | null> = {
  empty: null,
  checking: "Ověřuji heslo…",
  valid: "Heslo je správné.",
  invalid: "Nesprávné heslo.",
  unavailable: "Ověření hesla se nezdařilo, zkuste to později.",
};

function CourseMaterialsDownload({ materialIds }: Props) {
  const [password, setPassword] = useState("");
  const passwordStatus = useCourseMaterialsPassword(password);
  const isUnlocked = passwordStatus === "valid";
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
    <section className="documents-subpanel">
      <h4>Open Group Dokumenty</h4>
      <p className="course-materials-intro">
        Oficiální materiály kurzu ArchiMate 3.2 (The Open Group) ke stažení po
        zadání hesla. Slouží jen pro vlastní studium.
      </p>

      <label className="course-materials-password">
        <span>Heslo</span>
        <input
          type="password"
          value={password}
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      {PASSWORD_STATUS_MESSAGES[passwordStatus] && (
        <p
          className={`course-materials-status course-materials-status--${passwordStatus}`}
          role="status"
        >
          {PASSWORD_STATUS_MESSAGES[passwordStatus]}
        </p>
      )}

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
              disabled={!isUnlocked || downloadingId !== null}
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
