import type {
  Certification,
  CertificationExam,
  CertificationExamId,
  CertificationId,
  CertificationLevel,
  CertificationQuizMode,
} from "../types";

export const CERTIFICATION_LEVELS: CertificationLevel[] = [
  "foundation",
  "practitioner",
];

export const CERTIFICATION_LEVEL_LABELS: Record<CertificationLevel, string> = {
  foundation: "Úroveň 1 · Foundation",
  practitioner: "Úroveň 2 · Practitioner",
};

export const CERTIFICATION_MODE_LABELS: Record<CertificationQuizMode, string> =
  {
    practice: "Procvičování",
    exam: "Zkouška nanečisto",
  };

export const DEFAULT_PRACTICE_QUESTION_COUNT = 20;

export const CERTIFICATION_ROUTES = {
  home: "/certifications",
  quiz: "/certifications/quiz",
  results: "/certifications/results",
} as const;

export const ATTEMPT_QUERY_PARAM = "attempt";

export const CERTIFICATIONS: Certification[] = [
  {
    id: "prince2",
    name: "PRINCE2®",
    edition: "7. edice (2023)",
    owner: "PeopleCert",
    description:
      "Procesně orientovaná metoda řízení projektů – principy, lidé, praxe, procesy a kontext projektu.",
  },
  {
    id: "togaf",
    name: "TOGAF®",
    edition: "TOGAF Standard, 10. edice",
    owner: "The Open Group",
    description:
      "Rámec pro enterprise architekturu postavený na Architecture Development Method (ADM).",
  },
  {
    id: "archimate",
    name: "ArchiMate®",
    edition: "ArchiMate 3.2",
    owner: "The Open Group",
    description:
      "Modelovací jazyk pro popis, analýzu a vizualizaci enterprise architektury.",
  },
];

export const CERTIFICATION_EXAMS: Record<
  CertificationExamId,
  CertificationExam
