export type CategoryWithCount = {
  name: string;
  count: number;
};

export type CategoryGroup = {
  id: string;
  label: string;
  description: string;
  categories: CategoryWithCount[];
};

type GroupDefinition = Omit<CategoryGroup, "categories"> & {
  matchers: string[];
};

const GROUP_DEFINITIONS: GroupDefinition[] = [
  {
    id: "frontend-foundations",
    label: "Frontend",
    description: "TypeScript, styling, state management a frontend testing.",
    matchers: [
      "CSS / Styling",
      "Frontend Testing",
      "State Management",
      "TypeScript",
    ],
  },
  {
    id: "react-ecosystem",
    label: "React",
    description: "React, React Native a související okruhy kolem Next.js.",
    matchers: ["React.js", "React Native", "Next.js"],
  },
  {
    id: "angular-ecosystem",
    label: "Angular",
    description: "Angular platforma a její specifika.",
    matchers: ["Angular"],
  },
  {
    id: "vue-ecosystem",
    label: "Vue",
    description: "Vue.js a jeho reaktivní ekosystém.",
    matchers: ["Vue.js"],
  },
  {
    id: "backend-platform",
    label: "Backend",
    description: "Node.js, API komunikace a backendové základy.",
    matchers: [
      "API",
      "Asynchronous Communication",
      "Authentication / Authorization / JWT",
      "HTTP(s)",
      "Microservice Architecture",
      "Node.js",
      ".NET",
    ],
  },
  {
    id: "java-platform",
    label: "Java",
    description: "Spring, Hibernate, build nástroje a concurrency.",
    matchers: [
      "Hibernate",
      "javax.concurrent",
      "Maven / Gradle",
      "Spring Boot",
      "Spring Core",
      "Testing (JUnit, Spock)",
    ],
  },
  {
    id: "data-messaging",
    label: "Data & Messaging",
    description: "Databáze, fulltext a messaging platformy.",
    matchers: [
      "ElasticSearch",
      "Kafka",
      "RabbitMQ",
      "Relational Databases",
      "SQL",
    ],
  },
  {
    id: "infrastructure-devops",
    label: "Infrastructure & DevOps",
    description: "Cloud, kontejnery, delivery pipeline a provoz.",
    matchers: [
      "AWS",
      "Continuous Delivery",
      "Docker",
      "Flyway/Liquibase",
      "Git/GitHub",
      "Kubernetes",
      "Production Incidents",
    ],
  },
  {
    id: "security-quality",
    label: "Security & Quality",
    description: "Bezpečnostní témata a kvalita kódu.",
    matchers: ["Clean Code", "Cryptography", "OWASP"],
  },
];

const FALLBACK_GROUP: Omit<CategoryGroup, "categories"> = {
  id: "other",
  label: "Ostatní",
  description: "Kategorie, které zatím nejsou zařazené do větší platformy.",
};

export function groupCategories(
  categories: CategoryWithCount[],
): CategoryGroup[] {
  const grouped = new Map<string, CategoryGroup>();
  const assigned = new Set<string>();

  GROUP_DEFINITIONS.forEach((definition) => {
    const matchingCategories = definition.matchers
      .map((categoryName) =>
        categories.find((category) => category.name === categoryName),
      )
      .filter((category): category is CategoryWithCount => Boolean(category));

    matchingCategories.forEach((category) => assigned.add(category.name));

    if (matchingCategories.length > 0) {
      grouped.set(definition.id, {
        id: definition.id,
        label: definition.label,
        description: definition.description,
        categories: matchingCategories,
      });
    }
  });

  const unassigned = categories.filter((category) => !assigned.has(category.name));
  if (unassigned.length > 0) {
    grouped.set(FALLBACK_GROUP.id, {
      ...FALLBACK_GROUP,
      categories: unassigned,
    });
  }

  return [...grouped.values()];
}
