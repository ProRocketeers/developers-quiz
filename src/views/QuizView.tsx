import QuizContainer from "../components/QuizContainer";
import { QuizProvider } from "../context/QuizContext";

export default function QuizView() {
  return (
    <QuizProvider>
      <QuizContainer />
    </QuizProvider>
  );
}