> = {
  "prince2-foundation": {
    id: "prince2-foundation",
    certificationId: "prince2",
    level: "foundation",
    title: "PRINCE2® 7 Foundation",
    summary:
      "Znalost a porozumění: terminologie, principy, lidé, praxe a procesy PRINCE2.",
    format: {
      questionCount: 60,
      durationMinutes: 60,
      passPercentage: 60,
      isOpenBook: false,
      scoring: "single-answer",
    },
    topics: [
      {
        id: "overview",
        label: "Základní koncepty",
        description:
          "Projekt, pět integrovaných prvků, výkonnostní cíle a kontext projektu.",
      },
      {
        id: "principles",
        label: "Principy",
        description:
          "Sedm principů PRINCE2 7 a přizpůsobení metody (tailoring).",
      },
      {
        id: "people",
        label: "Lidé (People)",
        description:
          "Ekosystémy, řízení změny, stakeholdeři, leadership, týmy a komunikace.",
      },
      {
        id: "management-products",
        label: "Manažerské produkty",
        description: "PID, project log a typy manažerských produktů.",
      },
      {
        id: "business-case",
        label: "Business case",
        description:
          "Výstupy, schopnosti, výsledky, přínosy a životní cyklus business casu.",
      },
      {
        id: "organizing",
        label: "Organizing",
        description:
          "Organizační úrovně, role, jejich kombinace a organizační návrh.",
      },
      {
        id: "plans",
        label: "Plans",
        description: "Úrovně plánů, etapy a plánování založené na produktech.",
      },
      {
        id: "quality",
        label: "Quality",
        description:
          "Očekávání, akceptační kritéria, plánování a kontrola kvality.",
      },
      {
        id: "risk",
        label: "Risk",
        description:
          "Hrozby a příležitosti, vlastníci, apetit a reakce na rizika.",
      },
      {
        id: "issues",
        label: "Issues",
        description: "Typy issues, change authority a technika řízení issues.",
      },
      {
        id: "progress",
        label: "Progress",
        description: "Tolerance, kontroly, reporty a eskalace výjimek.",
      },
      {
        id: "processes-start",
        label: "Procesy SU a IP",
        description: "Starting up a project a Initiating a project.",
      },
      {
        id: "process-directing",
        label: "Proces DP",
        description: "Directing a project – rozhodování Project Boardu.",
      },
      {
        id: "processes-delivery",
        label: "Procesy CS a MP",
        description: "Controlling a stage a Managing product delivery.",
      },
      {
        id: "processes-closure",
        label: "Procesy SB a CP",
        description: "Managing a stage boundary a Closing a project.",
      },
    ],
  },
  "prince2-practitioner": {
    id: "prince2-practitioner",
    certificationId: "prince2",
    level: "practitioner",
    title: "PRINCE2® 7 Practitioner",
    summary:
      "Aplikace a přizpůsobení (tailoring) PRINCE2 v konkrétních projektových scénářích.",
    format: {
      questionCount: 70,
      durationMinutes: 150,
      passPercentage: 60,
      isOpenBook: true,
      scoring: "single-answer",
    },
    topics: [
      {
        id: "principles-tailoring",
        label: "Principy a tailoring",
        description:
          "Uplatnění principů a přizpůsobení metody kontextu projektu.",
      },
      {
        id: "people",
        label: "Lidé (People)",
        description: "Vedení týmů, řízení změny a komunikace ve scénáři.",
      },
      {
        id: "business-case",
        label: "Business case",
        description: "Business case, přínosy a udržitelnost v praxi.",
      },
      {
        id: "organizing",
        label: "Organizing",
        description: "Návrh projektové organizace a obsazení rolí.",
      },
      {
        id: "plans",
        label: "Plans",
        description: "Plány, etapizace a plánování založené na produktech.",
      },
      {
        id: "quality",
        label: "Quality",
        description: "Kvalita, popisy produktů, kontrola kvality a akceptace.",
      },
      {
        id: "risk",
        label: "Risk",
        description: "Rizika, reakce, vlastníci a záznamy v risk registeru.",
      },
      {
        id: "issues",
        label: "Issues",
        description: "Klasifikace issues a rozhodování o změnách.",
      },
      {
        id: "progress",
        label: "Progress",
        description: "Tolerance, kontroly, reporting a reakce na odchylky.",
      },
      {
        id: "processes-start",
        label: "Procesy SU, IP a DP",
        description:
          "Start a iniciace projektu včetně rozhodnutí Project Boardu.",
      },
      {
        id: "processes-delivery",
        label: "Procesy CS a MP",
        description: "Řízení etapy, dodávka pracovních balíků a usměrňování.",
      },
      {
        id: "processes-boundary-closure",
        label: "Procesy SB a CP",
        description: "Přechod mezi etapami, plány výjimek a uzavření projektu.",
      },
    ],
  },
  "togaf-foundation": {
    id: "togaf-foundation",
    certificationId: "togaf",
    level: "foundation",
    title: "TOGAF® Enterprise Architecture Foundation",
    summary:
      "Znalost a porozumění: pojmy, struktura TOGAF Standardu, ADM a jeho techniky.",
    format: {
      questionCount: 40,
      durationMinutes: 60,
      passPercentage: 60,
      isOpenBook: false,
      scoring: "single-answer",
    },
    topics: [
      {
        id: "ea-concepts",
        label: "Koncepty EA a TOGAF",
        description:
          "Enterprise architektura, domény, abstrakce a struktura TOGAF Standardu.",
      },
      {
        id: "definitions",
        label: "Klíčová terminologie",
        description: "Přesný význam oficiálních pojmů a jejich rozlišení.",
      },
      {
        id: "adm-overview",
        label: "ADM – principy a scoping",
        description:
          "Cyklus ADM, iterativnost, scoping a tok informací mezi fázemi.",
      },
      {
        id: "adm-preliminary-a",
        label: "Preliminary a fáze A",
        description:
          "Příprava architektonické schopnosti a Architecture Vision.",
      },
      {
        id: "adm-b-d",
        label: "Fáze B–D",
        description: "Business, Data, Application a Technology Architecture.",
      },
      {
        id: "adm-e-h-requirements",
        label: "Fáze E–H a requirements",
        description:
          "Příležitosti, migrace, implementace, řízení změn a požadavků.",
      },
      {
        id: "adm-techniques",
        label: "Techniky ADM",
        description:
          "Principy, stakeholder management, gap analysis, rizika a další techniky.",
      },
      {
        id: "applying-adm",
        label: "Aplikace ADM",
        description:
          "Iterační cykly, úrovně Architecture Landscape a partitioning.",
      },
      {
        id: "governance",
        label: "Architecture Governance",
        description: "Architecture Board, Architecture Contracts a compliance.",
      },
      {
        id: "content-framework",
        label: "Content Framework",
        description:
          "Deliverables, artifacts, building blocks a Enterprise Metamodel.",
      },
      {
        id: "adm-deliverables",
        label: "Klíčové výstupy ADM",
        description: "Účel, obsah a fáze vzniku hlavních deliverables.",
      },
      {
        id: "continuum-repository",
        label: "Continuum a Repository",
        description: "Enterprise Continuum a Architecture Repository.",
      },
      {
        id: "views-viewpoints",
        label: "Views a viewpoints",
        description: "Stakeholdeři, concerns, views a viewpoints.",
      },
      {
        id: "architecture-capability",
        label: "Architecture Capability",
        description: "Založení a provoz architektonické schopnosti podniku.",
      },
    ],
  },
  "togaf-practitioner": {
    id: "togaf-practitioner",
    certificationId: "togaf",
    level: "practitioner",
    title: "TOGAF® Enterprise Architecture Practitioner",
    summary:
      "Aplikace ADM a technik v komplexních scénářích s gradientním hodnocením odpovědí.",
    format: {
      questionCount: 8,
      durationMinutes: 90,
      passPercentage: 60,
      isOpenBook: true,
      scoring: "gradient",
    },
    topics: [
      {
        id: "context-governance",
        label: "Kontext a governance",
        description:
          "EA, Architecture Capability, governance a rizika ve scénářích.",
      },
      {
        id: "stakeholder-management",
        label: "Řízení stakeholderů",
        description: "Stakeholdeři, concerns, views a komunikace.",
      },
      {
        id: "phase-a-vision",
        label: "Fáze A – vize",
        description: "Scope, cíle, readiness a Statement of Architecture Work.",
      },
      {
        id: "architecture-development",
        label: "Vývoj architektury (B–D)",
        description: "Baseline, target, gap analysis a stakeholder review.",
      },
      {
        id: "migration-planning",
        label: "Plánování migrace (E–F)",
        description: "Transition Architectures, roadmapa a I&M Plan.",
      },
      {
        id: "implementation-governance",
        label: "Implementation Governance (G)",
        description: "Compliance reviews a Architecture Contracts.",
      },
      {
        id: "change-requirements",
        label: "Změny a požadavky (H)",
        description:
          "Architecture Change Management a Requirements Management.",
      },
      {
        id: "iteration-levels-repository",
        label: "Iterace, úrovně a repository",
        description:
          "Účel a úroveň architektury, iterace a Architecture Repository.",
      },
      {
        id: "techniques-application",
        label: "Techniky v praxi",
        description:
          "Business scenarios, gap analysis, compliance a risk assessment.",
      },
    ],
  },
  "archimate-foundation": {
    id: "archimate-foundation",
    certificationId: "archimate",
    level: "foundation",
    title: "ArchiMate® 3 Foundation",
    summary:
      "Znalost a porozumění: struktura jazyka, prvky, vztahy a viewpointy ArchiMate.",
    format: {
      questionCount: 40,
      durationMinutes: 60,
      passPercentage: 60,
      isOpenBook: false,
      scoring: "single-answer",
    },
    topics: [
      {
        id: "intro-framework",
        label: "Úvod a framework",
        description: "Účel jazyka, vrstvy a aspekty ArchiMate Frameworku.",
      },
      {
        id: "generic-metamodel",
        label: "Generický metamodel",
        description: "Aktivní a pasivní struktura, chování, služby a rozhraní.",
      },
      {
        id: "relationships",
        label: "Vztahy",
        description: "Strukturální, závislostní, dynamické vztahy a junctions.",
      },
      {
        id: "derivation",
        label: "Odvozování vztahů",
        description: "Pravidla odvozování (derivation rules).",
      },
      {
        id: "motivation",
        label: "Motivace",
        description:
          "Stakeholder, driver, goal, outcome, principle, requirement…",
      },
      {
        id: "strategy",
        label: "Strategie",
        description: "Resource, capability, value stream a course of action.",
      },
      {
        id: "business-layer",
        label: "Business vrstva",
        description: "Business aktéři, role, procesy, služby a objekty.",
      },
      {
        id: "application-layer",
        label: "Aplikační vrstva",
        description: "Aplikační komponenty, služby, rozhraní a data.",
      },
      {
        id: "technology-physical",
        label: "Technologie a fyzické prvky",
        description: "Nodes, devices, system software, sítě a fyzické prvky.",
      },
      {
        id: "cross-layer",
        label: "Vazby mezi vrstvami",
        description: "Business–application a application–technology alignment.",
      },
      {
        id: "implementation-migration",
        label: "Implementace a migrace",
        description: "Work package, deliverable, plateau a gap.",
      },
      {
        id: "viewpoints",
        label: "Viewpoints a views",
        description: "Mechanismus viewpointů a příklady viewpointů.",
      },
      {
        id: "customization-notation",
        label: "Notace a customizace",
        description: "Notace, grouping, location a přizpůsobení jazyka.",
      },
    ],
  },
  "archimate-practitioner": {
    id: "archimate-practitioner",
    certificationId: "archimate",
    level: "practitioner",
    title: "ArchiMate® 3 Practitioner",
    summary:
      "Modelování scénářů: volba správných prvků, vztahů a viewpointů s gradientním hodnocením.",
    format: {
      questionCount: 8,
      durationMinutes: 90,
      passPercentage: 65,
      isOpenBook: true,
      scoring: "gradient",
    },
    topics: [
      {
        id: "modeling-business",
        label: "Modelování businessu",
        description: "Business prvky a vztahy v organizačním scénáři.",
      },
      {
        id: "modeling-application",
        label: "Modelování aplikací",
        description: "Aplikační komponenty, služby, rozhraní a data.",
      },
      {
        id: "modeling-technology-physical",
        label: "Technologie a fyzický svět",
        description: "Nasazení, infrastruktura, sítě a fyzické prvky.",
      },
      {
        id: "cross-layer-modeling",
        label: "Mezivrstvové modelování",
        description: "Řetězce realizace a obsluhy napříč vrstvami.",
      },
      {
        id: "motivation-strategy-modeling",
        label: "Motivace a strategie",
        description: "Cíle, požadavky, capabilities a value streams.",
      },
      {
        id: "implementation-migration-modeling",
        label: "Implementace a migrace",
        description: "Plateaus, gaps, work packages a deliverables.",
      },
      {
        id: "viewpoints-customization",
        label: "Viewpointy a customizace",
        description:
          "Volba viewpointu pro stakeholdera, profily a specializace.",
      },
      {
        id: "model-analysis-derivation",
        label: "Analýza a odvozování",
        description: "Odvozené vztahy, dopadová analýza a správnost modelu.",
      },
      {
        id: "archimate-in-adm",
        label: "ArchiMate v ADM",
        description: "Využití ArchiMate ve fázích TOGAF ADM.",
      },
    ],
  },
};

export function isCertificationExamId(
  value: string,
): value is CertificationExamId {
  return Object.hasOwn(CERTIFICATION_EXAMS, value);
}

export function getTopicLabel(
  exam: CertificationExam,
  topicId: string,
): string {
  return exam.topics.find((topic) => topic.id === topicId)?.label ?? topicId;
}

export function getCertificationExams(
  certificationId: CertificationId,
): CertificationExam[] {
  return CERTIFICATION_LEVELS.map(
    (level) => CERTIFICATION_EXAMS[`${certificationId}-${level}`],
  );
}
