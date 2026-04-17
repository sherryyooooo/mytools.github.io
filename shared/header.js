/* =====================================================
 * IT 工具箱 — 共用 Header
 *
 * 使用方式（取代原本的 <header> HTML）：
 *   首頁  index.html    → <script src="shared/header.js"></script>
 *   工具頁 tools/*.html → <script src="../shared/header.js"></script>
 *
 * 若需修改 Logo 文字、圖示、返回按鈕文字，只需編輯此檔案。
 * ===================================================== */
(function () {
  const isToolPage = window.location.pathname.includes('/tools/');
  const root       = isToolPage ? '../' : '';

  const backBtn = isToolPage
    ? `<a class="back-btn" href="${root}index.html">
        <svg viewBox="0 0 20 20"><path d="M10 1L0 10h3v9h5v-5h4v5h5v-9h3L10 1z" /></svg>
        首頁
      </a>`
    : `<span class="header-subtitle">選擇項目開始使用</span>`;

  const html = `<header class="site-header">
  <div class="inner">
    <a class="logo" href="${root}index.html">
      <span class="icon">🕹️</span>
      <span>醬⨉時光小工具</span>
    </a>
    ${backBtn}
  </div>
</header>`;

  document.currentScript.insertAdjacentHTML('beforebegin', html);
})();
