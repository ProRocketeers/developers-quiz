import { useState } from "react";
import QuizSettings from "../components/QuizSettings";
import { QuizProvider } from "../context/QuizContext";
import { navigateTo } from "../utils/navigation";
import "../pages/Home.css";

function HomeContent() {
  const [hasErrors, setHasErrors] = useState(true);

  return (
    <div className="home">
      <h2>Vítejte v kvízu pro softwareové inženýry</h2>
      <p>
        Otestujte své znalosti ze světa software engineeringu a získejte rychlou
        zpětnou vazbu.
      </p>

      <div className="home-card">
        <div className="home-card-header">
          <h3>Nastavení quizu</h3>
          <p>Zvolte oblast, počet otázek a vyplňte kontaktní údaje pro výsledky.</p>
        </div>
        <div className="d-flex justify-content-center">
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
            Spustit Quiz
          </button>
          <span className="home-hint">
            Vyplňte jméno, email a potvrďte souhlas se zpracováním údajů.
          </span>
        </div>
      </div>
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
