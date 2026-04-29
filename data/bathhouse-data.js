/* ============================================================
 * bathhouse-data.js — 澡堂技師鍛鍊 資料設定檔
 *
 * 新增或修改加點項目只需編輯此檔案，主程式不需要動。
 *
 * 結構說明：
 *   category : 大類 ID（對應 CATEGORIES）
 *   name     : 子項名稱（非空 = 主列；空字串 = 下方加成子列）
 *   sub      : '上方加成' | '下方加成'
 *   talents  : 相關人才清單
 * ============================================================ */

/* 6 大類定義 */
const CATEGORIES = [
  { id: 'male',    label: '男澡堂部', icon: '' },
  { id: 'female',  label: '女澡堂部', icon: '' },
  { id: 'sauna',   label: '桑拿部', icon: '' },
  { id: 'massage', label: '按摩部', icon: '' },
  { id: 'tcm',     label: '中醫部', icon: '' },
  { id: 'vip',     label: '貴賓部', icon: '' },
];

const BROWS = [
  /* ── 男澡堂 ── */
  { category: 'male', name: '1號', sub: '上方加成', talents: ['麗萍', '彪子', '多情浪子', '曾守信', '步驚雲'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '2號', sub: '上方加成', talents: ['趙阿綿', '小陳哥', '黃飛鴻', '倪冬梅', '陳醫生', '青丘神女'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '6號', sub: '上方加成', talents: ['張大力', '邁克周', '魯智深', '鄭經裡', '阿星', '小燕子'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '9號', sub: '上方加成', talents: ['白鐵匠', '曾守信', '武松', '剛毅', '孫悟空', '福爾康'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '8號', sub: '上方加成', talents: ['劉二狗', '倪冬梅', '林獸醫', '搖滾明星', '登山員'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '12號', sub: '上方加成', talents: ['周大頭', '鄭經理', '聶小倩', '賽車手', '書文'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '16號', sub: '上方加成', talents: ['李雙', '剛毅', '白素貞', '林獸醫', '張良', '乾隆'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '18號', sub: '上方加成', talents: ['麗萍', '小陳哥', '強哥', '聶小倩', '武則天', '聶風'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  { category: 'male', name: '7號', sub: '上方加成', talents: ['賽車手', '彪子', '安賽腰鼓', '林沖', '牛魔王', '福爾康'] },
  { category: 'male', name: '', sub: '下方加成', talents: [] },

  /* ── 女澡堂 ── */
  { category: 'female', name: '12號', sub: '上方加成', talents: ['張冰棍', '唐志強', '強哥', '漁三哥', '牛魔王', '聶風'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '16號', sub: '上方加成', talents: ['孫糖畫', '火炬手', '林沖', '何律師', '書文', '乾隆'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '20號', sub: '上方加成', talents: ['李書蟲', '菜雕師', '宋江', '安賽腰鼓', '武則天', '永琪'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '21號', sub: '上方加成', talents: ['電工陳', '漁三哥', '高啟強', '一代大俠', '阿舟', '夏紫薇'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '22號', sub: '上方加成', talents: ['肖衛平', '何律師', '主持人', '大小說家', '金蟬子', '步驚雲'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '26號', sub: '上方加成', talents: ['非主流', '安賽腰鼓', '紫霞仙子', '高啟強', '孫悟空'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '28號', sub: '上方加成', talents: ['街機高手', '一代大俠', '紅衣教主', '主持人', '國際巨星', '永琪'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '29號', sub: '上方加成', talents: ['張冰棍', '火炬手', '黃飛鴻', '紫霞仙子', '國民男神', '牛魔王'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  { category: 'female', name: '88號', sub: '上方加成', talents: ['肖衛平', '唐志強', '剛毅', '魯智深', '阿星', '夏紫薇'] },
  { category: 'female', name: '', sub: '下方加成', talents: [] },

  /* ── 桑拿室 ── */
  { category: 'sauna', name: '30號', sub: '上方加成', talents: ['趙阿綿', '邁克周', '林沖', '白素貞', '登山員', '福爾康'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '31號', sub: '上方加成', talents: ['孫糖畫', '菜雕師', '魯智深', '紅衣教主', '阿星', '步驚雲'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '32號', sub: '上方加成', talents: ['張大力', '曾守信', '宋江', '搖滾明星', '金蟬子', '小燕子'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '36號', sub: '上方加成', talents: ['李書蟲', '漁三哥', '武松', '大小說家', '阿舟', '乾隆'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '38號', sub: '上方加成', talents: ['白鐵匠', '倪冬梅', '高啟強', '賽車手', '張良', '夏紫薇'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '130號', sub: '上方加成', talents: ['電工陳', '何律師', '林獸醫', '麗萍', '孫悟空'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '132號', sub: '上方加成', talents: ['劉二狗', '鄭經理', '主持人', '張冰棍', '書文', '姜子牙'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '136號', sub: '上方加成', talents: ['肖衛平', '安賽腰鼓', '聶小倩', '趙阿綿', '國際巨星', '聶風', '青丘神女'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  { category: 'sauna', name: '138號', sub: '上方加成', talents: ['周大頭', '小陳哥', '一代大俠', '宋江', '武則天', '小燕子'] },
  { category: 'sauna', name: '', sub: '下方加成', talents: [] },

  /* ── 按摩室 ── */
  { category: 'massage', name: '41號', sub: '上方加成', talents: ['周大頭', '剛毅', '紫霞仙子', '孫糖畫', '武則天', '步驚雲'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '40號', sub: '上方加成', talents: ['非主流', '彪子', '白素貞', '張大力', '國民男神', '青丘神女'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '43號', sub: '上方加成', talents: ['李雙', '一代大俠', '紅衣教主', '搖滾明星', '金蟬子'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '42號', sub: '上方加成', talents: ['街機高手', '唐志強', '多情浪子', '大小說家', '阿舟'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '46號', sub: '上方加成', talents: ['麗萍', '唐志強', '黃飛鴻', '賽車手', '陳醫生'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '48號', sub: '上方加成', talents: ['張冰棍', '小陳哥', '林沖', '高啟強', '張良', '姜子牙'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '45號', sub: '上方加成', talents: ['趙阿綿', '火炬手', '魯智深', '林獸醫', '阿星', '贏政'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '140號', sub: '上方加成', talents: ['孫糖畫', '邁克周', '宋江', '主持人', '登山員', '乾隆'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '142號', sub: '上方加成', talents: ['張大力', '菜雕師', '武松', '聶小倩', '孫悟空'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '47號', sub: '上方加成', talents: ['李書蟲', '曾守信', '高啟強', '紫霞仙子', '武則天', '聶風'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  { category: 'massage', name: '146號', sub: '上方加成', talents: ['非主流', '火炬手', '多情浪子', '武松', '孫悟空', '永琪'] },
  { category: 'massage', name: '', sub: '下方加成', talents: [] },

  /* ── 中醫部 ── */
  { category: 'tcm', name: '53號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  { category: 'tcm', name: '55號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  { category: 'tcm', name: '50號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  { category: 'tcm', name: '52號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  { category: 'tcm', name: '56號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  { category: 'tcm', name: '58號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  { category: 'tcm', name: '59號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  { category: 'tcm', name: '158號', sub: '上方加成', talents: [] },
  { category: 'tcm', name: '', sub: '下方加成', talents: [] },

  /* ── 貴賓室 ── */
  { category: 'vip', name: '668號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },

  { category: 'vip', name: '666號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },

  { category: 'vip', name: '688號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },

  { category: 'vip', name: '808號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },

  { category: 'vip', name: '818號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },

  { category: 'vip', name: '828號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },

  { category: 'vip', name: '868號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },

  { category: 'vip', name: '888號', sub: '上方加成', talents: [] },
  { category: 'vip', name: '', sub: '下方加成', talents: [] },
];
