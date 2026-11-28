import { useState } from "react";
import { COURSE_MATERIALS } from "../../constants/courseMaterials";
import { useCourseMaterialsPassword } from "../../hooks/useCourseMaterialsPassword";
import { localizeCourseMaterial } from "../../i18n/content";
import { useLocale, useTranslations } from "../../i18n/localeContext";
import type { Messages } from "../../i18n/messages";
import type { CourseMaterial, CourseMaterialId } from "../../types";
import {
  CourseMaterialDownloadError,
  downloadCourseMaterial,
} from "../../utils/downloadCourseMaterial";
import "./CourseMaterialsDownload.css";

interface Props {
  materialIds: CourseMaterialId[];
}

type DocumentMessages = Messages["certifications"]["documents"];

function getErrorMessage(
  error: unknown,
  material: CourseMaterial,
  t: DocumentMessages,
): string {
  if (!(error instanceof CourseMaterialDownloadError)) {
    return t.downloadFailed;
  }
  return error.isWrongPassword
    ? t.wrongPassword
    : t.downloadFailedWithStatus(material.label, error.httpStatus);
}

function CourseMaterialsDownload({ materialIds }: Props) {
  const locale = useLocale();
  const t = useTranslations().certifications.documents;
  const materials = materialIds.map((id) =>
    localizeCourseMaterial(COURSE_MATERIALS[id], locale),
  );
  const [password, setPassword] = useState("");
  const passwordStatus = useCourseMaterialsPassword(password);
  const isUnlocked = passwordStatus === "valid";
  const passwordStatusMessage = t.passwordStatus[passwordStatus];
  const [downloadingId, setDownloadingId] = useState<CourseMaterialId | null>(
    null,
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const download = async (material: CourseMaterial) => {
    setErrorMessage(null);
    setDownloadingId(material.id);
    try {
      await downloadCourseMaterial(material, password);
    } catch (error) {
      console.error(`Course material "${material.id}" download failed`, error);
      setErrorMessage(getErrorMessage(error, material, t));
    } finally {
      setDownloadingId(null);
    }
  };

  return (
    <section className="documents-subpanel">
      <h4>{t.courseMaterials}</h4>
      <p className="course-materials-intro">{t.courseMaterialsIntro}</p>

      <label className="course-materials-password">
        <span>{t.password}</span>
        <input
          type="password"
          value={password}
          autoComplete="off"
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>

      {passwordStatusMessage && (
        <p
          className={`course-materials-status course-materials-status--${passwordStatus}`}
          role="status"
        >
          {passwordStatusMessage}
        </p>
      )}

      {errorMessage && (
        <p className="course-materials-error" role="alert">
          {errorMessage}
        </p>
      )}

      <ul className="course-materials-list">
        {materials.map((material) => (
          <li key={material.id}>
            <div>
              <strong>{material.label}</strong>
              <span>{material.description}</span>
            </div>
            <button
              type="button"
              className="course-materials-button"
              disabled={!isUnlocked || downloadingId !== null}
              onClick={() => download(material)}
            >
              {downloadingId === material.id ? t.downloading : t.download}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default CourseMaterialsDownload;
