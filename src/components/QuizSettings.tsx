import { useState, useMemo, useEffect, useCallback } from "react";
import type { KeyboardEvent } from "react";
import { getCategoriesWithCount } from "../services/questionService";
import { useQuizSettings } from "../context/QuizContext";
import "./QuizSettings.css";
import CategoryList from "./CategoryList";
import { MAX_TOTAL_QUESTIONS, FIELD_NAME, FIELD_EMAIL } from "../constants/quiz";
import { useI18n } from "../i18n/I18nContext";

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
  const { t, lang } = useI18n();
  const [inputMaxQuestions, setInputMaxQuestions] = useState(settings.questionCount);
  const [inputEmail, setInputEmail] = useState(settings.email);
  const [inputName, setInputName] = useState(settings.name);
  const [consentGiven, setConsentGiven] = useState(settings.consentToEmailResults ?? false);
  const [errors, setErrors] = useState({ name: "", email: "", totalQuestions: "" });
  const categoryQuestionCounts = settings.categoryQuestionCounts ?? {};
  const [bulkCount, setBulkCount] = useState<number | "">("");
  const [lastManualSelection, setLastManualSelection] = useState<string[]>(
    settings.selectedCategories,
  );
  const [selectAllActive, setSelectAllActive] = useState(false);

  const categories = useMemo(
    () => getCategoriesWithCount(lang, settings.useMock),
    [lang, settings.useMock],
  );

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
  const resolvedMaxSelectedCount = Number.isFinite(maxSelectedCount) ? maxSelectedCount : 0;

  useEffect(() => {
    if (settings.multiSelect && !selectAllActive) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setLastManualSelection(settings.selectedCategories);
    }
  }, [settings.multiSelect, settings.selectedCategories, selectAllActive]);

  const validateEmail = useCallback(
    (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email),
    [],
  );

const validateField = useCallback(
  (field: string, val: string) => {
    if (!val) return t("validation.required");
    if (field === "name" && val.length < 2) return t("validation.min2");
    if (field === "email" && !validateEmail(val)) return t("validation.invalidEmail");
    return "";
  },
  [validateEmail, t],
);

