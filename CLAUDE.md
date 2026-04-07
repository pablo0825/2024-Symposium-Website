# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

**Compile Tailwind CSS (watch mode):**
```bash
npm install
npm run watch
```
This compiles `src/input.css` → `src/output.css` and watches for changes.

**Preview locally:**
Use VS Code Live Server with the workspace root set to the project folder. Live Server is configured via `.vscode/settings.json` to serve from `/src`, so `/img/...` paths resolve correctly.

## Architecture

This is a static multi-page website for the ICIDD 2024 international symposium. No framework or build server — just HTML + Tailwind CSS + vanilla JS.

**Pages** (all in `src/`):
- `index.html` — homepage with hero, speakers preview, countdown, icon grid
- `about.html` — conference introduction
- `speakers01.html` / `speakers02.html` — individual speaker pages
- `organizing.html` — organizing committee
- `submission.html` — paper submission info

**Styling:**
- `src/input.css` — Tailwind directives + custom base styles (h2, h3, p, hero backgrounds)
- `src/output.css` — compiled output, do not edit manually
- Custom colors defined in `tailwind.config.js`: `main` (#4FB200), `content` (#CAD2C5), `stress` (#84CC16)
- Custom breakpoints: sm=480px, md=768px, lg=976px, xl=1440px

**JavaScript (`src/app.js`):**
- Mobile menu toggle (hamburger ↔ close icon, scroll lock)
- Submenu expand/collapse via `data-toggle` attribute
- Sticky nav bar using `IntersectionObserver` on `#main-menu`
- Mobile menu position adjusted on scroll to follow fixed header

**Assets:**
All images live in `src/img/` and are referenced with absolute paths (`/img/...`). The `img/` folder was originally at the project root but was moved into `src/` to match Live Server's configured root.

## Collaboration Principles

1. **逐步思考**：回答前先展示思考過程，不直接跳到結論。
2. **釐清需求**：若需求不夠清楚，主動要求補充說明，再開始作業。
3. **一問一答**：遇到需要多方確認的問題時，每次只問一個問題，等待回覆後再繼續。
4. **誠實回覆**：不知道的事直接說不知道，不捏造或推測不確定的資訊。

## Git Commit Convention

遵循 Conventional Commits：

| Prefix | 用途 |
|--------|------|
| `feat:` | 新功能 |
| `fix:` | 修復 Bug |
| `refactor:` | 重構（無功能變更） |
| `test:` | 測試相關修改 |
| `docs:` | 文件更新 |
