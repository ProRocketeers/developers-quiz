import QuizContainer from "../components/QuizContainer";
import { QuizProvider } from "../context/QuizContext";
import { LocaleProvider } from "../i18n/LocaleProvider";
import type { Locale } from "../i18n/locales";

export default function QuizView({ locale }: { locale: Locale }) {
  return (
    <LocaleProvider locale={locale}>
      <QuizProvider>
        <QuizContainer />
      </QuizProvider>
    </LocaleProvider>
  );
}
