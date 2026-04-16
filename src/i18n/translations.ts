export type Lang = "cs" | "en";

export type TranslationKey =
  | "app.title"
  | "nav.home"
  | "nav.results"
  | "lang.cs"
  | "lang.en"

  | "field.name"
  | "field.email"
  | "placeholder.name"
  | "placeholder.email"
  | "consent.text"

  | "field.category"
  | "selectAll"
  | "bulk.setCount"
  | "bulk.selected"
  | "bulk.hint"
  | "totalQuestions"
  | "refresh"

  | "validation.required"
  | "validation.min2"
  | "validation.invalidEmail"
  | "validation.maxQuestions"

  // Home page
  | "home.eyebrow"
  | "home.hero.title"
  | "home.hero.lead"
  | "home.tags.frontend"
  | "home.tags.fast"
  | "home.tags.branding"
  | "home.panel.what.title"
  | "home.panel.what.text"
  | "home.panel.recommended.title"
  | "home.panel.recommended.text"
  | "home.card.kicker"
  | "home.card.title"
  | "home.card.text"
  | "home.start"
  | "home.hint"
  
  //questions grouping
  | "groups.frontend.label"
  | "groups.frontend.description"
  | "groups.react.label"
  | "groups.react.description"
  | "groups.angular.label"
  | "groups.angular.description"
  | "groups.vue.label"
  | "groups.vue.description"
  | "groups.backend.label"
  | "groups.backend.description"
  | "groups.java.label"
  | "groups.java.description"
  | "groups.dataMessaging.label"
  | "groups.dataMessaging.description"
  | "groups.infrastructureDevops.label"
  | "groups.infrastructureDevops.description"
  | "groups.securityQuality.label"
  | "groups.securityQuality.description"
  | "groups.other.label"
  | "groups.other.description"
  
  //matchers
  | "cat.cssStyling"
  | "cat.frontendTesting"
  | "cat.stateManagement"
  | "cat.typescript"
  | "cat.reactJs"
  | "cat.reactNative"
  | "cat.nextJs"
  | "cat.angular"
  | "cat.vueJs"
  | "cat.api"
  | "cat.asyncCommunication"
  | "cat.authJwt"
  | "cat.http"
  | "cat.microservices"
  | "cat.nodeJs"
  | "cat.dotnet"
  | "cat.hibernate"
  | "cat.javaxConcurrent"
  | "cat.mavenGradle"
  | "cat.springBoot"
  | "cat.springCore"
  | "cat.testingJunitSpock"
  | "cat.elasticsearch"
  | "cat.kafka"
  | "cat.rabbitmq"
  | "cat.relationalDatabases"
  | "cat.sql"
  | "cat.aws"
  | "cat.continuousDelivery"
  | "cat.docker"
  | "cat.flywayLiquibase"
  | "cat.gitGithub"
  | "cat.kubernetes"
  | "cat.productionIncidents"
  | "cat.cleanCode"
  | "cat.cryptography"
  | "cat.owasp"
  
  //container
  | "quiz.kicker"
  | "quiz.title"
  | "quiz.questionCount"
  | "quiz.timeLimit.on"
  | "quiz.timeLimit.off"
  | "quiz.timerLeft"
  | "quiz.settings.show"
  | "quiz.settings.hide"
  | "quiz.answeredProgress"
  | "quiz.submit"
  | "quiz.confirmUnanswered"
  
  | "summary.minimum"
  | "summary.title.passed"
  | "summary.title.failed"
  | "summary.score"
  | "summary.time"
  | "summary.text.passed"
  | "summary.text.failed"
  | "summary.reset"
  
  | "summaryList.unknownUser"
  | "summaryList.notProvided"
  | "summaryList.title"
  | "summaryList.label.email"
  | "summaryList.label.emailStatus"
  | "summaryList.label.score"
  | "summaryList.label.result"
  | "summaryList.label.totalTime"
  | "summaryList.emailStatus.idle"
  | "summaryList.emailStatus.sending"
  | "summaryList.emailStatus.sent"
  | "summaryList.emailStatus.error"
  | "summaryList.emailButton.send"
  | "summaryList.emailButton.sending"
  | "summaryList.emailButton.sent"
  | "summaryList.emailButton.errorRetry"
  
  | "categories.all"
  | "categories.group.selectAll"
  | "categories.group.removeAll"
  | "categories.questionsCount"
  | "categories.countLabel"

  | "settings.questionCountLabel"
  
  | "results.empty.kicker"
  | "results.empty.title"
  | "results.empty.text"
  | "results.empty.cta"
  | "results.intro.kicker"
  | "results.intro.title"
  | "results.intro.text"
  | "results.history.title"
  | "results.history.meta"
  | "results.history.showDetail"
  | "results.history.hideDetail";


