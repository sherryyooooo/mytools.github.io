/* =====================================================
 * 共用側欄 (Sidebar Navigation)
 *
 * 使用方式（所有頁面 <body> 頂端）：
 *   首頁  index.html    → <script src="shared/header.js"></script>
 *   工具頁 tools/*.html → <script src="../shared/header.js"></script>
 *
 * 新增工具：編輯下方 NAV 陣列即可，不需動各頁面 HTML。
 * ===================================================== */
(function () {
  /* ── GA4 ── */
  const GA_MEASUREMENT_ID = 'G-BB499GPM88';
  const gaScript = document.createElement('script');
  gaScript.async = true;
  gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(gaScript);
  window.dataLayer = window.dataLayer || [];
  function gtag() { dataLayer.push(arguments); }
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID);

  /* ── 路徑前置 ── */
  const isToolPage = window.location.pathname.includes('/tools/');
  const base = isToolPage ? '../' : '';

  /* ── 導覽資料（新增工具只需在此加項）── */
  const NAV = [
    {
      id: 'daily', label: '日常相關', tools: [
        { icon: '⚖️', title: '作品合作比對器', href: `${base}tools/work-matcher.html` },
        { icon: '⚖️', title: '作品比對(記憶版)', href: `${base}tools/work-matcher-pro.html` },
        { icon: '🛍️', title: '兌換推薦指南', href: `${base}tools/exchange-guide.html` },
        { icon: '⚡', title: '體力恢復時間表', href: `${base}tools/stamina-timer.html` },
      ]
    },
    {
      id: 'farm', label: '各項升級', tools: [
        { icon: '🏪', title: '農田-店舖研究', href: `${base}tools/farm-income.html` },
        { icon: '🌾', title: '農田-人才鍛鍊', href: `${base}tools/farm-training.html` },
        { icon: '🎭', title: '農田-藝人鍛鍊', href: `${base}tools/farm-artist.html` },
        { icon: '🛁', title: '澡堂-技師鍛鍊', href: `${base}tools/bathhouse-training.html` },
        { icon: '🎤', title: '藝人-唱聲', href: `${base}tools/artist-singing.html` },
      ]
    },
    {
      id: 'ranking', label: '榜單代辦清單', tools: [
        { icon: '🏆', title: '人才榜', href: `${base}tools/talent-ranking.html` },
        { icon: '💰', title: '收入榜', href: `${base}tools/income-ranking.html` },
      ]
    },
    {
      id: 'info', label: '角色資訊(緩慢更新)', tools: [
        { icon: '📋', title: '人才資訊', href: `${base}tools/talent-info.html` },
        { icon: '🎭', title: '藝人資訊', href: `${base}tools/artist-info.html` },
      ]
    },
  ];

  /* ── 建立側欄 HTML ── */
  const LS_COLLAPSE = 'sb_nav_collapse';

  let navHtml = `<a class="sb-link sb-home" href="${base}index.html" title="首頁 · 設定中心">
    <span class="sb-icon">⚙️</span>
    <span class="sb-text">首頁 · 設定中心</span>
  </a>`;

  NAV.forEach(cat => {
    navHtml += `<div class="sb-cat" id="sb-cat-${cat.id}">
      <button class="sb-cat-btn" onclick="window._sbToggleCat('${cat.id}')">
        <span>${cat.label}</span><span class="sb-cat-arrow">▾</span>
      </button>
      <div class="sb-cat-items">`;
    cat.tools.forEach(t => {
      navHtml += `<a class="sb-link" href="${t.href}" title="${t.title}">
        <span class="sb-icon">${t.icon}</span>
        <span class="sb-text">${t.title}</span>
      </a>`;
    });
    navHtml += `</div></div>`;
  });

  const sidebarHtml = `<aside class="sidebar" id="site-sidebar">
  <div class="sb-header">
    <a class="sb-brand" href="${base}index.html">
      <span class="sb-brand-icon">🕹️</span>
      <span class="sb-brand-name">醬⨉時光小工具</span>
    </a>
    <button class="sb-mini-btn" id="sb-mini-btn" onclick="window._sbToggleMini()" title="收合側欄">«</button>
  </div>
  <nav class="sb-nav">${navHtml}</nav>
  <div class="sb-footer">Copyright &copy; 2026 醬×時光小工具<br>轉載請註明出處</div>
</aside>
<button class="sb-ham" id="sb-ham" aria-label="選單">☰</button>
<div class="sb-overlay" id="sb-overlay"></div>`;

  document.currentScript.insertAdjacentHTML('beforebegin', sidebarHtml);

  /* ── DOMContentLoaded：包裝 main-wrap、標記 active、還原折疊 ── */
  document.addEventListener('DOMContentLoaded', function () {
    /* 1. 把非側欄元素包進 .main-wrap */
    const toWrap = [...document.body.children].filter(
      el => !el.matches('#site-sidebar, #sb-ham, #sb-overlay')
    );
    if (toWrap.length) {
      const wrap = document.createElement('div');
      wrap.className = 'main-wrap';
      toWrap[0].before(wrap);
      toWrap.forEach(el => wrap.appendChild(el));
    }

    /* 2. 標示當前頁面連結 */
    const curFile = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.sb-link').forEach(a => {
      const linkFile = a.getAttribute('href').split('/').pop() || 'index.html';
      if (linkFile === curFile) a.classList.add('active');
    });

    /* 3. 還原折疊狀態 */
    const collapsed = (() => {
      try { return JSON.parse(localStorage.getItem(LS_COLLAPSE)) || []; }
      catch { return []; }
    })();
    collapsed.forEach(id => {
      const el = document.getElementById('sb-cat-' + id);
      if (el) el.classList.add('collapsed');
    });

    /* 4. Mobile 漢堡選單 */
    const ham = document.getElementById('sb-ham');
    const overlay = document.getElementById('sb-overlay');
    const sidebar = document.getElementById('site-sidebar');
    ham.onclick = () => { sidebar.classList.toggle('open'); overlay.classList.toggle('open'); };
    overlay.onclick = () => { sidebar.classList.remove('open'); overlay.classList.remove('open'); };

    /* 5. 還原 mini 收合狀態 */
    const miniBtn = document.getElementById('sb-mini-btn');
    if (localStorage.getItem('sb_mini') === '1') {
      sidebar.classList.add('mini');
      document.body.classList.add('sb-mini');
      if (miniBtn) miniBtn.textContent = '»';
      if (miniBtn) miniBtn.title = '展開側欄';
    }
  });

  /* ── 收合/展開整個側欄 ── */
  window._sbToggleMini = function () {
    const sidebar = document.getElementById('site-sidebar');
    const miniBtn = document.getElementById('sb-mini-btn');
    if (!sidebar) return;
    const isMini = sidebar.classList.toggle('mini');
    document.body.classList.toggle('sb-mini', isMini);
    if (miniBtn) {
      miniBtn.textContent = isMini ? '»' : '«';
      miniBtn.title = isMini ? '展開側欄' : '收合側欄';
    }
    localStorage.setItem('sb_mini', isMini ? '1' : '0');
  };

  /* ── 折疊/展開大類（全域函式，onclick 需在 DOMContentLoaded 前存在）── */
  window._sbToggleCat = function (id) {
    const el = document.getElementById('sb-cat-' + id);
    if (!el) return;
    el.classList.toggle('collapsed');
    const collapsed = (() => {
      try { return JSON.parse(localStorage.getItem(LS_COLLAPSE)) || []; }
      catch { return []; }
    })();
    const idx = collapsed.indexOf(id);
    if (idx >= 0) collapsed.splice(idx, 1);
    else collapsed.push(id);
    localStorage.setItem(LS_COLLAPSE, JSON.stringify(collapsed));
  };
})();


