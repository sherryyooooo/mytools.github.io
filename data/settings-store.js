/* ============================================================
 * settings-store.js — 共用設定狀態模組
 *
 * 各工具頁面透過 <script src="../data/settings-store.js"> 載入，
 * 即可讀取 getTalentInfo() / renderTalentBadgesHtml() 等共用函式。
 * 實際編輯由 tools/settings.html 統一管理。
 * ============================================================ */

/* ── 人才清單 ──
 *   name           : 人名
 *   defaultQuality : 預設品質（珍貴 | 卓越 | 優秀）
 * ------------------------------------------------------------ */
const TALENTS = [
  /// 珍貴
  // 幸運刮獎兌換
  { name: '剛毅',     defaultQuality: '珍貴', attr: '' },
  { name: '安賽腰鼓', defaultQuality: '珍貴', attr: '' },
  { name: '鄭經理',   defaultQuality: '珍貴', attr: '' },
  { name: '何律師',   defaultQuality: '珍貴', attr: '' },
  { name: '登山員',   defaultQuality: '珍貴', attr: '' },
  { name: '陳醫生',   defaultQuality: '珍貴', attr: '' },
  // 水滸名將
  { name: '武松',     defaultQuality: '珍貴', attr: '' },
  { name: '宋江',     defaultQuality: '珍貴', attr: '' },
  { name: '林沖',     defaultQuality: '珍貴', attr: '' },
  { name: '魯智深',   defaultQuality: '珍貴', attr: '' },
  // 絕代風華
  { name: '白素貞',   defaultQuality: '珍貴', attr: '' },
  { name: '紅衣教主', defaultQuality: '珍貴', attr: '' },
  { name: '紫霞仙子', defaultQuality: '珍貴', attr: '' },
  { name: '聶小倩',   defaultQuality: '珍貴', attr: '' },
  // 童年英雄
  { name: '黃飛鴻',   defaultQuality: '珍貴', attr: '' },
  { name: '一代大俠', defaultQuality: '珍貴', attr: '' },
  { name: '多情浪子', defaultQuality: '珍貴', attr: '' },
  { name: '強哥',     defaultQuality: '珍貴', attr: '' },
  // 活動氪金獲取
  { name: '阿舟',     defaultQuality: '珍貴', attr: '' },
  { name: '張良',     defaultQuality: '珍貴', attr: '' },
  { name: '牛魔王',   defaultQuality: '珍貴', attr: '' },
  { name: '永琪',     defaultQuality: '珍貴', attr: '' },
  { name: '福爾康',   defaultQuality: '珍貴', attr: '' },
  { name: '夏紫薇',   defaultQuality: '珍貴', attr: '' },
  // VIP
  { name: '林獸醫',   defaultQuality: '珍貴', attr: '' },
  { name: '主持人',   defaultQuality: '珍貴', attr: '' },
  { name: '搖滾明星', defaultQuality: '珍貴', attr: '' },
  { name: '賽車手',   defaultQuality: '珍貴', attr: '' },
  { name: '大小說家', defaultQuality: '珍貴', attr: '' },
  { name: '國際巨星', defaultQuality: '珍貴', attr: '' },
  { name: '國民男神', defaultQuality: '珍貴', attr: '' },
  { name: '金蟬子',   defaultQuality: '珍貴', attr: '' },
  { name: '姜子牙',   defaultQuality: '珍貴', attr: '' },
  { name: '贏政',     defaultQuality: '珍貴', attr: '' },

  /// 卓越
  // 等級獎勵
  { name: '劉二狗',   defaultQuality: '卓越', attr: '' },
  { name: '肖衛平',   defaultQuality: '卓越', attr: '' },
  { name: '周大頭',   defaultQuality: '卓越', attr: '' },
  { name: '非主流',   defaultQuality: '卓越', attr: '' },
  { name: '李雙',     defaultQuality: '卓越', attr: '' },
  { name: '街機高手', defaultQuality: '卓越', attr: '' },
  { name: '彪子',     defaultQuality: '卓越', attr: '' },
  { name: '唐志強',   defaultQuality: '卓越', attr: '' },
  { name: '小陳哥',   defaultQuality: '卓越', attr: '' },
  { name: '火炬手',   defaultQuality: '卓越', attr: '' },
  { name: '邁克周',   defaultQuality: '卓越', attr: '' },
  { name: '菜雕師',   defaultQuality: '卓越', attr: '' },
  // 幸運刮獎兌換
  { name: '高啟強',   defaultQuality: '卓越', attr: '' },
  { name: '倪冬梅',   defaultQuality: '卓越', attr: '' },
  { name: '漁三哥',   defaultQuality: '卓越', attr: '' },
  // VIP
  { name: '曾守信',   defaultQuality: '卓越', attr: '' },
  // 風雲錄
  { name: '步驚雲',   defaultQuality: '卓越', attr: '' },
  { name: '聶風',     defaultQuality: '卓越', attr: '' },
  // 活動
  { name: '乾隆',     defaultQuality: '卓越', attr: '' },
  { name: '孫悟空',   defaultQuality: '卓越', attr: '' },
  { name: '武則天',   defaultQuality: '卓越', attr: '' },
  { name: '阿星',     defaultQuality: '卓越', attr: '' },
  { name: '書文',     defaultQuality: '卓越', attr: '' },
  { name: '青丘神女',     defaultQuality: '卓越', attr: '' },

  /// 優秀
  // 等級獎勵
  { name: '麗萍',     defaultQuality: '優秀', attr: '' },
  { name: '張冰棍',   defaultQuality: '優秀', attr: '' },
  { name: '趙阿綿',   defaultQuality: '優秀', attr: '' },
  { name: '孫糖畫',   defaultQuality: '優秀', attr: '' },
  { name: '張大力',   defaultQuality: '優秀', attr: '' },
  { name: '李書蟲',   defaultQuality: '優秀', attr: '' },
  { name: '白鐵匠',   defaultQuality: '優秀', attr: '' },
  { name: '電工陳',   defaultQuality: '優秀', attr: '' },
];

