## 1. 修改 app.js（移除 sticky 相關邏輯）

- [x] 1.1 移除 `const stickyMenu`、`const mainMenu`、`IntersectionObserver` 宣告與 `observer.observe(mainMenu)` 呼叫（使用 CSS sticky 取代 JS 控制的 fixed header）
- [x] 1.2 移除 `const mobileMenus`、`const headerHeight`、`window.addEventListener("scroll", ...)` 滾動定位邏輯（app.js 保留行動版選單邏輯，移除 sticky 相關邏輯）
- [x] 1.3 確認保留漢堡按鈕開關邏輯（`mobileMenuButtons` forEach）與 submenu toggle 邏輯（`toggleButtons` forEach），mobile hamburger menu opens and closes 功能正常

## 2. 修改各頁面 HTML（移除重複 header，加入 sticky 樣式）

- [x] 2.1 修改 `src/index.html`：在 `<header id="main-menu">` 加入 Tailwind class `sticky top-0 z-50 bg-black`；完整移除 `<!--fixed menu-->` 區塊（從 `<div id="sticky-menu">` 到其對應的 `</div>`，含 sticky-menu 內部的完整導覽列 HTML），確認 no duplicate header HTML
- [x] 2.2 修改 `src/about.html`：同 2.1 的步驟，加入 sticky 樣式並移除 `#sticky-menu` 區塊
- [x] 2.3 修改 `src/organizing.html`：同 2.1 的步驟
- [x] 2.4 修改 `src/speakers01.html`：同 2.1 的步驟
- [x] 2.5 修改 `src/speakers02.html`：同 2.1 的步驟
- [x] 2.6 修改 `src/submission.html`：同 2.1 的步驟

## 3. 驗證（sticky header background is opaque，single sticky header）

- [x] 3.1 在瀏覽器開啟每個頁面，確認往下滾動時 header 固定在頂部且背景完全不透明（sticky header background is opaque；header 背景色在 sticky 狀態下保持不透明）
- [x] 3.2 在行動版視窗（或 DevTools 手機模式）確認漢堡按鈕可開關導覽選單，頁面捲動正確鎖定與解鎖（mobile hamburger menu opens and closes）
- [x] 3.3 用 DevTools 確認每個頁面的 DOM 只有一個 `<header>` 且不含 `id="sticky-menu"` 元素（single sticky header；no duplicate header HTML）
