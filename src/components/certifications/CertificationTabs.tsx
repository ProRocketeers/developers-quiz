import { useTranslations } from "../../i18n/localeContext";
import type { Certification, CertificationId } from "../../types";
import "./CertificationTabs.css";

interface Props {
  certifications: Certification[];
  selectedId: CertificationId;
  onSelect: (certificationId: CertificationId) => void;
}

function CertificationTabs({ certifications, selectedId, onSelect }: Props) {
  const t = useTranslations().certifications.home;

  return (
    <div
      className="certification-tabs"
      role="group"
      aria-label={t.tabsLabel}
    >
      {certifications.map((certification) => {
        const isSelected = certification.id === selectedId;
        return (
          <button
            key={certification.id}
            type="button"
            className={`certification-tab${isSelected ? " is-active" : ""}`}
            aria-pressed={isSelected}
            onClick={() => onSelect(certification.id)}
          >
            <span className="certification-tab-name">{certification.name}</span>
            <span className="certification-tab-edition">
              {certification.edition}
            </span>
          </button>
        );
      })}
    </div>
  );
}

export default CertificationTabs;
