import type { Lang } from "../i18n/translations";
import { translations, type TranslationKey } from "../i18n/translations";

export type CategoryWithCount = {
  name: string;
  count: number;
};

export type CategoryGroup = {
  id: string;
  labelKey: TranslationKey;
  descriptionKey: TranslationKey;
  categories: CategoryWithCount[];
};

type GroupDefinition = Omit<CategoryGroup, "categories"> & {
  matcherKeys: TranslationKey[]; // translated category names used for matching
};

const GROUP_DEFINITIONS: GroupDefinition[] = [
  {
    id: "frontend-foundations",
    labelKey: "groups.frontend.label",
    descriptionKey: "groups.frontend.description",
    matcherKeys: [
      "cat.cssStyling",
      "cat.frontendTesting",
      "cat.stateManagement",
      "cat.typescript",
    ],
  },
  {
    id: "react-ecosystem",
    labelKey: "groups.react.label",
    descriptionKey: "groups.react.description",
    matcherKeys: ["cat.reactJs", "cat.reactNative", "cat.nextJs"],
  },
  {
    id: "angular-ecosystem",
    labelKey: "groups.angular.label",
    descriptionKey: "groups.angular.description",
    matcherKeys: ["cat.angular"],
  },
  {
    id: "vue-ecosystem",
    labelKey: "groups.vue.label",
    descriptionKey: "groups.vue.description",
    matcherKeys: ["cat.vueJs"],
  },
  {
    id: "backend-platform",
    labelKey: "groups.backend.label",
    descriptionKey: "groups.backend.description",
    matcherKeys: [
      "cat.api",
      "cat.asyncCommunication",
      "cat.authJwt",
      "cat.http",
      "cat.microservices",
      "cat.nodeJs",
      "cat.dotnet",
    ],
  },
  {
    id: "java-platform",
    labelKey: "groups.java.label",
    descriptionKey: "groups.java.description",
    matcherKeys: [
      "cat.hibernate",
      "cat.javaxConcurrent",
      "cat.mavenGradle",
      "cat.springBoot",
      "cat.springCore",
      "cat.testingJunitSpock",
    ],
  },
  {
    id: "data-messaging",
    labelKey: "groups.dataMessaging.label",
    descriptionKey: "groups.dataMessaging.description",
    matcherKeys: [
      "cat.elasticsearch",
      "cat.kafka",
      "cat.rabbitmq",
      "cat.relationalDatabases",
      "cat.sql",
    ],
  },
  {
    id: "infrastructure-devops",
    labelKey: "groups.infrastructureDevops.label",
    descriptionKey: "groups.infrastructureDevops.description",
    matcherKeys: [
      "cat.aws",
      "cat.continuousDelivery",
      "cat.docker",
      "cat.flywayLiquibase",
      "cat.gitGithub",
      "cat.kubernetes",
      "cat.productionIncidents",
    ],
  },
  {
    id: "security-quality",
    labelKey: "groups.securityQuality.label",
    descriptionKey: "groups.securityQuality.description",
    matcherKeys: ["cat.cleanCode", "cat.cryptography", "cat.owasp"],
  },
];

const FALLBACK_GROUP: Omit<CategoryGroup, "categories"> = {
  id: "other",
  labelKey: "groups.other.label",
  descriptionKey: "groups.other.description",
};

function tr(lang: Lang, key: TranslationKey): string {
  return translations[lang][key] ?? translations.cs[key] ?? String(key);
}

export function groupCategories(lang: Lang, categories: CategoryWithCount[]): CategoryGroup[] {
  const grouped = new Map<string, CategoryGroup>();
  const assigned = new Set<string>();

  GROUP_DEFINITIONS.forEach((definition) => {
    const matchers = definition.matcherKeys.map((k) => tr(lang, k));

    const matchingCategories = matchers
      .map((categoryName) =>
        categories.find((category) => category.name === categoryName),
      )
      .filter((category): category is CategoryWithCount => Boolean(category));

    matchingCategories.forEach((category) => assigned.add(category.name));

    if (matchingCategories.length > 0) {
      grouped.set(definition.id, {
        id: definition.id,
        labelKey: definition.labelKey,
        descriptionKey: definition.descriptionKey,
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