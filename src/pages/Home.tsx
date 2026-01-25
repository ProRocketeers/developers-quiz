import { useNavigate } from "react-router-dom";
import QuizSettings from "../components/QuizSettings";
import "./Home.css";
import { useState } from "react";

function Home() {
  const navigate = useNavigate();
  const [hasErrors, setHasErrors] = useState(true);

  const handleStartQuiz = () => {
    navigate("/quiz");
  };

  return (
    <div className="home">
      <h2>Vítejte v Java Developers Quiz</h2>
      <p>Otestujte své znalosti z Java ekosystému a získejte rychlou zpětnou vazbu.</p>

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
            onClick={handleStartQuiz}
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

export default Home;
