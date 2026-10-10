export interface CzechPluralForms {
  one: string;
  few: string;
  other: string;
}

const czechPluralRules = new Intl.PluralRules("cs-CZ");

export function pluralizeCs(count: number, forms: CzechPluralForms): string {
  switch (czechPluralRules.select(count)) {
    case "one":
      return `${count} ${forms.one}`;
    case "few":
      return `${count} ${forms.few}`;
    default:
      return `${count} ${forms.other}`;
  }
}

export const QUESTION_FORMS: CzechPluralForms = {
  one: "otázka",
  few: "otázky",
  other: "otázek",
};

export const POINT_FORMS: CzechPluralForms = {
  one: "bod",
  few: "body",
  other: "bodů",
};

export const TOPIC_FORMS: CzechPluralForms = {
  one: "okruh",
  few: "okruhy",
  other: "okruhů",
};
