import type { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import "./CategoryList.css";

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
  const selected = value ?? (multiSelect ? [] : "");
  const selectedList = Array.isArray(selected) ? selected : [];

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
      {categories?.map((category) => {
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
              <span className="category-meta">{category.count} otázek</span>
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
  );
}

export default CategoryList;