/* ── 品質常數 ── */
const QUALITY_ORDER = { '珍貴': 0, '卓越': 1, '優秀': 2 };
const QUALITY_CSS   = { '珍貴': 'tq-precious', '卓越': 'tq-superior', '優秀': 'tq-good' };
const ACTIVE_CSS    = { '珍貴': 'aq-precious', '卓越': 'aq-superior', '優秀': 'aq-good' };

/* ── 人才狀態（localStorage）── */
const LS_TALENT_KEY = 'ft_talent_state';
let talentState = (() => {
  try { return JSON.parse(localStorage.getItem(LS_TALENT_KEY)) || {}; }
  catch { return {}; }
})();

function saveTalentState() {
  localStorage.setItem(LS_TALENT_KEY, JSON.stringify(talentState));
}

function getTalentInfo(name) {
  const master = TALENTS.find(t => t.name === name);
  if (!master) return null;
  const s = talentState[name] || {};
  return { name, quality: s.quality || master.defaultQuality, owned: s.owned === true };
}

/* ── 產生人才徽章 HTML（供各功能頁使用）── */
function renderTalentBadgesHtml(talentNames) {
  if (!talentNames || talentNames.length === 0) return '';
  const infos = talentNames.map(n => getTalentInfo(n)).filter(Boolean);
  infos.sort((a, b) => {
    if (a.owned !== b.owned) return a.owned ? -1 : 1;
    return (QUALITY_ORDER[a.quality] ?? 99) - (QUALITY_ORDER[b.quality] ?? 99);
  });
  return infos.map(t => {
    const cls = t.owned ? (QUALITY_CSS[t.quality] || 'tq-none') : 'tq-none';
    return `<span class="talent-badge ${cls}">${t.name}</span>`;
  }).join('');
}

/* ── 藝人清單 ──
 *   name    : 藝人名稱
 *   quality : 品質（珍貴 | 卓越 | 優秀，固定不可異動）
 * ------------------------------------------------------------ */
