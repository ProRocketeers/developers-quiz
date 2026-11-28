import { useState } from "react";
import QuizSettings from "../components/QuizSettings";
import { QuizProvider } from "../context/QuizContext";
import { LocaleProvider } from "../i18n/LocaleProvider";
import { useTranslations } from "../i18n/localeContext";
import type { Locale } from "../i18n/locales";
import { navigateTo } from "../utils/navigation";
import "../pages/Home.css";

function HomeContent() {
  const [hasErrors, setHasErrors] = useState(true);
  const t = useTranslations().home;

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-eyebrow">Prorocketeers Engineering Quiz</span>
          <h2>{t.title}</h2>
          <p>{t.intro}</p>
          <div className="home-hero-tags">
            {t.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
        </div>
        <aside className="home-hero-panel">
          <div className="hero-panel-card">
            <strong>{t.expectationTitle}</strong>
            <p>{t.expectationText}</p>
          </div>
          <div className="hero-panel-card">
            <strong>{t.recommendationTitle}</strong>
            <p>{t.recommendationText}</p>
          </div>
        </aside>
      </section>

      <section className="home-grid">
        <div className="home-card">
          <div className="home-card-header">
            <span className="card-kicker">{t.settingsKicker}</span>
            <h3>{t.settingsTitle}</h3>
            <p>{t.settingsText}</p>
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
              {t.start}
            </button>
            <span className="home-hint">{t.startHint}</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomeView({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <QuizProvider>
        <HomeContent />
      </QuizProvider>
    </LocaleProvider>
  );
}
