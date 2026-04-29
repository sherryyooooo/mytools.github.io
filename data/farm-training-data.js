/* ============================================================
 * farm-training-data.js — 農田人才鍛鍊 資料設定檔
 *
 * 新增或修改加點項目只需編輯此檔案，主程式不需要動。
 * 人才清單已移至 data/settings-store.js 統一管理。
 * ============================================================ */

const ROWS = [
  { type: 'grain', name: '肉類儲存', sub: '初步研究', note: '', talents: ['步驚雲','麗萍','何律師','李雙','張大力'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '醃製改進', sub: '初步研究', note: '', talents: ['鄭經理','乾隆','街機高手','張冰棍','李書蟲','阿舟'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '煙燻改進', sub: '初步研究', note: '', talents: ['步驚雲','安賽腰鼓','武則天','彪子','白鐵匠','趙阿綿'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '醬製改進', sub: '初步研究', note: '', talents: ['剛毅','聶風','孫悟空','唐志強','孫糖畫','電工陳'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '冷藏改進', sub: '初步研究', note: '', talents: ['一代大俠','登山員','高啟強','劉二狗','小陳哥','張大力'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '烤製改進', sub: '初步研究', note: '', talents: ['多情浪子','肖衛平','火炬手','李書蟲','張良','阿星'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '風乾技藝', sub: '初步研究', note: '', talents: ['陳醫生','邁克周','周大頭','白鐵匠','強哥','林獸醫','青丘神女'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '醉燒改進', sub: '初步研究', note: '', talents: ['聶小倩','黃飛鴻','菜雕師','非主流','電工陳','牛魔王'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '醃製技藝', sub: '初步研究', note: '', talents: ['紫霞仙子','林沖','步驚雲','麗萍','曾守信','劉二狗'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '煙燻技藝', sub: '初步研究', note: '', talents: ['白素貞','魯智深','聶風','肖衛平','漁三哥','張冰棍'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '叫花改進', sub: '初步研究', note: '', talents: ['紅衣教主','宋江','陳醫生','倪冬梅','周大頭','趙阿綿'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '醬製技藝', sub: '初步研究', note: '', talents: ['武松','高啟強','非主流','孫糖畫','主持人','書文','青丘神女'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '酸湯改進', sub: '初步研究', note: '', talents: ['一代大俠','麗萍','登山員','李雙','搖滾明星','阿星'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '冷藏技藝', sub: '初步研究', note: '', talents: ['林沖','多情浪子','孫悟空','街機高手','劉二狗','張冰棍'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '辣燒改進', sub: '初步研究', note: '', talents: ['魯智深','彪子','肖衛平','趙阿綿','張良','強哥'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '考製技藝', sub: '初步研究', note: '', talents: ['宋江','黃飛鴻','武則天','唐志強','周大頭','孫糖畫'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '醉燒技藝', sub: '初步研究', note: '', talents: ['武松','何律師','乾隆','非主流','小陳哥','張大力'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '發酵改進', sub: '初步研究', note: '', talents: ['鄭經理','聶風','火炬手','李書蟲','牛魔王','林獸醫'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '叫花技藝', sub: '初步研究', note: '', talents: ['安賽腰鼓','小燕子','武則天','邁克周','白鐵匠','主持人'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '酸湯技藝', sub: '初步研究', note: '', talents: ['剛毅','孫悟空','菜雕師','電工陳','搖滾明星','永琪'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '捶打改進', sub: '初步研究', note: '', talents: ['聶小倩','曾守信','高啟強','劉二狗','阿舟','福爾康'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '辣燒技藝', sub: '初步研究', note: '', talents: ['紫霞仙子','漁三哥','肖衛平','夏紫薇','阿星','書文'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '發酵技藝', sub: '初步研究', note: '', talents: ['白素貞','林沖','小燕子','乾隆','周大頭','倪冬梅'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '風乾進價', sub: '初步研究', note: '', talents: ['紅衣教主','魯智深','非主流','李雙','牛魔王','永琪'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '捶打技藝', sub: '初步研究', note: '', talents: ['宋江','何律師','街機高手','小陳哥','賽車手','福爾康'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '風乾精研', sub: '初步研究', note: '', talents: ['武松','鄭經理','彪子','火炬手','大小說家','夏紫薇'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '醃製進價', sub: '初步研究', note: '', talents: ['聶小倩','何律師','安賽腰鼓','唐志強','邁克周','國際巨星'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '醃製精研', sub: '初步研究', note: '', talents: ['紫霞仙子','剛毅','菜雕師','小陳哥','張良','林獸醫','青丘神女'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '煙燻精研', sub: '初步研究', note: '', talents: ['白素貞','一代大俠','曾守信','邁克周','主持人','阿舟'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },

  { type: 'meat', name: '煙燻進價', sub: '初步研究', note: '', talents: ['紅衣教主','多情浪子','登山員','漁三哥','菜雕師','搖滾明星'] },
  { type: 'meat', name: '', sub: '精準突破', note: '' },

  { type: 'grain', name: '醬製精研', sub: '初步研究', note: '', talents: ['曾守信','高啟強','聶風','倪冬梅','國民男神','強哥'] },
  { type: 'grain', name: '', sub: '精準突破', note: '' },
];