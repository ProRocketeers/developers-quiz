export type CheatSheetLanguage = "cs" | "en";

export const DEFAULT_CHEAT_SHEET_LANGUAGE: CheatSheetLanguage = "cs";

export const CHEAT_SHEET_LANGUAGE_QUERY_PARAM = "lang";

export const CHEAT_SHEET_LANGUAGES: CheatSheetLanguage[] = ["cs", "en"];

export const CHEAT_SHEET_LANGUAGE_LABELS: Record<CheatSheetLanguage, string> = {
  cs: "Česky",
  en: "Anglicky",
};

export function isCheatSheetLanguage(
  value: string | null,
): value is CheatSheetLanguage {
  return value === "cs" || value === "en";
}
