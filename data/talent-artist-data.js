/* ============================================================
 * talent-artist-data.js — 人才 ↔ 藝人 關聯對照表
 *
 * 僅需維護此檔案，talent-info.html 與 artist-info.html 共用。
 * 人才清單、藝人清單已在 data/settings-store.js 統一管理。
 *
 * TALENT_ARTIST_MAP：
 *   talent  : 人才名稱（須與 settings-store.js 的 TALENTS 相符）
 *   artists : 相關藝人陣列（須與 settings-store.js 的 ARTISTS 相符）
 *
 * ※ 以下關聯為暫定示意資料，請依實際遊戲資訊自行調整。
 * ============================================================ */

const TALENT_ARTIST_MAP = [

  // ── 珍貴 - 幸運刮獎兌換 ──
  { talent: '剛毅',     artists: ['蘭心', '童心', '亦君', '春時三娘', '白居易'] },
  { talent: '安賽腰鼓', artists: ['桂雲', '新娘子', '阿雅', '彩霞', '含香', ] },
  { talent: '鄭經理',   artists: [] },
  { talent: '何律師',   artists: [] },
  { talent: '登山員',   artists: [] },
  { talent: '陳醫生',   artists: [] },

  // ── 珍貴 - 水滸名將 ──
  { talent: '武松',     artists: [] },
  { talent: '宋江',     artists: [] },
  { talent: '林沖',     artists: [] },
  { talent: '魯智深',   artists: [] },

  // ── 珍貴 - 絕代風華 ──
  { talent: '白素貞',   artists: [] },
  { talent: '紅衣教主', artists: [] },
  { talent: '紫霞仙子', artists: [] },
  { talent: '聶小倩',   artists: [] },

  // ── 珍貴 - 童年英雄 ──
  { talent: '黃飛鴻',   artists: [] },
  { talent: '一代大俠', artists: [] },
  { talent: '多情浪子', artists: [] },
  { talent: '強哥',     artists: [] },

  // ── 珍貴 - 活動氪金獲取 ──
  { talent: '阿舟',     artists: [] },
  { talent: '張良',     artists: [] },
  { talent: '牛魔王',   artists: [] },
  { talent: '永琪',     artists: [] },
  { talent: '福爾康',   artists: [] },
  { talent: '夏紫薇',   artists: [] },

  // ── 珍貴 - VIP ──
  { talent: '林獸醫',   artists: [] },
  { talent: '主持人',   artists: [] },
  { talent: '搖滾明星', artists: [] },
  { talent: '賽車手',   artists: [] },
  { talent: '大小說家', artists: [] },
  { talent: '國際巨星', artists: [] },
  { talent: '國民男神', artists: [] },
  { talent: '金蟬子',   artists: [] },
  { talent: '姜子牙',   artists: [] },
  { talent: '贏政',     artists: [] },

  // ── 卓越 - 等級獎勵 ──
  { talent: '劉二狗',   artists: [] },
  { talent: '肖衛平',   artists: [] },
  { talent: '周大頭',   artists: [] },
  { talent: '非主流',   artists: [] },
  { talent: '李雙',     artists: [] },
  { talent: '街機高手', artists: [] },
  { talent: '彪子',     artists: [] },
  { talent: '唐志強',   artists: [] },
  { talent: '小陳哥',   artists: [] },
  { talent: '火炬手',   artists: [] },
  { talent: '邁克周',   artists: [] },
  { talent: '菜雕師',   artists: [] },

  // ── 卓越 - 幸運刮獎兌換 ──
  { talent: '高啟強',   artists: [] },
  { talent: '倪冬梅',   artists: [] },
  { talent: '漁三哥',   artists: [] },

  // ── 卓越 - VIP ──
  { talent: '曾守信',   artists: [] },

  // ── 卓越 - 風雲錄 ──
  { talent: '步驚雲',   artists: [] },
  { talent: '聶風',     artists: [] },

  // ── 卓越 - 活動 ──
  { talent: '乾隆',     artists: [] },
  { talent: '孫悟空',   artists: [] },
  { talent: '武則天',   artists: [] },
  { talent: '阿星',     artists: [] },
  { talent: '書文',     artists: [] },
  { talent: '青丘神女', artists: [] },

  // ── 優秀 - 等級獎勵 ──
  { talent: '麗萍',     artists: [] },
  { talent: '張冰棍',   artists: [] },
  { talent: '趙阿綿',   artists: [] },
  { talent: '孫糖畫',   artists: [] },
  { talent: '張大力',   artists: [] },
  { talent: '李書蟲',   artists: [] },
  { talent: '白鐵匠',   artists: [] },
  { talent: '電工陳',   artists: [] },
];
