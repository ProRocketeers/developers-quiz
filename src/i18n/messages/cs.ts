import type { PasswordStatus } from "../../hooks/useCourseMaterialsPassword";
import type { QuizHistoryEntry } from "../../types";
import type {
  CertificationLevel,
  CertificationPracticePreferences,
  CertificationQuizMode,
} from "../../types";
import type { QuizItemStatus } from "../../utils/certificationQuizSession";
import { INTL_LOCALE_TAGS } from "../locales";
import { createPluralizer } from "../pluralize";

type EmailStatus = NonNullable<QuizHistoryEntry["emailStatus"]>;

interface ToggleText {
  label: string;
  description: string;
}

const pluralize = createPluralizer(INTL_LOCALE_TAGS.cs);

const questions = (count: number) =>
  pluralize(count, { one: "otázka", few: "otázky", other: "otázek" });
const points = (count: number) =>
  pluralize(count, { one: "bod", few: "body", other: "bodů" });
const topics = (count: number) =>
  pluralize(count, { one: "okruh", few: "okruhy", other: "okruhů" });

const emailStatus: Record<EmailStatus, string> = {
  idle: "Neodesláno",
  sending: "Odesílám...",
  sent: "Odesláno",
  error: "Odeslání selhalo",
};

const sendEmailButton: Record<EmailStatus, string> = {
  idle: "Odeslat email",
  sending: "Odesílám...",
  sent: "Odesláno ✓",
  error: "Chyba - zkusit znovu",
};

const levelLabels: Record<CertificationLevel, string> = {
  foundation: "Úroveň 1 · Foundation",
  practitioner: "Úroveň 2 · Practitioner",
};

const modeLabels: Record<CertificationQuizMode, string> = {
  practice: "Procvičování",
  exam: "Zkouška nanečisto",
};

const practiceToggles: Record<
  keyof CertificationPracticePreferences,
  ToggleText
> = {
  isLearningMode: {
    label: "Režim učení",
    description:
      "Správná odpověď a vysvětlení se ukážou hned. Prostudované otázky se nehodnotí.",
  },
  isRepeatMode: {
    label: "Opakovat chybné otázky",
    description:
      "Otázku zodpovězenou špatně dostanete znovu na konci, dokud ji nezvládnete.",
  },
};

const passwordStatus: Record<PasswordStatus, string | null> = {
  empty: null,
  checking: "Ověřuji heslo…",
  valid: "Heslo je správné.",
  invalid: "Nesprávné heslo.",
  unavailable: "Ověření hesla se nezdařilo, zkuste to později.",
};

const questionStatus: Record<QuizItemStatus, string> = {
  unanswered: "bez odpovědi",
  answered: "zodpovězeno",
  studied: "prostudováno",
  correct: "správně",
  partial: "částečně správně",
  incorrect: "špatně",
};

