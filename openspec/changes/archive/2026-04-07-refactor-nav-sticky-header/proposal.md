## Why

目前導覽列使用雙 header 架構（`#main-menu` + `#sticky-menu`），造成 HTML 重複維護、行動版漢堡選單失效，以及固定頁首無法正常顯示。重構為單一 header 可根本解決這兩個問題。

## What Changes

- 移除 `#sticky-menu` 重複 header 結構，改用 CSS `position: sticky` 讓原始 header 固定在頂部
- 修改所有 6 個頁面（`index.html`、`about.html`、`organizing.html`、`speakers01.html`、`speakers02.html`、`submission.html`）的 header HTML
- 簡化 `app.js`：移除 `IntersectionObserver` 邏輯與 `#sticky-menu` 控制，只保留單一行動選單的開關邏輯
- 修正行動版漢堡選單：原本 `querySelector(".mobile-menu")` 只能控制第一個選單元素，重構後只有一個選單不再有此問題

## Non-Goals

- 不修改導覽列的視覺設計（顏色、字型、版型）
- 不新增桌面版的下拉選單行為（維持現有 CSS hover 方式）
- 不處理其他頁面 Bug（如倒數計時器、表單等）

## Capabilities

### New Capabilities

- `sticky-nav`: 單一固定導覽列，支援桌面版 sticky header 與行動版漢堡選單開關

### Modified Capabilities

（無）

## Impact

- Affected code:
  - `src/app.js`
  - `src/index.html`
  - `src/about.html`
  - `src/organizing.html`
  - `src/speakers01.html`
  - `src/speakers02.html`
  - `src/submission.html`
