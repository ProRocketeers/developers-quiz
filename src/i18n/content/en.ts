import { CERTIFICATION_ROUTES } from "../../constants/certifications";
import type { ContentTranslations } from "./types";

export const contentEn: ContentTranslations = {
  certifications: {
    prince2: {
      edition: "7th edition (2023)",
      description:
        "A process-based project management method – principles, people, practices, processes and the project context.",
    },
    togaf: {
      edition: "TOGAF Standard, 10th Edition",
      description:
        "An enterprise architecture framework built on the Architecture Development Method (ADM).",
    },
    archimate: {
      edition: "ArchiMate 3.2",
      description:
        "A modelling language for describing, analysing and visualising enterprise architecture.",
      cheatSheet: {
        title: "ArchiMate 3.2 cheat sheet",
        pageHref: CERTIFICATION_ROUTES.archimateCheatSheet,
        description:
          "A condensed overview for both exams: the framework, relationships, elements of all layers with their notation, cross-layer dependencies, migration and viewpoints.",
        files: [
          {
            label: "PDF in English",
            href: "/downloads/archimate-3-2-cheat-sheet-en.pdf",
          },
          {
            label: "Word in English",
            href: "/downloads/archimate-3-2-cheat-sheet-en.docx",
          },
          { label: "PDF in Czech", href: "/downloads/archimate-3-2-tahak.pdf" },
          {
            label: "Word in Czech",
            href: "/downloads/archimate-3-2-tahak.docx",
          },
        ],
      },
    },
  },

  exams: {
    "prince2-foundation": {
      summary:
        "Knowledge and understanding: PRINCE2 terminology, principles, people, practices and processes.",
      topics: {
        overview: {
          label: "Key concepts",
          description:
            "The project, the five integrated elements, performance targets and the project context.",
        },
        principles: {
          label: "Principles",
          description:
            "The seven PRINCE2 7 principles and tailoring of the method.",
        },
        people: {
          label: "People",
          description:
            "Ecosystems, change management, stakeholders, leadership, teams and communication.",
        },
        "management-products": {
          label: "Management products",
          description:
            "The PID, the project log and the types of management products.",
        },
        "business-case": {
          label: "Business case",
          description:
            "Outputs, capabilities, outcomes, benefits and the business case lifecycle.",
        },
        organizing: {
          label: "Organizing",
          description:
            "Organizational levels, roles, combining them and organizational design.",
        },
        plans: {
          label: "Plans",
          description: "Levels of plans, stages and product-based planning.",
        },
        quality: {
          label: "Quality",
          description:
            "Expectations, acceptance criteria, quality planning and quality control.",
        },
        risk: {
          label: "Risk",
          description:
            "Threats and opportunities, owners, appetite and risk responses.",
        },
        issues: {
          label: "Issues",
          description:
            "Types of issues, change authority and the issue management technique.",
        },
        progress: {
          label: "Progress",
          description:
            "Tolerances, controls, reports and escalation of exceptions.",
        },
        "processes-start": {
          label: "SU and IP processes",
          description: "Starting up a project and Initiating a project.",
        },
        "process-directing": {
          label: "DP process",
          description: "Directing a project – Project Board decision making.",
        },
        "processes-delivery": {
          label: "CS and MP processes",
          description: "Controlling a stage and Managing product delivery.",
        },
        "processes-closure": {
          label: "SB and CP processes",
          description: "Managing a stage boundary and Closing a project.",
        },
      },
    },
    "prince2-practitioner": {
      summary: "Applying and tailoring PRINCE2 in specific project scenarios.",
      topics: {
        "principles-tailoring": {
          label: "Principles and tailoring",
          description:
            "Applying the principles and tailoring the method to the project context.",
        },
        people: {
          label: "People",
          description:
            "Leading teams, change management and communication in a scenario.",
        },
        "business-case": {
          label: "Business case",
          description:
            "The business case, benefits and sustainability in practice.",
        },
        organizing: {
          label: "Organizing",
          description: "Designing the project organization and filling roles.",
        },
        plans: {
          label: "Plans",
          description: "Plans, staging and product-based planning.",
        },
        quality: {
          label: "Quality",
          description:
            "Quality, product descriptions, quality control and acceptance.",
        },
        risk: {
          label: "Risk",
          description:
            "Risks, responses, owners and entries in the risk register.",
        },
        issues: {
          label: "Issues",
          description: "Classifying issues and deciding on changes.",
        },
        progress: {
          label: "Progress",
          description:
            "Tolerances, controls, reporting and responding to deviations.",
        },
        "processes-start": {
          label: "SU, IP and DP processes",
          description:
            "Starting up and initiating a project, including Project Board decisions.",
        },
        "processes-delivery": {
          label: "CS and MP processes",
          description:
            "Controlling a stage, delivering work packages and giving direction.",
        },
        "processes-boundary-closure": {
          label: "SB and CP processes",
          description:
            "Moving between stages, exception plans and closing the project.",
        },
      },
    },
    "togaf-foundation": {
      summary:
        "Knowledge and understanding: concepts, the structure of the TOGAF Standard, the ADM and its techniques.",
      topics: {
        "ea-concepts": {
          label: "EA and TOGAF concepts",
          description:
            "Enterprise architecture, domains, abstraction and the structure of the TOGAF Standard.",
        },
        definitions: {
          label: "Key terminology",
          description:
            "The exact meaning of the official terms and how to tell them apart.",
        },
        "adm-overview": {
          label: "ADM – principles and scoping",
          description:
            "The ADM cycle, iteration, scoping and the flow of information between phases.",
        },
        "adm-preliminary-a": {
          label: "Preliminary and Phase A",
          description:
            "Preparing the architecture capability and the Architecture Vision.",
        },
        "adm-b-d": {
          label: "Phases B–D",
          description:
            "Business, Data, Application and Technology Architecture.",
        },
        "adm-e-h-requirements": {
          label: "Phases E–H and requirements",
          description:
            "Opportunities, migration, implementation, change and requirements management.",
        },
        "adm-techniques": {
          label: "ADM techniques",
          description:
            "Principles, stakeholder management, gap analysis, risk and other techniques.",
        },
        "applying-adm": {
          label: "Applying the ADM",
          description:
            "Iteration cycles, Architecture Landscape levels and partitioning.",
        },
        governance: {
          label: "Architecture Governance",
          description:
            "The Architecture Board, Architecture Contracts and compliance.",
        },
        "content-framework": {
          label: "Content Framework",
          description:
            "Deliverables, artifacts, building blocks and the Enterprise Metamodel.",
        },
        "adm-deliverables": {
          label: "Key ADM deliverables",
          description:
            "The purpose and content of the main deliverables and the phases that produce them.",
        },
        "continuum-repository": {
          label: "Continuum and Repository",
          description: "Enterprise Continuum and Architecture Repository.",
        },
        "views-viewpoints": {
          label: "Views and viewpoints",
          description: "Stakeholders, concerns, views and viewpoints.",
        },
        "architecture-capability": {
          label: "Architecture Capability",
          description:
            "Establishing and operating the enterprise's architecture capability.",
        },
      },
    },
    "togaf-practitioner": {
      summary:
        "Applying the ADM and its techniques in complex scenarios with gradient scoring of answers.",
      topics: {
        "context-governance": {
          label: "Context and governance",
          description:
            "EA, Architecture Capability, governance and risk in scenarios.",
        },
        "stakeholder-management": {
          label: "Stakeholder management",
          description: "Stakeholders, concerns, views and communication.",
        },
        "phase-a-vision": {
          label: "Phase A – vision",
          description:
            "Scope, goals, readiness and the Statement of Architecture Work.",
        },
        "architecture-development": {
          label: "Architecture development (B–D)",
          description: "Baseline, target, gap analysis and stakeholder review.",
        },
        "migration-planning": {
          label: "Migration planning (E–F)",
          description:
            "Transition Architectures, the roadmap and the I&M Plan.",
        },
        "implementation-governance": {
          label: "Implementation Governance (G)",
          description: "Compliance reviews and Architecture Contracts.",
        },
        "change-requirements": {
          label: "Change and requirements (H)",
          description:
            "Architecture Change Management and Requirements Management.",
        },
        "iteration-levels-repository": {
          label: "Iteration, levels and repository",
          description:
            "Architecture purpose and level, iteration and the Architecture Repository.",
        },
        "techniques-application": {
          label: "Techniques in practice",
          description:
            "Business scenarios, gap analysis, compliance and risk assessment.",
        },
      },
    },
    "archimate-foundation": {
      summary:
        "Knowledge and understanding: the structure of the language, elements, relationships and ArchiMate viewpoints.",
      topics: {
        "intro-framework": {
          label: "Introduction and framework",
          description:
            "The purpose of the language, layers and aspects of the ArchiMate Framework.",
        },
        "generic-metamodel": {
          label: "Generic metamodel",
          description:
            "Active and passive structure, behaviour, services and interfaces.",
        },
        relationships: {
          label: "Relationships",
          description:
            "Structural, dependency and dynamic relationships, and junctions.",
        },
        derivation: {
          label: "Derivation of relationships",
          description: "Derivation rules.",
        },
        motivation: {
          label: "Motivation",
          description:
            "Stakeholder, driver, goal, outcome, principle, requirement…",
        },
        strategy: {
          label: "Strategy",
          description:
            "Resource, capability, value stream and course of action.",
        },
        "business-layer": {
          label: "Business layer",
          description:
            "Business actors, roles, processes, services and objects.",
        },
        "application-layer": {
          label: "Application layer",
          description: "Application components, services, interfaces and data.",
        },
        "technology-physical": {
          label: "Technology and physical elements",
          description:
            "Nodes, devices, system software, networks and physical elements.",
        },
        "cross-layer": {
          label: "Cross-layer dependencies",
          description:
            "Business–application and application–technology alignment.",
        },
        "implementation-migration": {
          label: "Implementation and migration",
          description: "Work package, deliverable, plateau and gap.",
        },
        viewpoints: {
          label: "Viewpoints and views",
          description: "The viewpoint mechanism and example viewpoints.",
        },
        "customization-notation": {
          label: "Notation and customization",
          description:
            "Notation, grouping, location and customizing the language.",
        },
      },
    },
    "archimate-practitioner": {
      summary:
        "Modelling scenarios: choosing the right elements, relationships and viewpoints, with gradient scoring.",
      topics: {
        "modeling-business": {
          label: "Business modelling",
          description:
            "Business elements and relationships in an organizational scenario.",
        },
        "modeling-application": {
          label: "Application modelling",
          description: "Application components, services, interfaces and data.",
        },
        "modeling-technology-physical": {
          label: "Technology and the physical world",
          description:
            "Deployment, infrastructure, networks and physical elements.",
        },
        "cross-layer-modeling": {
          label: "Cross-layer modelling",
          description: "Realization and serving chains across the layers.",
        },
        "motivation-strategy-modeling": {
          label: "Motivation and strategy",
          description: "Goals, requirements, capabilities and value streams.",
        },
        "implementation-migration-modeling": {
          label: "Implementation and migration",
          description: "Plateaus, gaps, work packages and deliverables.",
        },
        "viewpoints-customization": {
          label: "Viewpoints and customization",
          description:
            "Choosing a viewpoint for a stakeholder, profiles and specializations.",
        },
        "model-analysis-derivation": {
          label: "Analysis and derivation",
          description:
            "Derived relationships, impact analysis and model correctness.",
        },
        "archimate-in-adm": {
          label: "ArchiMate in the ADM",
          description: "Using ArchiMate in the phases of the TOGAF ADM.",
        },
      },
    },
  },

  courseMaterials: {
    "archimate-presentation": {
      label: "Course presentation",
      description: "ArchiMate 3.2 course slides (433 slides)",
    },
    "archimate-reference-cards": {
      label: "Reference cards",
      description: "Official reference cards of elements and relationships",
    },
    "archimate-student-guide": {
      label: "Student Guide",
      description: "Student guide with exercises for every chapter",
    },
  },

  categoryGroups: {
    "frontend-foundations": {
      label: "Frontend",
      description:
        "TypeScript, styling, state management and frontend testing.",
    },
    "react-ecosystem": {
      label: "React",
      description: "React, React Native and related Next.js topics.",
    },
    "angular-ecosystem": {
      label: "Angular",
      description: "The Angular platform and its specifics.",
    },
    "vue-ecosystem": {
      label: "Vue",
      description: "Vue.js and its reactive ecosystem.",
    },
    "backend-platform": {
      label: "Backend",
      description: "Node.js, API communication and backend fundamentals.",
    },
    "java-platform": {
      label: "Java",
      description: "Spring, Hibernate, build tools and concurrency.",
    },
    "data-messaging": {
      label: "Data & Messaging",
      description: "Databases, full-text search and messaging platforms.",
    },
    "infrastructure-devops": {
      label: "Infrastructure & DevOps",
      description: "Cloud, containers, delivery pipelines and operations.",
    },
    "security-quality": {
      label: "Security & Quality",
      description: "Security topics and code quality.",
    },
    other: {
      label: "Other",
      description: "Categories that are not yet part of a larger platform.",
    },
  },
};
