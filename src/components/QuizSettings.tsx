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
  const [errors, setErrors] = useState({ name: "", email: "" });
  const categoryQuestionCounts = settings.categoryQuestionCounts ?? {};

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

    onValidationChange?.(hasError || notFilled);
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

    const setters = { name: setInputName, email: setInputEmail };
    setters[field](val);
    updateSettings({ [field]: val });

    onValidationChange?.(hasError || notFilled);
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
          </div>
        )}

        <div className="row">
          <div className="col">
            <label className="field-label">Kategorie</label>
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