const ARTISTS = [
  // 珍貴
  { name: '古麗',     quality: '珍貴', attr: '娛' },
  { name: '秋菊',     quality: '珍貴', attr: '娛' },
  { name: '白素貞',   quality: '珍貴', attr: '農' },
  { name: '新娘子',   quality: '珍貴', attr: '商' },
  { name: '海燕',     quality: '珍貴', attr: '娛' },
  { name: '阿詩瑪',   quality: '珍貴', attr: '農' },
  { name: '淑珍',     quality: '珍貴', attr: '文' },
  { name: '童心',     quality: '珍貴', attr: '文' },
  { name: '紫霞仙子', quality: '珍貴', attr: '娛' },
  { name: '舞獅少女', quality: '珍貴', attr: '商' },
  { name: '聶小倩',   quality: '珍貴', attr: '商' },
  { name: '紅衣教主', quality: '珍貴', attr: '文' },


  { name: '孔慈', quality: '珍貴', attr: '農' },
  { name: '楚楚', quality: '珍貴', attr: '娛' },
  { name: '第二夢', quality: '珍貴', attr: '商' },
  { name: '幽若', quality: '珍貴', attr: '文' },
  { name: '素芬', quality: '珍貴', attr: '農' },
  { name: '港星', quality: '珍貴', attr: '商' },
  { name: '高啟蘭', quality: '珍貴', attr: '文' },
  { name: '選美皇后', quality: '珍貴', attr: '娛' },
  { name: '英姿', quality: '珍貴', attr: '農' },
  { name: '艷紅', quality: '珍貴', attr: '商' },
  { name: '陳書婷', quality: '珍貴', attr: '文' },
  { name: '靜靜', quality: '珍貴', attr: '農' },
  { name: '彩霞', quality: '珍貴', attr: '商' },
  { name: '葬愛', quality: '珍貴', attr: '農' },
  { name: '亦君', quality: '珍貴', attr: '文' },
  { name: '一代天后', quality: '珍貴', attr: '娛' },
  { name: '顧傾傾', quality: '珍貴', attr: '農' },
  { name: '火雞姐', quality: '珍貴', attr: '農' },
  { name: '百變天后', quality: '珍貴', attr: '文' },
  { name: '白晶晶', quality: '珍貴', attr: '娛' },
  { name: '春三十娘', quality: '珍貴', attr: '商' },
  { name: '阿蓮', quality: '珍貴', attr: '文' },
  { name: '白居易', quality: '珍貴', attr: '文' },
  { name: '上官婉兒', quality: '珍貴', attr: '娛' },
  { name: '玫瑰小姐', quality: '珍貴', attr: '商' },
  { name: '女兒國國王', quality: '珍貴', attr: '農' },
  { name: '鈴兒', quality: '珍貴', attr: '文' },
  { name: '鐵扇公主', quality: '珍貴', attr: '娛' },
  { name: '妲己', quality: '珍貴', attr: '商' },
  { name: '小燕子', quality: '珍貴', attr: '農' },
  { name: '含香', quality: '珍貴', attr: '娛' },
  { name: '夏雨荷', quality: '珍貴', attr: '娛' },
  { name: '羋月', quality: '珍貴', attr: '文' },
  { name: '青丘神女', quality: '珍貴', attr: '商' },


  // 卓越
  { name: '玉蘭',     quality: '卓越', attr: '娛' },
  { name: '百靈鳥',   quality: '卓越', attr: '文' },
  { name: '杜鵑',     quality: '卓越', attr: '娛' },
  { name: '桂雲',     quality: '卓越', attr: '商' },
  { name: '廣花',     quality: '卓越', attr: '文' },
  { name: '云雪晴',   quality: '卓越', attr: '農' },
  { name: '阿雅',     quality: '卓越', attr: '文' },
  { name: '蘭心',     quality: '卓越', attr: '文' },
  { name: '呂銷售',   quality: '卓越', attr: '農' },
  { name: '歌婷',     quality: '卓越', attr: '娛' },
  { name: '蘇秘書',   quality: '卓越', attr: '文' },
  { name: '若楠',     quality: '卓越', attr: '商' },
  { name: '機車女郎', quality: '卓越', attr: '商' },
  { name: '思敏',     quality: '卓越', attr: '文' },
  { name: '馬教練',   quality: '卓越', attr: '商' },
  
  // 優秀
  { name: 'ㄚ蛋兒',   quality: '優秀', attr: '農' },
  { name: '校園歌手', quality: '優秀', attr: '商' },
  { name: '青青',     quality: '優秀', attr: '商' },
  { name: '小芳',     quality: '優秀', attr: '文' },
  { name: '鄰家女孩', quality: '優秀', attr: '娛' },
  { name: '藝術生',   quality: '優秀', attr: '農' },
];

/* ── 藝人狀態（localStorage，僅記錄擁有 / 未擁有）── */
const LS_ARTIST_KEY = 'app_artist_state';
let artistState = (() => {
  try { return JSON.parse(localStorage.getItem(LS_ARTIST_KEY)) || {}; }
  catch { return {}; }
})();

function saveArtistState() {
  localStorage.setItem(LS_ARTIST_KEY, JSON.stringify(artistState));
}

function getArtistInfo(name) {
  const master = ARTISTS.find(a => a.name === name);
  if (!master) return null;
  return { name, quality: master.quality, owned: (artistState[name] || {}).owned === true };
}

/* ============================================================
 * 共用遊戲紀錄 — 首頁 / 人才榜 / 收入榜 共享同一份資料
 * 欄位：date, maxAbility, maxIncome, storeIncome,
 *       workIncome, stageIncome, baseIncome(自動), memo
 * ============================================================ */
const LS_RECORD_KEY = 'shared_game_record';
let sharedRecord = (() => {
  try { return JSON.parse(localStorage.getItem(LS_RECORD_KEY)) || {}; }
  catch { return {}; }
})();

