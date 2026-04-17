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
        <svg viewBox="0 0 20 20"><path d="M12.707 15.707a1 1 0 01-1.414 0l-5-5a1 1 0 010-1.414l5-5a1 1 0 111.414 1.414L8.414 10l4.293 4.293a1 1 0 010 1.414z"/></svg>
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
