import { INTL_LOCALE_TAGS } from "../locales";
import { createPluralizer } from "../pluralize";
import type { Messages } from "./cs";

const pluralize = createPluralizer(INTL_LOCALE_TAGS.en);

const questions = (count: number) =>
  pluralize(count, { one: "question", other: "questions" });
const points = (count: number) =>
  pluralize(count, { one: "point", other: "points" });
const topics = (count: number) =>
  pluralize(count, { one: "topic", other: "topics" });

export const en: Messages = {
  plural: { questions, points, topics },

  common: {
    loading: "Loading…",
    unknownUser: "Unknown user",
  },

  pageTitles: {
    home: "Developers Quiz",
    quiz: "Quiz | Developers Quiz",
    results: "Results | Developers Quiz",
    certifications: "Certifications | Developers Quiz",
    certificationQuiz: "Test | Certifications | Developers Quiz",
    certificationResults: "Results | Certifications | Developers Quiz",
  },

  header: {
    title: "Quiz for Software Engineers",
    home: "Home",
    results: "Results",
    certifications: "Certifications",
    languageSwitcher: "Language",
  },

  home: {
    title: "Technical quiz for developers",
    intro:
      "Pick your topics, set the size of the test and within a few minutes you get a clear result in a clean design matching the company colours.",
    tags: ["New frontend topics", "Quick evaluation", "Company colours"],
    expectationTitle: "What to expect",
    expectationText:
      "Questions are grouped by technical topic and your results are saved to the history.",
    recommendationTitle: "Recommended run",
    recommendationText:
      "Pick a smaller set of topics and 15 to 25 questions if you want a quick internal check.",
    settingsKicker: "Test settings",
    settingsTitle: "Set up your own quiz run",
    settingsText:
      "Choose the area and the number of questions, and fill in your contact details so we can send you the results.",
    start: "Start quiz",
    startHint:
      "Fill in your name and email and confirm the consent to data processing.",
  },

  quizSettings: {
    requiredField: "Required field",
    nameTooShort: "Min. 2 characters",
    invalidEmail: "Invalid email",
    tooManyQuestions: (maxCount) => `Max. ${maxCount} questions`,
    name: "Name",
    namePlaceholder: "e.g. Jane Smith",
    email: "Email",
    emailPlaceholder: "name@company.com",
    consent:
      "I agree to the processing of my personal data solely for the purpose of sending the email with my results.",
    categories: "Categories",
    selectAllCategories: "Select all",
    bulkCountLabel: "Set the number of questions for the selected ones",
    selectedCount: (count) => `Selected: ${count}`,
    bulkCountHint:
      "The value you enter overwrites the counts of all selected categories.",
    totalQuestions: "Total questions:",
    questionCount: "Number of questions",
    refresh: "Refresh",
  },

  categoryList: {
    allCategories: "All categories",
    selectGroup: "Select all",
    deselectGroup: "Deselect all",
    count: "Count",
  },

  quiz: {
    kicker: "Active test",
    title: "Technical quiz",
    withTimeLimit: "with a time limit",
    withoutTimeLimit: "no time limit",
    timeLeft: (seconds) => `Time left: ${seconds}s`,
    showSettings: "Show settings",
    hideSettings: "Hide settings",
    answered: (answeredCount, totalCount) =>
      `Answered: ${answeredCount} / ${totalCount}`,
    submit: "Evaluate quiz",
    loadFailed: "The questions could not be loaded. Try refreshing the page.",
    confirmUnanswered: (count) =>
      `${questions(count)} left unanswered. Do you really want to continue?`,
  },

  quizSummary: {
    minimum: (score) => `Minimum: ${score}`,
    passedTitle: "Great result",
    failedTitle: "Quiz result",
    time: (duration) => `Time: ${duration}`,
    passedText:
      "You reached the pass mark and can continue to the detailed breakdown of your answers.",
    failedText:
      "It did not work out this time, but the detailed breakdown shows where you have the most room to improve.",
    startNew: "Start a new quiz",
  },

  summaryList: {
    title: (userName) => `Summary for ${userName}`,
    email: "Email:",
    emailNotProvided: "Not provided",
    emailStatusLabel: "Email status:",
    emailStatus: {
      idle: "Not sent",
      sending: "Sending...",
      sent: "Sent",
      error: "Sending failed",
    },
    score: "Score:",
    outcome: "Result:",
    totalTime: "Total time:",
    sendEmailButton: {
      idle: "Send email",
      sending: "Sending...",
      sent: "Sent ✓",
      error: "Error - try again",
    },
  },

  results: {
    emptyKicker: "Results",
    emptyTitle: "No finished run yet",
    emptyText:
      "Start a new quiz and once it is evaluated, your complete result history will be saved here.",
    startNew: "Start a new quiz",
    kicker: "Evaluation",
    title: "Summary and result history",
    intro:
      "The active record is highlighted at the top; you can open the details of older attempts in the history at any time.",
    historyTitle: "Result history",
    historyScore: (score, total) => `Score ${score}/${total}`,
    historyMinimum: (score) => `Minimum ${score}`,
    historyTime: (duration) => `Time ${duration}`,
    showDetail: "Show details",
    hideDetail: "Hide details",
  },

  certifications: {
    levelLabels: {
      foundation: "Level 1 · Foundation",
      practitioner: "Level 2 · Practitioner",
    },
    modeLabels: {
      practice: "Practice",
      exam: "Mock exam",
    },

    home: {
      eyebrow: "Certification preparation",
      title: "PRINCE2®, TOGAF® and ArchiMate®",
      intro:
        "Practice questions covering the Foundation and Practitioner syllabuses. Every question comes with an explanation, so you learn from your mistakes right away. Results are stored only in your browser and are not sent anywhere.",
      myResults: "My results",
      tabsLabel: "Certifications",
      owner: (ownerName) => `Certification owner: ${ownerName}.`,
      disclaimer:
        "Unofficial practice questions for self-study. PRINCE2® is a registered trade mark of the PeopleCert group. TOGAF® and ArchiMate® are registered trademarks of The Open Group. This application is not affiliated with the certification owners in any way.",
    },

    examCard: {
      questions: "Questions",
      time: "Time",
      passFrom: "Pass mark",
      materials: "Materials",
      gradientNote:
        "Complex scenario questions with gradient scoring of 5 / 3 / 1 / 0 points.",
      bankSummary: (questionCount, topicCount) =>
        `In the bank: ${questions(questionCount)}, ${topics(topicCount)}.`,
      bankEmpty: "Questions for this level are being prepared.",
      startExam: "Mock exam",
      showPractice: "Practise topics",
      hidePractice: "Hide topic selection",
    },

    documents: {
      title: "Documents",
      cheatSheets: "Cheat sheets",
      courseMaterials: "Open Group documents",
      courseMaterialsIntro:
        "Official ArchiMate 3.2 course materials (The Open Group), available for download after entering the password. For your own study only.",
      password: "Password",
      passwordStatus: {
        empty: null,
        checking: "Checking the password…",
        valid: "The password is correct.",
        invalid: "Incorrect password.",
        unavailable: "The password could not be verified, try again later.",
      },
      download: "Download PDF",
      downloading: "Downloading…",
      wrongPassword: "Incorrect password.",
      downloadFailed: "The download failed, please try again.",
      downloadFailedWithStatus: (materialLabel, httpStatus) =>
        `The file “${materialLabel}” could not be downloaded (HTTP ${httpStatus}).`,
    },

    practice: {
      sectionLabel: (examTitle) => `Practice – ${examTitle}`,
      kicker: "Practice",
      intro:
        "After each answer you immediately see the correct solution and an explanation. There is no time limit.",
      close: "Close",
      start: (questionCount) => `Start practice (${questions(questionCount)})`,
      topics: "Topics",
      selectAll: "Select all",
      clearSelection: "Clear selection",
      questionCount: "Number of questions",
      allQuestions: "All",
      availableQuestions: (count) =>
        `The selected topics contain ${questions(count)}.`,
      togglesLabel: "Practice options",
      toggles: {
        isLearningMode: {
          label: "Learning mode",
          description:
            "The correct answer and explanation are shown right away. Studied questions are not scored.",
        },
        isRepeatMode: {
          label: "Repeat wrong questions",
          description:
            "A question you answer wrongly comes back at the end until you get it right.",
        },
      },
    },

    navigator: {
      label: "Question overview",
      status: {
        unanswered: "unanswered",
        answered: "answered",
        studied: "studied",
        correct: "correct",
        partial: "partially correct",
        incorrect: "incorrect",
      },
      itemLabel: (questionNumber, isRepeat, status) =>
        `Question ${questionNumber}${isRepeat ? " (repeat)" : ""}: ${status}`,
    },

    question: {
      number: (questionNumber) => `Question ${questionNumber}`,
      repeat: "Repeat",
      gradientScoring: "Gradient scoring",
      scenario: "Scenario",
      openImage: "Open the image in full size",
      studiedVerdict: "Learning mode – the correct answer is highlighted.",
      unansweredVerdict: "Not answered – the correct solution is highlighted.",
      pointsVerdict: (earnedPoints, maxPoints) =>
        `You earned ${earnedPoints} of ${points(maxPoints)}.`,
      correctVerdict: "Correct!",
      incorrectVerdict: "Incorrect – the correct answer is highlighted.",
    },

    toolbar: {
      examDetails: (durationMinutes) =>
        `${durationMinutes} min limit, evaluated at the end`,
      practiceDetails: "instant feedback, no time limit",
      remaining: "Time left",
      elapsed: "Time",
    },

    footer: {
      previous: "← Previous",
      next: "Next →",
      progress: (completedCount, questionCount) =>
        `Done ${completedCount} / ${questionCount}`,
      evaluate: "Evaluate test",
      finishAndEvaluate: "Finish and evaluate test",
      finishStudy: "Finish studying",
    },

    quiz: {
      notReadyTitle: "The test is not ready",
      notReadyMessage:
        "First choose a certification, a level and a test mode.",
      loadFailedTitle: "The questions could not be loaded",
      loadFailedMessage: "Try refreshing the page or starting the test again.",
      chooseCertification: "Choose a certification",
      confirmUnanswered: (count) =>
        `${questions(count)} left unanswered. Do you really want to evaluate the test?`,
    },

    results: {
      emptyTitle: "No results yet",
      emptyText:
        "Start a practice run or a mock exam and the results will be saved here.",
      chooseCertification: "Choose a certification",
      kicker: "Evaluation",
      historyTitle: "Attempt history",
      retry: "New attempt with the same settings",
      practiceWeakTopics: (topicCount) =>
        `Practise weak topics (${topicCount})`,
      backToCertifications: "Back to certifications",
      topicBreakdownTitle: "Success rate by topic",
      answerReviewTitle: "Answer review",
    },

    summary: {
      passed: "Above the pass mark",
      failed: "Below the pass mark",
      earnedPoints: (earnedPoints, maxPoints) =>
        `${earnedPoints} of ${points(maxPoints)}`,
      correctAnswers: (correctCount, questionCount) =>
        `${correctCount} of ${questionCount} correct`,
      passThreshold: (passPercentage, requiredPoints, maxPoints) =>
        `pass mark ${passPercentage} % (min. ${requiredPoints} of ${maxPoints})`,
      mode: "Mode",
      time: "Time",
      answered: "Answered",
      bestAnswer: "Best answer",
      correct: "Correct",
    },

    review: {
      onlyMistakes: (mistakeCount) =>
        `Show only questions to repeat (${mistakeCount})`,
      nothingToRepeat: "All answers are the best possible.",
    },
  },
};
