/* ============================================================
 * _template-tab-table-data.js — 頁籤資料表 範例資料設定檔
 *
 * 使用方式：複製此檔 → 改名 → 修改下方三個區塊，HTML 不需動。
 *
 * ─── 需要修改的三個區塊 ──────────────────────────────────
 *
 * 1. TABS      頁籤清單
 *      id      ：頁籤識別碼（英文，與 ROWS 的 tabId 對應）
 *      label   ：頁籤顯示文字
 *
 *              ★ 不需要「全部」頁籤時，直接刪除 { id:'all', label:'全部' }
 *                渲染邏輯會自動判斷是否需要顯示篩選行為
 *
 * 2. COLUMNS   欄位定義
 *      key     ：對應 ROWS 每列物件的 key
 *      label   ：表頭顯示文字
 *      width   ：(選填) 欄位寬度，如 '100px'
 *      align   ：(選填) 'left'(預設) | 'right' | 'center'
 *      badge   ：(選填) true → 以背景色徽章顯示，需在 BADGE_STYLES 定義每個值的樣式
 *
 * 3. ROWS      各列資料
 *      tabId   ：對應 TABS 的 id（不屬於任何特定頁籤時填 'all'）
 *      ...     ：其他欄位與 COLUMNS 的 key 對應即可
 *
 * ─── 選填：徽章樣式 ─────────────────────────────────────
 *   BADGE_STYLES：key 為欄位值，value 為物件 { bg, color }
 *   當欄位設定 badge:true 時，依值自動套用對應樣式。
 *
 * ============================================================ */

/* ── 1. 頁籤 ── */
const TABS = [
  { id: 'all',      label: '全部' },
  { id: 'daily',    label: '日常' },
  { id: 'event',    label: '活動' },
  { id: 'special',  label: '特殊' },
];

/* ── 2. 欄位定義 ── */
const COLUMNS = [
  { key: 'name',     label: '名稱',   width: '140px' },
  { key: 'type',     label: '類型',   width: '80px',  align: 'center', badge: true },
  { key: 'value',    label: '數值',   width: '80px',  align: 'right' },
  { key: 'note',     label: '備註' },
];

/* ── 3. 資料列 ── */
const ROWS = [
  // ── 日常 ──
  { tabId: 'daily', name: '日常任務 A', type: '任務', value: 100, note: '每天重置' },
  { tabId: 'daily', name: '日常任務 B', type: '任務', value: 150, note: '每天重置' },
  { tabId: 'daily', name: '每日登入',   type: '獎勵', value: 50,  note: '登入即得' },

  // ── 活動 ──
  { tabId: 'event', name: '期間活動 X', type: '活動', value: 300, note: '限時 7 天' },
  { tabId: 'event', name: '期間活動 Y', type: '活動', value: 200, note: '限時 3 天' },
  { tabId: 'event', name: '活動挑戰',   type: '挑戰', value: 500, note: '每週一次' },

  // ── 特殊 ──
  { tabId: 'special', name: '特殊任務 Z', type: '任務', value: 1000, note: '一次性' },
  { tabId: 'special', name: '收藏兌換',   type: '兌換', value: 800,  note: '限量 5 次' },
];

/* ── 選填：徽章樣式（badge:true 的欄位會套用） ── */
const BADGE_STYLES = {
  '任務': { bg: '#DBEAFE', color: '#1D4ED8' },
  '獎勵': { bg: '#DCFCE7', color: '#166534' },
  '活動': { bg: '#FEF9C3', color: '#854D0E' },
  '挑戰': { bg: '#FFE4E4', color: '#B91C1C' },
  '兌換': { bg: '#F3E8FF', color: '#7E22CE' },
};
