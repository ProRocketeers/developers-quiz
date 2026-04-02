import { useState } from "react";
import QuizSettings from "../components/QuizSettings";
import { QuizProvider } from "../context/QuizContext";
import { navigateTo } from "../utils/navigation";
import "../pages/Home.css";

function HomeContent() {
  const [hasErrors, setHasErrors] = useState(true);

  return (
    <div className="home">
      <section className="home-hero">
        <div className="home-hero-copy">
          <span className="home-eyebrow">Prorocketeers Engineering Quiz</span>
          <h2>Technický kvíz pro vývojáře</h2>
          <p>
            Vyberte si okruhy, nastavte rozsah testu a během pár minut získáte
            přehledný výsledek v čistém vizuálu laděném do firemních barev.
          </p>
          <div className="home-hero-tags">
            <span>Nové frontend okruhy</span>
            <span>Rychlé vyhodnocení</span>
            <span>Firemní barevnost</span>
          </div>
        </div>
        <aside className="home-hero-panel">
          <div className="hero-panel-card">
            <strong>Co vás čeká</strong>
            <p>Otázky jsou rozdělené po technických okruzích a výsledky se ukládají do historie.</p>
          </div>
          <div className="hero-panel-card">
            <strong>Doporučený průchod</strong>
            <p>Vyberte menší sadu okruhů a 15 až 25 otázek, pokud chcete rychlé interní ověření.</p>
          </div>
        </aside>
      </section>

      <section className="home-grid">
        <div className="home-card">
          <div className="home-card-header">
            <span className="card-kicker">Nastavení testu</span>
            <h3>Připravte si vlastní běh kvízu</h3>
            <p>
              Zvolte oblast, počet otázek a vyplňte kontaktní údaje pro zaslání
              výsledků.
            </p>
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
              Spustit kvíz
            </button>
            <span className="home-hint">
              Vyplňte jméno, email a potvrďte souhlas se zpracováním údajů.
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default function HomeView() {
  return (
    <QuizProvider>
      <HomeContent />
    </QuizProvider>
  );
}