// ------------------------------------------------------------
// 阻止 number input 在按 ↑ ↓ 時自動改值（避免誤觸）
// document.addEventListener('keydown', function (e) {
//   const el = document.activeElement;

//   if (!el) return;

//   const isNumberInput =
//     el.tagName === 'INPUT' && el.type === 'number';

//   const isEditable =
//     el.tagName === 'TEXTAREA' || el.isContentEditable;

//   // 只擋 number input，不影響其他可輸入區
//   if (isNumberInput && !isEditable) {
//     if (e.key === 'ArrowUp' || e.key === 'ArrowDown') {
//       e.preventDefault();
//     }
//   }
// });
// ------------------------------------------------------------



// ------------------------------------------------------------
// 使用方向鍵在 input 間移動（依畫面位置判斷）
document.addEventListener('keydown', function (e) {
  const el = document.activeElement;
  if (!el || el.tagName !== 'INPUT') return;

  const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'];
  if (!keys.includes(e.key)) return;

  e.preventDefault();

  const inputs = Array.from(document.querySelectorAll('input'));
  const currentRect = el.getBoundingClientRect();

  let candidates = inputs.filter(input => input !== el);

  // 篩選方向
  candidates = candidates.filter(input => {
    const rect = input.getBoundingClientRect();

    switch (e.key) {
      case 'ArrowUp':
        return rect.bottom <= currentRect.top;
      case 'ArrowDown':
        return rect.top >= currentRect.bottom;
      case 'ArrowLeft':
        return rect.right <= currentRect.left;
      case 'ArrowRight':
        return rect.left >= currentRect.right;
    }
  });

  if (candidates.length === 0) return;

  // 找距離最近的
  let closest = null;
  let minDistance = Infinity;

  candidates.forEach(input => {
    const rect = input.getBoundingClientRect();
    const dx = rect.left - currentRect.left;
    const dy = rect.top - currentRect.top;
    const distance = Math.sqrt(dx * dx + dy * dy);

    if (distance < minDistance) {
      minDistance = distance;
      closest = input;
    }
  });

  if (closest) {
    closest.focus();

    // 自動全選內容
    if (typeof closest.select === 'function') {
      closest.select();
    }
  }
});
// ------------------------------------------------------------
