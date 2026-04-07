## Context

目前網站在每個頁面有兩套完整的導覽列 HTML：

1. `<header id="main-menu">` — 頁面頂部的原始 header
2. `<div id="sticky-menu">` — 重複的 fixed header，預設 `hidden`，透過 `IntersectionObserver` 控制顯示

這導致兩個問題：
- **固定頁首不出現**：`IntersectionObserver` 監測 `#main-menu`，但實際行為不穩定
- **行動版漢堡失效**：`app.js` 以 `querySelector(".mobile-menu")` 只選到第一個選單（在 `#main-menu`），sticky header 裡的按鈕控制的是看不見的選單

## Goals / Non-Goals

**Goals:**

- 移除 `#sticky-menu` 重複結構，所有頁面只保留單一 header
- 以 CSS `position: sticky; top: 0` 讓 header 自動固定在頂部
- 行動版只剩一個 `.mobile-menu`，漢堡按鈕可正確控制
- 移除 `app.js` 中不再需要的 IntersectionObserver 與 scroll 定位邏輯

**Non-Goals:**

- 不改變導覽列視覺設計（顏色、字型、排版）
- 不新增桌面版下拉選單的動畫或行為
- 不修改其他頁面功能

## Decisions

### 使用 CSS sticky 取代 JS 控制的 fixed header

**選擇**：在 `<header>` 上加 `sticky top-0 z-50`（Tailwind），而非維持 JS 動態切換 fixed div。

**理由**：
- CSS sticky 天生處理滾動行為，無需 JS 介入
- 移除 IntersectionObserver 減少潛在的競態條件
- 單一 header 消除 `querySelector` 只選到第一個元素的 Bug

**替代方案**：保留雙 header 但修 JS（方案 A）— 雙 header 本身就是根本問題，打補丁無法根治。

### header 背景色在 sticky 狀態下保持不透明

**選擇**：header 加上 `bg-black`（與原 sticky-menu 一致），避免滾動時頁面內容透過 header 顯示。

**理由**：sticky header 沒有獨立的背景會讓文字重疊，影響可讀性。

### app.js 保留行動版選單邏輯，移除 sticky 相關邏輯

**選擇**：移除 `IntersectionObserver`、`stickyMenu` 變數、scroll 事件監聽（`mobileMenus.style.top`）。保留漢堡按鈕開關、submenu toggle。

**理由**：scroll 定位 (`mobileMenus.style.top`) 原本是為了讓行動選單跟隨滾動的 sticky header — 改為 CSS sticky 後，選單透過 `position: absolute` 相對於 header 定位，自動跟隨。

## Risks / Trade-offs

- **Sticky 在特定瀏覽器的相容性**：`position: sticky` 在現代瀏覽器支援度高（>97%），但需確保 header 的父容器沒有 `overflow: hidden`，否則 sticky 會失效。→ 確認 `<body>` 沒有 `overflow: hidden`（目前 JS 僅在選單開啟時動態設定，關閉後恢復）。
- **6 個頁面需逐一修改**：HTML 修改量大，需確保每頁改動一致。→ 用 checklist 確認每頁完成。
