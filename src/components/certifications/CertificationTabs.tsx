import { CERTIFICATIONS } from "../../constants/certifications";
import type { CertificationId } from "../../types";
import "./CertificationTabs.css";

interface Props {
  selectedId: CertificationId;
  onSelect: (certificationId: CertificationId) => void;
}

function CertificationTabs({ selectedId, onSelect }: Props) {
  return (
    <div className="certification-tabs" role="group" aria-label="Certifikace">
      {CERTIFICATIONS.map((certification) => {
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
