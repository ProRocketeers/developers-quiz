# Developers Quiz

Frontend běží na Astro + React islands a obsahuje i API pro odesílání výsledků testu emailem.

## Spuštění

- Instalace závislostí: `bun install`
- Dev server (frontend + API): `bun run dev` na `http://localhost:4322`
- Produkční build: `bun run build`
- Náhled produkčního buildu: `bun run preview` na `http://localhost:4322`
- Start produkčního serveru: `bun run start` na `http://localhost:4322`

## Konfigurace emailu (Mailgun)

Proměnné jsou popsány v `.env.example`.
Astro načítá `.env` automaticky pro dev i build.

Používané proměnné:
- `MAILGUN_API_KEY`
- `MAILGUN_DOMAIN`
- `MAILGUN_URL` (volitelné, např. EU endpoint)
- `MAILGUN_FROM_EMAIL` (pokud není nastaveno, použije se `postmaster@<MAILGUN_DOMAIN>`)

## Email API

- Endpoint: `POST /api/send-email`
- Validuje `to` a `name`, ostatní pole jsou volitelná (`score`, `total`, `passed`, `questions`, `answers`, `detailed`)

## Quiz otázky (Markdown ↔ JSON)

Zdroj pravdy pro otázky může být Markdown soubor `questions.md` v kořeni projektu. Převod na JSON (a zpět) zajišťuje skript `scripts/questions-convert.ts`.

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
bun run questions:to-json
bun run questions:to-md
```

Výchozí cesty lze přepsat parametry `--input` a `--output`.
