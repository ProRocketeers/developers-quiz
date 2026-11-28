export interface PluralForms {
  one: string;
  /** Used by languages with a paucal form (Czech 2–4); others fall back to `other`. */
  few?: string;
  other: string;
}

export type Pluralizer = (count: number, forms: PluralForms) => string;

export function createPluralizer(intlLocaleTag: string): Pluralizer {
  const pluralRules = new Intl.PluralRules(intlLocaleTag);

  return (count, forms) => {
    switch (pluralRules.select(count)) {
      case "one":
        return `${count} ${forms.one}`;
      case "few":
        return `${count} ${forms.few ?? forms.other}`;
      default:
        return `${count} ${forms.other}`;
    }
  };
}
