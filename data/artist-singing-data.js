/* =====================================================
 * 藝人-唱聲 資料檔
 * ===================================================== */

/* ── 屬性 Tab 定義（農/商/文/娛） ──
 * id     : 用於 state key 與 CSS data-attr
 * label  : 對應 ARTISTS[].attr 的值
 * icon   : Tab 顯示圖示
 * active* : Tab 選中時的背景/文字色
 * { id: 'all',   label: '全部', icon: '', activeBg: '#3B82F6', activeText: '#fff' },
 * ─────────────────────────────────────────────────── */
const SINGING_ATTRS = [
  { id: 'nong',  label: '農',   icon: '', activeBg: '#16A34A', activeText: '#fff' },
  { id: 'shang', label: '商',   icon: '', activeBg: '#DC2626', activeText: '#fff' },
  { id: 'wen',   label: '文',   icon: '', activeBg: '#3B82F6', activeText: '#fff' },
  { id: 'yu',    label: '娛',   icon: '', activeBg: '#7C3AED', activeText: '#fff' },
];

/* ── 子項定義（未來可在此擴充更多子項）── */
const SINGING_SUBS = [
  { key: 'sub0', label: '想唱就唱' },
  { key: 'sub1', label: '唱得響亮' },
  { key: 'sub2', label: '歌透窗紗' },
];

/* SINGING_TALENT_MAP 已移除，請統一維護 data/talent-artist-data.js 的 TALENT_ARTIST_MAP */
