import { useTranslations } from "../i18n/localeContext";

function Spinner({ visible }) {
  const t = useTranslations();

  if (!visible) return null;

  return (
    <div className="d-flex justify-content-center py-5">
      <div className="spinner-border text-dark" role="status">
        <span className="visually-hidden">{t.common.loading}</span>
      </div>
    </div>
  );
}

export default Spinner;