export const translations: Record<Lang, Record<TranslationKey, string>> = {
  cs: {
    "app.title": "Kvíz pro softwareové inženýry",
    "nav.home": "Domů",
    "nav.results": "Výsledky",
    "lang.cs": "CZ",
    "lang.en": "EN",

    "field.name": "Jméno",
    "field.email": "Email",
    "placeholder.name": "Např. Jana Nováková",
    "placeholder.email": "jmeno@firma.cz",
    "consent.text":
      "Souhlasím se zpracováním osobních údajů pouze za účelem odeslání emailu s výsledky.",

    "field.category": "Kategorie",
    "selectAll": "Vybrat všechny",
    "bulk.setCount": "Nastavit počet otázek pro vybrané",
    "bulk.selected": "Vybráno: {count}",
    "bulk.hint": "Zadaná hodnota přepíše počty u všech vybraných kategorií.",
    "totalQuestions": "Celkem otázek: {count}",
    "refresh": "Obnovit",

    "validation.required": "Povinné pole",
    "validation.min2": "Min. 2 znaky",
    "validation.invalidEmail": "Neplatný email",
    "validation.maxQuestions": "Max. {max} otázek",

    // Home page
    "home.eyebrow": "Prorocketeers Engineering Quiz",
    "home.hero.title": "Technický kvíz pro vývojáře",
    "home.hero.lead":
      "Vyberte si okruhy, nastavte rozsah testu a během pár minut získáte přehledný výsledek v čistém vizuálu laděném do firemních barev.",
    "home.tags.frontend": "Nové frontend okruhy",
    "home.tags.fast": "Rychlé vyhodnocení",
    "home.tags.branding": "Firemní barevnost",
    "home.panel.what.title": "Co vás čeká",
    "home.panel.what.text":
      "Otázky jsou rozdělené po technických okruzích a výsledky se ukládají do historie.",
    "home.panel.recommended.title": "Doporučený průchod",
    "home.panel.recommended.text":
      "Vyberte menší sadu okruhů a 15 až 25 otázek, pokud chcete rychlé interní ověření.",
    "home.card.kicker": "Nastavení testu",
    "home.card.title": "Připravte si vlastní běh kvízu",
    "home.card.text":
      "Zvolte oblast, počet otázek a vyplňte kontaktní údaje pro zaslání výsledků.",
    "home.start": "Spustit kvíz",
    "home.hint": "Vyplňte jméno, email a potvrďte souhlas se zpracováním údajů.",

    //questions grouping
    "groups.frontend.label": "Frontend",
    "groups.frontend.description": "TypeScript, styling, state management a frontend testing.",
    "groups.react.label": "React",
    "groups.react.description": "React, React Native a související okruhy kolem Next.js.",
    "groups.angular.label": "Angular",
    "groups.angular.description": "Angular platforma a její specifika.",
    "groups.vue.label": "Vue",
    "groups.vue.description": "Vue.js a jeho reaktivní ekosystém.",
    "groups.backend.label": "Backend",
    "groups.backend.description": "Node.js, API komunikace a backendové základy.",
    "groups.java.label": "Java",
    "groups.java.description": "Spring, Hibernate, build nástroje a concurrency.",
    "groups.dataMessaging.label": "Data & Messaging",
    "groups.dataMessaging.description": "Databáze, fulltext a messaging platformy.",
    "groups.infrastructureDevops.label": "Infrastructure & DevOps",
    "groups.infrastructureDevops.description": "Cloud, kontejnery, delivery pipeline a provoz.",
    "groups.securityQuality.label": "Security & Quality",
    "groups.securityQuality.description": "Bezpečnostní témata a kvalita kódu.",
    "groups.other.label": "Ostatní",
    "groups.other.description": "Kategorie, které zatím nejsou zařazené do větší platformy.",

    // matchers
    "cat.cssStyling": "CSS / Styling",
    "cat.frontendTesting": "Frontend Testing",
    "cat.stateManagement": "State Management",
    "cat.typescript": "TypeScript",
    "cat.reactJs": "React.js",
    "cat.reactNative": "React Native",
    "cat.nextJs": "Next.js",
    "cat.angular": "Angular",
    "cat.vueJs": "Vue.js",
    "cat.api": "API",
    "cat.asyncCommunication": "Asynchronous Communication",
    "cat.authJwt": "Authentication / Authorization / JWT",
    "cat.http": "HTTP(s)",
    "cat.microservices": "Microservice Architecture",
    "cat.nodeJs": "Node.js",
    "cat.dotnet": ".NET",
    "cat.hibernate": "Hibernate",
    "cat.javaxConcurrent": "javax.concurrent",
    "cat.mavenGradle": "Maven / Gradle",
    "cat.springBoot": "Spring Boot",
    "cat.springCore": "Spring Core",
    "cat.testingJunitSpock": "Testing (JUnit, Spock)",
    "cat.elasticsearch": "ElasticSearch",
    "cat.kafka": "Kafka",
    "cat.rabbitmq": "RabbitMQ",
    "cat.relationalDatabases": "Relational Databases",
    "cat.sql": "SQL",
    "cat.aws": "AWS",
    "cat.continuousDelivery": "Continuous Delivery",
    "cat.docker": "Docker",
    "cat.flywayLiquibase": "Flyway/Liquibase",
    "cat.gitGithub": "Git/GitHub",
    "cat.kubernetes": "Kubernetes",
    "cat.productionIncidents": "Production Incidents",
    "cat.cleanCode": "Clean Code",
    "cat.cryptography": "Cryptography",
    "cat.owasp": "OWASP",

    "quiz.kicker": "Aktivní test",
    "quiz.title": "Technický kvíz",
    "quiz.questionCount": "{count} otázek",
    "quiz.timeLimit.on": " • s časovým limitem",
    "quiz.timeLimit.off": " • bez časového limitu",
    "quiz.timerLeft": "⏱️ Zbývá: {seconds}s",
    "quiz.settings.show": "Ukázat nastavení",
    "quiz.settings.hide": "Skrýt nastavení",
    "quiz.answeredProgress": "Zodpovězeno: {answered} / {total}",
    "quiz.submit": "Vyhodnotit kvíz",
    "quiz.confirmUnanswered": "Máte {count} nezodpovězených otázek. Opravdu chcete pokračovat?",

    "summary.minimum": "Minimum: {value}",
    "summary.title.passed": "Skvělý výsledek",
    "summary.title.failed": "Výsledek kvízu",
    "summary.score": "{score} / {total}",
    "summary.time": "Čas: {time}",
    "summary.text.passed":
      "Limit jste splnili a můžete pokračovat k detailnímu rozpisu odpovědí.",
    "summary.text.failed":
      "Tentokrát to nevyšlo, ale detailní rozpis vám ukáže, kde máte největší prostor ke zlepšení.",
    "summary.reset": "Spustit nový kvíz",

    "summaryList.unknownUser": "Neznámý uživatel",
    "summaryList.notProvided": "Neuvedeno",
    "summaryList.title": "Souhrn pro {name}",
    "summaryList.label.email": "Email:",
    "summaryList.label.emailStatus": "Stav emailu:",
    "summaryList.label.score": "Skóre:",
    "summaryList.label.result": "Výsledek:",
    "summaryList.label.totalTime": "Celkový čas:",
    "summaryList.emailStatus.idle": "Neodesláno",
    "summaryList.emailStatus.sending": "Odesílám...",
    "summaryList.emailStatus.sent": "Odesláno",
    "summaryList.emailStatus.error": "Odeslání selhalo",
    "summaryList.emailButton.send": "Odeslat email",
    "summaryList.emailButton.sending": "Odesílám...",
    "summaryList.emailButton.sent": "Odesláno ✓",
    "summaryList.emailButton.errorRetry": "Chyba - zkusit znovu",

    "categories.all": "Všechny kategorie",
    "categories.group.selectAll": "Vybrat vše",
    "categories.group.removeAll": "Odebrat vše",
    "categories.questionsCount": "{count} otázek",
    "categories.countLabel": "Počet",
    "settings.questionCountLabel": "Počet otázek",

    "results.empty.kicker": "Výsledky",
    "results.empty.title": "Zatím tu není žádný dokončený běh",
    "results.empty.text":
      "Spusťte nový kvíz a po vyhodnocení se vám tady uloží kompletní historie výsledků.",
    "results.empty.cta": "Spustit nový kvíz",

    "results.intro.kicker": "Vyhodnocení",
    "results.intro.title": "Souhrn a historie výsledků",
    "results.intro.text":
      "Aktivní záznam je zvýrazněný nahoře, v historii si můžete kdykoli otevřít detail starších pokusů.",

    "results.history.title": "Historie výsledků",
    "results.history.meta": "Skóre {score}/{total} • Minimum {min} • Čas {time}",
    "results.history.showDetail": "Zobrazit detail",
    "results.history.hideDetail": "Skrýt detail",
      },

  en: {
    "app.title": "Quiz for Software Engineers",
    "nav.home": "Home",
    "nav.results": "Results",
    "lang.cs": "CZ",
    "lang.en": "EN",

    "field.name": "Name",
    "field.email": "Email",
    "placeholder.name": "e.g. Jane Doe",
    "placeholder.email": "name@company.com",
    "consent.text":
      "I agree to the processing of personal data solely for the purpose of sending an email with the results.",

    "field.category": "Categories",
    "selectAll": "Select all",
    "bulk.setCount": "Set number of questions for selected",
    "bulk.selected": "Selected: {count}",
    "bulk.hint": "The entered value overwrites counts for all selected categories.",
    "totalQuestions": "Total questions: {count}",
    "refresh": "Refresh",

    "validation.required": "Required field",
    "validation.min2": "Min. 2 characters",
    "validation.invalidEmail": "Invalid email",
    "validation.maxQuestions": "Max. {max} questions",

    // Home page
    "home.eyebrow": "Prorocketeers Engineering Quiz",
    "home.hero.title": "Technical quiz for developers",
    "home.hero.lead":
      "Choose topics, set the test scope, and in a few minutes you’ll get a clear result in a clean visual aligned with the company branding.",
    "home.tags.frontend": "New frontend topics",
    "home.tags.fast": "Fast evaluation",
    "home.tags.branding": "Company branding",
    "home.panel.what.title": "What to expect",
    "home.panel.what.text":
      "Questions are grouped by technical areas and results are saved to history.",
    "home.panel.recommended.title": "Recommended run",
    "home.panel.recommended.text":
      "Pick a smaller set of topics and 15 to 25 questions for a quick internal check.",
    "home.card.kicker": "Test setup",
    "home.card.title": "Prepare your own quiz run",
    "home.card.text":
      "Choose the area, number of questions, and fill in contact details to send the results.",
    "home.start": "Start quiz",
    "home.hint": "Fill in name, email, and confirm consent to data processing.",

    //questions grouping
    "groups.frontend.label": "Frontend",
    "groups.frontend.description": "TypeScript, styling, state management, and frontend testing.",
    "groups.react.label": "React",
    "groups.react.description": "React, React Native, and related topics around Next.js.",
    "groups.angular.label": "Angular",
    "groups.angular.description": "The Angular platform and its specifics.",
    "groups.vue.label": "Vue",
    "groups.vue.description": "Vue.js and its reactive ecosystem.",
    "groups.backend.label": "Backend",
    "groups.backend.description": "Node.js, API communication, and backend foundations.",
    "groups.java.label": "Java",
    "groups.java.description": "Spring, Hibernate, build tools, and concurrency.",
    "groups.dataMessaging.label": "Data & Messaging",
    "groups.dataMessaging.description": "Databases, full-text search, and messaging platforms.",
    "groups.infrastructureDevops.label": "Infrastructure & DevOps",
    "groups.infrastructureDevops.description": "Cloud, containers, delivery pipelines, and operations.",
    "groups.securityQuality.label": "Security & Quality",
    "groups.securityQuality.description": "Security topics and code quality.",
    "groups.other.label": "Other",
    "groups.other.description": "Categories not yet assigned to a larger platform group.",

    //matchers
    "cat.cssStyling": "CSS / Styling",
    "cat.frontendTesting": "Frontend Testing",
    "cat.stateManagement": "State Management",
    "cat.typescript": "TypeScript",
    "cat.reactJs": "React.js",
    "cat.reactNative": "React Native",
    "cat.nextJs": "Next.js",
    "cat.angular": "Angular",
    "cat.vueJs": "Vue.js",
    "cat.api": "API",
    "cat.asyncCommunication": "Asynchronous Communication",
    "cat.authJwt": "Authentication / Authorization / JWT",
    "cat.http": "HTTP(s)",
    "cat.microservices": "Microservice Architecture",
    "cat.nodeJs": "Node.js",
    "cat.dotnet": ".NET",
    "cat.hibernate": "Hibernate",
    "cat.javaxConcurrent": "javax.concurrent",
    "cat.mavenGradle": "Maven / Gradle",
    "cat.springBoot": "Spring Boot",
    "cat.springCore": "Spring Core",
    "cat.testingJunitSpock": "Testing (JUnit, Spock)",
    "cat.elasticsearch": "ElasticSearch",
    "cat.kafka": "Kafka",
    "cat.rabbitmq": "RabbitMQ",
    "cat.relationalDatabases": "Relational Databases",
    "cat.sql": "SQL",
    "cat.aws": "AWS",
    "cat.continuousDelivery": "Continuous Delivery",
    "cat.docker": "Docker",
    "cat.flywayLiquibase": "Flyway/Liquibase",
    "cat.gitGithub": "Git/GitHub",
    "cat.kubernetes": "Kubernetes",
    "cat.productionIncidents": "Production Incidents",
    "cat.cleanCode": "Clean Code",
    "cat.cryptography": "Cryptography",
    "cat.owasp": "OWASP",

    "quiz.kicker": "Active test",
    "quiz.title": "Technical quiz",
    "quiz.questionCount": "{count} questions",
    "quiz.timeLimit.on": " • with a time limit",
    "quiz.timeLimit.off": " • without a time limit",
    "quiz.timerLeft": "⏱️ Time left: {seconds}s",
    "quiz.settings.show": "Show settings",
    "quiz.settings.hide": "Hide settings",
    "quiz.answeredProgress": "Answered: {answered} / {total}",
    "quiz.submit": "Submit quiz",
    "quiz.confirmUnanswered": "You have {count} unanswered questions. Do you really want to continue?",

    "summary.minimum": "Minimum: {value}",
    "summary.title.passed": "Great result",
    "summary.title.failed": "Quiz result",
    "summary.score": "{score} / {total}",
    "summary.time": "Time: {time}",
    "summary.text.passed":
      "You met the threshold and can continue to the detailed breakdown of answers.",
    "summary.text.failed":
      "Not this time, but the detailed breakdown will show where you have the most room for improvement.",
    "summary.reset": "Start a new quiz",

    "summaryList.unknownUser": "Unknown user",
    "summaryList.notProvided": "Not provided",
    "summaryList.title": "Summary for {name}",
    "summaryList.label.email": "Email:",
    "summaryList.label.emailStatus": "Email status:",
    "summaryList.label.score": "Score:",
    "summaryList.label.result": "Result:",
    "summaryList.label.totalTime": "Total time:",
    "summaryList.emailStatus.idle": "Not sent",
    "summaryList.emailStatus.sending": "Sending...",
    "summaryList.emailStatus.sent": "Sent",
    "summaryList.emailStatus.error": "Sending failed",
    "summaryList.emailButton.send": "Send email",
    "summaryList.emailButton.sending": "Sending...",
    "summaryList.emailButton.sent": "Sent ✓",
    "summaryList.emailButton.errorRetry": "Error - try again",

    "categories.all": "All categories",
    "categories.group.selectAll": "Select all",
    "categories.group.removeAll": "Remove all",
    "categories.questionsCount": "{count} questions",
    "categories.countLabel": "Count",

    "settings.questionCountLabel": "Number of questions",

    "results.empty.kicker": "Results",
    "results.empty.title": "There is no completed run yet",
    "results.empty.text":
      "Start a new quiz and after evaluation the complete history of results will be saved here.",
    "results.empty.cta": "Start a new quiz",

    "results.intro.kicker": "Evaluation",
    "results.intro.title": "Summary and results history",
    "results.intro.text":
      "The active record is highlighted at the top; in history you can open details of older attempts anytime.",

    "results.history.title": "Results history",
    "results.history.meta": "Score {score}/{total} • Minimum {min} • Time {time}",
    "results.history.showDetail": "Show details",
    "results.history.hideDetail": "Hide details",
  },
};