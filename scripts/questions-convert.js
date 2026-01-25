#!/usr/bin/env node
import fs from "node:fs";
import path from "node:path";

const args = process.argv.slice(2);
const parsedArgs = new Map();
let mode = null;

for (let i = 0; i < args.length; i += 1) {
  const arg = args[i];
  if (arg === "--to-json" || arg === "--to-md") {
    mode = arg;
    continue;
  }
  if (arg.startsWith("--")) {
    const key = arg.slice(2);
    const value = args[i + 1];
    if (!value || value.startsWith("--")) {
      throw new Error(`Missing value for --${key}`);
    }
    parsedArgs.set(key, value);
    i += 1;
  }
}

const resolvePath = (value, fallback) =>
  path.resolve(process.cwd(), value ?? fallback);

const inputPath = resolvePath(parsedArgs.get("input"), "questions.md");
const outputPath = resolvePath(
  parsedArgs.get("output"),
  mode === "--to-md" ? "questions.md" : "src/data/questions.json"
);

const ensureDir = (filePath) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const parseMarkdown = (content) => {
  const lines = content.split(/\r?\n/);
  const questions = [];
  let category = null;
  let currentQuestion = null;
  let options = [];
  let correctAnswer = null;

  const flushQuestion = () => {
    if (!currentQuestion) {
      return;
    }
    if (!category) {
      throw new Error(`Missing category for question "${currentQuestion}"`);
    }
    if (options.length < 2) {
      throw new Error(
        `Question "${currentQuestion}" must have at least 2 options.`
      );
    }
    if (correctAnswer === null) {
      throw new Error(
        `Question "${currentQuestion}" must mark exactly one correct answer.`
      );
    }
    questions.push({
      category,
      question: currentQuestion,
      options,
      correctAnswer,
    });
    currentQuestion = null;
    options = [];
    correctAnswer = null;
  };

  lines.forEach((line, index) => {
    const trimmed = line.trim();
    if (!trimmed) {
      return;
    }
    if (trimmed.startsWith("## ")) {
      flushQuestion();
      category = trimmed.slice(3).trim();
      return;
    }
    if (trimmed.startsWith("### ")) {
      flushQuestion();
      currentQuestion = trimmed.slice(4).trim();
      return;
    }

    const match = trimmed.match(/^[-*]\s+\[( |x|X)\]\s+(.*)$/);
    if (match) {
      if (!currentQuestion) {
        throw new Error(
          `Answer found before question at line ${index + 1}: "${line}"`
        );
      }
      const isCorrect = match[1].toLowerCase() === "x";
      if (isCorrect) {
        if (correctAnswer !== null) {
          throw new Error(
            `Multiple correct answers found for "${currentQuestion}".`
          );
        }
        correctAnswer = options.length;
      }
      options.push(match[2].trim());
      return;
    }

    throw new Error(
      `Unrecognized line ${index + 1}: "${line}". Expected ## category, ### question, or list item.`
    );
  });

  flushQuestion();
  return questions;
};

const toMarkdown = (questions) => {
  const groups = new Map();
  questions.forEach((q) => {
    if (!groups.has(q.category)) {
      groups.set(q.category, []);
    }
    groups.get(q.category).push(q);
  });

  const lines = ["# Quiz otázky"];
  for (const [categoryName, items] of groups) {
    lines.push("", `## ${categoryName}`);
    items.forEach((q) => {
      lines.push("", `### ${q.question}`);
      q.options.forEach((option, index) => {
        const marker = index === q.correctAnswer ? "x" : " ";
        lines.push(`- [${marker}] ${option}`);
      });
    });
  }
  return `${lines.join("\n")}\n`;
};

if (!mode) {
  throw new Error("Missing mode. Use --to-json or --to-md.");
}

if (mode === "--to-json") {
  const source = fs.readFileSync(inputPath, "utf8");
  const questions = parseMarkdown(source);
  ensureDir(outputPath);
  fs.writeFileSync(outputPath, `${JSON.stringify(questions, null, 2)}\n`);
  console.log(
    `Converted ${questions.length} questions from ${inputPath} to ${outputPath}.`
  );
} else if (mode === "--to-md") {
  const source = fs.readFileSync(inputPath, "utf8");
  const questions = JSON.parse(source);
  if (!Array.isArray(questions)) {
    throw new Error("Expected JSON array of questions.");
  }
  ensureDir(outputPath);
  fs.writeFileSync(outputPath, toMarkdown(questions));
  console.log(
    `Converted ${questions.length} questions from ${inputPath} to ${outputPath}.`
  );
} else {
  throw new Error(`Unknown mode: ${mode}`);
}
