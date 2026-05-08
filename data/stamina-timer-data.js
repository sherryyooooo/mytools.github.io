/* ============================================================
 * stamina-timer-data.js — 體力恢復時間表 資料設定檔
 *
 * 新增或修改活動只需編輯此檔案，主程式不需要動。
 *
 * 欄位說明：
 *   cat         ：分類，填入 daily（日常）或 event（活動）
 *   name        ：活動名稱
 *   recoverPer  ：每 N 分鐘恢復 1 點體力
 *   max         ：體力上限
 * ============================================================ */
const STAMINA_DATA = [
  // ── 日常 ──
  { cat: 'daily', name: '小賣部進貨', recoverPer:  60, max: 10 },
  { cat: 'daily', name: '宣傳', recoverPer:  60, max: 12 },
  { cat: 'daily', name: '魚攤', recoverPer: 120, max: 10 },
  { cat: 'daily', name: '礦場', recoverPer:  480, max: 3 },
  { cat: 'daily', name: '歌舞廳', recoverPer:  30, max: 50 },
  { cat: 'daily', name: '錄像廳', recoverPer: 30, max: 50 },
  { cat: 'daily', name: '旅遊', recoverPer:  30, max: 50 },
  { cat: 'daily', name: '澡堂', recoverPer: 30, max: 100 },
  

  // ── 期間限定活動 ──
  { cat: 'event', name: '格格出逃記', recoverPer: 20, max: 30 },
  { cat: 'event', name: '田間摸魚', recoverPer: 12, max: 30 },
  { cat: 'event', name: '倩女幽魂', recoverPer: 10, max: 30 },
  { cat: 'event', name: '白蛇傳', recoverPer: 20, max: 30 },
  { cat: 'event', name: '勇闖白金瀚', recoverPer: 12, max: 30 },
  { cat: 'event', name: '西遊記', recoverPer: 12, max: 30 },

  { cat: 'event', name: '礦點爭奪戰', recoverPer: 20, max: 20 },
  { cat: 'event', name: '時光運動會', recoverPer: 20, max: 30 },

  { cat: 'event', name: '明星打造', recoverPer: 1, max: 500 },
  { cat: 'event', name: '強盛小靈通', recoverPer: 120, max: 10 },
  { cat: 'event', name: '夜市廚神', recoverPer: 30, max: 20 },
  { cat: 'event', name: '第六號當舖', recoverPer: 20, max: 40 },
  { cat: 'event', name: '豬豬配種', recoverPer: 5, max: 150 },
  { cat: 'event', name: '山海-崑崙之虛', recoverPer: 15, max: 50 },
  { cat: 'event', name: '還珠格格1', recoverPer: 20, max: 20 },
  { cat: 'event', name: '月光秘境', recoverPer: 20, max: 30 },
  { cat: 'event', name: '牛魔降世', recoverPer: 30, max: 20 },
  { cat: 'event', name: '奇趣樂園', recoverPer: 10, max: 60 },
  
  
];