const validateTotalQuestions = useCallback(
  (count: number) => {
    if (count > MAX_TOTAL_QUESTIONS) {
      return t("validation.maxQuestions", { max: MAX_TOTAL_QUESTIONS });
    }
    return "";
  },
  [t],
);

  const totalQuestions = settings.multiSelect
    ? settings.selectedCategories.reduce(
        (sum, category) => sum + (categoryQuestionCounts[category] ?? 0),
        0,
      )
    : inputMaxQuestions;

  useEffect(() => {
    if (!showNamePrompt) return;
    const nameError = showNamePrompt ? validateField(FIELD_NAME, inputName) : "";
    const emailError = showNamePrompt ? validateField(FIELD_EMAIL, inputEmail) : "";
    const totalQuestionsError = validateTotalQuestions(totalQuestions);

    setErrors((prev) => ({
      ...prev,
      name: nameError,
      email: emailError,
      totalQuestions: totalQuestionsError,
    }));

    const hasError = !!nameError || !!emailError || !!totalQuestionsError;
    const notFilled = showNamePrompt ? !inputName || !inputEmail : false;
    const consentMissing = showNamePrompt ? !consentGiven : false;
    const countZeroOrLower = totalQuestions <= 0;

    onValidationChange?.(hasError || notFilled || consentMissing || countZeroOrLower);
  }, [
    showNamePrompt,
    inputName,
    inputEmail,
    consentGiven,
    totalQuestions,
    onValidationChange,
    validateField,
    validateTotalQuestions,
  ]);

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

  const handleInput = (field: typeof FIELD_NAME | typeof FIELD_EMAIL, val: string) => {
    const newError = validateField(field, val);
    const newErrors = { ...errors, [field]: newError };
    setErrors(newErrors);

    const setters = { name: setInputName, email: setInputEmail };
    setters[field](val);

    updateSettings({ [field]: val });
    // validation is handled by the useEffect now
  };

  const handleConsentChange = (checked: boolean) => {
    setConsentGiven(checked);
    updateSettings({ consentToEmailResults: checked });
    // validation is handled by the useEffect now
  };

  const handleCategorySelection = (selected: string | string[]) => {
    if (Array.isArray(selected)) {
      const nextCounts = { ...categoryQuestionCounts };

      selected.forEach((category) => {
        if (nextCounts[category] == null) nextCounts[category] = 1;
      });

      Object.keys(nextCounts).forEach((category) => {
        if (!selected.includes(category)) delete nextCounts[category];
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
    // validation is handled by the useEffect now
  };

  const handleSelectAllToggle = (checked: boolean) => {
    if (!settings.multiSelect) return;

    if (checked) {
      setSelectAllActive(true);
      setLastManualSelection(settings.selectedCategories);
      const allNames = categories.map((category) => category.name);
      const nextCounts = { ...categoryQuestionCounts };
      allNames.forEach((category) => {
        if (nextCounts[category] == null) nextCounts[category] = 1;
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
        if (!restored.includes(category)) delete nextCounts[category];
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
    // validation is handled by the useEffect now
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
    // validation is handled by the useEffect now
  };

  return (
    <div className="quiz-settings">
      <div className="container">
        {showNamePrompt && (
          <div className="row">
            <div className="col">
              <label className="field-label">
                {t("field.name")}
                <input
                  type="text"
                  value={inputName}
                  onChange={(e) => handleInput(FIELD_NAME, e.target.value)}
                  className="form-control"
                  placeholder={t("placeholder.name")}
                />
                {errors.name && <span className="text-danger small">{errors.name}</span>}
              </label>
            </div>

            <div className="col">
              <label className="field-label">
                {t("field.email")}
                <input
                  type="email"
                  value={inputEmail}
                  onChange={(e) => handleInput(FIELD_EMAIL, e.target.value)}
                  className="form-control"
                  placeholder={t("placeholder.email")}
                />
                {errors.email && <span className="text-danger small">{errors.email}</span>}
              </label>
            </div>

            <div className="col-12">
              <label className="consent-label">
                <input
                  type="checkbox"
                  checked={consentGiven}
                  onChange={(e) => handleConsentChange(e.target.checked)}
                />
                {t("consent.text")}
              </label>
            </div>
          </div>
        )}

        <div className="row">
          <div className="col">
            <div className="category-header">
              <label className="field-label">{t("field.category")}</label>
              {settings.multiSelect && (
                <label className="select-all-toggle">
                  <input
                    type="checkbox"
                    checked={allSelected}
                    onChange={(e) => handleSelectAllToggle(e.target.checked)}
                  />
                  {t("selectAll")}
                </label>
              )}
            </div>

            {settings.multiSelect && (
              <div className="bulk-control">
                <label className="bulk-label" htmlFor="bulk-count-input">
                  {t("bulk.setCount")}
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
                    {t("bulk.selected", { count: settings.selectedCategories.length })}
                  </span>
                </div>
                <span className="bulk-hint">{t("bulk.hint")}</span>
              </div>
            )}

            <CategoryList
              categories={categories}
              onSelectionChange={handleCategorySelection}
              multiSelect={settings.multiSelect}
              value={settings.multiSelect ? settings.selectedCategories : settings.category}
              categoryQuestionCounts={categoryQuestionCounts}
              onCountChange={handleCategoryCountChange}
            />

            {settings.multiSelect && (
              <div className="category-total">
                {t("totalQuestions", { count: totalQuestions })} <strong />
                {errors.totalQuestions && (
                  <div>
                    <span className="text-danger small">{errors.totalQuestions}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {!settings.multiSelect && (
            <div className="col">
              <label className="field-label">
                {t("settings.questionCountLabel")}
                <input
                  type="number"
                  value={inputMaxQuestions}
                  onChange={(e) => handleInputMaxQuestions(Number(e.target.value))}
                  onKeyDown={handleMaxQuestionsKeyDown}
                  min={1}
                  max={MAX_TOTAL_QUESTIONS}
                  className="form-control"
                />
                {errors.totalQuestions && (
                  <span className="text-danger small">{errors.totalQuestions}</span>
                )}
              </label>
            </div>
          )}
        </div>

        <div className="row">
          <div className="col">
            {showRefresh && (
              <button className="btn btn-success" onClick={handleRefresh}>
                {t("refresh")}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizSettings;