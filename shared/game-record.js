/* ============================================================
 * game-record.js — 遊戲紀錄卡片 共用模組
 *
 * 使用方式：
 *   1. 在頁面放置 <div id="gameRecordContainer"></div>
 *   2. 載入 settings-store.js 之後載入本檔
 *   3. 呼叫 renderGameRecordCard({ collapsed: true/false })
 *   4. 呼叫 loadSharedRecord() 填入已存數值
 *
 * 唯一維護點：修改此檔，首頁 / 人才榜 / 收入榜 同步套用。
 * ============================================================ */
window.renderGameRecordCard = function (opts) {
  const collapsed  = (opts && opts.collapsed) !== undefined ? opts.collapsed : false;
  const toggleText = collapsed ? '▼ 展開' : '▲ 收合';
  const bodyStyle  = collapsed ? ' style="display:none"' : '';

  const html = `<div class="settings-card">
  <div class="settings-card-header" onclick="toggleSection('gameRecord')">
    <div class="settings-card-header-left">
      <span>📊 遊戲紀錄</span>
    </div>
    <span class="settings-card-toggle" id="gameRecordToggle">${toggleText}</span>
  </div>
  <div id="gameRecordBody"${bodyStyle}>
    <div class="settings-card-body">
      <div class="sr-two-col">
        <!-- 左欄：數值輸入 -->
        <div class="sr-col-left">
          <div class="sr-row">
            <label class="sr-label">紀錄日期</label>
            <div class="sr-date-wrap">
              <input type="date" id="srDate" class="sr-input" oninput="saveSharedRecord()">
              <button class="sr-today-btn" onclick="srSetToday()">今日</button>
            </div>
          </div>
          <div class="sr-row">
            <label class="sr-label">最高能力</label>
            <input type="number" id="srAbility" class="sr-input sr-num" min="0" placeholder="" oninput="saveSharedRecord()">
          </div>
          <div class="sr-row">
            <label class="sr-label">最高收入</label>
            <input type="number" id="srMaxIncome" class="sr-input sr-num" min="0" placeholder="" oninput="saveSharedRecord()">
          </div>
          <div class="sr-sub-group">
            <div class="sr-row">
              <label class="sr-label">店鋪總收入</label>
              <input type="number" id="srStore" class="sr-input sr-num" min="0" placeholder="" oninput="saveSharedRecord()">
            </div>
            <div class="sr-row">
              <label class="sr-label">作品總收入</label>
              <input type="number" id="srWork" class="sr-input sr-num" min="0" placeholder="" oninput="saveSharedRecord()">
            </div>
            <div class="sr-row">
              <label class="sr-label">關卡收入</label>
              <input type="number" id="srStage" class="sr-input sr-num" min="0" placeholder="" oninput="saveSharedRecord()">
            </div>
            <div class="sr-row">
              <label class="sr-label">未加成收入<span class="sr-auto-badge">自動</span></label>
              <input type="number" id="srBase" class="sr-input sr-num" readonly tabindex="-1">
            </div>
          </div>
        </div>
        <!-- 右欄：備忘文字 -->
        <div class="sr-col-right">
          <label class="sr-label">備忘文字</label>
          <textarea id="srMemo" class="sr-memo" placeholder="本次榜單備忘事項…" oninput="saveSharedRecord()"></textarea>
        </div>
      </div>
    </div>
    <div class="autosave-hint">
      <span class="autosave-dot"></span>
      <span>資料三頁共用，任一頁修改即時同步</span>
    </div>
  </div>
</div>`;

  const container = document.getElementById('gameRecordContainer');
  if (container) container.outerHTML = html;
};