export const cs = {
  plural: { questions, points, topics },

  common: {
    loading: "Načítání…",
    unknownUser: "Neznámý uživatel",
  },

  pageTitles: {
    home: "Developers Quiz",
    quiz: "Quiz | Developers Quiz",
    results: "Výsledky | Developers Quiz",
    certifications: "Certifikace | Developers Quiz",
    certificationQuiz: "Test | Certifikace | Developers Quiz",
    certificationResults: "Výsledky | Certifikace | Developers Quiz",
    cheatSheet: (title: string) => `${title} | Certifikace | Developers Quiz`,
  },

  header: {
    title: "Kvíz pro softwareové inženýry",
    home: "Domů",
    results: "Výsledky",
    certifications: "Certifikace",
    languageSwitcher: "Jazyk",
  },

  home: {
    title: "Technický kvíz pro vývojáře",
    intro:
      "Vyberte si okruhy, nastavte rozsah testu a během pár minut získáte přehledný výsledek v čistém vizuálu laděném do firemních barev.",
    tags: ["Nové frontend okruhy", "Rychlé vyhodnocení", "Firemní barevnost"],
    expectationTitle: "Co vás čeká",
    expectationText:
      "Otázky jsou rozdělené po technických okruzích a výsledky se ukládají do historie.",
    recommendationTitle: "Doporučený průchod",
    recommendationText:
      "Vyberte menší sadu okruhů a 15 až 25 otázek, pokud chcete rychlé interní ověření.",
    settingsKicker: "Nastavení testu",
    settingsTitle: "Připravte si vlastní běh kvízu",
    settingsText:
      "Zvolte oblast, počet otázek a vyplňte kontaktní údaje pro zaslání výsledků.",
    start: "Spustit kvíz",
    startHint: "Vyplňte jméno, email a potvrďte souhlas se zpracováním údajů.",
  },

  quizSettings: {
    requiredField: "Povinné pole",
    nameTooShort: "Min. 2 znaky",
    invalidEmail: "Neplatný email",
    tooManyQuestions: (maxCount: number) => `Max. ${maxCount} otázek`,
    name: "Jméno",
    namePlaceholder: "Např. Jana Nováková",
    email: "Email",
    emailPlaceholder: "jmeno@firma.cz",
    consent:
      "Souhlasím se zpracováním osobních údajů pouze za účelem odeslání emailu s výsledky.",
    categories: "Kategorie",
    selectAllCategories: "Vybrat všechny",
    bulkCountLabel: "Nastavit počet otázek pro vybrané",
    selectedCount: (count: number) => `Vybráno: ${count}`,
    bulkCountHint: "Zadaná hodnota přepíše počty u všech vybraných kategorií.",
    totalQuestions: "Celkem otázek:",
    questionCount: "Počet otázek",
    refresh: "Obnovit",
  },

  categoryList: {
    allCategories: "Všechny kategorie",
    selectGroup: "Vybrat vše",
    deselectGroup: "Odebrat vše",
    count: "Počet",
  },

  quiz: {
    kicker: "Aktivní test",
    title: "Technický kvíz",
    withTimeLimit: "s časovým limitem",
    withoutTimeLimit: "bez časového limitu",
    timeLeft: (seconds: number) => `Zbývá: ${seconds}s`,
    showSettings: "Ukázat nastavení",
    hideSettings: "Skrýt nastavení",
    answered: (answeredCount: number, totalCount: number) =>
      `Zodpovězeno: ${answeredCount} / ${totalCount}`,
    submit: "Vyhodnotit kvíz",
    loadFailed: "Otázky se nepodařilo načíst. Zkuste stránku obnovit.",
    confirmUnanswered: (count: number) =>
      `Máte ${count} nezodpovězených otázek. Opravdu chcete pokračovat?`,
  },

  quizSummary: {
    minimum: (score: number) => `Minimum: ${score}`,
    passedTitle: "Skvělý výsledek",
    failedTitle: "Výsledek kvízu",
    time: (duration: string) => `Čas: ${duration}`,
    passedText:
      "Limit jste splnili a můžete pokračovat k detailnímu rozpisu odpovědí.",
    failedText:
      "Tentokrát to nevyšlo, ale detailní rozpis vám ukáže, kde máte největší prostor ke zlepšení.",
    startNew: "Spustit nový kvíz",
  },

  summaryList: {
    title: (userName: string) => `Souhrn pro ${userName}`,
    email: "Email:",
    emailNotProvided: "Neuvedeno",
    emailStatusLabel: "Stav emailu:",
    emailStatus,
    score: "Skóre:",
    outcome: "Výsledek:",
    totalTime: "Celkový čas:",
    sendEmailButton,
  },

  results: {
    emptyKicker: "Výsledky",
    emptyTitle: "Zatím tu není žádný dokončený běh",
    emptyText:
      "Spusťte nový kvíz a po vyhodnocení se vám tady uloží kompletní historie výsledků.",
    startNew: "Spustit nový Quiz",
    kicker: "Vyhodnocení",
    title: "Souhrn a historie výsledků",
    intro:
      "Aktivní záznam je zvýrazněný nahoře, v historii si můžete kdykoli otevřít detail starších pokusů.",
    historyTitle: "Historie výsledků",
    historyScore: (score: number, total: number) => `Skóre ${score}/${total}`,
    historyMinimum: (score: number) => `Minimum ${score}`,
    historyTime: (duration: string) => `Čas ${duration}`,
    showDetail: "Zobrazit detail",
    hideDetail: "Skrýt detail",
  },

  certifications: {
    levelLabels,
    modeLabels,

    home: {
      eyebrow: "Příprava na certifikace",
      title: "ArchiMate®, PRINCE2® a TOGAF®",
      intro:
        "Cvičné otázky pokrývající sylaby úrovní Foundation i Practitioner. Každá otázka má vysvětlení, takže se z chyb rovnou učíte. Výsledky se ukládají jen ve vašem prohlížeči a nikam se neodesílají.",
      myResults: "Moje výsledky",
      tabsLabel: "Certifikace",
      owner: (ownerName: string) => `Vlastník certifikace: ${ownerName}.`,
      disclaimer:
        "Neoficiální cvičné otázky pro samostudium. PRINCE2® je registrovaná ochranná známka PeopleCert group. TOGAF® a ArchiMate® jsou registrované ochranné známky The Open Group. Tato aplikace s vlastníky certifikací nijak nesouvisí.",
    },

    examCard: {
      questions: "Otázky",
      time: "Čas",
      passFrom: "Úspěch od",
      materials: "Materiály",
      gradientNote:
        "Komplexní scénářové otázky s gradientním bodováním 5 / 3 / 1 / 0 bodů.",
      bankSummary: (questionCount: number, topicCount: number) =>
        `V bance: ${questions(questionCount)}, ${topics(topicCount)}.`,
      bankEmpty: "Otázky pro tuto úroveň se připravují.",
      startExam: "Zkouška nanečisto",
      showPractice: "Procvičovat okruhy",
      hidePractice: "Skrýt výběr okruhů",
    },

    documents: {
      title: "Dokumenty",
      cheatSheets: "Taháky",
      openCheatSheetOnline: "Online s hledáním",
      courseMaterials: "Open Group Dokumenty",
      courseMaterialsIntro:
        "Oficiální materiály kurzu ArchiMate 3.2 (The Open Group) ke stažení po zadání hesla. Slouží jen pro vlastní studium.",
      password: "Heslo",
      passwordStatus,
      download: "Stáhnout PDF",
      downloading: "Stahuji…",
      wrongPassword: "Nesprávné heslo.",
      downloadFailed: "Stažení se nezdařilo, zkuste to prosím znovu.",
      downloadFailedWithStatus: (materialLabel: string, httpStatus: number) =>
        `Soubor „${materialLabel}“ se nepodařilo stáhnout (HTTP ${httpStatus}).`,
    },

    cheatSheetPage: {
      back: "← Zpět na certifikace",
      searchLabel: "Hledat v taháku",
      searchPlaceholder: "Hledat v taháku, např. serving, artifact, plateau…",
      languageNavLabel: "Jazyk taháku",
      tableOfContentsLabel: "Obsah taháku",
      languages: { cs: "Česky", en: "Anglicky" },
      noResults: "Nic nenalezeno. Zkuste jiné slovo nebo druhý jazyk taháku.",
      matchSummary: (matchCount: number, chapterCount: number) =>
        `Nalezeno ${matchCount}× v ${chapterCount} ${chapterCount === 1 ? "kapitole" : "kapitolách"}`,
    },

    practice: {
      sectionLabel: (examTitle: string) => `Procvičování – ${examTitle}`,
      kicker: "Procvičování",
      intro:
        "Po každé odpovědi hned uvidíte správné řešení a vysvětlení. Časový limit neplatí.",
      close: "Zavřít",
      start: (questionCount: number) =>
        `Spustit procvičování (${questions(questionCount)})`,
      topics: "Okruhy",
      selectAll: "Vybrat vše",
      clearSelection: "Zrušit výběr",
      questionCount: "Počet otázek",
      allQuestions: "Všechny",
      availableQuestions: (count: number) =>
        `Ve vybraných okruzích je ${questions(count)}.`,
      togglesLabel: "Možnosti procvičování",
      toggles: practiceToggles,
    },

    navigator: {
      label: "Přehled otázek",
      status: questionStatus,
      itemLabel: (questionNumber: number, isRepeat: boolean, status: string) =>
        `Otázka ${questionNumber}${isRepeat ? " (opakování)" : ""}: ${status}`,
    },

    question: {
      number: (questionNumber: number) => `Otázka ${questionNumber}`,
      repeat: "Opakování",
      gradientScoring: "Gradientní bodování",
      scenario: "Scénář",
      openImage: "Otevřít obrázek v plné velikosti",
      studiedVerdict: "Režim učení – správná odpověď je zvýrazněná.",
      unansweredVerdict: "Bez odpovědi – správné řešení je zvýrazněné.",
      pointsVerdict: (earnedPoints: number, maxPoints: number) =>
        `Získáno ${earnedPoints} z ${points(maxPoints)}.`,
      correctVerdict: "Správně!",
      incorrectVerdict: "Špatně – správná odpověď je zvýrazněná.",
    },

    toolbar: {
      examDetails: (durationMinutes: number) =>
        `limit ${durationMinutes} min, vyhodnocení na konci`,
      practiceDetails: "okamžitá zpětná vazba, bez časového limitu",
      remaining: "Zbývá",
      elapsed: "Čas",
    },

    footer: {
      previous: "← Předchozí",
      next: "Další →",
      progress: (completedCount: number, questionCount: number) =>
        `Hotovo ${completedCount} / ${questionCount}`,
      evaluate: "Vyhodnotit test",
      finishAndEvaluate: "Ukončit a vyhodnotit test",
      finishStudy: "Ukončit studium",
    },

    quiz: {
      notReadyTitle: "Test není připravený",
      notReadyMessage: "Nejprve si vyberte certifikaci, úroveň a režim testu.",
      loadFailedTitle: "Otázky se nepodařilo načíst",
      loadFailedMessage: "Zkuste stránku obnovit nebo test spustit znovu.",
      chooseCertification: "Vybrat certifikaci",
      confirmUnanswered: (count: number) =>
        `Bez odpovědi zůstává ${questions(count)}. Opravdu chcete test vyhodnotit?`,
    },

    results: {
      emptyTitle: "Zatím tu nejsou žádné výsledky",
      emptyText:
        "Spusťte procvičování nebo zkoušku nanečisto a výsledky se uloží sem.",
      chooseCertification: "Vybrat certifikaci",
      kicker: "Vyhodnocení",
      historyTitle: "Historie pokusů",
      retry: "Nový pokus se stejným nastavením",
      practiceWeakTopics: (topicCount: number) =>
        `Procvičit slabé okruhy (${topicCount})`,
      backToCertifications: "Zpět na certifikace",
      topicBreakdownTitle: "Úspěšnost podle okruhů",
      answerReviewTitle: "Rozbor odpovědí",
    },

    summary: {
      passed: "Nad hranicí úspěchu",
      failed: "Pod hranicí úspěchu",
      earnedPoints: (earnedPoints: number, maxPoints: number) =>
        `${earnedPoints} z ${points(maxPoints)}`,
      correctAnswers: (correctCount: number, questionCount: number) =>
        `${correctCount} z ${questionCount} správně`,
      passThreshold: (
        passPercentage: number,
        requiredPoints: number,
        maxPoints: number,
      ) =>
        `hranice úspěchu ${passPercentage} % (min. ${requiredPoints} z ${maxPoints})`,
      mode: "Režim",
      time: "Čas",
      answered: "Zodpovězeno",
      bestAnswer: "Nejlepší odpověď",
      correct: "Správně",
    },

    review: {
      onlyMistakes: (mistakeCount: number) =>
        `Zobrazit jen otázky k zopakování (${mistakeCount})`,
      nothingToRepeat: "Všechny odpovědi jsou nejlepší možné.",
    },
  },
};

export type Messages = typeof cs;
