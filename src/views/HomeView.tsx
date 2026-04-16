import { useState } from "react";
import QuizSettings from "../components/QuizSettings";
import { QuizProvider } from "../context/QuizContext";
import { I18nProvider, useI18n } from "../i18n/I18nContext";
import { navigateTo } from "../utils/navigation";
import "../pages/Home.css";

function HomeContent() {
  const [hasErrors, setHasErrors] = useState(true);
  const { t } = useI18n();

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-eyebrow">{t("home.eyebrow")}</span>
          <h2>{t("home.hero.title")}</h2>
          <p>{t("home.hero.lead")}</p>

          <div className="home-hero-tags">
            <span>{t("home.tags.frontend")}</span>
            <span>{t("home.tags.fast")}</span>
            <span>{t("home.tags.branding")}</span>
          </div>
        </div>

        <aside className="home-hero-panel">
          <div className="hero-panel-card">
            <strong>{t("home.panel.what.title")}</strong>
            <p>{t("home.panel.what.text")}</p>
          </div>
          <div className="hero-panel-card">
            <strong>{t("home.panel.recommended.title")}</strong>
            <p>{t("home.panel.recommended.text")}</p>
          </div>
        </aside>
      </section>

      <section className="home-grid">
        <div className="home-card">
          <div className="home-card-header">
            <span className="card-kicker">{t("home.card.kicker")}</span>
            <h3>{t("home.card.title")}</h3>
            <p>{t("home.card.text")}</p>
          </div>

          <div className="home-settings-wrap">
            <QuizSettings
              showRefresh={false}
              showNamePrompt={true}
              onValidationChange={setHasErrors}
            />
          </div>

          <div className="home-actions">
            <button
              className="start-btn"
              onClick={() => navigateTo("/quiz")}
              disabled={hasErrors}
            >
              {t("home.start")}
            </button>
            <span className="home-hint">{t("home.hint")}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomeView() {
  return (
    <I18nProvider>
      <QuizProvider>
        <HomeContent />
      </QuizProvider>
    </I18nProvider>
  );
}