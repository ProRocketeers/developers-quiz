# Developers Quiz

Frontend (React + Vite) a jednoduché API pro odesílání výsledků testu emailem.

## Spuštění

- Dev server (frontend + API v `server/index.js`): `npm run dev`
- Samostatné email API (Next.js): `npm --prefix email-api run dev`

## Konfigurace emailu (Mailgun)

Proměnné jsou popsány v `.env.example`. Nastav je v prostředí, případně pro `email-api` použij lokální soubor `.env.local` v adresáři `email-api`.
Pro `server/index.js` se `.env` načítá automaticky přes `dotenv`.

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
npm run questions:to-json
npm run questions:to-md
```

Výchozí cesty lze přepsat parametry `--input` a `--output`.
