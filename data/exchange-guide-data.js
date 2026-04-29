/* ============================================================
 * exchange-guide-data.js — 兌換推薦指南 資料設定檔
 *
 * 新增或修改活動只需編輯此檔案，主程式不需要動。
 *
 * 欄位說明：
 *   cat    ：顯示用類別名稱
 *   catId  ：類別 ID（用於篩選，不顯示）
 *   name   ：活動名稱（🟢 = 目前進行中）
 *   note   ：(選填) 活動補充說明，灰色小字
 *   pools  ：兌換池陣列
 *     label：(選填) 池名稱，如「初級」「金龜」；單一池可省略
 *     items：兌換項目陣列
 *       name：項目名稱
 *       tier：優先度，填入 SSS | SS | S | A | B
 * ============================================================ */
const DATA = [

  // ── 日常類 ──────────────────────────────────────────
  {
    cat: '日常類', catId: 'daily',
    name: '各期小遊戲', note: '拍洋畫／翻花繩／打水飄等',
    pools: [{
      items: [
        { name: '藍卡(高級邀請函)', tier: 'SSS' },
        { name: '人才卡碎片', tier: 'SS' },
      ]
    }],
  },
  {
    cat: '日常類', catId: 'daily',
    name: '集卡碎片',
    pools: [{
      items: [
        { name: '小喇叭', tier: 'S' },
        { name: '雪花膏', tier: 'S' },
        { name: '三件套', tier: 'A' },
      ]
    }],
  },
  {
    cat: '日常類', catId: 'daily',
    name: '榜單兌換', note: '兌換遞增',
    pools: [
      {
        label: '跨服飯店', items: [
          { name: '渦輪(1-3)', tier: 'SS' },
          { name: '人參', tier: 'SS' },
          { name: '致富經(3)', tier: 'SS' },
          { name: '人才卡碎片(3)', tier: 'SS' },
          { name: '房卡', tier: 'S' },
          { name: '豬腳麵', tier: 'A' },
        ]
      },
      {
        label: '🟢跨服商戰', items: [
          { name: '小人參(10)', tier: 'A' },
          { name: '香香(10)', tier: 'A' },
          { name: '三件套(5)', tier: 'A' },
        ]
      },
    ],
  },

  // ── 活動類 ──────────────────────────────────────────
  {
    cat: '活動類', catId: 'event',
    name: '🟢第六號當舖',
    pools: [{
      items: [
        { name: '人才卡碎片', tier: 'SS' },
        { name: '高級挑戰書', tier: 'SS' },
        { name: '渦輪', tier: 'S' },
        { name: '護膚脂', tier: 'S' },
        { name: '澡堂門票', tier: 'S' },
        { name: '人參', tier: 'A' },
        { name: '舞廳門票', tier: 'A' },
        { name: '錄像廳門票', tier: 'A' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '🟢發光古井',
    pools: [{
      items: [
        { name: '三件套', tier: 'S' },
        { name: '香香', tier: 'S' },
        { name: '人才卡碎片', tier: 'A' },
        { name: '致富經', tier: 'A' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '小靈通',
    pools: [{
      items: [
        { name: '人參', tier: 'SS' },
        { name: '零件', tier: 'S' },
        { name: '香香', tier: 'A' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '豬豬配種',
    pools: [{
      items: [
        { name: '高級挑戰書', tier: 'S' },
        { name: '澡堂票', tier: 'S' },
        { name: '三件套', tier: 'A' },
        { name: '小菜', tier: 'A' },
        { name: '小飲', tier: 'A' },
        { name: '香香', tier: 'A' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '🟢牛魔降世',
    pools: [{
      label: '優先活動限購', items: [
        { name: '扇子', tier: 'SSS' },
        { name: '大聖令', tier: 'SSS' },
        { name: '舞廳票', tier: 'S' },
        { name: '人才卡碎片', tier: 'A' },
        { name: '致富經', tier: 'A' },
        { name: '澡堂票', tier: 'A' },
        { name: '春耕令', tier: 'A' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '時光之巔-1',
    pools: [{
      items: [
        { name: '天賦自選', tier: 'SSS' },
        { name: '渦輪', tier: 'SS' },
        { name: '舞廳票', tier: 'S' },
        { name: '小菜', tier: 'A' },
        { name: '小飲', tier: 'A' },
        { name: '香香', tier: 'A' },
        { name: '捧場喇叭', tier: 'A' },
        { name: '歌星加速卡', tier: 'A' },
        { name: '火車票', tier: 'A' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '🟢時光之巔-2深空紀元',
    pools: [{
      items: [
        { name: '皮膚', tier: 'SSS' },
        { name: '領航之證', tier: 'SSS' },
        { name: '火車票', tier: 'SS' },
        { name: '渦輪', tier: 'SS' },
        { name: '護膚脂', tier: 'S' },
        { name: '小菜', tier: 'A' },
        { name: '小飲', tier: 'A' },
        { name: '香香', tier: 'A' },
        { name: '捧場喇叭', tier: 'A' },
        { name: '豬腳面', tier: 'A' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '🟢投資風暴',
    pools: [{
      items: [
        { name: '小菜', tier: 'SS' },
        { name: '小飲', tier: 'SS' },
        { name: '小喇叭', tier: 'B' },
        { name: '香香', tier: 'B' },
        { name: '捧場喇叭', tier: 'B' },
        { name: '澡堂票', tier: 'B' },
        { name: '舞廳票', tier: 'B' },
      ]
    }],
  },
  {
    cat: '活動類', catId: 'event',
    name: '🟢明星打造',
    pools: [{
      items: [
        { name: '護膚脂', tier: 'S' },
        { name: '香香', tier: 'S' },
        { name: '抽獎券', tier: 'A' },
        { name: '人參', tier: 'B' },
        { name: '人才卡碎片', tier: 'C' },
        { name: '三件套', tier: 'C' },
      ]
    }],
  },

  // ── 公會賽 ──────────────────────────────────────────
  {
    cat: '公會賽', catId: 'guild',
    name: '🟢四靈遺跡',
    pools: [
      {
        label: '初級', items: [
          { name: '人才卡碎片', tier: 'S' },
          { name: '香香', tier: 'A' },
          { name: '能量汽水', tier: 'A' },
        ]
      },
      {
        label: '中級', items: [
          { name: '渦輪', tier: 'SS' },
          { name: '能量汽水', tier: 'A' },
        ]
      },
      {
        label: '高級', items: [
          { name: '守護神碎片', tier: 'SSS' },
          { name: '黑卡', tier: 'SSS' },
          { name: '特級挑戰書', tier: 'S' },
          { name: '香香', tier: 'A' },
          { name: '能量汽水', tier: 'A' },
        ]
      },
    ],
  },
  {
    cat: '公會賽', catId: 'guild',
    name: '運動會',
    pools: [
      {
        label: '初級', items: [
          { name: '人才卡碎片', tier: 'SS' },
          { name: '致富經(建議保留)', tier: 'B' },
        ]
      },
      {
        label: '中級', items: [
          { name: '聚義令', tier: 'SS' },
          { name: '小菜', tier: 'A' },
          { name: '小飲', tier: 'A' },
        ]
      },
      {
        label: '高級', items: [
          { name: '皮膚(藝人皮膚+鄭經理)', tier: 'SSS' },
          { name: '聚義令', tier: 'SS' },
          { name: '大魚', tier: 'SS' },
          { name: '大肉', tier: 'SS' },
        ]
      },
    ],
  },
  {
    cat: '公會賽', catId: 'guild',
    name: '🟢公會爭霸賽',
    pools: [{
      items: [
        { name: '人參', tier: 'S' },
        { name: '人才卡碎片', tier: 'S' },
        { name: '澡堂票', tier: 'A' },
        { name: '春耕令', tier: 'A' },
        { name: '香香', tier: 'A' },
        { name: '致富經', tier: 'A' },
        { name: '汽水', tier: 'A' },
      ]
    }],
  },
  {
    cat: '公會賽', catId: 'guild',
    name: '🟢楚漢爭霸', note: '樓層越高耗費越低，日限購',
    pools: [
      {
        label: '烽煙四起(銅幣)', items: [
          { name: '兵符×300', tier: 'SS' },
          { name: '曠世房產禮包', tier: 'S' },
          { name: '兵符', tier: 'A' },
          { name: '黑卡(頂級邀請函)', tier: 'A' },
        ]
      },
      {
        label: '中原逐鹿(銀幣)', items: [
          { name: '黑卡(頂級邀請函)', tier: 'S' },
          { name: '兵符', tier: 'A' },
          { name: '香香', tier: 'A' },
        ]
      },
      {
        label: '問鼎天下(金幣)', items: [
          { name: '皮膚', tier: 'SS' },
          { name: '黑卡(頂級邀請函)', tier: 'SS' },
          { name: '小人參', tier: 'SS' },
          { name: '香香', tier: 'SS' },
          { name: '春耕令', tier: 'SS' },
          { name: '兵符', tier: 'A' },
          { name: '南瓜盒', tier: 'A' },
        ]
      },
    ],
  },
  {
    cat: '公會賽', catId: 'guild',
    name: '決戰光明頂',
    pools: [{
      items: [
        { name: '印記', tier: 'SSS' },
        { name: '英雄帖', tier: 'SSS' },
        { name: '頂尖自選箱', tier: 'SSS' },
        { name: '人才卡碎片', tier: 'SS' },
        { name: '致富經', tier: 'SS' },
        { name: '護膚脂', tier: 'S' },
        { name: '澡堂票', tier: 'S' },
        { name: '三件套', tier: 'A' },
      ]
    }],
  },
  {
    cat: '公會賽', catId: 'guild',
    name: '問鼎中原',
    pools: [{
      items: [
        { name: '黃石遺卷', tier: 'SSS' },
        { name: '兵符', tier: 'S' },
        { name: '春耕', tier: 'S' },
        { name: '三件套', tier: 'A' },
      ]
    }],
  },
  {
    cat: '公會賽', catId: 'guild',
    name: '🟢賽龍舟',
    pools: [{
      items: [
        { name: '皮膚', tier: 'SS' },
        { name: '人才', tier: 'SS' },
        { name: '小菜', tier: 'S' },
        { name: '小飲', tier: 'S' },
        { name: '香香', tier: 'A' },
      ]
    }],
  },

  // ── 氪金抽獎 ──────────────────────────────────────────
  {
    cat: '氪金抽獎', catId: 'gacha',
    name: '🟢烏龜對對碰', note: '道具不保留',
    pools: [
      {
        label: '金龜', items: [
          { name: '黑卡', tier: 'SS' },
          { name: '金色三件套', tier: 'S' },
          { name: '人參', tier: 'A' },
          { name: '渦輪', tier: 'A' },
        ]
      },
      {
        label: '銀龜', items: [
          { name: '人才卡碎片', tier: 'S' },
          { name: '致富經', tier: 'A' },
          { name: '水滸碎片', tier: 'B' },
          { name: '英雄碎片', tier: 'C' },
          { name: '風華綴玉', tier: 'D' },
        ]
      },
      {
        label: '玩偶龜', items: [
          { name: '豬腳麵', tier: 'C' },
          { name: '澡堂票', tier: 'C' },
          { name: '三件套', tier: 'C' },
          { name: '護膚脂', tier: 'D' },
          { name: '舞廳票', tier: 'D' },
          { name: '錄影廳', tier: 'D' },
          { name: '春耕令', tier: 'D' },
        ]
      },
    ],
  },
  {
    cat: '氪金抽獎', catId: 'gacha',
    name: '🟢黃金礦工', note: '道具不保留',
    pools: [
      {
        label: '紅水晶', items: [
          { name: '黑卡', tier: 'SSS' },
        ]
      },
      {
        label: '藍水晶', items: [
          { name: '大魚', tier: 'SS' },
          { name: '大肉', tier: 'SS' },
          { name: '人才卡碎片', tier: 'B' },
          { name: '香香', tier: 'B' },
        ]
      },
      {
        label: '黃金', items: [
          { name: '小菜', tier: 'A' },
          { name: '小飲', tier: 'A' },
          { name: '香香', tier: 'B' },
          { name: '抽獎券', tier: 'B' },
          { name: '三件套', tier: 'C' },
        ]
      },
    ],
  },
  {
    cat: '氪金抽獎', catId: 'gacha',
    name: '🟢幸運之夜', note: '道具不保留',
    pools: [
      {
        label: '燈', items: [
          { name: '八珍宴帖', tier: 'SS' },
          { name: '三件套', tier: 'S' },
          { name: '渦輪', tier: 'C' },
        ]
      },
      {
        label: '玉佩', items: [
          { name: '副業許可證', tier: 'S' },
          { name: '人參', tier: 'B' },
          { name: '香香(紫)', tier: 'B' },
        ]
      },
      {
        label: '黃珠', items: [
          { name: '抽獎券', tier: 'A' },
          { name: '小喇叭', tier: 'B' },
          { name: '三件套', tier: 'C' },
          { name: '香香', tier: 'C' },
          { name: '春耕令', tier: 'C' },
          { name: '小人參', tier: 'C' },
        ]
      },
    ],
  },
  {
    cat: '氪金抽獎', catId: 'gacha',
    name: '🟢校園遊戲',
    pools: [{
      items: [
        { name: '護膚脂', tier: 'SS' },
        { name: '人才卡碎片', tier: 'S' },
        { name: '澡堂票', tier: 'S' },
        { name: '舞廳票', tier: 'A' },
        { name: '錄像廳票', tier: 'A' },
        { name: '春耕令', tier: 'A' },
        { name: '渦輪', tier: 'B' },
        { name: '人參', tier: 'B' },
        { name: '三件套', tier: 'B' },
      ]
    }],
  },
  {
    cat: '氪金抽獎', catId: 'gacha',
    name: '拔蘿蔔',
    pools: [{
      items: [
        { name: '人參', tier: 'SS' },
        { name: '保養脂', tier: 'SS' },
        { name: '計算機', tier: 'S' },
        { name: '錄影廳', tier: 'S' },
        { name: '澡堂票', tier: 'S' },
        { name: '春耕票', tier: 'S' },
        { name: '豬腳麵', tier: 'A' },
      ]
    }],
  },
  {
    cat: '氪金抽獎', catId: 'gacha',
    name: '🟢糖畫攤', note: '道具不保留',
    pools: [
      {
        label: '金', items: [
          { name: '人才卡碎片', tier: 'SS' },
          { name: '雪花膏', tier: 'S' },
          { name: '人參', tier: 'A' },
        ]
      },
      {
        label: '紫色', items: [
          { name: '火車票', tier: 'SS' },
          { name: '抽獎券', tier: 'S' },
          { name: '小喇叭', tier: 'A' },
          { name: '香香', tier: 'B' },
          { name: '人才卡碎片', tier: 'B' },
          { name: '致富經', tier: 'B' },
        ]
      },
    ],
  },
  {
    cat: '氪金抽獎', catId: 'gacha',
    name: '🟢女神花語',
    pools: [{
      items: [
        { name: '皮膚', tier: 'SSS' },
        { name: '典雅禮盒', tier: 'SS' },
        { name: '精緻禮袋', tier: 'SS' },
        { name: '影視邀請函', tier: 'S' },
        { name: '小喇叭', tier: 'S' },
      ]
    }],
  },

];
