/*
 * Additional gemstone records kept separate from the page's presentation logic.
 */
(function attachGemstoneArchiveExtension(global) {
  "use strict";

  const db = global.LINGYU_GEMSTONE_DATABASE;
  if (!db || !Array.isArray(db.gemstones)) return;
  const openSampleLibrary = global.LINGYU_OPEN_SAMPLE_LIBRARY;

  const extraSource = {
    name: "灵玉智库宝玉石档案扩展",
    url: "https://www.gia.edu/gem-encyclopedia"
  };

  const ruleBook = {
    jadeite: { keywords: ["纤维", "粒状", "半透明", "翠绿"], hue: "green", texture: .62, translucency: .62, confusions: ["nephrite", "quartzite-jade", "serpentine-jade"] },
    nephrite: { keywords: ["油脂", "纤维", "交织", "温润"], hue: "green", texture: .45, translucency: .36, confusions: ["jadeite", "serpentine-jade", "quartzite-jade"] },
    agate: { keywords: ["条带", "环带", "同心", "玛瑙"], pattern: "banded", texture: .72, confusions: ["chalcedony", "dyed-agate", "glass"] },
    "rock-crystal": { keywords: ["晶面", "六方", "包体", "透明"], hue: "white", transparency: .82, texture: .2, confusions: ["glass", "topaz"] },
    amethyst: { keywords: ["紫色", "色带", "晶簇"], hue: "purple", transparency: .62, confusions: ["purple-fluorite", "glass"] },
    citrine: { keywords: ["黄", "橙黄", "石英"], hue: "yellow", transparency: .65, confusions: ["yellow-topaz", "heat-treated-amethyst", "glass"] },
    turquoise: { keywords: ["蓝绿", "基质", "网纹", "蜡状"], hue: "cyan", texture: .55, confusions: ["howlite", "dyed-magnesite", "plastic"] },
    "lapis-lazuli": { keywords: ["蓝", "黄铁矿", "方解石", "粒状"], hue: "blue", texture: .68, confusions: ["dyed-calcite", "sodalite"] },
    emerald: { keywords: ["祖母绿", "包体", "园", "裂隙", "绿柱石"], hue: "green", transparency: .58, texture: .5, confusions: ["green-tourmaline", "tsavorite", "glass"] },
    aquamarine: { keywords: ["海蓝", "蓝绿", "绿柱石", "透明"], hue: "cyan", transparency: .75, confusions: ["blue-topaz", "glass"] },
    ruby: { keywords: ["红", "刚玉", "丝状", "生长带"], hue: "red", transparency: .52, confusions: ["red-spinel", "red-garnet", "glass-filled-ruby"] },
    sapphire: { keywords: ["蓝", "刚玉", "丝状", "生长带"], hue: "blue", transparency: .56, confusions: ["blue-spinel", "iolite", "blue-glass"] },
    garnet: { keywords: ["等轴", "红", "绿色", "包体"], hue: "red", transparency: .58, confusions: ["ruby", "spinel", "glass"] },
    tourmaline: { keywords: ["柱状", "纵纹", "多色", "色带"], hue: "green", texture: .58, confusions: ["beryl", "glass", "synthetic-corundum"] },
    opal: { keywords: ["变彩", "蛋白", "白色基质", "游彩"], pattern: "play-of-color", transparency: .42, confusions: ["opal-doublet", "iridescent-glass", "moonstone"] },
    moonstone: { keywords: ["月光", "蓝光", "晕彩", "长石"], hue: "white", pattern: "adularescence", transparency: .52, confusions: ["opal", "synthetic-spinel", "glass"] },
    peridot: { keywords: ["黄绿", "橄榄绿", "睡莲叶", "包体"], hue: "green", transparency: .63, confusions: ["green-tourmaline", "green-glass"] },
    topaz: { keywords: ["解理", "透明", "柱状", "高透明"], hue: "white", transparency: .82, confusions: ["quartz", "aquamarine", "glass"] },
    amber: { keywords: ["树脂", "流纹", "昆虫", "有机"], hue: "orange", transparency: .55, confusions: ["copal", "plastic", "colored-glass"] },
    pearl: { keywords: ["珠层", "珍珠光泽", "钻孔", "有机"], hue: "white", pattern: "pearlescence", transparency: .12, confusions: ["glass-pearl", "shell-pearl", "plastic"] },
    diamond: { keywords: ["火彩", "切工", "无色", "八面体"], hue: "white", transparency: .94, texture: .18, confusions: ["moissanite", "cubic-zirconia", "zircon"] },
    spinel: { keywords: ["红", "蓝", "单折射", "八面体"], hue: "red", transparency: .66, confusions: ["ruby", "sapphire", "garnet"] },
    zircon: { keywords: ["双折射", "高折射", "火彩", "晶体"], hue: "brown", transparency: .72, confusions: ["diamond", "cubic-zirconia", "topaz"] },
    alexandrite: { keywords: ["变色", "蓝绿", "红紫", "猫眼"], pattern: "color-change", transparency: .54, confusions: ["synthetic-alexandrite", "color-change-garnet", "glass"] },
    tanzanite: { keywords: ["蓝紫", "多色性", "黝帘石"], hue: "purple", transparency: .65, confusions: ["iolite", "sapphire", "glass"] },
    morganite: { keywords: ["粉", "绿柱石", "桃色", "透明"], hue: "pink", transparency: .72, confusions: ["kunzite", "pink-tourmaline", "pink-topaz"] },
    sunstone: { keywords: ["闪光", "砂金", "长石", "铜片"], hue: "orange", pattern: "aventurescence", confusions: ["aventurine-glass", "rutilated-quartz"] },
    iolite: { keywords: ["多色性", "蓝紫", "灰黄", "堇青石"], hue: "blue", transparency: .54, confusions: ["tanzanite", "sapphire", "cordierite-glass"] },
    kunzite: { keywords: ["粉紫", "锂辉石", "多色性", "解理"], hue: "pink", transparency: .74, confusions: ["morganite", "amethyst", "pink-tourmaline"] },
    "quartz-rose": { keywords: ["粉", "半透明", "星光", "石英"], hue: "pink", transparency: .25, confusions: ["pink-glass", "pink-chalcedony", "morganite"] },
    "dushan-jade": { keywords: ["斑杂", "多色", "细粒", "斜长石"], hue: "green", texture: .7, confusions: ["jadeite", "nephrite", "quartzite-jade"] },
    "serpentine-jade": { keywords: ["黄绿", "蜡状", "蛇纹", "黑点"], hue: "green", texture: .54, confusions: ["nephrite", "jadeite", "calcite"] },
    "quartzite-jade": { keywords: ["粒状", "石英", "玻璃光泽", "染色"], hue: "green", texture: .62, confusions: ["jadeite", "agate", "chalcedony"] },
    chalcedony: { keywords: ["玉髓", "隐晶质", "半透明", "蜡状"], hue: "white", texture: .36, confusions: ["agate", "quartzite-jade", "glass"] },
    "dyed-agate": { keywords: ["颜色鲜艳", "条带", "染色", "色聚集"], pattern: "banded", hue: "red", texture: .68, confusions: ["agate", "dyed-chalcedony", "glass"] },
    "aventurine-quartz": { keywords: ["砂金", "云母", "石英", "闪光"], hue: "green", pattern: "aventurescence", confusions: ["jadeite", "sunstone", "aventurine-glass"] },
    obsidian: { keywords: ["火山玻璃", "黑色", "贝壳状断口", "玻璃光泽"], hue: "black", texture: .22, confusions: ["black-glass", "tourmaline", "jet"] },
    "tiger-eye": { keywords: ["猫眼", "丝绢", "黄褐", "纤维"], hue: "brown", pattern: "chatoyancy", confusions: ["quartz-cat-eye", "glass-cat-eye"] },
    malachite: { keywords: ["孔雀绿", "同心环带", "条纹", "铜矿"], hue: "green", pattern: "banded", texture: .74, confusions: ["dyed-jasper", "green-glass", "serpentine-jade"] },
    chrysocolla: { keywords: ["蓝绿", "铜矿", "基质", "不透明"], hue: "cyan", texture: .78, confusions: ["turquoise", "dyed-howlite", "malachite"] },
    labradorite: { keywords: ["拉长石", "蓝闪", "彩闪", "长石"], hue: "blue", pattern: "labradorescence", confusions: ["moonstone", "opal", "iridescent-glass"] },
    amazonite: { keywords: ["天河石", "蓝绿", "格纹", "长石"], hue: "cyan", texture: .56, confusions: ["turquoise", "microcline", "green-glass"] },
    jasper: { keywords: ["碧玉", "不透明", "斑纹", "隐晶质"], hue: "red", texture: .82, confusions: ["agate", "dyed-stone", "ceramic"] },
    "chrysoprase": { keywords: ["绿玉髓", "苹果绿", "镍", "半透明"], hue: "green", transparency: .38, confusions: ["jadeite", "green-glass", "dyed-chalcedony"] },
    "yellow-dragon-jade": { keywords: ["黄龙玉", "黄色", "玉髓", "蜡状"], hue: "yellow", texture: .42, confusions: ["citrine", "nephrite", "dyed-chalcedony"] },
    "chicken-blood-stone": { keywords: ["鸡血", "朱砂", "白地", "印章"], hue: "red", texture: .8, confusions: ["red-jasper", "dyed-marble", "resin"] },
    "shoushan-stone": { keywords: ["寿山石", "田黄", "印章", "蜡状"], hue: "orange", texture: .7, confusions: ["yellow-dragon-jade", "wax", "resin"] },
    coral: { keywords: ["珊瑚", "有机", "枝状", "纵纹"], hue: "red", pattern: "organic-growth", texture: .72, confusions: ["red-coral-imitation", "dyed-bone", "resin"] },
    "shell-pearls": { keywords: ["砗磲", "贝壳", "同心纹", "有机"], hue: "white", pattern: "pearlescence", confusions: ["pearl", "resin", "ceramic"] },
    moissanite: { keywords: ["双折射", "火彩", "无色", "碳化硅"], hue: "white", transparency: .9, texture: .2, confusions: ["diamond", "cubic-zirconia", "zircon"] },
    "cubic-zirconia": { keywords: ["无色", "火彩", "合成立方氧化锆"], hue: "white", transparency: .9, texture: .2, confusions: ["diamond", "moissanite", "glass"] },
    "purple-fluorite": { keywords: ["紫色", "萤石", "解理", "立方"], hue: "purple", transparency: .7, confusions: ["amethyst", "glass", "purple-spinel"] },
    "tsavorite-garnet": { keywords: ["鲜绿", "石榴石", "等轴", "透明"], hue: "green", transparency: .65, confusions: ["emerald", "green-tourmaline", "green-glass"] },
    "demantoid-garnet": { keywords: ["黄绿", "马尾丝", "石榴石", "火彩"], hue: "green", transparency: .68, confusions: ["peridot", "tsavorite-garnet", "green-glass"] },
    chrysoberyl: { keywords: ["黄绿", "猫眼", "金绿宝石", "高硬度"], hue: "yellow", pattern: "chatoyancy", transparency: .66, confusions: ["cat-eye-quartz", "peridot", "glass"] },
    kyanite: { keywords: ["蓝色", "刀片状", "解理", "多色性"], hue: "blue", texture: .58, confusions: ["sapphire", "iolite", "blue-glass"] },
    diopside: { keywords: ["绿", "辉石", "黑色包体", "柱状"], hue: "green", transparency: .54, confusions: ["peridot", "tourmaline", "emerald"] },
    "black-jade": { keywords: ["黑色", "玉", "透光", "纤维"], hue: "black", texture: .54, confusions: ["black-obsidian", "nephrite", "black-glass"] },
    "green-jasper": { keywords: ["绿", "碧玉", "不透明", "斑纹"], hue: "green", texture: .84, confusions: ["jadeite", "serpentine-jade", "dyed-stone"] },
    sodalite: { keywords: ["深蓝", "白色脉", "方钠石", "粒状"], hue: "blue", texture: .68, confusions: ["lapis-lazuli", "dyed-calcite", "blue-glass"] },
    rhodochrosite: { keywords: ["粉红", "白色条带", "菱锰矿", "碳酸盐"], hue: "pink", pattern: "banded", texture: .68, confusions: ["pink-calcite", "dyed-agate", "pink-glass"] },
    smithsonite: { keywords: ["蓝绿", "葡萄状", "菱锌矿", "蜡状"], hue: "cyan", pattern: "organic-growth", texture: .62, confusions: ["turquoise", "chrysocolla", "dyed-calcite"] },
    "black-tourmaline": { keywords: ["黑碧玺", "柱状", "纵纹", "电气石"], hue: "black", texture: .62, confusions: ["obsidian", "black-glass", "nephrite"] },
    prehnite: { keywords: ["葡萄状", "浅绿", "沸石", "半透明"], hue: "green", pattern: "organic-growth", transparency: .48, texture: .5, confusions: ["chrysoprase", "green-glass", "serpentine-jade"] },
    "petrified-wood": { keywords: ["硅化木", "木纹", "年轮", "石化"], hue: "brown", pattern: "banded", texture: .78, confusions: ["wood", "jasper", "resin"] },
    "beijing-white-jade": { keywords: ["京白玉", "白色", "石英岩", "粒状"], hue: "white", texture: .62, confusions: ["nephrite", "marble", "glass"] },
    bloodstone: { keywords: ["血石", "深绿玉髓", "红色斑点", "氧化铁包体"], hue: "green", pattern: "speckled", texture: .66, confusions: ["jasper", "dyed-chalcedony", "glass"] },
    carnelian: { keywords: ["红玉髓", "橙红", "铁致色", "蜡状"], hue: "orange", transparency: .38, confusions: ["dyed-agate", "red-jasper", "glass"] },
    "nanhong-agate": { keywords: ["南红玛瑙", "红色玉髓", "橙红", "朱红"], hue: "red", pattern: "banded", texture: .55, confusions: ["dyed-agate", "red-jasper", "glass"] },
    onyx: { keywords: ["缟玛瑙", "平行色带", "玉髓", "黑玛瑙"], hue: "black", pattern: "banded", texture: .48, confusions: ["dyed-chalcedony", "black-glass", "plastic"] },
    ametrine: { keywords: ["紫黄晶", "紫黄分区", "石英", "双色"], pattern: "bicolor", transparency: .72, confusions: ["heat-treated-quartz", "glass", "synthetic-quartz"] },
    "fire-agate": { keywords: ["火玛瑙", "褐底虹彩", "玉髓", "反射光"], pattern: "play-of-color", hue: "orange", texture: .68, confusions: ["iridescent-glass", "opal", "coated-agate"] },
    "blue-lace-agate": { keywords: ["蓝纹玛瑙", "浅蓝", "蕾丝纹带", "玉髓"], hue: "blue", pattern: "banded", texture: .68, confusions: ["dyed-chalcedony", "dyed-howlite", "blue-glass"] },
    charoite: { keywords: ["紫龙晶", "纤维状", "旋纹", "紫色集合体"], hue: "purple", texture: .72, confusions: ["lepidolite", "sugilite", "dyed-stone"] },
    larimar: { keywords: ["拉利玛", "蓝色针钠钙石", "白色云纹", "斑驳"], hue: "cyan", texture: .58, confusions: ["dyed-howlite", "turquoise", "blue-calcite"] },
    "black-opal": { keywords: ["黑欧泊", "深色底色", "变彩", "色斑"], hue: "black", pattern: "play-of-color", transparency: .42, confusions: ["opal-doublet", "opal-triplet", "iridescent-glass"] },
    moldavite: { keywords: ["捷克陨石", "天然玻璃", "蚀刻表面", "气泡"], hue: "green", transparency: .44, texture: .42, confusions: ["green-glass", "synthetic-glass", "slag-glass"] },
    hydrogrossular: { keywords: ["水钙铝榴石", "石榴石", "绿色", "细粒集合体"], hue: "green", texture: .62, confusions: ["jadeite", "nephrite", "green-glass"] },
    variscite: { keywords: ["磷铝石", "苹果绿", "网脉", "不透明"], hue: "green", texture: .64, confusions: ["turquoise", "chrysocolla", "dyed-howlite"] },
    rhodonite: { keywords: ["蔷薇辉石", "粉红", "黑色锰氧化物脉", "集合体"], hue: "pink", texture: .7, confusions: ["rhodonite-glass", "pink-jasper", "rhodochrosite"] },
    sugilite: { keywords: ["苏纪石", "紫色", "含锂硅酸盐", "黑色基质"], hue: "purple", texture: .62, confusions: ["charoite", "dyed-quartzite", "purple-glass"] },
    howlite: { keywords: ["白松石", "白色", "灰黑网脉", "多孔"], hue: "white", texture: .68, confusions: ["turquoise", "dyed-magnesite", "resin"] },
    apatite: { keywords: ["磷灰石", "磷酸盐", "蓝绿", "六方晶体"], hue: "cyan", transparency: .7, texture: .4, confusions: ["aquamarine", "emerald", "tourmaline", "glass"] },
    titanite: { keywords: ["榍石", "sphene", "高色散", "强火彩"], hue: "yellow", transparency: .62, texture: .42, confusions: ["zircon", "diamond", "demantoid-garnet"] },
    andalusite: { keywords: ["红柱石", "多色性", "方向变色", "十字石"], hue: "brown", transparency: .58, texture: .45, confusions: ["iolite", "tourmaline", "glass"] },
    scapolite: { keywords: ["方柱石族", "柱晶石", "四方晶系", "猫眼"], hue: "yellow", transparency: .62, texture: .48, confusions: ["tourmaline", "apatite", "glass"] },
    danburite: { keywords: ["硅硼钙石", "无色", "淡黄", "柱状晶体"], hue: "white", transparency: .82, texture: .25, confusions: ["topaz", "rock-crystal", "zircon"] },
    euclase: { keywords: ["蓝柱石", "蓝色", "完全解理", "绿柱石伴生"], hue: "blue", transparency: .72, texture: .3, confusions: ["aquamarine", "topaz", "emerald"] },
    phenakite: { keywords: ["硅铍石", "无色", "菱面体", "高硬度"], hue: "white", transparency: .84, texture: .22, confusions: ["rock-crystal", "aquamarine", "topaz"] }
  };

  const extraSpecs = [
    ["dushan-jade", "独山玉", "Dushan jade", "玉石 / 多矿物集合体", "斜长石族", "#6ca98e", "绿色、白色、紫色、黄色、多色", "中国河南南阳", "斜长石和黝帘石等矿物组成的细粒集合体，常见颜色斑杂。"],
    ["serpentine-jade", "岫玉（蛇纹石玉）", "Serpentine jade", "玉石 / 蛇纹石玉", "蛇纹石族", "#a3b85f", "黄绿、浅绿、白、黑绿", "中国辽宁岫岩、新西兰、阿富汗", "超基性岩蚀变形成的蛇纹石集合体，常呈蜡状光泽。"],
    ["quartzite-jade", "石英岩玉", "Quartzite jade", "玉石 / 石英质玉", "石英族", "#8ab58c", "白、绿、黄、紫、红", "中国、巴西、印度", "石英颗粒集合体，常经过染色、抛光或充填后用于饰品。"],
    ["chalcedony", "玉髓", "Chalcedony", "玉石 / 石英质玉", "石英族", "#b8c7c5", "白、灰、蓝、绿、红、黄", "巴西、土耳其、印度、澳大利亚", "隐晶质石英集合体，半透明和蜡状光泽较常见。"],
    ["aventurine-quartz", "东陵石", "Aventurine quartz", "玉石 / 石英质玉", "石英族", "#4b9a73", "绿色、红色、蓝色、金色", "印度、巴西、俄罗斯", "含片状包体的石英质材料，转动时可见砂金效应。"],
    ["obsidian", "黑曜石", "Obsidian", "玉石 / 天然玻璃", "火山玻璃", "#303943", "黑、棕、彩虹、金曜", "墨西哥、美国、冰岛、中国", "火山熔岩快速冷却形成的天然玻璃，常见贝壳状断口。"],
    ["tiger-eye", "虎睛石", "Tiger's eye", "玉石 / 石英质玉", "石英族", "#b88342", "金黄、黄褐、蓝灰、红棕", "南非、澳大利亚、印度", "纤维状矿物假象交代形成猫眼效应，常见丝绢光泽。"],
    ["malachite", "孔雀石", "Malachite", "玉石 / 碳酸盐矿物", "碳酸盐矿物", "#25886b", "孔雀绿、深绿、黑绿", "刚果（金）、俄罗斯、澳大利亚", "含铜矿物风化带形成，常见同心环带和条纹。"],
    ["chrysocolla", "硅孔雀石", "Chrysocolla", "玉石 / 含水硅酸盐", "硅酸盐矿物", "#3da9a5", "蓝绿、青绿、蓝色", "美国、秘鲁、智利、刚果（金）", "铜矿床氧化带中的含水硅酸盐，常与石英、孔雀石共生。"],
    ["labradorite", "拉长石", "Labradorite", "玉石 / 长石", "长石族", "#687d9e", "灰、蓝、绿、金色彩闪", "马达加斯加、加拿大、芬兰", "斜长石的特殊品种，转动时可见拉长石光彩。"],
    ["amazonite", "天河石", "Amazonite", "玉石 / 长石", "长石族", "#6db4a9", "蓝绿、青绿、白色网纹", "俄罗斯、美国、巴西、中国", "微斜长石的绿色变种，常见格纹和白色条纹。"],
    ["jasper", "碧玉", "Jasper", "玉石 / 石英质玉", "石英族", "#9b594e", "红、黄、绿、褐、多色", "印度、巴西、澳大利亚、中国", "不透明的隐晶质石英，常见斑纹、流纹和基质。"],
    ["chrysoprase", "绿玉髓", "Chrysoprase", "玉石 / 石英质玉", "石英族", "#76c78b", "苹果绿、黄绿、浅绿", "澳大利亚、波兰、巴西", "含镍致色的玉髓，常呈半透明苹果绿色。"],
    ["yellow-dragon-jade", "黄龙玉", "Yellow dragon jade", "玉石 / 石英质玉", "石英族", "#d7a947", "金黄、橙黄、红、白", "中国云南", "以黄色和田黄样外观为特色的石英质玉材料，常呈蜡状光泽。"],
    ["chicken-blood-stone", "鸡血石", "Chicken-blood stone", "玉石 / 印章石", "黏土矿物与辰砂", "#a84d4d", "朱红、白、黄、黑", "中国浙江昌化、内蒙古巴林", "以辰砂红色斑块和印章用途著名，基质可为多种细粒岩石。"],
    ["shoushan-stone", "寿山石", "Shoushan stone", "玉石 / 印章石", "黏土矿物集合体", "#c88e62", "黄、红、白、灰、褐", "中国福建福州", "细腻的叶蜡石、高岭石等集合体，常用于雕刻和篆刻。"],
    ["coral", "珊瑚", "Coral", "有机宝石", "有机碳酸盐", "#c85f5d", "红、粉、白、黑", "地中海、日本、台湾海域", "珊瑚虫骨骼形成的有机宝石，常见纵向生长纹。"],
    ["shell-pearls", "砗磲", "Tridacna shell", "有机宝石 / 贝壳", "碳酸钙", "#eee2c8", "白、乳白、金色、紫灰", "南海、太平洋热带海域", "大型贝壳材料，断面和表面常见同心生长纹。"],
    ["moissanite", "莫桑石", "Moissanite", "合成宝石 / 仿钻材料", "碳化硅 SiC", "#b8d7e6", "无色、灰、黄绿", "实验室培育为主", "珠宝市场常见合成碳化硅材料，具有强火彩和双折射。"],
    ["cubic-zirconia", "立方氧化锆", "Cubic zirconia", "合成宝石 / 仿钻材料", "立方晶系", "#d9e5ef", "无色、粉、黄、蓝、红", "实验室合成", "常见无色仿钻材料，具有较高折射率和密度，可调节颜色与透明度。"],
    ["purple-fluorite", "紫色萤石", "Purple fluorite", "宝石 / 卤化物矿物", "萤石族", "#8367bd", "紫、绿、黄、无色", "中国、墨西哥、英国", "常见立方晶体和完全解理，紫色常呈色带。"],
    ["tsavorite-garnet", "沙弗莱石", "Tsavorite garnet", "彩色宝石", "石榴石族", "#40a86e", "鲜绿、黄绿", "肯尼亚、坦桑尼亚", "绿色钙铝榴石，通常不依赖明显处理即可呈现鲜绿色。"],
    ["demantoid-garnet", "翠榴石", "Demantoid garnet", "彩色宝石", "石榴石族", "#6fae50", "黄绿、翠绿", "俄罗斯、纳米比亚、马达加斯加", "绿色钙铁榴石，马尾状包体是经典观察线索。"],
    ["chrysoberyl", "金绿宝石", "Chrysoberyl", "彩色宝石", "金绿宝石族", "#b4a94e", "黄绿、黄、棕黄", "斯里兰卡、巴西、俄罗斯", "高硬度彩色宝石，部分样品具有猫眼或变色效应。"],
    ["kyanite", "蓝晶石", "Kyanite", "彩色宝石 / 硅酸盐", "蓝晶石族", "#5274b6", "蓝、蓝灰、绿、橙", "尼泊尔、印度、巴西、美国", "刀片状晶体和方向性硬度、解理是重要识别线索。"],
    ["diopside", "透辉石", "Diopside", "彩色宝石 / 辉石", "辉石族", "#4b9961", "绿、黄绿、黑", "俄罗斯、巴基斯坦、意大利", "单斜辉石矿物，绿色透明品种可用于宝石。"],
    ["black-jade", "墨玉", "Black jade", "玉石 / 软玉", "角闪石族", "#252d2f", "黑、墨绿、灰黑", "中国、新西兰、加拿大、俄罗斯", "深色软玉材料，透光性、结构和颜色成因需要综合判断。"],
    ["green-jasper", "绿碧玉", "Green jasper", "玉石 / 石英质玉", "石英族", "#5d9070", "绿、黄绿、褐绿", "印度、巴西、澳大利亚、中国", "不透明绿色碧玉，常见斑纹和基质变化。"],
    ["sodalite", "方钠石", "Sodalite", "宝石 / 铝硅酸盐矿物", "方钠石族", "#435fbd", "深蓝、蓝紫、白色脉", "加拿大、巴西、纳米比亚、俄罗斯", "富钠铝硅酸盐矿物，常见深蓝色与白色方解石脉共生。"],
    ["rhodochrosite", "菱锰矿", "Rhodochrosite", "宝石 / 碳酸盐矿物", "碳酸盐矿物", "#d87586", "粉红、玫红、白色条带", "阿根廷、秘鲁、南非、美国", "锰矿床中的碳酸盐矿物，条带状和葡萄状集合体较常见。"],
    ["smithsonite", "菱锌矿", "Smithsonite", "宝石 / 碳酸盐矿物", "碳酸盐矿物", "#66bbb5", "蓝绿、绿、白、粉", "纳米比亚、希腊、美国、墨西哥", "锌矿床氧化带中的碳酸盐矿物，常呈葡萄状或钟乳状集合体。"],
    ["black-tourmaline", "黑碧玺", "Black tourmaline", "彩色宝石 / 电气石", "电气石族", "#27323b", "黑、黑褐、深绿", "巴西、阿富汗、巴基斯坦、中国", "富铁电气石常呈黑色柱状晶体，纵向条纹和三方柱形可见。"],
    ["prehnite", "葡萄石", "Prehnite", "宝石 / 含水硅酸盐", "葡萄石族", "#9ac8a4", "浅绿、黄绿、白、无色", "南非、澳大利亚、中国、加拿大", "低温热液或裂隙环境形成，常见葡萄状、肾状和半透明集合体。"],
    ["petrified-wood", "硅化木", "Petrified wood", "玉石 / 有机遗存", "石英质集合体", "#92765d", "褐、红褐、灰、黑、黄", "美国、中国、印度尼西亚、阿根廷", "木材组织被二氧化硅等矿物交代保存，常可见年轮或木纹结构。"],
    ["beijing-white-jade", "京白玉", "Beijing white jade", "玉石 / 石英质玉", "石英族", "#e9e7dc", "白、灰白、乳白", "中国北京及周边地区", "以白色细粒石英岩为主的商业名称，外观可与白玉、大理岩和玻璃混淆。"],
    ["bloodstone", "血石（血玉髓；Heliotrope）", "Bloodstone", "宝石 / 玉髓品种", "石英族", "#496d4d", "深绿、红褐斑点", "印度等玉髓产区（非穷尽）", "深绿色玉髓中常见红色至褐红色氧化铁斑点；血石是传统品种名，不是鸡血石，也不表示含有血液成分。"],
    ["carnelian", "红玉髓", "Carnelian", "宝石 / 玉髓品种", "石英族", "#c8663d", "橙、橙红、红褐", "印度、巴西、乌拉圭等玉髓产区（非穷尽）", "橙红至红褐色玉髓的商业品种名，颜色常与铁杂质有关；它不是独立矿物种，具体成因和处理需逐件判断。"],
    ["nanhong-agate", "南红玛瑙", "Nanhong agate", "宝石 / 玛瑙品种", "石英族", "#c94f45", "橙红、朱红、深红、紫红", "中国四川凉山、云南保山等", "红色玉髓质玛瑙，颜色常与细小赤铁矿颗粒有关；常见珠串、雕件和弧面戒面。"],
    ["onyx", "缟玛瑙（缟纹玉髓）", "Onyx", "宝石 / 玉髓品种", "石英族", "#30343b", "黑白、灰白、褐白平行色带", "印度等玉髓产区（非穷尽）", "宝石学中的缟玛瑙指具有近于平行色带的玉髓；市面单色黑玛瑙常经染色，方解石质缟纹石是另一种材料。"],
    ["ametrine", "紫黄晶", "Ametrine", "彩色宝石 / 石英品种", "石英族", "#a17b9d", "紫、黄、橙黄双色", "玻利维亚东部阿纳伊矿（主要商业来源；尤鲁蒂矿曾有出产报道）", "同一石英晶体中出现紫水晶色区与黄水晶色区的双色品种；天然生长分带和处理材料都可能呈现双色，不能仅凭色界判断成因。"],
    ["fire-agate", "火玛瑙", "Fire agate", "宝石 / 玉髓品种", "石英族", "#b96a38", "褐、橙、红、绿虹彩", "墨西哥及美国西南部的有限产区", "玉髓质玛瑙中的虹彩品种；薄层铁氧化物或氢氧化物薄膜干涉是现有解释之一，但机理尚未定论。"],
    ["blue-lace-agate", "蓝纹玛瑙", "Blue lace agate", "宝石 / 玉髓商品品种", "石英族", "#81b7c7", "浅蓝、白、灰蓝条带", "纳米比亚南部 Ysterputs（历史著名产区）", "具有细密浅蓝与白色波状条带的玉髓商品品种；经典蓝纹料的来源与矿区有关，其他蓝色条带玉髓不一定属于同一商业品种。"],
    ["charoite", "紫龙晶（查罗石质岩）", "Charoite", "观赏石 / 查罗石质岩", "硅酸盐矿物集合体", "#895ca9", "紫、薰衣草紫、黑白脉纹", "俄罗斯萨哈共和国穆伦地块", "以查罗石为重要组成矿物的紫色观赏岩，常与其他硅酸盐共生；市场上的紫龙晶通常是多矿物集合体，并非单一纯矿物切块。"],
    ["larimar", "拉利玛（蓝色针钠钙石）", "Larimar", "彩色宝石 / 针钠钙石品种", "链状硅酸盐矿物", "#65b7c4", "天蓝、蓝绿、白色云纹", "多米尼加共和国巴拉奥纳省", "针钠钙石的蓝色宝石级品种，蓝白相间的斑驳纹理是常见外观；拉利玛是商业名称，不是独立矿物种。"],
    ["black-opal", "黑欧泊", "Black opal", "宝石 / 欧泊品种", "蛋白石", "#343a43", "黑、深灰底色及多色变彩", "澳大利亚新南威尔士州闪电岭等", "以深色底色衬托变彩的贵重欧泊品种；变彩的颜色、亮度、图案和覆盖范围共同影响观赏效果。"],
    ["moldavite", "莫尔道瓦石（捷克陨石）", "Moldavite", "天然玻璃 / 撞击玻璃", "天然玻璃", "#5f8064", "橄榄绿、黄绿、褐绿", "捷克波希米亚与摩拉维亚散布区（撞击源区位于德国 Ries）", "约 1470 万年前德国 Ries 撞击事件相关的天然玻璃；莫尔道瓦石不是矿物晶体，主要产于捷克散布区，表面蚀刻纹和气泡只能作为观察线索。"],
    ["hydrogrossular", "水钙铝榴石", "Hydrogrossular", "彩色宝石 / 石榴石品种", "石榴石族", "#638e63", "绿、粉、白、灰", "南非、加拿大、美国等", "含羟基的钙铝榴石系列材料，可呈透明晶体或细粒集合体；绿色集合料常用于珠宝和雕刻。"],
    ["variscite", "磷铝石（绿松石状磷铝石）", "Variscite", "磷酸盐矿物 / 装饰材料", "磷酸盐矿物", "#78a779", "苹果绿、蓝绿、浅绿、白脉", "德国（类型产地）、美国犹他州等", "含水磷酸铝矿物，常呈苹果绿至蓝绿色块状或网脉状；有时被制作成绿松石风格饰品，但两者不是同一种矿物。"],
    ["rhodonite", "蔷薇辉石", "Rhodonite", "观赏石 / 锰硅酸盐矿物", "似辉石族（pyroxenoid）", "#c77b8f", "粉红、玫红、黑色脉纹", "俄罗斯、瑞典、日本、澳大利亚等", "锰硅酸盐似辉石矿物；粉红基底常伴黑色锰氧化物脉，块状材料常用于雕刻和装饰。"],
    ["sugilite", "苏纪石", "Sugilite", "硅酸盐矿物 / 宝石级集合体", "环状硅酸盐矿物", "#754c8f", "紫、玫紫、蓝紫、黑褐", "日本（类型产地）、南非（重要宝石料产地）", "稀少的含锂环状硅酸盐矿物；紫色宝石料多为苏纪石与其他矿物组成的集合体，颜色和基质比例变化较大。"],
    ["howlite", "豪莱石（白松石）", "Howlite", "含硼硅酸盐矿物 / 装饰材料", "含水硼硅酸盐", "#e5e2d9", "白、灰白、灰黑网脉", "加拿大新斯科舍省（类型产地）、美国", "白色多孔含水硼硅酸盐矿物，常见灰黑色脉纹，也常被染成蓝色仿绿松石；“白松石”是市场俗称。"],
    ["apatite", "磷灰石（宝石级常见氟磷灰石）", "Apatite (gem-quality fluorapatite)", "磷酸盐矿物 / 彩色宝石", "磷灰石族", "#42a9b6", "蓝、蓝绿、绿、黄、紫、无色", "巴西、墨西哥、马达加斯加等（非穷尽；宝石料产地需逐件核实）", "磷灰石是矿物族名称；宝石级材料常为氟磷灰石，具体端元和成分应以检测为准。"],
    ["titanite", "榍石（宝石贸易名：Sphene）", "Titanite (Sphene)", "硅酸盐矿物 / 彩色宝石", "榍石族", "#b79b4d", "黄、黄绿、绿、棕、褐", "巴西、墨西哥、瑞士、马达加斯加等（非穷尽）", "榍石的传统宝石贸易名为 sphene，常有很强色散和火彩；晶体脆且硬度偏低。"],
    ["andalusite", "红柱石", "Andalusite", "硅酸盐矿物 / 彩色宝石", "铝硅酸盐矿物", "#9a7755", "褐绿、粉褐、橄榄绿、黄绿", "西班牙、巴西、斯里兰卡等（非穷尽）", "红柱石、蓝晶石和矽线石均为 Al2SiO5 多形矿物，晶体结构各有特点；红柱石宝石常见随观察方向变化的多色性。"],
    ["scapolite", "方柱石族（Scapolite）", "Scapolite group", "硅酸盐矿物 / 彩色宝石", "方柱石族", "#c3a15e", "无色、白、黄、粉、紫", "马达加斯加等（非穷尽）", "方柱石族主要包括钠柱石（marialite）—钙柱石（meionite）系列，另有硫酸根端元 silvialite；性质随组成变化，不应按单一固定成分描述。"],
    ["danburite", "硅硼钙石", "Danburite", "硼硅酸盐矿物 / 彩色宝石", "硅硼酸盐矿物", "#e2d6a8", "无色、白、淡黄、黄褐", "墨西哥、马达加斯加、缅甸、越南等（非穷尽）", "硅硼钙石可形成透明切磨宝石和晶体标本，硬度较高，颜色和透明度表现清楚。"],
    ["euclase", "蓝柱石（Euclase）", "Euclase", "硅酸盐矿物 / 彩色宝石", "铍铝硅酸盐", "#6d9eb5", "无色、浅蓝、蓝、蓝绿、绿", "巴西、哥伦比亚、津巴布韦等（非穷尽）", "蓝柱石可见于伟晶岩及低温热液等环境，常见蓝色至绿色透明晶体；虽有较高硬度，却有完全解理，受撞击易裂。"],
    ["phenakite", "硅铍石", "Phenakite", "硅酸盐矿物 / 彩色宝石", "硅铍酸盐矿物", "#d8d9d5", "无色、白、黄、粉、褐", "巴西、俄罗斯、马达加斯加、斯里兰卡等（非穷尽）", "硅铍石常呈无色透明晶体，偶作切磨宝石；含铍矿物，不应切磨或制造粉尘。"]
  ];

  const mindatSearch = term =>
    `https://www.mindat.org/search.php?search=${encodeURIComponent(term)}`;
  const giaEncyclopedia = "https://www.gia.edu/gem-encyclopedia";
  const quartzRefs = [
    { name: "GIA Gem Encyclopedia", url: giaEncyclopedia },
    { name: "Mindat mineral database — chalcedony", url: mindatSearch("chalcedony") }
  ];
  const richSpecs = {
    bloodstone: {
      formula: "SiO2（以微晶质石英为主的隐晶质集合体；红斑常为铁氧化物）",
      crystalSystem: "石英为三方晶系；血石为隐晶质集合体，非单晶",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.530–1.543（玉髓参考值）",
      specificGravity: "约 2.55–2.70（包体含量会使密度变化）",
      visualClues: ["深绿色底色中可见红褐色点状或斑块状包体", "整体多为不透明至微半透明，抛光面呈蜡状至玻璃光泽", "红点的形状和多少差异很大，不能单凭红点判断天然或品质"],
      identificationPoints: ["先确认是否为玉髓质材料，再观察红色包体、条带和基质结构", "需与红色斑点碧玉、染色玉髓及树脂仿品区分", "折射率、密度、放大观察及实验室检测可用于确认材料和处理状态"],
      commonImitations: ["红点碧玉", "染色玉髓", "树脂或玻璃仿品"],
      treatments: ["染色或浸渍", "抛光和表面浸蜡"],
      safeObservation: ["在中性白光下观察绿底与红斑的边界", "用放大镜检查裂隙处是否有颜色聚集", "避免长时间浸泡和强酸碱清洗"],
      unsafeTests: ["刮划、火烧、热针或酸液测试"],
      related: ["chalcedony", "jasper", "agate"],
      imageQuery: "\"bloodstone\" chalcedony mineral specimen",
      sourceRefs: [
        { name: "Geology.com — Bloodstone", url: "https://geology.com/gemstones/bloodstone/" },
        { name: "Gemdat — Bloodstone / Heliotrope", url: "https://www.gemdat.org/gem-7616.html" }
      ]
    },
    carnelian: {
      formula: "SiO2（玉髓，微晶质石英）",
      crystalSystem: "石英为三方晶系；红玉髓为隐晶质集合体，非单晶",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.535–1.539",
      specificGravity: "约 2.58–2.64",
      visualClues: ["颜色由橙红至红褐，常呈半透明块状或珠粒", "局部色带、云雾状分布和微细包体均可能出现", "颜色鲜艳度与天然性、是否染色之间没有简单对应关系"],
      identificationPoints: ["与红玛瑙、普通玉髓的矿物属性接近，常需结合颜色分布和样品结构描述", "染色可能在孔隙、裂隙或表面呈现异常聚色", "专业鉴定结合放大观察、折射率及光谱分析，不以手机照片下结论"],
      commonImitations: ["染色玉髓或玛瑙", "红色碧玉", "玻璃"],
      treatments: ["加热改色", "染色", "抛光或浸蜡"],
      safeObservation: ["观察透光时颜色是否均匀", "用放大镜检查裂隙和孔隙处色料", "避免强热和不明化学清洗剂"],
      unsafeTests: ["刮划、火烧、热针或溶剂测试"],
      related: ["agate", "chalcedony", "bloodstone"],
      imageQuery: "\"carnelian\" chalcedony specimen",
      sourceRefs: [
        { name: "Gemdat — Carnelian", url: "https://www.gemdat.org/gem-9333.html" },
        { name: "Mindat mineral database — Carnelian", url: "https://www.mindat.org/min-9333.html" }
      ]
    },
    "nanhong-agate": {
      formula: "SiO2（玉髓质玛瑙，微晶质石英集合体）",
      crystalSystem: "石英为三方晶系；南红玛瑙为隐晶质集合体",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.53–1.54（玉髓参考范围）",
      specificGravity: "约 2.58–2.65（随结构和包体变化）",
      visualClues: ["常见橙红至红色，透明度可从微透到不透明", "颜色可均匀，也可有天然色带、细纹或不同深浅的过渡", "珠子孔道、裂隙和雕刻转角处适合检查颜色与填充状态"],
      identificationPoints: ["先确认报告材料名称为玛瑙或玉髓类，再核对颜色处理信息", "需留意染色、充填、拼合材料及红色玻璃仿品", "红色深浅和俗称不能单独说明天然属性、产区或品质"],
      commonImitations: ["染色玛瑙", "红色玻璃", "红色树脂或拼合材料"],
      treatments: ["可能涉及加热、染色或充填；按具体样品检测和披露确认"],
      safeObservation: ["在中性白光下观察红色调、透明度和纹理", "检查孔道、裂隙和雕刻细部有无颜色集中或填充痕迹", "购买时核对材料名称、处理结论与实物对应关系"],
      unsafeTests: ["热针、火烧、刮划、溶剂和酸液测试"],
      related: ["agate", "carnelian", "chalcedony"],
      imageQuery: "\"Nanhong agate\" carved beads gemstone",
      sourceRefs: [
        { name: "GIA Gems & Gemology — Nanhong: A New Red Gem Material", url: "https://www.gia.edu/gems-gemology/spring-2015-gemnews-nanhong-red-gem-material" }
      ]
    },
    onyx: {
      formula: "SiO2（玉髓，微晶质石英）",
      crystalSystem: "石英为三方晶系；缟玛瑙为隐晶质集合体，非单晶",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.530–1.543（玉髓参考值）",
      specificGravity: "约 2.60–2.65（Mindat列示范围；杂质和集合体结构会造成变化）",
      visualClues: ["宝石学缟玛瑙以平行色带为特征，带纹通常比普通玛瑙更平直", "黑色单色珠饰常以黑玛瑙销售，颜色可能经过染色", "检测报告可注明材料名称，商品名称可作为补充记录"],
      identificationPoints: ["区分玉髓质缟玛瑙、方解石质缟纹石和黑色染色材料", "放大观察色带连续性、孔隙和裂隙处是否聚色", "高价值或涉及材质承诺的样品应核对检测报告和处理披露"],
      commonImitations: ["染色玉髓", "方解石质缟纹石", "黑玻璃和树脂"],
      treatments: ["黑色染色", "浸蜡和表面抛光"],
      safeObservation: ["检查是否存在平行色带", "观察钻孔、裂隙处的颜色是否集中", "避免把商业名称直接当作矿物鉴定结论"],
      unsafeTests: ["刮划、火烧、酸液或溶剂测试"],
      related: ["agate", "chalcedony"],
      imageQuery: "\"onyx\" chalcedony cabochon",
      imageExcludeTerms: ["onyx marble", "calcite"],
      sourceRefs: [
        { name: "GIA Gems & Gemology — Some Gemological Challenges in Identifying Black Opaque Gem Materials", url: "https://www.gia.edu/gems-gemology/winter-1996-identification-black-gem-material-johnson0" },
        { name: "Mindat mineral database — Onyx", url: "https://www.mindat.org/min-2999.html" }
      ]
    },
    ametrine: {
      formula: "SiO2",
      crystalSystem: "三方晶系",
      hardness: "莫氏 7",
      refractiveIndex: "约 1.544–1.553",
      specificGravity: "约 2.64–2.69（参考测值约 2.66）",
      visualClues: ["同一晶体或切磨成品中并存紫色与黄色至橙黄色区域", "颜色分区边界可直可渐变，切磨方向会改变视觉比例", "颜色界线清楚，颜色成因与处理状态有检测记录"],
      identificationPoints: ["先确认石英材料，再判断双色区是否来自天然生长、加热或其他处理", "应与拼合石、染色石英、玻璃和合成石英区分", "处理和产地信息应以可靠检测或明确披露为准"],
      commonImitations: ["拼合石", "染色或热处理石英", "玻璃和合成石英"],
      treatments: ["热处理或辐照", "拼合、染色等仿制方式"],
      safeObservation: ["在白光下观察紫黄分区和过渡边界", "从不同方向转动查看色带变化", "购买时确认是否为天然双色石英及相关处理披露"],
      unsafeTests: ["刻划、加热、紫外灯单独判定天然性"],
      related: ["amethyst", "citrine", "rock-crystal"],
      imageQuery: "\"ametrine\" bicolor quartz",
      sourceRefs: [
        { name: "GIA Gem Encyclopedia — Ametrine", url: "https://www.gia.edu/ametrine" },
        { name: "GIA Gems & Gemology — Update on Ametrine from the Yuruty Mine, Bolivia", url: "https://www.gia.edu/gems-gemology/ametrine-yuruty-mine-update" }
      ]
    },
    "fire-agate": {
      formula: "SiO2（玉髓质玛瑙）",
      crystalSystem: "石英为三方晶系；火玛瑙为玉髓质集合体，非单晶",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.53–1.54",
      specificGravity: "约 2.58–2.64",
      visualClues: ["褐色玉髓表面或抛光面在反射光下可见红、橙至绿色虹彩", "薄层铁氧化物或氢氧化物造成的薄膜干涉是现有解释之一，具体机理尚未定论", "相关研究仍有限，虹彩通常不像欧泊变彩那样随角度显著变化"],
      identificationPoints: ["在反射光下观察褐底上的虹彩及其与表面纹理的关系", "火玛瑙的虹彩通常不随角度大幅变化；不能把强烈角度变彩当作必要特征", "需与镀膜、涂层和虹彩玻璃区分，材料身份及处理应由放大观察和专业检测确认"],
      commonImitations: ["虹彩玻璃", "表面镀膜石", "普通玛瑙涂层"],
      treatments: ["抛光显露内部虹彩", "表面涂层或裂隙充填需披露"],
      safeObservation: ["在柔和反射光下观察自然表面或抛光弧面的虹彩", "缓慢改变观察方向并记录光效，不以角度变化单独判断", "避免强力清洁和超声清洗"],
      unsafeTests: ["刮擦、火烧、强酸或超声清洗"],
      related: ["agate", "chalcedony", "opal"],
      imageQuery: "\"fire agate\" chalcedony specimen",
      sourceRefs: [
        { name: "GIA Gems & Gemology — Structures Behind the Spectacle: A Review of Optical Effects in Phenomenal Gemstones and Their Underlying Nanotextures", url: "https://www.gia.edu/gems-gemology/summer-2025-phenomenal-gemstones" },
        { name: "GIA Gems & Gemology — “Dragon's Eye” Fire Agate", url: "https://www.gia.edu/gems-gemology/winter-2015-microworld-dragons-eye-fire-agate" },
        { name: "Mindat mineral database — Fire Agate", url: "https://www.mindat.org/min-7601.html" }
      ]
    },
    "blue-lace-agate": {
      formula: "SiO2（玉髓，微晶质石英）",
      crystalSystem: "石英为三方晶系；蓝纹玛瑙为隐晶质集合体，非单晶",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.530–1.543（玉髓参考值）",
      specificGravity: "约 2.58–2.64",
      visualClues: ["浅蓝、白色与灰蓝色细密波状条带交替", "多数材料呈半透明至不透明，抛光后条带更清楚", "鲜艳均一的蓝色可能涉及染色，不能只按颜色判断"],
      identificationPoints: ["观察天然条带是否连续、层次是否与玉髓结构相符", "与染色玉髓、染色菱镁矿和玻璃仿品区分", "放大观察裂隙和孔隙处的色料聚集，必要时送检"],
      commonImitations: ["染色玉髓", "染色菱镁矿或豪莱石", "蓝色玻璃"],
      treatments: ["染色", "浸蜡和表面抛光"],
      safeObservation: ["在白光下观察蓝白条带的连续性", "检查孔隙和裂隙处的颜色", "避免染色材料接触溶剂和强清洁剂"],
      unsafeTests: ["热针、溶剂、刮划和酸液测试"],
      related: ["agate", "chalcedony", "carnelian"],
      imageQuery: "\"blue lace agate\" specimen",
      sourceRefs: [
        { name: "Journal of African Earth Sciences — Blue lace agate and chalcedony pseudomorphs from Ysterputs in southern Namibia", url: "https://doi.org/10.1016/j.jafrearsci.2024.105211" },
        { name: "Mindat mineral database — Chalcedony", url: mindatSearch("chalcedony blue lace agate Ysterputs") }
      ]
    },
    charoite: {
      formula: "复杂含水硅酸盐；现代结构式：(K,Sr,Ba,Mn)15-16(Ca,Na)32[Si70(O,OH)180](OH,F)4·nH2O",
      crystalSystem: "查罗石为单斜晶系；紫龙晶商品料常为多矿物集合体",
      hardness: "莫氏约 5–6（集合体依矿物比例变化）",
      refractiveIndex: "约 1.550–1.559",
      specificGravity: "约 2.54–2.78（紫龙晶集合料随伴生矿物变化）",
      visualClues: ["紫色纤维状、羽毛状或旋涡状纹理常与白色、黑色矿物共生", "抛光后可见丝绢至玻璃光泽，纹样具有明显方向变化", "不同矿区和伴生矿物会造成颜色、结构差异"],
      identificationPoints: ["“紫龙晶”是商业名称，需区分查罗石与其他紫色矿物的组合料", "可结合集合体结构、折射率、密度、拉曼或其他矿物学检测", "仅凭紫色和旋纹不能确认矿物组成或产地"],
      commonImitations: ["染色石英岩", "紫色萤石", "苏纪石及其他紫色集合体"],
      treatments: ["抛光、浸蜡或树脂充填", "染色仿制材料"],
      safeObservation: ["观察纤维状旋纹及黑白伴生脉", "检查表面裂隙和树脂光泽", "避免跌落、强酸碱和高温"],
      unsafeTests: ["硬度刻划、火烧、酸液或强溶剂测试"],
      related: ["sugilite", "purple-fluorite", "nephrite"],
      imageQuery: "\"charoite\" mineral specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Charoite", url: "https://www.handbookofmineralogy.org/pdfs/Charoite.pdf" },
        { name: "International Gem Society — Charoite", url: "https://www.gemsociety.org/article/charoite-jewelry-and-gemstone-information/" }
      ]
    },
    larimar: {
      formula: "NaCa2Si3O8(OH)（针钠钙石）",
      crystalSystem: "三斜晶系",
      hardness: "约 4.5–5（矿物参考；紧密纤维样品可测至约 5–6）",
      refractiveIndex: "约 1.59–1.63（蓝绿色样品常见范围）",
      specificGravity: "约 2.62–2.87；富含辉铜矿内部特征的样品可达约 2.90",
      visualClues: ["蓝色至蓝绿色基底中常见白色云雾或波纹", "多为不透明至半透明块状，颜色和纹理变化较大", "“海纹”是外观描述，不代表固定成分或品质等级"],
      identificationPoints: ["拉利玛是蓝色针钠钙石的商业名称，并非独立矿物种", "需与染色豪莱石、菱镁矿、绿松石和蓝色方解石区分", "材料身份、处理和产地应以检测或可追溯来源证明为准"],
      commonImitations: ["染色豪莱石或菱镁矿", "蓝色方解石", "树脂和玻璃"],
      treatments: ["染色", "浸蜡或树脂浸渍", "表面抛光"],
      safeObservation: ["观察蓝白云纹和不规则色带", "检查钻孔和裂隙处是否异常聚色", "避免长时间日晒、高温和化学品接触"],
      unsafeTests: ["长时间曝晒、加热、刮划和酸液测试"],
      related: ["turquoise", "chrysocolla", "variscite"],
      imageQuery: "\"larimar\" pectolite",
      sourceRefs: [
        { name: "GIA Gems & Gemology — Imitation Larimar", url: "https://www.gia.edu/gems-gemology/sp13-gni-imitation-larimar" },
        { name: "GIA Gems & Gemology — Blue Pectolite from the Dominican Republic", url: "https://www.gia.edu/gems-gemology/winter-1989-blue-pectolite-woodruff" }
      ]
    },
    "black-opal": {
      formula: "SiO2·nH2O（含水非晶质二氧化硅）",
      crystalSystem: "非晶质",
      hardness: "莫氏 5.5–6.5",
      refractiveIndex: "约 1.37–1.47",
      specificGravity: "约 1.98–2.25",
      visualClues: ["深灰至黑色底色上可出现红、橙、绿、蓝等变彩", "变彩由内部微结构对光线的作用形成，转动时色斑位置和颜色会变化", "深色底色是外观特征，不等同于变彩强或品质高"],
      identificationPoints: ["确认材料为欧泊，并查看天然、合成、拼合及底衬情况", "比较变彩亮度、覆盖范围、图案、观看方向和底色", "黑色底衬、双层石或三层石应在销售描述和报告中说明"],
      commonImitations: ["双层欧泊", "三层欧泊", "合成欧泊", "虹彩玻璃"],
      treatments: ["可能有染色、烟熏或表面处理；以检测和销售披露为准"],
      safeObservation: ["在柔和白光下从正面及不同角度观察变彩", "检查是否有拼合边界、背衬、裂纹和表面磨损", "避免干燥高温、骤冷和超声清洗"],
      unsafeTests: ["浸水、加热、火烧、刻划和超声清洗"],
      related: ["opal", "fire-agate", "moonstone"],
      imageQuery: "\"black opal\" Lightning Ridge gemstone",
      sourceRefs: [
        { name: "GIA Gem Encyclopedia — Opal", url: "https://www.gia.edu/opal" }
      ]
    },
    moldavite: {
      formula: "天然硅酸盐玻璃（成分可变，非固定化学计量矿物）",
      crystalSystem: "非晶质天然撞击玻璃",
      hardness: "约 5（Gem-A 1995 文献值；不建议用刻划测试鉴定）",
      refractiveIndex: "约 1.480–1.510",
      specificGravity: "约 2.27–2.46（成分和气泡会影响测值）",
      visualClues: ["常见橄榄绿至褐绿色不规则玻璃质碎块", "天然表面常有蚀刻凹坑、沟槽和起伏，内部可见气泡或流纹", "颜色和表面纹理可能被仿制，单一特征不能确认天然撞击成因"],
      identificationPoints: ["莫尔道瓦石属于天然玻璃（撞击玻璃），不是晶体矿物", "需与人工玻璃、炉渣和其他天然玻璃区分，可结合包体、成分及实验室检测", "产地和稀有性声明应有可核实的来源依据"],
      commonImitations: ["绿色人工玻璃", "炉渣玻璃", "其他天然玻璃"],
      treatments: ["通常以原貌切磨或抛光", "树脂填充、染色或仿制玻璃应披露"],
      safeObservation: ["在透射光下观察气泡、流纹和表面蚀刻", "避免撞击、强热和不明溶剂", "高价值样品应送具备资质的机构检测"],
      unsafeTests: ["火烧、热针、敲击和强力刻划"],
      related: ["obsidian", "amber", "rock-crystal"],
      imageQuery: "\"moldavite\" tektite specimen",
      sourceRefs: [
        { name: "GIA Gems & Gemology — Imitation Moldavite", url: "https://www.gia.edu/gems-gemology/summer-2021-labnotes-imitation-moldavite" },
        { name: "GIA Gems & Gemology — Moldavites: Natural or Fake?", url: "https://www.gia.edu/gems-gemology/spring-2015-gemnews-moldavites-natural-fake" },
        { name: "Journal of Gemmology — Properties of Moldavite (1995)", url: "https://gem-a.com/wp-content/uploads/2023/11/JoG1995_24_6.pdf" },
        { name: "Mindat mineral database — Moldavite", url: mindatSearch("moldavite tektite") }
      ]
    },
    hydrogrossular: {
      formula: "Ca3Al2(SiO4)3−x(OH)4x（组成随羟基含量变化）",
      crystalSystem: "等轴晶系",
      hardness: "莫氏约 6.5–7.5",
      refractiveIndex: "约 1.70–1.74（随组成变化）",
      specificGravity: "约 3.3–3.7（随组成和集合体状态变化）",
      visualClues: ["常见绿色、粉色、白色或灰色，可呈透明晶体或不透明细粒集合体", "集合料抛光后常显均匀、细密的表面质感", "有的绿色集合料以雕件或弧面成品销售，材料名称应看检测结果"],
      identificationPoints: ["确认报告写明水钙铝榴石或对应石榴石材料名称", "需与翡翠、软玉、蛇纹石玉和其他绿色集合料区分", "绿色、细腻感和较高密度都不能单独确认材料身份"],
      commonImitations: ["翡翠", "软玉", "蛇纹石玉", "绿色石英岩"],
      treatments: ["具体样品的浸渍、染色或拼合情况应核实并披露"],
      safeObservation: ["在白光下观察颜色、颗粒质感和透明度", "检查表面涂层、裂隙填充和珠孔颜色", "对照检测报告中的材料名称与实物"],
      unsafeTests: ["刻划、敲击、热针、酸液和溶剂测试"],
      related: ["garnet", "jadeite", "nephrite"],
      imageQuery: "\"hydrogrossular\" green garnet cabochon specimen",
      sourceRefs: [
        { name: "GIA Gems & Gemology — Hydrogrossular Garnet", url: "https://www.gia.edu/gems-gemology/spring-2015-gemnews-hydrogrossular-garnet" }
      ]
    },
    variscite: {
      formula: "AlPO4·2H2O",
      crystalSystem: "正交晶系",
      hardness: "约 4–5（块状宝石材料常见范围；Handbook 报 4.5）",
      refractiveIndex: "主折射率约 1.550–1.594（随晶向变化）",
      specificGravity: "矿物实测约 2.57–2.61；块状集合料可能有差异",
      visualClues: ["常见苹果绿至蓝绿色不透明块体，伴随白色、褐色或黑色网脉", "颜色和网脉可形成似绿松石的装饰图案", "材料偏软，边角和薄片容易磨损或崩裂"],
      identificationPoints: ["与绿松石、硅孔雀石、染色菱镁矿和豪莱石区分", "网脉和颜色相似并不意味着矿物种相同，需结合折射率、密度和光谱", "商业上称为“绿松石状”的材料应核实检测名称"],
      commonImitations: ["绿松石", "染色豪莱石或菱镁矿", "硅孔雀石"],
      treatments: ["染色", "树脂稳定化或浸渍", "抛光和表面浸蜡"],
      safeObservation: ["观察绿色基质与脉纹的组合", "检查钻孔和裂隙处颜色是否聚集", "单独收纳，避免与硬度较高的首饰摩擦"],
      unsafeTests: ["刻划、酸液、热针和溶剂测试"],
      related: ["turquoise", "chrysocolla", "howlite"],
      imageQuery: "\"variscite\" mineral specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Variscite", url: "https://www.handbookofmineralogy.org/pdfs/variscite.pdf" },
        { name: "Gemdat — Variscite", url: "https://www.gemdat.org/gem-4156.html" }
      ]
    },
    rhodonite: {
      formula: "理想端元 MnSiO3；天然成分可由 Fe2+、Mg、Ca 等置换 Mn2+，常用通式 (Mn2+,Fe2+,Mg,Ca)SiO3",
      crystalSystem: "三斜晶系；似辉石族（pyroxenoid），不是辉石",
      hardness: "约 5.5–6.5（莫氏）",
      refractiveIndex: "约 1.71–1.75",
      specificGravity: "约 3.57–3.76",
      visualClues: ["粉红至玫红色基底常见黑色锰氧化物脉或斑块", "多为不透明块状，局部可见白色石英或其他伴生矿物", "颜色、黑脉比例和透明度随样品变化明显"],
      identificationPoints: ["与菱锰矿、粉色碧玉、染色石和玻璃仿品区分", "粉色底与黑色脉纹是常见外观线索，不是单独的鉴定结论", "可结合折射率、密度、矿物组合和拉曼等方法确认"],
      commonImitations: ["菱锰矿", "粉色碧玉", "染色石英岩和玻璃"],
      treatments: ["染色或树脂浸渍", "抛光和裂隙充填"],
      safeObservation: ["观察粉红基质与黑色脉纹的交切关系", "检查表面涂层和裂隙充填", "避免磕碰及强酸性清洁剂"],
      unsafeTests: ["酸液、刻划、火烧或热针测试"],
      related: ["rhodochrosite", "jasper", "sugilite"],
      imageQuery: "\"rhodonite\" mineral specimen",
      sourceRefs: [
        { name: "GIA Gems & Gemology — Rhodonite-Pyroxmangite from Tanatz Alp", url: "https://www.gia.edu/gems-gemology/spring-2020-rhodonite-pyroxmangite-tanatz-alp" },
        { name: "Handbook of Mineralogy — Rhodonite", url: "https://handbookofmineralogy.org/pdfs/rhodonite.pdf" }
      ]
    },
    sugilite: {
      formula: "KNa2(Fe3+,Mn3+,Al)2Li3Si12O30；成分可置换，宝石料常为集合体",
      crystalSystem: "六方晶系；宝石料常为集合体",
      hardness: "约 5.5–6.5（莫氏）",
      refractiveIndex: "矿物主折射率约 1.595–1.611；Wessels 宝石料常测约 1.607，含玉髓集合料可另见约 1.544",
      specificGravity: "约 2.74–2.79",
      visualClues: ["紫色、玫紫至蓝紫色块体常与黑色或褐色基质共生", "多数珠宝料不透明至微半透明，色泽和纹理分布不均", "部分材料经抛光后颜色更鲜明，但不能仅凭颜色确认苏纪石"],
      identificationPoints: ["与紫龙晶、染色石英岩、紫色萤石和玻璃区分", "苏纪石可与其他矿物共生，需确认样品主体及混合矿物", "颜色、产地和处理承诺应通过专业检测和可追溯资料核实"],
      commonImitations: ["紫龙晶", "染色石英岩", "紫色玻璃和萤石"],
      treatments: ["染色或树脂稳定化", "抛光及裂隙充填"],
      safeObservation: ["在中性光下观察颜色与黑褐基质", "放大检查裂隙和表面树脂", "避免碰撞、酸碱和高温"],
      unsafeTests: ["刻划、火烧、热针或酸液测试"],
      related: ["charoite", "rhodonite", "purple-fluorite"],
      imageQuery: "\"sugilite\" mineral specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Sugilite", url: "https://www.handbookofmineralogy.org/pdfs/sugilite.pdf" },
        { name: "GIA Gems & Gemology — Wessels Mine Sugilite", url: "https://www.gia.edu/doc/The-Occurrence-and-Gemological-Properties-of-Wessels-Mine-Sugilite.pdf" },
        { name: "GIA Gems & Gemology — Dyed Serpentine Imitating Sugilite", url: "https://www.gia.edu/gems-gemology/summer-2019-labnotes-dyed-serpentine-imitating-sugilite" }
      ]
    },
    howlite: {
      formula: "Ca2B5SiO9(OH)5",
      crystalSystem: "单斜晶系",
      hardness: "约 3.5（莫氏）",
      refractiveIndex: "约 1.583–1.605",
      specificGravity: "约 2.53–2.59",
      visualClues: ["常见白色或灰白色，多孔基质带灰色至黑色网脉", "常被染成蓝色作为绿松石风格珠串材料", "染色后孔隙和裂隙处可能出现颜色聚集"],
      identificationPoints: ["豪莱石的白色多孔结构可作为观察线索，但染色会改变外观", "与绿松石、菱镁矿、方解石和树脂材料区分", "蓝色成品需核实检测名称，不能以网纹或颜色认定为绿松石"],
      commonImitations: ["绿松石", "菱镁矿", "染色树脂和玻璃"],
      treatments: ["蓝色或其他颜色染色", "表面浸蜡或树脂浸渍"],
      safeObservation: ["观察白色基底、多孔结构和灰黑网脉", "检查孔隙、钻孔内壁和裂隙的颜色", "避免溶剂、强酸碱和长时间浸泡"],
      unsafeTests: ["热针、溶剂、刮划或酸液测试"],
      related: ["turquoise", "variscite"],
      imageQuery: "\"howlite\" mineral specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Howlite", url: "https://www.handbookofmineralogy.org/pdfs/howlite.pdf" }
      ]
    },
    apatite: {
      formula: "磷灰石族通式 Ca5(PO4)3(F,Cl,OH)；宝石级常见氟磷灰石 Ca5(PO4)3F",
      crystalSystem: "可为六方或单斜晶系；具体结构与端元有关",
      hardness: "莫氏 5",
      refractiveIndex: "氟磷灰石参考范围：ω 约 1.631–1.650，ε 约 1.627–1.646；随成分变化",
      specificGravity: "约 3.1–3.25（随端元与成分变化）",
      visualClues: ["可见蓝、蓝绿、绿、黄等颜色，透明晶体与不透明矿物标本均常见", "六方柱状晶形可作为矿物观察线索，但切磨成品通常无法仅凭外观确认", "硬度约 5，容易被常见硬度较高的宝石或灰尘划伤"],
      identificationPoints: ["磷灰石是矿物族名称，须结合具体端元与成分描述", "与绿柱石、碧玺、托帕石及玻璃等相似外观材料区分", "折射率、密度、放大观察和光谱可辅助判断；颜色或紫外反应不能单独确认身份"],
      commonImitations: ["蓝色或绿色玻璃", "绿柱石", "碧玺", "托帕石"],
      treatments: ["部分材料可能经加热或其他颜色改善；各件样品需单独核实"],
      safeObservation: ["在柔和白光下记录体色和透明度", "观察是否有柱状晶体、色带或包体", "佩戴时避免与硬物摩擦及磕碰"],
      unsafeTests: ["刻划、火烧、酸液或用紫外反应单独判定"],
      related: ["tourmaline", "aquamarine", "topaz"],
      imageQuery: "\"apatite\" mineral specimen gem crystal",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Fluorapatite", url: "https://www.handbookofmineralogy.org/pdfs/fluorapatite.pdf" },
        { name: "GIA Gems & Gemology — Blue Cat's-Eye Apatite from Madagascar", url: "https://www.gia.edu/gia-website/gems-gemology/spring-2013-gemnews-blue-cats-eye-apatite" }
      ]
    },
    titanite: {
      formula: "CaTiSiO5",
      crystalSystem: "单斜晶系",
      hardness: "莫氏 5–5.5",
      refractiveIndex: "主折射率范围：α 约 1.843–1.950，β 约 1.870–2.034，γ 约 1.943–2.110；随成分变化",
      specificGravity: "约 3.4–3.6",
      visualClues: ["榍石常呈黄、黄绿、绿或棕色，切磨后可有强色散和明显火彩", "高折射率及较强双折射会影响刻面棱线的视觉重影", "硬度偏低且有解理，刻面棱角容易磨损或崩裂"],
      identificationPoints: ["榍石是矿物名称，sphene 是沿用至今的宝石贸易名", "与锆石、石榴石和钻石仿品区分需用折射率、双折射及光谱等数据", "高折射率可能超出常规折射仪量程，不能因仪器读数受限就判为其他材料"],
      commonImitations: ["锆石", "石榴石", "玻璃或合成仿品"],
      treatments: ["榍石成品多以天然体色切磨抛光；如商家标注加热改色，应核对对应样品的检测记录。"],
      safeObservation: ["在点光源下观察色散和火彩", "检查刻面棱角、裂隙和磨损", "适合低碰撞佩戴，不建议用于高频活动戒指"],
      unsafeTests: ["刻划、敲击、火烧或用单一折射仪读数下结论"],
      related: ["zircon", "garnet", "demantoid-garnet"],
      imageQuery: "\"titanite\" sphene crystal gemstone specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Titanite", url: "https://www.handbookofmineralogy.org/pdfs/titanite.pdf" },
        { name: "GIA Gems & Gemology — Yellow Sphene", url: "https://www.gia.edu/gems-gemology/summer-2025-microworld-soap-bubbles-in-yellow-sphene0" }
      ]
    },
    andalusite: {
      formula: "Al2SiO5",
      crystalSystem: "斜方晶系；与蓝晶石、矽线石为同成分多形",
      hardness: "莫氏 6.5–7.5（方向性差异）",
      refractiveIndex: "约 1.632–1.643（随方向变化）",
      specificGravity: "约 3.13–3.16",
      visualClues: ["切磨宝石常显黄绿、褐绿或红褐等方向性色调", "转动样品时颜色可随观察方向变化，切磨方向会影响综合色感", "空晶石（chiastolite）是常见十字状包体的红柱石变种，不等同于透明刻面宝石"],
      identificationPoints: ["结合多色性、折射率、双折射和包体特征与堇青石、碧玺等区分", "颜色随方向变化是观察线索，不足以单独确认红柱石", "同成分多形蓝晶石、矽线石的晶体结构不同，需结合宝石学测试区分"],
      commonImitations: ["堇青石", "碧玺", "玻璃"],
      treatments: ["红柱石常按晶体颜色方向切磨，以呈现其多色性；如有加热或其他处理，应在商品说明中注明。"],
      safeObservation: ["用稳定白光从不同方向观察体色变化", "留意切磨方向及明显裂隙", "检查空晶石的十字包体，不把它作为所有红柱石的必备特征"],
      unsafeTests: ["刻划、敲击、火烧或仅凭颜色变化作结论"],
      related: ["kyanite", "iolite", "tourmaline"],
      imageQuery: "\"andalusite\" pleochroism gemstone mineral specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Andalusite", url: "https://www.handbookofmineralogy.org/pdfs/andalusite.pdf" },
        { name: "GIA Gems & Gemology — Gem-Quality Andalusite from Brazil (Summer 2009 issue)", url: "https://store.gia.edu/products/summer-2009" }
      ]
    },
    scapolite: {
      formula: "方柱石族概称；钠柱石（marialite：Na4Al3Si9O24Cl）—钙柱石（meionite：Ca4Al6Si6O24CO3）为主要系列，另有硫酸根端元 silvialite（Ca4Al6Si6O24SO4）",
      crystalSystem: "四方晶系；中间组成可见 P42/n 空间群",
      hardness: "莫氏约 5–6（随成分变化）",
      refractiveIndex: "端元主折射率总体约 1.532–1.600；随成分变化",
      specificGravity: "端元比重总体约 2.50–2.78；随成分变化",
      visualClues: ["方柱石族宝石可呈无色、白、黄、粉或紫色", "部分弧面切磨样品可见猫眼效应，但并非该族材料的通用特征", "不同端元的物理性质有差异，通用数值只能作范围参考"],
      identificationPoints: ["方柱石是固溶系列/矿物族称呼，具体成分会影响测得性质", "与碧玺、磷灰石、长石和玻璃等区分需结合光学数据", "应将猫眼效应作为部分样品的光学现象，不作为鉴定充分条件"],
      commonImitations: ["碧玺", "磷灰石", "长石", "玻璃"],
      treatments: ["紫色方柱石可经加热或辐照调整颜色；天然紫色样品也存在，处理状态应在检测和销售资料中注明。"],
      safeObservation: ["白光下从不同方向观察体色和透明度", "弧面样品可移动点光源观察猫眼线是否连续", "报告按实际检测结果标注方柱石族名称和成分信息"],
      unsafeTests: ["刻划、敲击、酸液或把族级折射率范围当作单件鉴定值"],
      related: ["apatite", "tourmaline", "moonstone"],
      imageQuery: "\"scapolite\" mineral crystal gemstone specimen",
      sourceRefs: [
        { name: "GIA Gems & Gemology — Yellow Scapolite from Ihosy, Madagascar", url: "https://www.gia.edu/doc/Yellow-Scapolite-from-Ihosy-Madagascar.pdf" },
        { name: "Handbook of Mineralogy — Marialite", url: "https://www.handbookofmineralogy.org/pdfs/marialite.pdf" },
        { name: "Handbook of Mineralogy — Meionite", url: "https://www.handbookofmineralogy.org/pdfs/meionite.pdf" },
        { name: "GIA Gems & Gemology — Scapolite from Afghanistan", url: "https://www.gia.edu/doc/SP11.pdf" }
      ]
    },
    danburite: {
      formula: "CaB2Si2O8",
      crystalSystem: "斜方晶系",
      hardness: "莫氏约 7–7.25",
      refractiveIndex: "约 1.627–1.639（随方向变化）",
      specificGravity: "约 2.93–3.02",
      visualClues: ["常见无色、白色或浅黄色透明晶体，也有其他颜色样品", "晶体可呈柱状，切磨后常以透明度和净度呈现", "硬度较高但仍可能有解理或裂隙，不能视为不会损伤"],
      identificationPoints: ["与石英、托帕石和锆石等无色宝石区分需结合折射率、双折射和密度", "外观透明或火彩表现不能单独确定矿物身份", "较高硬度不等同于无脆性，佩戴仍需避免撞击"],
      commonImitations: ["石英", "托帕石", "无色锆石", "玻璃"],
      treatments: ["硅硼钙石成品以切磨和抛光加工为主；如涉及颜色处理，应在商品说明与检测记录中列明。"],
      safeObservation: ["观察晶形、颜色和内部包体", "切磨成品检查刻面棱角及裂隙", "交易时核对材料名称和处理披露"],
      unsafeTests: ["刻划、敲击、火烧或仅凭火彩与透明度判断"],
      related: ["topaz", "rock-crystal", "phenakite"],
      imageQuery: "\"danburite\" crystal gemstone specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Danburite", url: "https://www.handbookofmineralogy.org/pdfs/danburite.pdf" },
        { name: "GIA Gems & Gemology — Danburite from Luc Yen, Vietnam", url: "https://www.gia.edu/gems-gemology/winter-2016-danburite-luc-yen-mining-area-vietnam" }
      ]
    },
    euclase: {
      formula: "BeAlSiO4(OH)",
      crystalSystem: "单斜晶系",
      hardness: "莫氏约 7.5",
      refractiveIndex: "约 1.651–1.675（随方向变化）",
      specificGravity: "约 2.99–3.10",
      visualClues: ["可呈无色、浅蓝、蓝绿或绿色透明晶体", "硬度较高但有完全解理，受冲击时容易沿解理面裂开", "晶体标本与切磨宝石分别观察，标本重点查看晶体边缘完整性"],
      identificationPoints: ["含铍铝硅酸盐，需结合折射率、双折射和晶体特征与海蓝宝石、托帕石等区分", "完全解理是重要脆弱性特征，不应通过敲击验证", "颜色与产地说法不能代替矿物鉴定和处理披露"],
      commonImitations: ["海蓝宝石", "托帕石", "玻璃"],
      treatments: ["处理情况需按具体样品检测并披露"],
      safeObservation: ["在白光下观察颜色、透明度和晶体形态", "避免碰撞、超声清洗和不当镶嵌受力", "检查刻面边缘与解理裂隙"],
      unsafeTests: ["敲击、刻划、火烧或超声清洗"],
      related: ["aquamarine", "topaz", "phenakite"],
      imageQuery: "\"euclase\" blue crystal gemstone specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Euclase", url: "https://www.handbookofmineralogy.org/pdfs/euclase.pdf" },
        { name: "GIA Gems & Gemology — Faceted Blue Euclase from Colombia (Summer 2006 issue)", url: "https://www.gia.edu/gems-gemology/summer-2006-gem-news-international" }
      ]
    },
    phenakite: {
      formula: "Be2SiO4",
      crystalSystem: "三方晶系（点群 3；晶格按六方表示）",
      hardness: "莫氏 7.5–8",
      refractiveIndex: "约 1.650–1.670（随方向变化）",
      specificGravity: "约 2.93–3.00",
      visualClues: ["常见无色透明至白色晶体，也可呈浅黄、粉或褐色", "透明晶体可被切磨，但矿物标本形态同样具有识别与观赏意义", "含铍矿物的完整样品可正常观赏；避免切磨或产生可吸入粉尘"],
      identificationPoints: ["与石英、绿柱石和托帕石等无色材料需以折射率、双折射、密度及光谱区分", "无色和高透明度不是确证硅铍石的充分依据", "化学成分含铍，标本处理避免粉尘并遵循矿物样品安全规范"],
      commonImitations: ["石英", "绿柱石", "托帕石", "玻璃"],
      treatments: ["处理情况需按具体样品检测并披露"],
      safeObservation: ["观察晶体外形、透明度和内部特征", "使用封闭展示或轻柔清洁，避免打磨和粉尘", "查看检测报告中的矿物名称、处理状态和对应样品信息"],
      unsafeTests: ["刻划、敲击、火烧或自行切磨"],
      related: ["aquamarine", "rock-crystal", "danburite"],
      imageQuery: "\"phenakite\" mineral crystal gemstone specimen",
      sourceRefs: [
        { name: "Handbook of Mineralogy — Phenakite", url: "https://handbookofmineralogy.org/pdfs/phenakite.pdf" },
        { name: "GIA Gems & Gemology — Phenakite as a Diamond Imitation", url: "https://www.gia.edu/gia-website/gems-gemology/spring-21-gemnews-phenakite-as-a-diamond-imitation" },
        { name: "GIA Gems & Gemology — Cat's-Eye Phenakite", url: "https://www.gia.edu/gems-gemology/summer-2015-microworld-cats-eye-phenakite" }
      ]
    },
  };

  const ngtcPropertyRef = {
    name: "GB/T 16553-2017《珠宝玉石 鉴定》标准文本",
    url: "https://www.gb-gbt.com/PDF/Chinese.aspx/GBT16553-2017"
  };
  const standardStatusRef = {
    name: "国家标准全文公开系统：GB/T 16553-2017 状态",
    url: "https://openstd.samr.gov.cn/bzgk/std/newGbInfo?hcno=E0EB1F499F6CC7F2C78351FACEFA7334&refer=outter"
  };
  const handbookPropertyRef = (name, slug) => ({
    name: `Handbook of Mineralogy — ${name}`,
    url: `https://www.handbookofmineralogy.org/pdfs/${slug}.pdf`
  });
  const propertySupplement = {
    "dushan-jade": {
      formula: "以斜长石（钙长石质）为主，常伴透辉石、黝帘石、符山石等；多矿物集合体，无单一化学式",
      hardness: "莫氏约 6–6.5",
      refractiveIndex: "约 1.56–1.70（矿物组成不同，点测差异较大）",
      specificGravity: "约 2.70–3.09"
    },
    "serpentine-jade": {
      formula: "蛇纹石族，理想端元 Mg3Si2O5(OH)4；常有铁、镍等类质同象置换",
      hardness: "莫氏约 2.5–6（蛇纹石种类和共生矿物影响明显）",
      refractiveIndex: "约 1.54–1.57",
      specificGravity: "约 2.44–2.80"
    },
    "quartzite-jade": {
      formula: "以石英 SiO2 颗粒集合体为主，常含少量其他矿物",
      hardness: "莫氏约 7",
      refractiveIndex: "约 1.54–1.55",
      specificGravity: "约 2.60–2.72"
    },
    chalcedony: {
      formula: "SiO2（微晶质石英集合体）",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.535–1.539",
      specificGravity: "约 2.55–2.70"
    },
    "aventurine-quartz": {
      formula: "SiO2，含铬云母、赤铁矿等片状包体",
      hardness: "莫氏约 7",
      refractiveIndex: "约 1.544–1.553",
      specificGravity: "约 2.64–2.71"
    },
    obsidian: {
      formula: "富硅铝的天然火山玻璃；非晶质，成分可变，无固定化学式",
      hardness: "莫氏约 5–6",
      refractiveIndex: "约 1.48–1.51",
      specificGravity: "约 2.30–2.50"
    },
    "tiger-eye": {
      formula: "以 SiO2 为主；石英交代纤维状矿物形成的假象集合体",
      hardness: "莫氏约 6.5–7",
      refractiveIndex: "约 1.544–1.553",
      specificGravity: "约 2.64–2.71"
    },
    malachite: {
      formula: "Cu2CO3(OH)2",
      hardness: "莫氏 3.5–4",
      refractiveIndex: "α 约 1.655，β 约 1.875，γ 约 1.909",
      specificGravity: "约 3.98–4.05（块状材料的孔隙和伴生矿物会造成偏差）"
    },
    chrysocolla: {
      formula: "(Cu,Al)2H2Si2O5(OH)4·nH2O（含水铜硅酸盐，成分可变）",
      hardness: "莫氏约 2–4",
      refractiveIndex: "约 1.46–1.57（材料及测量状态影响读数）",
      specificGravity: "约 2.00–2.40"
    },
    labradorite: {
      formula: "(Ca,Na)(Al,Si)4O8（斜长石固溶系列）",
      hardness: "莫氏 6–6.5",
      refractiveIndex: "约 1.559–1.573（随钙长石组分变化）",
      specificGravity: "约 2.68–2.72"
    },
    amazonite: {
      formula: "KAlSi3O8（微斜长石的绿色变种）",
      hardness: "莫氏 6–6.5",
      refractiveIndex: "约 1.522–1.530",
      specificGravity: "约 2.54–2.58"
    },
    jasper: {
      formula: "以 SiO2 为主的隐晶质石英集合体，常含铁氧化物及其他杂质",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.535–1.539（玉髓质基体参考值）",
      specificGravity: "约 2.55–2.70（杂质和孔隙会影响测值）"
    },
    chrysoprase: {
      formula: "SiO2（含镍致色的玉髓，微晶质石英集合体）",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.535–1.539",
      specificGravity: "约 2.55–2.70"
    },
    "yellow-dragon-jade": {
      formula: "常见材料以 SiO2 为主，属石英质玉；商业名称不对应单一矿物种",
      hardness: "常见石英质材料莫氏约 6.5–7",
      refractiveIndex: "常见石英质材料约 1.53–1.55",
      specificGravity: "常见石英质材料约 2.53–2.72"
    },
    "chicken-blood-stone": {
      formula: "辰砂 HgS 与地开石、高岭石、叶蜡石等基质组成；矿物比例因产地和样品而异",
      hardness: "常见印章石基质莫氏约 2–4；受共生矿物影响",
      refractiveIndex: "常见基质约 1.56–1.60；辰砂颗粒本身远高于基质",
      specificGravity: "常见块料约 2.60–3.10；辰砂含量会显著改变测值"
    },
    "shoushan-stone": {
      formula: "以地开石、高岭石、叶蜡石等黏土矿物为主；各坑口和品种的组成有差异",
      hardness: "莫氏约 2–3",
      refractiveIndex: "约 1.56–1.60",
      specificGravity: "约 2.50–2.70"
    },
    coral: {
      formula: "以 CaCO3（常以文石为主）及少量有机基质构成；珊瑚种类间有差异",
      hardness: "莫氏约 3–4",
      refractiveIndex: "钙质珊瑚约 1.486–1.658；角质珊瑚约 1.56–1.57",
      specificGravity: "钙质珊瑚约 2.60–2.70；角质珊瑚约 1.30–2.12"
    },
    "shell-pearls": {
      formula: "主要为 CaCO3（文石）与少量贝壳有机基质",
      hardness: "莫氏约 3–4",
      refractiveIndex: "约 1.53–1.685（层状结构与测量方向影响读数）",
      specificGravity: "约 2.70–2.89"
    },
    moissanite: {
      formula: "SiC（珠宝用莫桑石通常为合成碳化硅）",
      hardness: "莫氏约 9.25",
      refractiveIndex: "约 2.648–2.691（随晶向及多型变化）",
      specificGravity: "约 3.20–3.22"
    },
    "cubic-zirconia": {
      formula: "ZrO2（稳定化立方氧化锆，含稳定剂）",
      hardness: "莫氏约 8–8.5",
      refractiveIndex: "约 2.15–2.18",
      specificGravity: "约 5.6–6.0"
    },
    "purple-fluorite": {
      formula: "CaF2",
      hardness: "莫氏 4",
      refractiveIndex: "约 1.433–1.448",
      specificGravity: "约 3.18"
    },
    "tsavorite-garnet": {
      formula: "Ca3Al2(SiO4)3（钙铝榴石，含铬、钒致色）",
      hardness: "莫氏 7–7.5",
      refractiveIndex: "约 1.734–1.759",
      specificGravity: "约 3.57–3.73"
    },
    "demantoid-garnet": {
      formula: "Ca3Fe2(SiO4)3（钙铁榴石）",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.880–1.889",
      specificGravity: "约 3.82–3.85"
    },
    chrysoberyl: {
      formula: "BeAl2O4",
      hardness: "莫氏 8.5",
      refractiveIndex: "约 1.746–1.755",
      specificGravity: "约 3.70–3.75"
    },
    kyanite: {
      formula: "Al2SiO5",
      hardness: "莫氏约 4.5–7（强烈方向性；平行晶体长轴较低）",
      refractiveIndex: "约 1.716–1.734",
      specificGravity: "约 3.53–3.67"
    },
    diopside: {
      formula: "CaMgSi2O6",
      hardness: "莫氏 5.5–6.5",
      refractiveIndex: "约 1.664–1.730（随成分和晶向变化）",
      specificGravity: "约 3.22–3.38"
    },
    "black-jade": {
      formula: "若为黑色软玉，以透闪石—阳起石系列为主，通式 Ca2(Mg,Fe)5Si8O22(OH)2；黑色常与石墨等包体有关",
      hardness: "软玉材料莫氏约 6–6.5",
      refractiveIndex: "软玉参考范围约 1.60–1.63",
      specificGravity: "软玉参考范围约 2.90–3.10；“墨玉”名称仍需检测确认材质"
    },
    "green-jasper": {
      formula: "以 SiO2 为主的隐晶质石英集合体，绿色与矿物杂质有关",
      hardness: "莫氏 6.5–7",
      refractiveIndex: "约 1.535–1.539（玉髓质基体参考值）",
      specificGravity: "约 2.55–2.70（杂质和孔隙会影响测值）"
    },
    sodalite: {
      formula: "Na8(Al6Si6O24)Cl2",
      hardness: "莫氏 5.5–6",
      refractiveIndex: "约 1.483–1.487",
      specificGravity: "约 2.27–2.33"
    },
    rhodochrosite: {
      formula: "MnCO3（天然样品可含铁、钙、镁等类质同象替代）",
      hardness: "莫氏 3.5–4",
      refractiveIndex: "ω 约 1.814–1.818，ε 约 1.596–1.598（双折射明显）",
      specificGravity: "约 3.50–3.70"
    },
    smithsonite: {
      formula: "ZnCO3（天然样品可含铁、锰、镉等）",
      hardness: "莫氏 4–4.5",
      refractiveIndex: "ω 约 1.840–1.850，ε 约 1.619–1.623",
      specificGravity: "约 4.30–4.45"
    },
    "black-tourmaline": {
      formula: "常见黑色铁电气石端元为 Na(Fe2+)3Al6(BO3)3Si6O18(OH)4；电气石族成分可变",
      hardness: "莫氏 7–7.5",
      refractiveIndex: "约 1.61–1.67（成分和晶向影响读数）",
      specificGravity: "约 3.00–3.30"
    },
    prehnite: {
      formula: "Ca2Al2Si3O10(OH)2",
      hardness: "莫氏 6–6.5",
      refractiveIndex: "约 1.611–1.665",
      specificGravity: "约 2.80–2.95"
    },
    "petrified-wood": {
      formula: "木质组织被 SiO2（石英或玉髓）等矿物交代；不是单一矿物",
      hardness: "石英质硅化木约莫氏 6.5–7",
      refractiveIndex: "约 1.53–1.55（石英质部分）",
      specificGravity: "约 2.30–2.90（孔隙、矿化程度和伴生矿物影响明显）"
    },
    "beijing-white-jade": {
      formula: "以石英 SiO2 颗粒集合体为主，常含少量其他矿物",
      hardness: "莫氏约 7",
      refractiveIndex: "约 1.544–1.553",
      specificGravity: "约 2.60–2.72"
    }
  };
  Object.entries(propertySupplement).forEach(([id, details]) => {
    if (!details.sourceRefs) details.sourceRefs = [ngtcPropertyRef, standardStatusRef];
    richSpecs[id] = { ...richSpecs[id], ...details };
  });

  function extraGem(spec) {
    const [id, name, englishName, category, family, theme, colorText, originText, formation] = spec;
    const details = richSpecs[id] || {};
    const colorsList = colorText.split("、");
    const rule = ruleBook[id] || {};
    const imageCandidates = details.imageQuery
      ? [{
          id: `${id}-commons`,
          role: "开放许可图片参考",
          query: details.imageQuery,
          source: "Wikimedia Commons",
          sourcePage: `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(details.imageQuery)}&title=Special%3AMediaSearch&type=image`,
          imageUrl: null,
          license: null,
          author: null,
          verifiedAt: null,
          assetStatus: "打开图片观察位后实时检索；展示前筛选开放许可",
          alt: `${name}矿物或宝石标本示例`
        }]
      : [
          { id: `${id}-1`, role: "原石或典型形态", query: `${englishName} rough specimen`, source: "Wikimedia Commons", sourcePage: `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(`${englishName} rough specimen`)}&title=Special%3AMediaSearch&type=image`, imageUrl: null, license: null, author: null, verifiedAt: null, assetStatus: "待确认开放许可图片", alt: `${name}原石或典型形态` },
          { id: `${id}-2`, role: "典型切磨或工艺品", query: `${englishName} polished gemstone`, source: "Wikimedia Commons", sourcePage: `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(`${englishName} polished gemstone`)}&title=Special%3AMediaSearch&type=image`, imageUrl: null, license: null, author: null, verifiedAt: null, assetStatus: "待确认开放许可图片", alt: `${name}切磨或工艺品` },
          { id: `${id}-3`, role: "鉴别特征或仿品对比", query: `${englishName} identification imitation comparison`, source: "Wikimedia Commons", sourcePage: `https://commons.wikimedia.org/w/index.php?search=${encodeURIComponent(`${englishName} identification imitation comparison`)}&title=Special%3AMediaSearch&type=image`, imageUrl: null, license: null, author: null, verifiedAt: null, assetStatus: "待确认开放许可图片", alt: `${name}鉴别特征或仿品对比` }
        ];
    return {
      id,
      name,
      englishName,
      category,
      family,
      status: "扩展收录",
      theme,
      formula: details.formula || "",
      crystalSystem: details.crystalSystem || family,
      hardness: details.hardness || "",
      refractiveIndex: details.refractiveIndex || "",
      specificGravity: details.specificGravity || "",
      colors: colorsList,
      origin: originText.split("、"),
      formation,
      visualClues: details.visualClues || [
        ...(rule.keywords || []),
        "颜色、光泽、透明度和结构需要结合观察，不能只凭单一外观下结论",
        "同色系天然材料、处理材料和仿品可能出现高度相似外观"
      ],
      identificationPoints: details.identificationPoints || [
        "建议结合折射率、密度、放大观察、光谱或其他专业方法",
        `重点排除：${(rule.confusions || []).map(id2 => id2).join("、") || "同色系相似材料"}`,
        "外观观察只能提供线索，不能确认天然性、处理状态、产地或价值"
      ],
      commonImitations: details.commonImitations || rule.confusions || ["玻璃", "树脂", "染色或充填材料"],
      treatments: details.treatments || ["染色或颜色改善", "充填、浸蜡或表面处理", "合成或拼合材料需单独说明"],
      safeObservation: details.safeObservation || ["在中性白光下拍摄颜色和透明度", "从侧面、背面或透光方向补拍", "用放大镜观察包体、气泡、裂隙和表面"],
      unsafeTests: details.unsafeTests || ["刻划、敲击、火烧", "酸液、溶剂或热针测试", "把单一民间方法当作真假结论"],
      cultureTimeline: [
        { period: "传统材料文化", event: `${name}在装饰、雕刻或地方工艺中形成了独特的材料使用传统。` },
        { period: "近现代宝石学", event: `${name}被纳入矿物、宝石或有机宝石的分类与鉴定研究。` },
        { period: "当代消费与科普", event: "处理、合成、仿品和证书信息成为购买与收藏时需要关注的内容。" }
      ],
      related: details.related || [],
      imageCandidates,
      imageSearchQuery: details.imageQuery || "",
      imageExcludeTerms: details.imageExcludeTerms || [],
      sourceRefs: details.sourceRefs || [extraSource]
    };
  }

  const existingIds = new Set(db.gemstones.map(gem => gem.id));
  const extras = extraSpecs.map(extraGem).filter(gem => !existingIds.has(gem.id));
  db.gemstones.push(...extras);
  db.gemstones.forEach(gem => {
    if (!gem.sourceRefs) gem.sourceRefs = [extraSource];
    gem.openSamples = (openSampleLibrary?.samples || [])
      .filter(sample => sample.gemId === gem.id && sample.contentVerified === true)
      .map(sample => ({
        ...sample,
        imageUrl: sample.imageUrl || sample.assetPath,
        sourcePage: sample.sourcePage,
        source: sample.source,
        alt: `${gem.name}开放许可样本：${sample.role}`
      }));
  });
  db.meta.recordCount = db.gemstones.length;
  db.meta.version = "0.17.7";
  db.meta.updatedAt = "2026-10-30";
  db.meta.scope = `${db.gemstones.length}种常见玉石、彩色与有机宝石、装饰宝石材料及合成宝石材料`;
  db.meta.useCase = "宝玉石基础知识、品质观察图谱、图片资料与专业鉴定常识";
  db.meta.disclaimer = "数据库内容用于科普和观察学习，不替代珠宝玉石专业鉴定、证书或实验室检测。";
})(window);