window.saveSharedRecord = function () {
  [
    ['srDate','date'], ['srAbility','maxAbility'], ['srMaxIncome','maxIncome'],
    ['srStore','storeIncome'], ['srWork','workIncome'], ['srStage','stageIncome'],
    ['srMemo','memo'],
  ].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) sharedRecord[key] = el.value;
  });
  const sub = (parseFloat(sharedRecord.storeIncome) || 0)
            + (parseFloat(sharedRecord.workIncome)  || 0)
            + (parseFloat(sharedRecord.stageIncome) || 0);
  sharedRecord.baseIncome = sub > 0 ? String(sub) : '';
  const baseEl = document.getElementById('srBase');
  if (baseEl) baseEl.value = sharedRecord.baseIncome;
  localStorage.setItem(LS_RECORD_KEY, JSON.stringify(sharedRecord));
};

window.loadSharedRecord = function () {
  [
    ['srDate','date'], ['srAbility','maxAbility'], ['srMaxIncome','maxIncome'],
    ['srStore','storeIncome'], ['srWork','workIncome'], ['srStage','stageIncome'],
    ['srBase','baseIncome'], ['srMemo','memo'],
  ].forEach(([id, key]) => {
    const el = document.getElementById(id);
    if (el) el.value = sharedRecord[key] ?? '';
  });
};

window.srSetToday = function () {
  const t = new Date();
  const el = document.getElementById('srDate');
  if (el) {
    el.value = `${t.getFullYear()}-${String(t.getMonth()+1).padStart(2,'0')}-${String(t.getDate()).padStart(2,'0')}`;
    window.saveSharedRecord();
  }
};

/* toggleSection 供工具頁使用（index.html 的同名 function declaration 會覆寫）*/
window.toggleSection = window.toggleSection || function (id) {
  const body   = document.getElementById(id + 'Body');
  const toggle = document.getElementById(id + 'Toggle');
  if (!body) return;
  const open = body.style.display === 'none';
  body.style.display = open ? '' : 'none';
  if (toggle) toggle.textContent = open ? '▲ 收合' : '▼ 展開';
};

/* ── 所有工具 localStorage 鍵登錄表 ──
 * 新增工具時，在此 array 加入所使用的 key，
 * 設定中心的匯出 / 匯入 / 清空功能才能一併管理。
 * ------------------------------------------------------------ */
const LS_REGISTRY = [
  { key: 'ft_talent_state', label: '人才設定(品質/擁有狀態)', tool: '共用設定' },
  { key: 'app_artist_state', label: '藝人設定(擁有狀態)', tool: '共用設定' },
  { key: 'shared_game_record', label: '遊戲紀錄 — 紀錄日期、能力、收入、備忘', tool: '共用設定' },
  
  { key: 'wmp_myM',         label: '我方影視作品清單',           tool: '作品合作比對器(記憶版)' },
  { key: 'wmp_myA',         label: '我方廣告作品清單',           tool: '作品合作比對器(記憶版)' },

  { key: 'ft_row_state',           label: '農田人才鍛鍊數值輸入',       tool: '農田人才鍛鍊' },
  { key: 'fa_row_state',           label: '農田藝人鍛鍊數值輸入',       tool: '農田藝人鍛鍊' },
  { key: 'fa_topn',                label: '農田藝人鍛鍊 Top-N 設定',    tool: '農田藝人鍛鍊' },
  { key: 'fi_row_state',           label: '農田店鋪研究數值輸入',       tool: '農田店鋪研究' },

  { key: 'bh_current_cat',         label: '澡堂技師 — 上次選擇的大類',  tool: '澡堂技師鍛鍊' },
  { key: 'bh_row_state_male',      label: '澡堂技師 — 男澡堂數值輸入',  tool: '澡堂技師鍛鍊' },
  { key: 'bh_row_state_female',    label: '澡堂技師 — 女澡堂數值輸入',  tool: '澡堂技師鍛鍊' },
  { key: 'bh_row_state_sauna',     label: '澡堂技師 — 桑拿室數值輸入',  tool: '澡堂技師鍛鍊' },
  { key: 'bh_row_state_massage',   label: '澡堂技師 — 按摩室數值輸入',  tool: '澡堂技師鍛鍊' },
  { key: 'bh_row_state_tcm',       label: '澡堂技師 — 中醫部數值輸入',  tool: '澡堂技師鍛鍊' },
  { key: 'bh_row_state_vip',       label: '澡堂技師 — 貴賓室數值輸入',  tool: '澡堂技師鍛鍊' },

  { key: 'as_row_state',            label: '藝人唱聲數值輸入',           tool: '藝人-唱聲' },
  { key: 'as_current_attr',         label: '藝人唱聲 — 上次選擇的屬性', tool: '藝人-唱聲' },

  { key: 'ranking_todo_talent_v1', label: '人才榜 — 勾選狀態', tool: '榜單代辦清單' },
  { key: 'ranking_todo_income_v1',  label: '收入榜 — 勾選狀態', tool: '榜單代辦清單' },
];
