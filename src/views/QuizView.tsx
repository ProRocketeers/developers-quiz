import QuizContainer from "../components/QuizContainer";
import { QuizProvider } from "../context/QuizContext";
import { I18nProvider } from "../i18n/I18nContext";

export default function QuizView() {
  return (
    <I18nProvider>
      <QuizProvider>
        <QuizContainer />
      </QuizProvider>
    </I18nProvider>
  );
}
