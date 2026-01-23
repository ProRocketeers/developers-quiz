import { useState } from "react";
import { Badge, Form, ListGroup } from "react-bootstrap";

function CategoryList({
  categories,
  onSelectionChange,
  multiSelect = false,
  value,
}) {
  const selected = value ?? "";

  const handleToggle = (categoryName) => {
    const newSelected = selected.includes(categoryName)
      ? selected.filter((name) => name !== categoryName)
      : [...selected, categoryName];

    onSelectionChange?.(newSelected);
  };

  const handleSelectChange = (e) => {
    const value = e.target.value || null;
    console.log(value);
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
    <ListGroup>
      {categories?.map((category) => (
        <ListGroup.Item
          key={category.name}
          className="d-flex justify-content-between align-items-center"
          action
          onClick={() => handleToggle(category.name)}
        >
          <Form.Check
            type="checkbox"
            checked={selected.includes(category.name)}
            onChange={() => handleToggle(category.name)}
            label={category.name}
            onClick={(e) => e.stopPropagation()}
          />
          <Badge bg="secondary" pill>
            {category.count}
          </Badge>
        </ListGroup.Item>
      ))}
    </ListGroup>
  );
}

export default CategoryList;
