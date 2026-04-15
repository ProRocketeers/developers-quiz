import { useEffect, useMemo, useState } from "react";
import type { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { groupCategories } from "../utils/categoryGroups";
import "./CategoryList.css";
import { useI18n } from "../i18n/I18nContext";

type Category = {
  name: string;
  count: number;
};

type CategoryListProps = {
  categories?: Category[];
  onSelectionChange?: (value: string | string[] | null) => void;
  multiSelect?: boolean;
  value?: string | string[] | null;
  categoryQuestionCounts?: Record<string, number>;
  onCountChange?: (category: string, value: number) => void;
};

function CategoryList({
  categories,
  onSelectionChange,
  multiSelect = false,
  value,
  categoryQuestionCounts = {},
  onCountChange,
}: CategoryListProps) {
  const { t, lang } = useI18n();  
  const selected = value ?? (multiSelect ? [] : "");
  const selectedList = Array.isArray(selected) ? selected : [];
  const groupedCategories = useMemo(
    () => groupCategories(lang, categories ?? []), // <-- pass lang
    [lang, categories],                            // <-- include lang in deps
  );

  const [expandedGroups, setExpandedGroups] = useState<Record<string, boolean>>(
    {},
  );

  useEffect(() => {
    if (!multiSelect || groupedCategories.length === 0) return;

    setExpandedGroups((prev) => {
      const nextState = { ...prev };
      let hasChanges = false;

      groupedCategories.forEach((group, index) => {
        if (nextState[group.id] != null) {
          return;
        }

        const shouldExpand =
          index === 0 ||
          group.categories.some((category) => selectedList.includes(category.name));
        nextState[group.id] = shouldExpand;
        hasChanges = true;
      });

      return hasChanges ? nextState : prev;
    });
  }, [groupedCategories, multiSelect, selectedList]);

  const handleToggle = (categoryName: string) => {
    const newSelected = selectedList.includes(categoryName)
      ? selectedList.filter((name) => name !== categoryName)
      : [...selectedList, categoryName];

    onSelectionChange?.(newSelected);
  };

  const handleCountChange = (
    categoryName: string,
    val: string,
    maxCount: number,
  ) => {
    const parsed = Number(val);
    if (Number.isNaN(parsed)) return;
    const sanitized = Math.max(0, Math.min(parsed, maxCount));
    onCountChange?.(categoryName, sanitized);
  };

  const handleSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value || null;
    onSelectionChange?.(value);
  };

  const handleGroupToggle = (groupId: string) => {
    setExpandedGroups((prev) => ({
      ...prev,
      [groupId]: !prev[groupId],
    }));
  };

  const handleGroupSelectionToggle = (
    categoryNames: string[],
    shouldSelect: boolean,
  ) => {
    if (!multiSelect) return;

    const nextSelected = shouldSelect
      ? [...new Set([...selectedList, ...categoryNames])]
      : selectedList.filter((name) => !categoryNames.includes(name));

    onSelectionChange?.(nextSelected);
  };

  if (!multiSelect) {
    return (
      <Form.Select value={selected} onChange={handleSelectChange}>
        <option value="">All categories</option>
        {categories?.map((category) => (
          <option key={category.name} value={category.name}>
            {category.name} ({category.count})
          </option>
        ))}
      </Form.Select>
    );
  }

  return (
    <div className="category-list">
      {groupedCategories.map((group) => {
        const groupNames = group.categories.map((category) => category.name);
        const selectedInGroup = groupNames.filter((name) =>
          selectedList.includes(name),
        ).length;
        const allInGroupSelected =
          groupNames.length > 0 && selectedInGroup === groupNames.length;
        const isExpanded = expandedGroups[group.id] ?? false;

        return (
          <section key={group.id} className="category-group">
            <div className="category-group-header">
              <button
                type="button"
                className="category-group-toggle"
                onClick={() => handleGroupToggle(group.id)}
                aria-expanded={isExpanded}
              >
                <span className="category-group-title-wrap">
                  <span className="category-group-title">{t(group.labelKey)}</span>
                  <span className="category-group-description">
                    {t(group.descriptionKey)}
                  </span>
                </span>
                <span className="category-group-controls">
                  <span className="category-group-summary">
                    {selectedInGroup}/{group.categories.length}
                  </span>
                  <span className="category-group-chevron" aria-hidden="true">
                    {isExpanded ? "-" : "+"}
                  </span>
                </span>
              </button>

              <button
                type="button"
                className="category-group-select"
                onClick={() =>
                  handleGroupSelectionToggle(groupNames, !allInGroupSelected)
                }
              >
                {allInGroupSelected ? "Odebrat vše" : "Vybrat vše"}
              </button>
            </div>

            {isExpanded && (
              <div className="category-group-items">
                {group.categories.map((category) => {
                  const isSelected = selectedList.includes(category.name);
                  const countValue = categoryQuestionCounts[category.name] ?? 0;

                  return (
                    <div
                      key={category.name}
                      className={`category-item ${isSelected ? "selected" : ""}`}
                    >
                      <label className="category-info">
                        <input
                          type="checkbox"
                          checked={isSelected}
                          onChange={() => handleToggle(category.name)}
                        />
                        <span className="category-name">{category.name}</span>
                        <span className="category-meta">
                          {category.count} otázek
                        </span>
                      </label>
                      <div className="category-count">
                        <span>Počet</span>
                        <input
                          type="number"
                          min={0}
                          max={category.count}
                          value={countValue}
                          disabled={!isSelected}
                          onChange={(e) =>
                            handleCountChange(
                              category.name,
                              e.target.value,
                              category.count,
                            )
                          }
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
          </section>
        );
      })}
    </div>
  );
}

export default CategoryList;
