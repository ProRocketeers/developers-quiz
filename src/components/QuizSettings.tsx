import { useState, useMemo, useEffect } from "react";
import type { KeyboardEvent } from "react";
import { getCategoriesWithCount } from "../services/questionService";
import { useQuizSettings } from "../context/QuizContext";
import "./QuizSettings.css";
import CategoryList from "./CategoryList";

interface Props {
  showRefresh?: boolean;
  onRefresh?: () => void;
  showNamePrompt?: boolean;
  onValidationChange?: (hasError: boolean) => void;
}

function QuizSettings({
  showRefresh = false,
  onRefresh,
  showNamePrompt = false,
  onValidationChange,
}: Props) {
  const { settings, updateSettings } = useQuizSettings();
  const categories = useMemo(
    () => getCategoriesWithCount(settings.useMock),
    [settings.useMock],
  );
  const [inputMaxQuestions, setInputMaxQuestions] = useState(
    settings.questionCount,
  );
  const [inputEmail, setInputEmail] = useState(settings.email);
  const [inputName, setInputName] = useState(settings.name);
  const [consentGiven, setConsentGiven] = useState(
    settings.consentToEmailResults ?? false,
  );
  const [errors, setErrors] = useState({ name: "", email: "" });
  const categoryQuestionCounts = settings.categoryQuestionCounts ?? {};
  const [bulkCount, setBulkCount] = useState<number | "">("");
  const [lastManualSelection, setLastManualSelection] = useState<string[]>(
    settings.selectedCategories,
  );
  const [selectAllActive, setSelectAllActive] = useState(false);

  const categoryCountMap = useMemo(() => {
    const map: Record<string, number> = {};
    categories.forEach((category) => {
      map[category.name] = category.count;
    });
    return map;
  }, [categories]);

  const allSelected =
    settings.multiSelect &&
    categories.length > 0 &&
    settings.selectedCategories.length === categories.length;
  const maxSelectedCount = settings.selectedCategories.reduce(
    (min, category) => Math.min(min, categoryCountMap[category] ?? 0),
    Number.POSITIVE_INFINITY,
  );
  const resolvedMaxSelectedCount = Number.isFinite(maxSelectedCount)
    ? maxSelectedCount
    : 0;

  useEffect(() => {
    if (settings.multiSelect && !selectAllActive) {
      setLastManualSelection(settings.selectedCategories);
    }
  }, [settings.multiSelect, settings.selectedCategories, selectAllActive]);

  const validateEmail = (email: string) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateField = (field: string, val: string) => {
    if (!val) return "Povinné pole";
    if (field === "name" && val.length < 2) return "Min. 2 znaky";
    if (field === "email" && !validateEmail(val)) return "Neplatný email";
    return "";
  };

  useEffect(() => {
    if (!showNamePrompt) return;

    const nameError = validateField("name", settings.name);
    const emailError = validateField("email", settings.email);
    const hasError = !!nameError || !!emailError;
    const notFilled = !settings.name || !settings.email;
    const consentMissing = !settings.consentToEmailResults;

    onValidationChange?.(hasError || notFilled || consentMissing);
  }, []);

  const handleMaxQuestionsKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      updateSettings({ questionCount: inputMaxQuestions });
    }
  };

  const handleInputMaxQuestions = (val: number) => {
    setInputMaxQuestions(val);
    updateSettings({ questionCount: val });
  };

  const handleRefresh = () => {
    updateSettings({ questionCount: inputMaxQuestions });
    if (onRefresh) onRefresh();
  };

  const handleInput = (field: "name" | "email", val: string) => {
    if (field !== "name" && field !== "email") return;

    const newError = validateField(field, val);
    const newErrors = { ...errors, [field]: newError };
    setErrors(newErrors);
    const hasError = !!newErrors.name || !!newErrors.email;
    const currentName = field === "name" ? val : inputName;
    const currentEmail = field === "email" ? val : inputEmail;
    const notFilled = !currentName || !currentEmail;
    const consentMissing = !consentGiven;

    const setters = { name: setInputName, email: setInputEmail };
    setters[field](val);
    updateSettings({ [field]: val });

    onValidationChange?.(hasError || notFilled || consentMissing);
  };

  const handleConsentChange = (checked: boolean) => {
    setConsentGiven(checked);
    updateSettings({ consentToEmailResults: checked });

    if (!showNamePrompt) return;

    const nameError = validateField("name", inputName);
    const emailError = validateField("email", inputEmail);
    const hasError = !!nameError || !!emailError;
    const notFilled = !inputName || !inputEmail;
    const consentMissing = !checked;

    onValidationChange?.(hasError || notFilled || consentMissing);
  };

  const handleCategorySelection = (selected: string | string[]) => {
    if (Array.isArray(selected)) {
      const nextCounts = { ...categoryQuestionCounts };
      selected.forEach((category) => {
        if (nextCounts[category] == null) {
          nextCounts[category] = 1;
        }
      });
      Object.keys(nextCounts).forEach((category) => {
        if (!selected.includes(category)) {
          delete nextCounts[category];
        }
      });
      const total = selected.reduce(
        (sum, category) => sum + (nextCounts[category] ?? 0),
        0,
      );
      updateSettings({
        selectedCategories: selected,
        categoryQuestionCounts: nextCounts,
        questionCount: total,
      });
    } else {
      updateSettings({ category: selected });
    }
  };

  const handleSelectAllToggle = (checked: boolean) => {
    if (!settings.multiSelect) return;

    if (checked) {
      setSelectAllActive(true);
      setLastManualSelection(settings.selectedCategories);
      const allNames = categories.map((category) => category.name);
      const nextCounts = { ...categoryQuestionCounts };
      allNames.forEach((category) => {
        if (nextCounts[category] == null) {
          nextCounts[category] = 1;
        }
      });
      const total = allNames.reduce(
        (sum, category) => sum + (nextCounts[category] ?? 0),
        0,
      );
      updateSettings({
        selectedCategories: allNames,
        categoryQuestionCounts: nextCounts,
        questionCount: total,
      });
    } else {
      setSelectAllActive(false);
      const restored = lastManualSelection;
      const nextCounts = { ...categoryQuestionCounts };
      Object.keys(nextCounts).forEach((category) => {
        if (!restored.includes(category)) {
          delete nextCounts[category];
        }
      });
      const total = restored.reduce(
        (sum, category) => sum + (nextCounts[category] ?? 0),
        0,
      );
      updateSettings({
        selectedCategories: restored,
        categoryQuestionCounts: nextCounts,
        questionCount: total,
      });
    }
  };

  const handleBulkCountChange = (val: number) => {
    const sanitized = Math.max(0, Math.floor(val));
    setBulkCount(sanitized);

    const nextCounts = { ...categoryQuestionCounts };
    settings.selectedCategories.forEach((category) => {
      const max = categoryCountMap[category] ?? 0;
      nextCounts[category] = Math.min(sanitized, max);
    });
    const total = settings.selectedCategories.reduce(
      (sum, category) => sum + (nextCounts[category] ?? 0),
      0,
    );
    updateSettings({
      categoryQuestionCounts: nextCounts,
      questionCount: total,
    });
  };

  const handleBulkInput = (val: string) => {
    if (val === "") {
      setBulkCount("");
      return;
    }
    const parsed = Number(val);
    if (Number.isNaN(parsed)) return;
    handleBulkCountChange(parsed);
  };

  const handleCategoryCountChange = (category: string, val: number) => {
    const sanitized = Math.max(0, Math.floor(val));
    const nextCounts = {
      ...categoryQuestionCounts,
      [category]: sanitized,
    };
    const total = settings.selectedCategories.reduce(
      (sum, categoryName) => sum + (nextCounts[categoryName] ?? 0),
      0,
    );
    updateSettings({
      categoryQuestionCounts: nextCounts,
      questionCount: total,
    });
  };

  const totalQuestions = settings.multiSelect
    ? settings.selectedCategories.reduce(
        (sum, category) => sum + (categoryQuestionCounts[category] ?? 0),
        0,
      )
    : inputMaxQuestions;

  return (
    <div className="quiz-settings">
      <div className="container">
        {showNamePrompt && (
          <div className="row">
            <div className="col">
              <label className="field-label">
                Jméno
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => handleInput("name", e.target.value)}
                  className="form-control"
                  placeholder="Např. Jana Nováková"
                />
                {errors.name && (
                  <span className="text-danger small">{errors.name}</span>
                )}
              </label>
            </div>
            <div className="col">
              <label className="field-label">
                Email
                <input
                  type="email"
                  value={inputEmail}
                  onChange={(e) => handleInput("email", e.target.value)}
                  className="form-control"
                  placeholder="jmeno@firma.cz"
                />
                {errors.email && (
                  <span className="text-danger small">{errors.email}</span>
                )}
              </label>
            </div>
            <div className="col-12">
              <label className="consent-label">
                <input
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(e) => handleConsentChange(e.target.checked)}
                />
                Souhlasím se zpracováním osobních údajů pouze za účelem
                odeslání emailu s výsledky.
              </label>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col">
            <div className="category-header">
              <label className="field-label">Kategorie</label>
              {settings.multiSelect && (
                <label className="select-all-toggle">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => handleSelectAllToggle(e.target.checked)}
                  />
                  Vybrat všechny
                </label>
              )}
            </div>
            {settings.multiSelect && (
              <div className="bulk-control">
                <label className="bulk-label" htmlFor="bulk-count-input">
                  Nastavit počet otázek pro vybrané
                </label>
                <div className="bulk-input-row">
                  <input
                    id="bulk-count-input"
                    type="number"
                    min={0}
                    max={resolvedMaxSelectedCount}
                    value={bulkCount}
                    disabled={settings.selectedCategories.length === 0}
                    onChange={(e) => handleBulkInput(e.target.value)}
                  />
                  <span className="bulk-badge">
                    Vybráno: {settings.selectedCategories.length}
                  </span>
                </div>
                <span className="bulk-hint">
                  Zadaná hodnota přepíše počty u všech vybraných kategorií.
                </span>
              </div>
            )}
            <CategoryList
              categories={categories}
              onSelectionChange={handleCategorySelection}
              multiSelect={settings.multiSelect}
              value={
                settings.multiSelect
                  ? settings.selectedCategories
                  : settings.category
              }
              categoryQuestionCounts={categoryQuestionCounts}
              onCountChange={handleCategoryCountChange}
            />
            {settings.multiSelect && (
              <div className="category-total">
                Celkem otázek: <strong>{totalQuestions}</strong>
              </div>
            )}
          </div>

          {!settings.multiSelect && (
            <div className="col">
              <label className="field-label">
                Počet otázek
                <input
                  type="number"
                  value={inputMaxQuestions}
                  onChange={(e) =>
                    handleInputMaxQuestions(Number(e.target.value))
                  }
                  onKeyDown={handleMaxQuestionsKeyDown}
                  min={1}
                  className="form-control"
                />
              </label>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col">
            {showRefresh && (
              <button className="btn btn-success" onClick={handleRefresh}>
                Refresh
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSettings;
