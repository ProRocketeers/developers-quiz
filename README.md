# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

## Quiz otázky (Markdown ↔ JSON)

Zdroj pravdy pro otázky může být Markdown soubor `questions.md` v kořeni projektu. Převod na JSON (a zpět) zajišťuje skript `scripts/questions-convert.js`.

### Formát `questions.md`

Použijte strukturu s kategoriemi (H2), otázkami (H3) a odpověďmi jako seznam s checkboxy:

```md
## Docker

### Co je Docker a k čemu se používá?
- [x] Docker je platforma pro vytváření, distribuci a spouštění kontejnerizovaných aplikací.
- [ ] Docker je programovací jazyk pro webové aplikace.
- [ ] Docker je databázový systém.
```

Právě jeden checkbox musí být označený jako správná odpověď (`[x]`).

### Příkazy

```bash
npm run questions:to-json
npm run questions:to-md
```

Výchozí cesty lze přepsat parametry `--input` a `--output`.
