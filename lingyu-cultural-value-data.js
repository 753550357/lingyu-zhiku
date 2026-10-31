/*
 * 灵玉智库内容扩展
 *
 * 为每个品种补充：
 *   基础知识、鉴定常识、各品种品质判断参考、民间佩戴说法。
 *
 * 品质判断按材料品种分别观察，不设置跨品种通用等级，也不是市场报价。
 * 佩戴寓意和招财、辟邪等说法属于民间文化表达，不是科学功效。
 */
(function attachCulturalValueData(global) {
  "use strict";

  const seeds = {
    jadeite: {
      summary: "翡翠以硬玉为主要成分，常见为多矿物集合体；观察时要把种质、颜色、透明度、净度、工艺和处理状态放在一起判断。",
      use: "适合做手镯、挂件、戒面、珠链和摆件；日常佩戴以避免磕碰、剧烈温差和化学品接触为宜。",
      qualityFocus: "重点比较种质、颜色、透明度、裂纹、尺寸、工艺、产地描述和是否处理，不能只按绿色深浅排名。",
      identification: "先确认材料是否为翡翠，再区分天然、充填、染色、覆膜或组合处理；高价值成品应核对正规检测报告。",
      folk: "常被佩戴在手腕、胸前或手指，民间寓意平安、护身、纳福，也常被说成招财旺事业。"
    },
    nephrite: {
      summary: "软玉主要由透闪石—阳起石系列组成，纤维交织结构带来韧性；白度、细度、润度和瑕疵是彼此不同的观察维度。",
      use: "常见为手镯、牌子、挂件、手串和雕件；贴身佩戴要定期擦拭，避免与硬物长期摩擦。",
      qualityFocus: "白度、细度、油润感、完整性、雕工、尺寸和颜色类型需结合用途综合观察；来源信息用于核实材料背景。",
      identification: "“和田玉”是商业与文化名称，不能仅凭产地故事或手感确认；应结合结构、折射率、密度和检测报告。",
      folk: "民间常以玉佩寄托平安、守护、君子品格和家业传承，也有招福纳祥的说法。"
    },
    agate: {
      summary: "玛瑙是以隐晶质石英和纹带结构为特征的一类材料，颜色、条带、眼纹、包体和透明度变化很大。",
      use: "适合手串、项链、吊坠、印章和小摆件；孔道和表面应避免磕碰、强酸碱及长时间暴晒。",
      qualityFocus: "纹带完整性、图案观赏性、颜色自然度、尺寸、稀有品种、工艺和是否染色是主要比较点。",
      identification: "重点观察天然生长纹与裂隙色聚集，结合折射率、密度和放大观察；不能把“颜色鲜艳”直接当成高价值。",
      folk: "常被说成有平安、护身、勇气和顺遂寓意，红玛瑙也常被赋予招财、旺人缘的民间说法。"
    },
    "rock-crystal": {
      summary: "水晶是二氧化硅的晶体，常见六方柱状晶体、晶簇、气液包体和矿物包体；透明度并非唯一评价依据。",
      use: "可作项链、手链、戒面、晶簇和矿物标本；佩戴或摆放时避免跌落、强热冲击和尖锐碰撞。",
      qualityFocus: "晶体完整度、透明度、包体景观、晶形、尺寸、稀有度和切磨质量通常比单纯“通透”更重要。",
      identification: "玻璃、水晶和合成石英不能靠凉感或哈气区分，应结合双折射、偏光、包体和仪器数据判断。",
      folk: "民间常说白水晶代表净化、清晰和专注，也有人把它与招财、提升工作状态联系起来。"
    },
    amethyst: {
      summary: "紫水晶是紫色石英，颜色与微量铁、辐照和热历史有关；天然色带、包体和晶体形态值得重点观察。",
      use: "常见为耳饰、戒面、手串、晶洞和摆件；日常佩戴应避免长时间强光、高温和硬物碰撞。",
      qualityFocus: "颜色浓度与均匀度、透明度、包体、晶体形态、尺寸、切工和是否热处理需结合整体观感综合观察。",
      identification: "要排除紫色玻璃、合成石英、染色或覆膜材料；紫色深浅不能单独代表天然或高等级。",
      folk: "传统说法常把紫水晶与智慧、安定、清醒和人缘联系起来，也有招贵人、助学业的寓意。"
    },
    citrine: {
      summary: "黄水晶是黄色至橙黄色石英，天然黄水晶相对少见，市场上也常见由紫水晶热处理形成的黄色材料。",
      use: "适合戒面、吊坠、耳饰、手链和小型摆件；佩戴时避免高温、骤冷和强烈日晒。",
      qualityFocus: "颜色自然度、色调、透明度、净度、尺寸、切工和天然或热处理状态需要明确区分。",
      identification: "颜色来源要结合包体、色带和光谱判断；不能把“黄水晶”商业名称直接等同于天然未处理。",
      folk: "民间常把黄水晶称作财富和阳光的象征，常见招财、聚财、增强行动力的说法。"
    },
    turquoise: {
      summary: "绿松石是含水铜铝磷酸盐矿物，常见蓝、绿、网纹和基质；孔隙度与处理状态对外观影响很大。",
      use: "适合项链、胸针、挂件和手串；应避免汗液、油污、香水、热水和长时间浸泡。",
      qualityFocus: "颜色、瓷度、网纹美感、完整性、尺寸、雕工和优化处理需结合整体观感综合观察；产地或矿区信息用于核实材料背景。",
      identification: "需区分天然、稳定化、染色、再造和仿制材料；网纹并非越多越真，证书与检测更重要。",
      folk: "民间常将绿松石视为平安、护旅行和沟通的象征，也有守财、避邪和保佑远行的说法。"
    },
    "lapis-lazuli": {
      summary: "青金石是以蓝色方钠石为主并常含黄铁矿、方解石的集合体，蓝色底、金星和白色杂质共同构成外观。",
      use: "常见为珠串、吊坠、印章和雕件；佩戴时避开酸碱、油污、香水和剧烈碰撞。",
      qualityFocus: "蓝色饱和度、底色均匀度、金星分布、白色方解石多少、完整性、尺寸和工艺是主要观察点。",
      identification: "不能只凭“有金星”判断品质；应结合结构、矿物组合、硬度表现和检测排除染色或压制材料。",
      folk: "传统寓意多与平静、智慧、沟通和守护有关，也有人将其作为招贵人、助事业的吉祥佩饰。"
    },
    emerald: {
      summary: "祖母绿是绿柱石的绿色品种，颜色通常来自铬或钒；天然包体常见，但裂隙充填和处理披露很重要。",
      use: "适合戒指、项链和耳饰，日常佩戴应避免强碰、超声清洗、蒸汽清洗和温差冲击。",
      qualityFocus: "颜色、透明度、净度、包体特征、切工、克拉重量和注油等处理状态需综合观察；产地信息应有可靠依据。",
      identification: "“有包体”不等于天然高品质；需要结合放大、折射率、光谱、包体和处理检测判断。",
      folk: "民间常把祖母绿与忠诚、希望、爱情和新生联系起来，也有招贵人、旺感情的说法。"
    },
    aquamarine: {
      summary: "海蓝宝石是蓝色至蓝绿色绿柱石，透明度通常较好；色调、净度和切工共同决定视觉效果。",
      use: "适合戒指、吊坠、耳饰和手链；佩戴时避免磕碰、骤热骤冷和强烈化学清洁。",
      qualityFocus: "蓝色纯度、饱和度、透明度、净度、切工、尺寸和是否有明显处理是主要比较维度。",
      identification: "要与蓝色托帕石、玻璃和其他蓝色宝石区分，建议结合折射率、双折射、包体和光谱。",
      folk: "民间常把海蓝宝石视为平静、勇气、远行和沟通的象征，也有保平安、招好运的说法。"
    },
    ruby: {
      summary: "红宝石是红色刚玉，颜色主要与铬有关；红色、荧光、包体、处理和产地描述经常一起影响评价。",
      use: "适合戒指、吊坠、耳饰和收藏；佩戴时避免硬碰、热冲击和不明化学清洗。",
      qualityFocus: "红色调与鲜艳度、净度、荧光、尺寸、切工及加热或填充情况需综合观察；产地信息应有可靠依据。",
      identification: "必须区分天然、加热、铅玻璃充填和合成红宝石；“鸽血红”商业称谓不能代替检测。",
      folk: "民间常把红宝石与热情、勇气、爱情和生命力联系起来，也有招财、旺事业和护身的说法。"
    },
    sapphire: {
      summary: "蓝宝石是蓝色刚玉，颜色来自铁、钛等微量元素；除蓝色外还包括粉、黄、绿等颜色变种。",
      use: "适合戒指、耳饰、吊坠和手链；硬度较高但仍要避免边角撞击和高温骤冷。",
      qualityFocus: "蓝色调、饱和度、净度、色带、星光、尺寸、切工、产地和加热状态是核心比较点。",
      identification: "需要区分天然、加热、扩散处理和合成刚玉；肉眼颜色不能确认处理状态。",
      folk: "民间常把蓝宝石视为忠诚、理性、守护和宁静的象征，也有招贵人、旺事业的说法。"
    },
    garnet: {
      summary: "石榴石是一组成分和颜色各有特点的矿物，常见红、橙、绿、紫等色系。",
      use: "适合戒指、吊坠、耳饰、手串和标本；佩戴时避免撞击、强热和长期接触化学品。",
      qualityFocus: "具体品种、颜色、透明度、火彩、净度、尺寸、切工和稀有度比统称更关键。",
      identification: "要先确定石榴石亚种，再与红宝石、尖晶石、玻璃等区分；折射率和密度很有帮助。",
      folk: "民间常把石榴石与热情、生命力、稳定和亲密关系联系起来，也有招财旺人缘的说法。"
    },
    hydrogrossular: {
      summary: "水钙铝榴石是含水的钙铝石榴石，常见绿色、粉色、白色、灰色、黄色和褐色，多呈半透明至不透明的细粒集合体。",
      use: "常加工成弧面戒面、珠串、挂件和雕件；表面抛光后可呈细润光泽，佩戴时避免强烈碰撞。",
      qualityFocus: "按颜色和成品形态分别比较色泽、细腻度、颜色分布、完整度、抛光和雕工。",
      identification: "结合检测报告中的石榴石品种名称、结构观察和成分数据确认材料。",
      qualityCraftObserve: "弧面、珠面或雕件轮廓匀称，抛光连续；受力边缘无明显缺口，纹理朝向与造型协调。",
      qualityCraftCaution: "检查弧面边缘、孔口和雕刻薄弱处是否有崩口或裂隙；触摸表面是否有补胶或粗糙点。",
      qualityIdentityObserve: "检测报告中的材料名称与商品说明对应；染色、浸渍、拼合或修补情况有清楚披露。",
      qualityIdentityCaution: "对照报告名称和实物；询问是否有表面处理、填充或拼合，并确认是否写入销售凭证。",
      folk: "作为饰品主要欣赏颜色和纹理；民间寓意会随商品与地区说法变化，不代表实际功效。"
    },
    tourmaline: {
      summary: "碧玺是成分变化很大的环状硅酸盐矿物族，常见柱状晶体、纵纹、双色或多色分带。",
      use: "适合戒指、吊坠、耳饰、手串和晶体标本；切磨边角要避免磕碰，长时间强热也应避免。",
      qualityFocus: "颜色鲜艳度、色带、透明度、净度、尺寸、切工、猫眼或变色效应和品种是主要因素。",
      identification: "碧玺内部品种差异大，应结合折射率、双折射、包体和颜色分带；不能以颜色单点定价。",
      folk: "民间常说碧玺代表愿望、活力、人缘和守护，不同颜色也被赋予招财、旺爱情等寓意。"
    },
    opal: {
      summary: "欧泊是含水非晶质二氧化硅，珍贵欧泊的变彩来自微结构造成的光衍射；水分和结构稳定性需注意。",
      use: "适合吊坠、耳饰、戒面和收藏；避免干燥高温、剧烈温差、超声清洗和强碰撞。",
      qualityFocus: "变彩强弱、颜色范围、图案、覆盖面积、底色、体积、完整性和是否拼合是主要评价点。",
      identification: "要区分天然欧泊、合成欧泊、双层或三层拼合欧泊以及树脂或玻璃仿品。",
      folk: "民间常把欧泊与灵感、希望、爱情和好运联系起来，也有招桃花、助创意的说法。"
    },
    "black-opal": {
      summary: "黑欧泊是底色较深的贵重欧泊。转动时出现的彩色闪光称为变彩，颜色、亮度、图案和可见范围共同影响观赏效果。",
      use: "适合吊坠、耳饰、戒面和收藏；避免干燥、高温、骤冷骤热及超声清洗。",
      qualityFocus: "看深色底色与变彩的对比、色彩明亮度、正面覆盖范围、图案清晰度、切磨方向和表面完整度。",
      identification: "核对天然或合成属性、单体或拼合结构及处理说明，并查看侧边的底层、顶层和粘合层。",
      qualityCraftObserve: "切磨方向让变彩集中在正面，弧面饱满或刻面比例协调；边缘平整，无明显磨损或龟裂。",
      qualityCraftCaution: "检查边缘、镶口和背面有无裂纹、脱层或碰伤；欧泊避免干燥、高温和骤冷骤热。",
      qualityIdentityObserve: "报告写明天然欧泊及单体或拼合结构；染色、烟熏等处理有披露，编号与手中样品相符。",
      qualityIdentityCaution: "侧面查看是否有底层或透明顶层；商品描述、检测报告和实物结构要一致。",
      folk: "欧泊常被赋予灵感、希望等文化象征；佩戴时主要欣赏变彩，这些象征不代表实际功效。"
    },
    moonstone: {
      summary: "月光石属于长石族，晕彩来自层状结构对光的散射；蓝光、体色、透明度和裂隙共同影响观感。",
      use: "适合戒面、吊坠、耳饰和手链；佩戴时避免磕碰、热冲击和酸碱化学品。",
      qualityFocus: "晕彩的面积、亮度、颜色、体色、透明度、完整性、尺寸和切工是主要比较点。",
      identification: "应与欧泊、玻璃和仿制长石材料区分；单凭“有蓝光”不能确定天然或高价值。",
      folk: "民间常把月光石与温柔、直觉、爱情和女性气质联系起来，也有招桃花、助睡眠的说法。"
    },
    peridot: {
      summary: "橄榄石是镁铁质硅酸盐，宝石级常呈黄绿色至橄榄绿色；颜色均匀性和包体是重要观察点。",
      use: "适合戒指、吊坠、耳饰和手链；硬度中等，佩戴时要避免碰撞、摩擦和强酸碱。",
      qualityFocus: "绿色纯度、饱和度、透明度、净度、尺寸、切工和特殊包体都是观察整体品相与观赏性的参考因素。",
      identification: "要与绿色玻璃、绿色碧玺和其他黄绿色宝石区分，双折射和包体可提供线索。",
      folk: "民间常把橄榄石与阳光、和谐、希望和快乐联系起来，也有招财、护航和改善人缘的说法。"
    },
    topaz: {
      summary: "托帕石是铝硅酸盐矿物，透明度较高且有明显解理；蓝色品种常见处理或辐照改色背景。",
      use: "适合戒面、吊坠、耳饰和收藏；解理方向容易受冲击，佩戴时尤其要避免敲碰。",
      qualityFocus: "颜色、透明度、净度、尺寸、切工、稀有颜色和处理状态需结合整体品相综合观察。",
      identification: "要结合解理、双折射、折射率和光谱，并核对颜色处理信息；不能只按蓝色深浅判断。",
      folk: "民间常将托帕石与友谊、表达、平和和希望联系起来，也有招贵人、旺沟通的说法。"
    },
    amber: {
      summary: "琥珀是古代树脂形成的有机宝石，常见透明、云雾、流纹、气泡和植物或昆虫包体。",
      use: "适合项链、手串、吊坠和雕件；应避开高温、火焰、酒精、香水、溶剂和尖锐摩擦。",
      qualityFocus: "颜色、透明度、净度、包体真实性、尺寸、完整性和压制或优化状态需综合观察；产地信息应有可靠依据。",
      identification: "需要区分天然琥珀、柯巴树脂、压制琥珀、塑料和玻璃；民间盐水或热针法都不能代替检测。",
      folk: "民间常把琥珀视为平安、温暖、长寿和护身的象征，也有招财、安神和助睡眠的说法。"
    },
    pearl: {
      summary: "珍珠由贝类分泌的珍珠质形成，光泽、珠层、形状、表面、匹配度和养护状况共同决定观赏性。",
      use: "适合项链、耳饰、胸针和戒指；应最后佩戴、单独收纳，远离香水、汗液、化妆品和干燥热源。",
      qualityFocus: "光泽、表皮、圆度、大小、颜色、珠层厚度、匹配度、产地或养殖信息是重要维度。",
      identification: "应区分天然、养殖、贝壳珠、玻璃珠、塑料珠和涂层珠；不建议用牙咬等民间方法。",
      folk: "民间常把珍珠与纯洁、圆满、健康和母爱联系起来，也有招财、护肤和安定情绪的说法。"
    },
    diamond: {
      summary: "钻石是碳的晶体，硬度很高但具有解理；切工、颜色、净度、克拉重量和证书共同构成评价体系。",
      use: "适合戒指、耳饰、吊坠和收藏；日常佩戴仍应避免边角撞击、油污堆积和剧烈温差。",
      qualityFocus: "4C是基础框架，还要关注荧光、奶咖绿、切工比例、腰部状态、证书和是否处理。",
      identification: "必须区分天然钻石、合成钻石、莫桑石和立方氧化锆；哈气、划玻璃和看火彩都不可靠。",
      folk: "民间常把钻石与永恒、承诺、坚贞和纪念联系起来，也有招财、护爱情和增强信心的说法。"
    },
    spinel: {
      summary: "尖晶石是独立的氧化物矿物，颜色范围宽，常见红、粉、蓝和黑色；历史上曾与红宝石混淆。",
      use: "适合戒面、耳饰、吊坠和收藏；日常佩戴较方便，但仍要避免硬物撞击。",
      qualityFocus: "颜色、饱和度、透明度、净度、尺寸、切工、稀有颜色和天然或合成状态需结合整体品相综合观察。",
      identification: "要与红宝石、蓝宝石、石榴石和玻璃区分；单折射特征和光谱检测很重要。",
      folk: "民间常把尖晶石与活力、自信、热情和复苏联系起来，也有招事业、旺人缘的说法。"
    },
    zircon: {
      summary: "锆石是天然硅酸锆矿物，具有较强火彩和双折射；不能与立方氧化锆混为一谈。",
      use: "适合戒面、耳饰、吊坠和收藏；高双折射和脆性使其需要避免强烈磕碰。",
      qualityFocus: "颜色、火彩、透明度、净度、尺寸、切工、具体类型和处理状态需结合整体品相综合观察。",
      identification: "应结合双折射、折射率、密度和光谱，与钻石、托帕石和立方氧化锆区分。",
      folk: "民间常把锆石与纯净、智慧、忠诚和成功联系起来，也有招财、旺事业的说法。"
    },
    alexandrite: {
      summary: "变石是具有明显变色效应的金绿宝石，日光与白炽光下的颜色变化是核心观赏特征。",
      use: "适合戒面、吊坠、耳饰和收藏；日常佩戴要避免尖角撞击和剧烈热冲击。",
      qualityFocus: "变色强度、色相、透明度、净度、尺寸、切工、猫眼效应和天然性决定稀缺程度。",
      identification: "要排除合成变石、变色刚玉、变色石榴石和玻璃；应在标准光源下观察并检测。",
      folk: "民间常把变石与变化、适应力、智慧和守护联系起来，也有招贵人、旺事业转机的说法。"
    },
    tanzanite: {
      summary: "坦桑石是黝帘石的蓝紫色宝石，具有多色性，市场上多数颜色改善与加热历史相关。",
      use: "适合吊坠、耳饰、戒面和收藏；硬度中等且有解理，日常佩戴要减少磕碰。",
      qualityFocus: "蓝紫色调、饱和度、透明度、净度、尺寸、切工、多色性表现和处理披露是关键。",
      identification: "需要区分天然与加热状态，并与蓝宝石、堇青石、蓝色尖晶石和玻璃区分。",
      folk: "民间常把坦桑石与灵性、直觉、浪漫和新开始联系起来，也有招桃花、旺贵人的说法。"
    },
    morganite: {
      summary: "摩根石是粉色至橙粉色绿柱石，颜色通常柔和清透；净度与切工对成品观感影响明显。",
      use: "适合戒指、吊坠、耳饰和婚庆珠宝；避免强碰、热冲击和不明化学清洗。",
      qualityFocus: "粉色纯度、饱和度、透明度、净度、尺寸、切工和颜色稳定性需结合整体观感综合观察。",
      identification: "要与粉色碧玺、粉色托帕石、粉色刚玉和玻璃区分，处理信息应透明披露。",
      folk: "民间常把摩根石与温柔、爱情、包容和婚姻联系起来，也有招桃花、护感情的说法。"
    },
    sunstone: {
      summary: "日光石属于长石族，内部片状包体造成砂金效应；颜色和闪光方向会随角度变化。",
      use: "适合戒面、吊坠、耳饰和手串；佩戴时避免解理方向受冲击和强烈温差。",
      qualityFocus: "砂金效应、颜色、透明度、闪光分布、尺寸、切工和净度共同呈现其观赏特点。",
      identification: "要与砂金石玻璃、含片状包体的石英和涂层材料区分，观察闪光是否来自内部。",
      folk: "民间常把日光石与阳光、自信、行动力和快乐联系起来，也有招财、旺事业的说法。"
    },
    iolite: {
      summary: "堇青石具有明显多色性，蓝紫、灰蓝和黄褐色可能随观察方向改变；方向性是重要特征。",
      use: "适合戒面、吊坠、耳饰和收藏；解理与脆性使其不适合剧烈碰撞的活动场景。",
      qualityFocus: "蓝紫色纯度、多色性表现、透明度、净度、尺寸和切工比例是主要比较点。",
      identification: "应与坦桑石、蓝宝石、蓝色尖晶石和玻璃区分，多色性和光学数据很有帮助。",
      folk: "民间常把堇青石与航海、方向感、冷静和自我探索联系起来，也有招贵人、助决策的说法。"
    },
    kunzite: {
      summary: "锂紫玉是锂辉石的粉紫色宝石，具有多色性和明显解理，长时间强光可能影响颜色。",
      use: "适合吊坠、耳饰和低碰撞场景的戒面；不宜作为高频敲碰的日常活动戒指。",
      qualityFocus: "粉紫色调、透明度、净度、尺寸、切工、颜色稳定性和猫眼效应需结合整体品相综合观察。",
      identification: "应与摩根石、紫水晶、粉色碧玺和玻璃区分，注意解理和多色性。",
      folk: "民间常把锂紫玉与温柔、释放压力、爱情和自我表达联系起来，也有招桃花的说法。"
    },
    "quartz-rose": {
      summary: "蔷薇石英是粉色石英，多呈块状或半透明，颜色与微量元素和微观包体有关。",
      use: "适合手串、吊坠、雕件、摆件和戒面；避免磕碰、强热、强光和化学品。",
      qualityFocus: "粉色均匀度、透明度、星光或猫眼效应、完整性、尺寸和雕工是主要比较点。",
      identification: "要与粉色玻璃、粉色玉髓、染色石英和摩根石区分，不能仅凭粉色判断。",
      folk: "民间常把蔷薇石英称作爱情和温柔的象征，也有招桃花、改善人缘和安抚情绪的说法。"
    },
    "dushan-jade": {
      summary: "独山玉是多矿物细粒集合体，颜色常斑杂多变，常见白、绿、紫、黄等组合。",
      use: "适合手镯、挂件、摆件和雕件；日常佩戴应避免磕碰、酸碱和长期汗液浸润。",
      qualityFocus: "颜色组合、细腻度、透明度、完整性、俏色、雕工和尺寸共同影响整体观感与工艺表现。",
      identification: "需结合矿物组成、结构、折射率和密度，与翡翠、软玉和石英岩玉区分。",
      folk: "民间常把独山玉与多彩、和合、地方守护和家宅平安联系起来，也有招福纳财的说法。"
    },
    "serpentine-jade": {
      summary: "岫玉常指蛇纹石玉，质地相对细腻，常呈黄绿、浅绿或蜡状光泽，颜色与结构变化较大。",
      use: "适合手镯、挂件、手串和雕件；硬度相对较低，应避免与硬物摩擦和高温。",
      qualityFocus: "颜色、细腻度、透明度、完整性、尺寸、雕工和是否染色或充填是主要比较点。",
      identification: "要与软玉、翡翠、石英岩玉和玻璃区分，不能用“凉感”或重量感下结论。",
      folk: "民间常把岫玉与养护、平安、柔和和家宅和顺联系起来，也有招福守财的说法。"
    },
    "quartzite-jade": {
      summary: "石英岩玉是以石英颗粒集合体为主的商业材料，白、绿、黄、紫等颜色常见，部分样品会染色。",
      use: "适合手镯、挂件、摆件和日常饰品；佩戴时避免强酸碱、磕碰和不明清洁剂。",
      qualityFocus: "颜色自然度、颗粒细度、透明度、尺寸、完整性、工艺和染色或充填状态需要分开看。",
      identification: "需要与翡翠、玛瑙、玉髓、玻璃和染色材料区分，检测报告比商业名称可靠。",
      folk: "民间常将绿色石英岩玉赋予平安、健康和生机寓意，也有招财聚福的说法。"
    },
    chalcedony: {
      summary: "玉髓是隐晶质石英集合体，常呈半透明、蜡状光泽，颜色范围从白、灰到蓝、绿、红。",
      use: "适合手镯、吊坠、戒面、手串和雕件；避免长时间暴晒、强热和碰撞。",
      qualityFocus: "颜色均匀度、半透明感、净度、纹理、尺寸、切工和是否染色需结合整体观感综合观察。",
      identification: "要与玛瑙、石英岩玉、玻璃和染色材料区分，观察纹理和结构比看颜色更重要。",
      folk: "民间常把玉髓与平安、温润、疗愈和人缘联系起来，各色玉髓也有招财或旺爱情的说法。"
    },
    "aventurine-quartz": {
      summary: "东陵石是含片状包体的石英质材料，转动时常见砂金效应，绿色、红色和蓝色品种较多。",
      use: "适合手串、吊坠、摆件和雕件；避免强碰、强热和酸碱化学品。",
      qualityFocus: "底色、闪光强度、闪光均匀度、完整性、尺寸和雕工是主要观察维度。",
      identification: "要与砂金石玻璃、日光石和染色石英区分，观察闪光来源与颗粒结构。",
      folk: "民间常把东陵石与机会、乐观、行动力和事业联系起来，也有招财石的说法。"
    },
    obsidian: {
      summary: "黑曜石是火山熔岩快速冷却形成的天然玻璃，常见黑色、彩虹、金曜和雪花等外观。",
      use: "适合手串、吊坠、雕件和摆件；断口锋利，佩戴与收纳时要避免碰撞和边缘磕伤。",
      qualityFocus: "颜色、光泽、彩虹或金曜效应、图案、完整性、尺寸和雕工共同体现观赏效果与工艺水平。",
      identification: "要与黑色玻璃、黑碧玺和其他深色玉石区分，气泡、流纹和断口可作线索。",
      folk: "民间常把黑曜石与辟邪、护身、排除负面情绪联系起来，也有守财和防小人的说法。"
    },
    "tiger-eye": {
      summary: "虎睛石是石英质材料中的纤维状假象交代体，具有丝绢光泽和猫眼般移动光带。",
      use: "适合手串、戒面、吊坠、摆件和雕件；佩戴时避免硬物磕碰和高温处理。",
      qualityFocus: "光带清晰度、移动性、颜色、底色、完整性、尺寸和切磨方向是核心观察点。",
      identification: "应与石英猫眼、玻璃猫眼和染色材料区分，观察光带是否来自内部纤维结构。",
      folk: "民间常把虎睛石与勇气、决断、护身和行动力联系起来，也有招财、旺事业的说法。"
    },
    malachite: {
      summary: "孔雀石是含铜碳酸盐矿物，孔雀绿色和同心环带、条纹是最具识别性的外观特征。",
      use: "适合吊坠、耳饰、雕件和摆件；硬度较低，应避免酸碱、汗液、香水和碰撞。",
      qualityFocus: "绿色饱和度、环带图案、纹理完整性、尺寸、雕工和表面状态需结合整体品相综合观察。",
      identification: "可与染色碧玉、绿色玻璃和蛇纹石玉混淆，结构观察和检测比颜色更可靠。",
      folk: "民间常把孔雀石与护身、成长、平衡和家宅联系起来，也有招财挡煞的说法。"
    },
    chrysocolla: {
      summary: "硅孔雀石是铜矿床氧化带中的含水硅酸盐，常呈蓝绿、青绿并与石英或孔雀石共生。",
      use: "适合吊坠、摆件、雕件和标本；多孔或脆弱样品要避免浸水、酸碱和硬物摩擦。",
      qualityFocus: "蓝绿色纯度、纹理、基质组合、完整性、尺寸和工艺是主要观察点。",
      identification: "要与绿松石、孔雀石、染色方解石和树脂材料区分，不能只看蓝绿色。",
      folk: "民间常把硅孔雀石与沟通、宁静、女性力量和情绪平衡联系起来，也有招人缘的说法。"
    },
    labradorite: {
      summary: "拉长石是斜长石族材料，转动时可出现蓝、绿、金色彩闪，彩闪方向与内部结构有关。",
      use: "适合戒面、吊坠、手串、摆件和雕件；长石解理明显，佩戴时避免强碰。",
      qualityFocus: "彩闪面积、颜色、亮度、移动性、底色、完整性和切磨方向共同呈现其观赏特点。",
      identification: "要与月光石、欧泊和虹彩玻璃区分，观察彩闪是否有长石结构和方向性。",
      folk: "民间常把拉长石与直觉、保护、变化和灵感联系起来，也有招贵人、护旅行的说法。"
    },
    amazonite: {
      summary: "天河石是微斜长石的绿色至蓝绿色变种，常见格纹、白色条纹和颜色分区。",
      use: "适合手串、吊坠、雕件和摆件；避免强碰、酸碱和高温骤冷。",
      qualityFocus: "蓝绿色调、格纹美感、颜色均匀度、完整性、尺寸和雕工是主要因素。",
      identification: "应与绿松石、绿色玻璃和其他长石区分，纹理与矿物结构需要结合判断。",
      folk: "民间常把天河石与希望、表达、沟通和勇气联系起来，也有招财、旺事业的说法。"
    },
    jasper: {
      summary: "碧玉是以隐晶质石英为主的不透明材料，颜色和斑纹丰富，通常更看重图案与整体观赏性。",
      use: "适合手串、吊坠、印章、摆件和雕件；硬度较好但仍需避免硬碰和强酸碱。",
      qualityFocus: "图案、色彩组合、纹理自然度、完整性、尺寸、稀有品种和雕工是主要维度。",
      identification: "要与玛瑙、染色石、陶瓷和树脂区分，观察颗粒、纹理和断口。",
      folk: "民间常把碧玉与稳重、健康、平安和大地能量联系起来，也有守财、旺家运的说法。"
    },
    chrysoprase: {
      summary: "绿玉髓是含镍致色的玉髓，常呈苹果绿至黄绿色半透明外观，颜色稳定性需关注。",
      use: "适合戒面、吊坠、耳饰和手串；避免强光、高温、化学品和长期干燥。",
      qualityFocus: "苹果绿色纯度、均匀度、半透明感、净度、尺寸和颜色稳定性需结合整体观感综合观察。",
      identification: "要与翡翠、绿松石、绿色玻璃和染色玉髓区分，成分与结构检测更可靠。",
      folk: "民间常把绿玉髓与健康、青春、喜悦和人缘联系起来，也有招财、旺桃花的说法。"
    },
    "yellow-dragon-jade": {
      summary: "黄龙玉是以黄色至橙黄色石英质玉材料为主的商业称呼，常见蜡状光泽和多种颜色。",
      use: "适合手镯、挂件、摆件、手串和雕件；避免高温、强酸碱和磕碰。",
      qualityFocus: "颜色、细腻度、润度、透明度、完整性、俏色、尺寸和雕工是主要比较点。",
      identification: "需要先确认矿物组成，再与黄水晶、软玉、染色玉髓和树脂区分。",
      folk: "民间常把黄色与财富、丰收、家业和尊贵联系起来，黄龙玉也常被说成招财纳福。"
    },
    "chicken-blood-stone": {
      summary: "鸡血石是以辰砂红色斑块和细粒基质为特色的印章石材料，红色分布方式很重要。",
      use: "适合印章、摆件、挂件和收藏；硬度与结构差异较大，应避免碰撞、酸碱和高温。",
      qualityFocus: "红色鲜艳度、分布形态、红地比例、基质细腻度、完整性、尺寸和雕工需结合整体观感综合观察。",
      identification: "要核对矿物组成、产地和处理状态，不能只看红色像不像鸡血。",
      folk: "民间常把鸡血石与吉庆、权印、辟邪和事业联系起来，也有招财旺官运的说法。"
    },
    "shoushan-stone": {
      summary: "寿山石是多种细粒黏土矿物集合体的传统印章石名称，颜色和石性变化很大。",
      use: "适合印章、雕件、挂件和摆件；质地相对柔和，佩戴和收纳要避免碰撞、油污和高温。",
      qualityFocus: "石质细腻度、温润感、颜色、萝卜纹或特殊纹理、具体品类、尺寸和雕工需结合整体品相综合观察。",
      identification: "要结合产地描述、结构、颜色和检测资料，谨慎区分染色、拼合和树脂仿品。",
      folk: "民间常把寿山石与长寿、福气、文房雅趣和家族传承联系起来，也有招福纳财的说法。"
    },
    coral: {
      summary: "珊瑚是由珊瑚虫骨骼形成的有机宝石，纵纹、枝状结构和颜色是常见观察特征。",
      use: "适合项链、手串、耳饰、胸针和雕件；应避免酸碱、香水、汗液、碰撞和长时间浸水。",
      qualityFocus: "颜色、均匀度、枝体或珠体完整性、尺寸、纹理、产地与合法来源信息共同重要。",
      identification: "要区分天然珊瑚、染色骨料、树脂和玻璃；同时注意来源与保护法规要求。",
      folk: "民间常把红珊瑚与吉祥、长寿、护身和喜庆联系起来，也有招财、旺事业的说法。"
    },
    "shell-pearls": {
      summary: "砗磲是大型贝壳材料，主要成分为碳酸钙，常见白色、乳白色和同心生长纹。",
      use: "适合手串、吊坠、雕件和摆件；避免碰撞、酸碱、汗液浸泡和高温。",
      qualityFocus: "颜色纯净度、纹理、光泽、完整性、尺寸、工艺和来源合规性是主要比较点。",
      identification: "要与珍珠、贝壳珠、树脂和陶瓷仿品区分，并关注来源和保护规定。",
      folk: "民间常把砗磲与净化、慈悲、平安和海洋守护联系起来，也有招福纳财的说法。"
    },
    moissanite: {
      summary: "莫桑石是碳化硅合成宝石，具有强火彩和双折射，市场定位主要是耐用的仿钻或设计材料。",
      use: "适合戒指、耳饰、吊坠和日常珠宝；佩戴时仍要定期清洁并避免边角磕碰。",
      qualityFocus: "先确认是碳化硅莫桑石，再比较颜色均匀度、净度、切工对称与抛光、尺寸和镶嵌；强火彩本身不等于品质更高。",
      identification: "应与天然钻石、合成立方氧化锆和玻璃区分，双折射与专业仪器很关键。",
      folk: "民间常把莫桑石与闪耀、自信、爱情和现代选择联系起来，也有招财旺人气的说法。"
    },
    "cubic-zirconia": {
      summary: "立方氧化锆是实验室合成的仿钻材料，透明度和火彩可调，按合成材料的用途和加工效果评价。",
      use: "适合时尚首饰、舞台饰品和日常装饰；避免强碰、镶爪松动和长期油污。",
      qualityFocus: "颜色、净度、切工、尺寸、镶嵌工艺和设计效果是主要观察点，不宜按天然钻石体系比较。",
      identification: "需与钻石、莫桑石和玻璃区分；专业检测可根据折射率、密度和热学反应判断。",
      folk: "民间常把无色仿钻饰品赋予纯洁、闪耀和祝福寓意，招财说法属于消费文化表达。"
    },
    "purple-fluorite": {
      summary: "紫色萤石是萤石族材料，常见立方晶体、完全解理和紫色分带，硬度相对较低。",
      use: "更适合摆件、标本、吊坠和低碰撞场景；避免跌落、酸碱和长时间摩擦。",
      qualityFocus: "颜色、分带、晶形、透明度、晶体完整性、尺寸和标本展示效果需结合整体观感综合观察。",
      identification: "要与紫水晶、玻璃和染色材料区分，解理、晶形、硬度和检测资料很有帮助。",
      folk: "民间常把紫萤石与专注、学习、平静和灵感联系起来，也有招贵人、助学业的说法。"
    },
    "tsavorite-garnet": {
      summary: "沙弗莱石是绿色钙铝榴石，通常颜色鲜艳、透明度较好，天然高品质大颗粒较少见。",
      use: "适合戒指、耳饰、吊坠和收藏；日常佩戴要避免猛烈撞击和强热冲击。",
      qualityFocus: "绿色鲜艳度、色调、透明度、净度、尺寸、切工、产地和天然状态是重点。",
      identification: "需与祖母绿、绿色碧玺、绿色玻璃和其他绿色石榴石区分。",
      folk: "民间常把沙弗莱石与生机、希望、成长和财富联系起来，也有招财、旺事业的说法。"
    },
    "demantoid-garnet": {
      summary: "翠榴石是绿色钙铁榴石，常有强火彩，马尾状包体是经典但并非唯一的观察线索。",
      use: "适合戒面、耳饰、吊坠和收藏；尺寸小且易受撞击，镶嵌与佩戴要更谨慎。",
      qualityFocus: "绿色、火彩、透明度、马尾包体、尺寸、切工和天然性需综合观察；产地信息应有可靠依据。",
      identification: "要与沙弗莱石、橄榄石和绿色玻璃区分，包体观察需与仪器检测结合。",
      folk: "民间常把翠榴石与财富、成功、生命力和勇气联系起来，也有招财旺事业的说法。"
    },
    chrysoberyl: {
      summary: "金绿宝石是高硬度彩色宝石，黄绿至金黄色常见，部分品种具有猫眼或变色效应。",
      use: "适合戒指、耳饰、吊坠和收藏；猫眼方向需要保护，避免硬物横向撞击。",
      qualityFocus: "颜色、透明度、净度、猫眼或变色效应、尺寸、切工和天然性是主要因素。",
      identification: "要与橄榄石、金绿宝石猫眼仿品和玻璃区分，光学效应需要在合适光源下验证。",
      folk: "民间常把金绿宝石与洞察、守护、财富和自信联系起来，也有招贵人、旺事业的说法。"
    },
    kyanite: {
      summary: "蓝晶石是具有方向性硬度和解理的硅酸盐矿物，常见刀片状晶体和蓝色多色性。",
      use: "适合吊坠、耳饰、标本和低碰撞首饰；不建议作为频繁磕碰的戒指主石。",
      qualityFocus: "蓝色、透明度、晶体完整性、净度、尺寸、切工和特殊猫眼或双色效果需结合整体观感综合观察。",
      identification: "要与蓝宝石、堇青石和蓝色玻璃区分，方向性硬度和多色性是重要线索。",
      folk: "民间常把蓝晶石与沟通、冷静、专注和方向感联系起来，也有助学习、招贵人的说法。"
    },
    diopside: {
      summary: "透辉石是辉石族矿物，绿色透明品种可作宝石，黑色包体和柱状晶体是常见观察特征。",
      use: "适合戒面、吊坠、耳饰和标本；硬度中等，避免碰撞和热冲击。",
      qualityFocus: "绿色纯度、透明度、净度、尺寸、切工、猫眼或星光效应和天然性需结合整体品相综合观察。",
      identification: "要与橄榄石、绿色碧玺和祖母绿区分，折射率、双折射和包体可提供线索。",
      folk: "民间常把透辉石与生命力、平衡、健康和行动联系起来，也有招财、助事业的说法。"
    },
    "black-jade": {
      summary: "墨玉是深色玉石的商业称呼，可能涉及软玉等不同材料；透光、结构和成分需要综合确认。",
      use: "适合手镯、挂件、手串和雕件；深色材料更要避免磕碰、酸碱和表面染色磨损。",
      qualityFocus: "材料身份、颜色深度、透光性、细腻度、完整性、尺寸和雕工比名称更重要。",
      identification: "“墨玉”不能只凭黑色判断，应确认具体矿物组成，并排除黑曜石、黑碧玺和黑玻璃。",
      folk: "民间常把墨玉与稳重、护身、辟邪和守财联系起来，也有镇宅、保平安的说法。"
    },
    "green-jasper": {
      summary: "绿碧玉是不透明的绿色碧玉材料，常有斑纹、基质和色带，整体图案比单一色深更重要。",
      use: "适合手串、吊坠、雕件、摆件和印章；避免强碰、酸碱和高温骤冷。",
      qualityFocus: "绿色调、纹理、图案、完整性、尺寸、图案特点和雕工需结合整体观感综合观察。",
      identification: "要与翡翠、蛇纹石玉、染色石和绿色玻璃区分，观察结构和断口。",
      folk: "民间常把绿碧玉与健康、成长、稳定和家宅联系起来，也有招财聚福的说法。"
    },
    sodalite: {
      summary: "方钠石是富钠铝硅酸盐矿物，深蓝色与白色方解石脉共生是常见外观。",
      use: "适合吊坠、手串、雕件和摆件；避免酸碱、强热和剧烈碰撞。",
      qualityFocus: "蓝色饱和度、白色脉纹、图案、完整性、尺寸和雕工是主要比较点。",
      identification: "要与青金石、染色方解石和蓝色玻璃区分，矿物组合与结构很重要。",
      folk: "民间常把方钠石与理性、沟通、真诚和专注联系起来，也有招贵人、助学业的说法。"
    },
    rhodochrosite: {
      summary: "菱锰矿是碳酸盐矿物，粉红色、白色条带和葡萄状集合体是常见观赏特征。",
      use: "适合吊坠、耳饰、摆件和标本；硬度较低，应避免汗液、酸碱和硬物摩擦。",
      qualityFocus: "粉红色调、条带图案、透明度、完整性、尺寸、晶形和雕工需结合整体观感综合观察。",
      identification: "要与粉色方解石、染色玛瑙和粉色玻璃区分，酸碱测试不建议自行操作。",
      folk: "民间常把菱锰矿与爱、疗愈、热情和自我接纳联系起来，也有招桃花和旺人缘的说法。"
    },
    smithsonite: {
      summary: "菱锌矿是锌矿床氧化带中的碳酸盐矿物，常呈蓝绿、粉色或葡萄状集合体。",
      use: "更适合标本、摆件和低碰撞吊坠；避免酸碱、汗液、浸水和硬物摩擦。",
      qualityFocus: "颜色、葡萄状形态、光泽、完整性、尺寸、共生矿物和标本观赏性是重点。",
      identification: "要与绿松石、硅孔雀石和染色方解石区分，结构与矿物学检测更可靠。",
      folk: "民间常把菱锌矿与温和、平衡、健康和人缘联系起来，也有招福、助沟通的说法。"
    },
    "black-tourmaline": {
      summary: "黑碧玺通常指富铁黑色电气石，常见柱状晶体、纵纹和三方柱形，是很有辨识度的矿物标本。",
      use: "适合手串、吊坠、摆件和晶体标本；佩戴时避免柱状边角受撞和长时间汗液浸润。",
      qualityFocus: "晶体完整度、纵纹、光泽、尺寸、颜色均匀度、切磨质量和标本形态需结合整体观感综合观察。",
      identification: "要与黑曜石、黑玻璃、黑玉和其他黑色矿物区分，晶形和光学数据更重要。",
      folk: "民间常把黑碧玺与护身、辟邪、稳定和避负面联系起来，也有守财、保平安的说法。"
    },
    prehnite: {
      summary: "葡萄石是含水硅酸盐矿物，常呈浅绿色、葡萄状或肾状集合体，半透明质感很有特色。",
      use: "适合吊坠、耳饰、摆件和标本；避免碰撞、酸碱、高温和长期浸水。",
      qualityFocus: "颜色、半透明度、葡萄状形态、猫眼效应、完整性、尺寸和共生矿物需结合整体观感综合观察。",
      identification: "要与绿玉髓、绿色玻璃和蛇纹石玉区分，集合体结构与检测资料很重要。",
      folk: "民间常把葡萄石与希望、包容、疗愈和人缘联系起来，也有招贵人、助事业的说法。"
    },
    "petrified-wood": {
      summary: "硅化木是木材组织被二氧化硅等矿物交代保存的有机遗存，年轮和木纹是核心观赏特征。",
      use: "适合摆件、手串、吊坠和雕件；避免强碰、酸碱和长时间受潮。",
      qualityFocus: "木纹清晰度、颜色、硅化完整度、尺寸、切面图案、稀有性和雕工需结合整体观感综合观察。",
      identification: "要与普通木材、树脂和碧玉仿品区分，观察木质结构是否连续并结合检测。",
      folk: "民间常把硅化木与长寿、稳定、家业根基和守护联系起来，也有镇宅、招财的说法。"
    },
    "beijing-white-jade": {
      summary: "京白玉是以白色细粒石英岩为主的商业名称，常与白玉、大理岩和玻璃产生外观混淆。",
      use: "适合手镯、挂件、摆件、印章和雕件；避免磕碰、酸碱和长期汗液浸润。",
      qualityFocus: "白度、细度、均匀度、透明度、完整性、尺寸和雕工是主要比较维度。",
      identification: "应确认石英岩成分，并与软玉、白色翡翠、大理岩和玻璃区分。",
      folk: "民间常把白色玉石与纯洁、平安、清正和家宅联系起来，也有招福、护身的说法。"
    },
    bloodstone: {
      summary: "血石是带红褐色氧化铁斑点的深绿色玉髓，属于石英质材料；红斑是其常见观赏特征。",
      use: "可做戒面、吊坠、珠串和印章；玉髓硬度较高但仍应避免强烈碰撞和化学品。",
      qualityFocus: "比较绿底色泽、红斑分布、图案观赏性、完整度、尺寸、抛光和染色情况；红点多少并非单一等级标准。",
      identification: "结合玉髓结构、折射率和放大观察，并排除红点碧玉、染色玉髓及树脂仿品。",
      folk: "民间有将血石佩于胸前或戴作戒面以寄托勇气、护身、平安的说法，也有人把它与守财、事业顺遂联系起来。"
    },
    carnelian: {
      summary: "红玉髓是橙红至红褐色的玉髓品种，主要成分为微晶质二氧化硅，颜色常与铁致色有关。",
      use: "常见于手串、项链、戒面和小雕件；日常避免骤热、强酸碱和硬物撞击。",
      qualityFocus: "观察色调与分布、半透明感、纹理、裂纹、珠径或切工、抛光和染色处理。",
      identification: "与红玛瑙、红碧玉和染色玉髓外观相近，应结合结构、放大观察及必要的实验室检测。",
      folk: "常戴在手腕或胸前，民间把红玉髓与活力、勇气、平安和人缘联系起来，也有招财、旺事业的吉祥说法。"
    },
    "nanhong-agate": {
      summary: "南红玛瑙是红色玛瑙材料，颜色常由细小的赤铁矿（一种铁氧化物）颗粒形成，常见橙红、朱红至紫红。",
      use: "常做珠串、挂件、戒面和雕件；日常佩戴避免硬物撞击、骤热和强酸碱清洁。",
      qualityFocus: "比较颜色鲜明度与均匀度、细腻感、天然纹理、裂纹、孔道、雕工和颜色处理。",
      identification: "查看对应实物的检测报告，核对玛瑙或玉髓材料名称，以及染色、加热、充填等处理信息。",
      qualityCraftObserve: "珠串颜色彼此协调、孔道边缘完整；雕件线条顺着颜色和纹理，抛光细致，结构适合预期佩戴。",
      qualityCraftCaution: "逐颗查看珠孔和表面裂纹；雕件检查镂空、薄边、尖角和抛光死角。",
      qualityIdentityObserve: "检测报告明确材料名称和处理结论；加热、染色、充填或拼合情况如实说明。",
      qualityIdentityCaution: "报告编号与实物相符；将材料名称、颜色处理和瑕疵位置写入订单或销售凭证。",
      folk: "红色饰品常被用来寄托喜庆、吉祥和平安愿望；这是文化表达，不是材料功效。"
    },
    onyx: {
      summary: "缟玛瑙是具有平行色带的玉髓；市场上“黑玛瑙”常指黑色玉髓饰品，其中一部分经过染色。",
      use: "适合戒面、吊坠、珠串和雕刻件；佩戴后擦干汗液，避免溶剂和强酸碱清洁。",
      qualityFocus: "看色带是否协调、颜色均匀度、材料完整度、切磨比例和工艺，并确认黑色是否经过染色。",
      identification: "商业俗称可能覆盖不同材料，需区分玉髓质缟玛瑙、方解石质缟纹石及染色材料。",
      folk: "民间常将黑色缟玛瑙戴作手串或戒面，寓意沉稳、守护和坚定，也有辟邪、守财、招福的说法。"
    },
    ametrine: {
      summary: "紫黄晶是同一块石英中呈现紫色与黄色至橙黄色分区的品种，兼有紫水晶和黄水晶的外观特征。",
      use: "适合戒面、吊坠和耳饰；石英较耐日常佩戴，但仍需避免硬碰和强热冲击。",
      qualityFocus: "比较双色比例、分区清晰度、颜色饱和度、透明度、净度、切工和天然或处理状态。",
      identification: "需区分天然双色生长、处理石英、拼合石和合成材料；照片不能确认颜色成因。",
      folk: "民间常把紫黄晶戴作吊坠或戒指，借紫色寓意智慧、黄色寓意财富，因而有平衡心绪、招财纳福的说法。"
    },
    "fire-agate": {
      summary: "火玛瑙是具有红、橙至绿色虹彩的玉髓质玛瑙；反射光下可观察其光效，通常不像欧泊变彩那样随角度显著变化。",
      use: "适合弧面戒面、吊坠和小型收藏；避免超声清洗、强热、跌落和硬物刮碰。",
      qualityFocus: "看虹彩的范围与色彩、基底完整性、切磨呈现效果和表面状态；明显角度变化不是必备的等级指标。",
      identification: "需排除表面镀膜和虹彩玻璃；观察光效与表面纹理的关系，并结合专业检测确认材料及处理。",
      folk: "民间常把火玛瑙佩在胸前或手腕，寓意热情、勇气、守护和行动力，也有招财、提升事业运的说法。"
    },
    "blue-lace-agate": {
      summary: "蓝纹玛瑙是带浅蓝、白色细密波状条带的玉髓品种，通常为半透明至不透明。",
      use: "常做手串、项链、吊坠和小雕件；避免磕碰、染色材料接触溶剂和长期暴晒。",
      qualityFocus: "比较蓝白条带的细腻度、色调、图案连续性、透明度、裂纹、珠径和加工质量。",
      identification: "需与染色玉髓、染色豪莱石和玻璃仿品区分，留意钻孔与裂隙处是否聚色。",
      folk: "民间常把蓝纹玛瑙戴在手腕或作为贴身吊坠，寓意平和、沟通顺畅和人际和合，也有招贵人、旺人缘的说法。"
    },
    charoite: {
      summary: "紫龙晶是以查罗石为特征矿物的紫色观赏集合体，常有纤维旋纹并伴生其他硅酸盐矿物。",
      use: "适合吊坠、珠串、摆件和雕件；硬度中等，避免磕碰、汗液浸泡和高温。",
      qualityFocus: "关注紫色饱和度、纤维旋纹、伴生矿物图案、完整度、尺寸、抛光和矿物组成。",
      identification: "“紫龙晶”是商业称呼，集合体成分会变化，应与苏纪石、紫色萤石和染色石区分。",
      folk: "民间常把紫龙晶做成贴身吊坠或手串，寓意转变、守护、清明与内在力量，也有招贵人、助事业转机的说法。"
    },
    larimar: {
      summary: "拉利玛是蓝色针钠钙石的商业品种，蓝白云纹是常见外观特征，不是独立矿物种。",
      use: "适合吊坠、耳饰和低碰撞场景的珠饰；避免长时间日晒、高温、强酸碱和反复浸水。",
      qualityFocus: "看蓝色调、蓝白纹样、颜色面积、完整度、厚度、切磨和是否染色或浸渍。",
      identification: "应与染色豪莱石、菱镁矿、绿松石和蓝色方解石区分，产地及材料名称应由检测或来源资料支持。",
      folk: "民间常将拉利玛戴作胸前吊坠，寄托平静、远行平安和沟通顺畅的愿望，也有招好运、护航的说法。"
    },
    moldavite: {
      summary: "莫尔道瓦石是天然撞击玻璃，不是晶体矿物；常见绿色不规则外形、表面蚀刻纹和内部气泡。",
      use: "适合吊坠、标本和低碰撞场景；注意边角易崩，避免高温、硬物撞击和不明溶剂。",
      qualityFocus: "关注天然撞击玻璃身份、表面蚀刻形态、内部气泡与流纹、完整度、重量和可追溯来源。",
      identification: "市场仿品常见绿色玻璃或炉渣玻璃，天然性和来源需要专业观察及检测，不能凭表面粗糙作结论。",
      folk: "民间常把莫尔道瓦石佩在胸前或作为收藏护符，寓意变化、新开始和突破，也有转运、招机遇的说法。"
    },
    variscite: {
      summary: "磷铝石是含水磷酸铝矿物，常呈苹果绿至蓝绿色块状和网脉，外观可能接近绿松石。",
      use: "适合珠串、吊坠和雕件；硬度偏低，应避免刮擦、磕碰、强酸碱和汗液长期浸润。",
      qualityFocus: "比较颜色、网脉图案、完整度、块度、抛光和材料身份，不能只凭外观相似判断材料类别或品质。",
      identification: "与绿松石、硅孔雀石、染色菱镁矿和豪莱石区分，建议核对矿物名称和检测数据。",
      folk: "民间常把绿色磷铝石佩成手串或吊坠，寓意安定、平和与守护，也有招福、招财和家宅和顺的说法。"
    },
    rhodonite: {
      summary: "蔷薇辉石是锰硅酸盐矿物，粉红至玫红色基底常见黑色锰氧化物脉，常作为雕刻和装饰材料。",
      use: "适合吊坠、珠串、雕件和摆件；避免硬碰、强酸性清洁和长时间潮湿。",
      qualityFocus: "关注粉红色调、黑脉比例与图案、材料细腻度、裂纹、尺寸和雕工。",
      identification: "需与菱锰矿、粉色碧玉和染色材料区分，可结合矿物组合、折射率、密度和光谱。",
      folk: "民间常把蔷薇辉石戴在手腕或胸前，寓意包容、友爱、和合与勇气，也有旺人缘、助感情和招贵人的说法。"
    },
    sugilite: {
      summary: "苏纪石是含锂硅酸盐矿物，珠宝材料多为紫色矿物集合体，颜色和基质变化较明显。",
      use: "适合吊坠、手串、戒面和雕件；注意中等硬度，避免撞击、强热和化学品。",
      qualityFocus: "比较紫色纯度、饱和度、分布、基质比例、完整度、尺寸、抛光和矿物组成。",
      identification: "应与紫龙晶、紫色萤石、染色石英岩和玻璃区分；商业名称不能替代成分检测。",
      folk: "民间常把苏纪石作为贴身吊坠或手串，寓意宁静、守护与坚定，也有辟邪、招贵人、帮助事业顺遂的说法。"
    },
    howlite: {
      summary: "豪莱石是白色多孔硼硅酸盐材料，常见灰黑色网脉；“白松石”是市场俗称，蓝色珠串常经过染色。",
      use: "适合雕件、珠串和练习观察的标本；材料偏软多孔，应避免汗液、溶剂、强清洁剂和长时间浸泡。",
      qualityFocus: "关注白度、网脉图案、完整度、块度、加工和是否染色；染成蓝色不等同于天然绿松石。",
      identification: "重点看多孔结构与颜色处理，并与绿松石、菱镁矿和树脂仿品区分，必要时查看检测报告。",
      folk: "民间常把白色豪莱石戴作手串或放在床头，寓意平静、清爽和顺心，也有人说它能助眠、招好运；这些说法没有医学依据。"
    },
    apatite: {
      summary: "磷灰石是一个矿物族，宝石级材料常见氟磷灰石；不同端元和成分会造成物理性质差异。莫氏硬度约 5，日常佩戴需防刮擦。",
      use: "较适合吊坠、耳饰和低碰撞场景；清洁与收纳时避免同硬度更高的宝石摩擦。",
      qualityFocus: "观察颜色是否协调、透明度、包体、切工和表面完整度；同时考虑硬度偏低对佩戴耐久性的影响。",
      identification: "磷灰石为族名，不是单一固定成分；应结合折射率、密度和光谱判断具体材料，不能用颜色或紫外反应单独定名。",
      folk: "现代饰品介绍偶将磷灰石与表达、活力或灵感联系起来；这些是文化或营销寓意，缺少可验证的统一传统和科学功效依据。"
    },
    titanite: {
      summary: "榍石化学式为 CaTiSiO5，传统宝石贸易名 sphene 沿用至今。其色散和火彩明显，但硬度较低且有解理，成品需要妥善保护。",
      use: "适合收藏、吊坠或耳饰等低碰撞用途；不宜把高火彩误当成适合高频活动佩戴。",
      qualityFocus: "综合看颜色、透明度、包体、色散表现、切磨方向和刻面棱角；表面磨损、崩口会明显影响观感。",
      identification: "榍石与锆石、石榴石等可有相似火彩；高折射率可能超出常规折射仪量程，应采用合适仪器并结合双折射等特征。",
      folk: "榍石较少见固定的传统佩戴说法；现代商品文案偶赋予活力或好运等象征，属于文化表达，不代表确定功效。"
    },
    andalusite: {
      summary: "红柱石、蓝晶石和矽线石均为 Al2SiO5 的多形矿物，晶体结构各有特点。红柱石宝石常见方向性色调变化；空晶石是带十字状内部特征的变种。",
      use: "可作戒面、吊坠和矿物标本；佩戴时注意方向性解理及磕碰，避免用敲击方式观察。",
      qualityFocus: "在稳定白光下多方向比较体色和多色性，结合透明度、净度、切磨方向、裂隙及成品完整度判断整体效果。",
      identification: "多色性仅是观察线索；需结合折射率、双折射、晶体结构和包体，并与堇青石、碧玺及同成分多形区分。",
      folk: "现代佩戴介绍有时把红柱石与平衡、勇气或顺遂相联系，但这些属于象征性说法，并非矿物具有相应功效。"
    },
    scapolite: {
      summary: "方柱石是宝石学和市场中使用的族名，主要包括钠柱石—钙柱石系列，另有含硫酸根的 silvialite 端元；成分和物理性质随组成变化。",
      use: "常作切磨宝石或矿物标本；硬度中等，镶嵌和佩戴应避免强碰，弧面猫眼样品宜注意表面保护。",
      qualityFocus: "结合颜色、透明度、净度、切工、裂隙及可能出现的猫眼效应观察；不同端元的性质不宜用单一数值比较。",
      identification: "报告应尽量注明方柱石族材料及可确认的成分信息；折射率、密度等范围受化学组成影响，不能将族级范围当作样品实测值。",
      folk: "方柱石较少见稳定的传统佩戴寓意；商品介绍中出现的专注、守护等说法属于现代象征表达，不构成科学功效。"
    },
    danburite: {
      summary: "硅硼钙石（CaB2Si2O8）可形成无色至浅色透明晶体和切磨宝石；手册所列莫氏硬度约 7–7.25，标本与成品应分别观察。",
      use: "可用于戒面、吊坠、耳饰和收藏；佩戴后避免硬物撞击，定期检查镶嵌与刻面边缘。",
      qualityFocus: "观察颜色、透明度、净度、切工、比例、表面完整度和晶体形态；火彩或无色透明并非鉴定依据。",
      identification: "与石英、托帕石和锆石等无色材料需用折射率、双折射、密度或光谱区分，不凭照片定名。",
      folk: "现代饰品宣传偶将硅硼钙石与宁静、清晰等寓意联系起来；这是文化表达，不是宝石的科学功效。"
    },
    euclase: {
      summary: "蓝柱石为含铍铝硅酸盐矿物，常见无色、蓝色或蓝绿色透明晶体。它虽有较高硬度，但完全解理使其受撞击时容易裂开。",
      use: "更适合吊坠、耳饰和低碰撞收藏；不宜用于容易磕碰的活动戒指，清洁时避免超声与蒸汽设备。",
      qualityFocus: "观察颜色、透明度、净度、切工和解理裂隙；成品边缘与镶嵌受力是否安全尤其重要。",
      identification: "结合折射率、双折射和矿物学数据与海蓝宝石、托帕石等区分；硬度高不代表抗冲击性强。",
      folk: "蓝柱石没有广泛统一的传统佩戴寓意；现代商品文案偶有清晰、沟通等象征说法，不应理解为实际功效。"
    },
    phenakite: {
      summary: "硅铍石为 Be2SiO4，常见无色透明晶体，偶作为切磨宝石。完整标本可作观赏收藏，切磨加工时应避免吸入含铍粉尘。",
      use: "适合作为矿物标本或低碰撞饰品；避免自行切磨、钻孔或产生可吸入粉尘，样品加工交由专业人员。",
      qualityFocus: "观察晶形、颜色、透明度、净度、切工和完整度；无色透明外观与较高硬度不能单独说明材料身份。",
      identification: "与石英、绿柱石和托帕石等区分需依靠折射率、双折射、密度及实验室方法；含铍信息应如实标注。",
      folk: "硅铍石较少见固定的民间佩戴说法；网络上零散的灵性或能量描述未必有可靠出处，不作为知识库事实或功效结论。"
    },
  };

  const purposeCatalog = [
    {
      id: "daily-wear",
      label: "日常佩戴（不易碎）",
      kind: "使用场景"
    },
    {
      id: "low-impact",
      label: "日常佩戴（易碎）",
      kind: "使用场景"
    },
    {
      id: "collect-display",
      label: "收藏观赏",
      kind: "使用场景"
    },
    {
      id: "carving-ornament",
      label: "雕刻摆件",
      kind: "使用场景"
    },
    {
      id: "gift-commemorative",
      label: "送礼纪念",
      kind: "使用场景"
    },
    {
      id: "learning-identification",
      label: "学习鉴定",
      kind: "学习用途"
    },
    {
      id: "folk-protection",
      label: "平安守护",
      kind: "民间寓意"
    },
    {
      id: "folk-wealth",
      label: "招财纳福",
      kind: "民间寓意"
    },
    {
      id: "folk-love",
      label: "爱情人缘",
      kind: "民间寓意"
    },
    {
      id: "folk-career",
      label: "学业事业",
      kind: "民间寓意"
    }
  ];
  const purposeIds = new Set(purposeCatalog.map(purpose => purpose.id));

  const purposeTagsById = {
    jadeite: ["daily-wear", "collect-display", "carving-ornament", "gift-commemorative", "folk-protection", "folk-wealth", "folk-career"],
    nephrite: ["daily-wear", "collect-display", "carving-ornament", "gift-commemorative", "folk-protection", "folk-wealth"],
    agate: ["daily-wear", "collect-display", "carving-ornament", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth", "folk-love"],
    "rock-crystal": ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth", "folk-career"],
    amethyst: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-career"],
    citrine: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-wealth", "folk-career"],
    turquoise: ["low-impact", "collect-display", "carving-ornament", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth"],
    "lapis-lazuli": ["low-impact", "collect-display", "carving-ornament", "gift-commemorative", "learning-identification", "folk-protection", "folk-career"],
    emerald: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-love", "folk-career"],
    aquamarine: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-protection"],
    ruby: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth", "folk-love", "folk-career"],
    sapphire: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-career"],
    garnet: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth", "folk-love"],
    tourmaline: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth", "folk-love", "folk-career"],
    opal: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-love"],
    moonstone: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-love"],
    peridot: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-wealth", "folk-love"],
    topaz: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-career"],
    amber: ["low-impact", "collect-display", "carving-ornament", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth"],
    pearl: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-wealth"],
    diamond: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-wealth", "folk-love", "folk-career"],
    spinel: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-wealth", "folk-love", "folk-career"],
    zircon: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-wealth", "folk-career"],
    alexandrite: ["daily-wear", "collect-display", "gift-commemorative", "learning-identification", "folk-protection", "folk-career"],
    tanzanite: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-love", "folk-career"],
    morganite: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-love"],
    sunstone: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-wealth", "folk-career"],
    iolite: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-career"],
    kunzite: ["low-impact", "collect-display", "gift-commemorative", "learning-identification", "folk-love"],
    "quartz-rose": ["low-impact", "collect-display", "carving-ornament", "gift-commemorative", "learning-identification", "folk-love"]
  };

  const giaGemPages = {
    alexandrite: { name: "GIA Gem Encyclopedia — Alexandrite", url: "https://www.gia.edu/alexandrite" },
    amber: { name: "GIA Gem Encyclopedia — Amber", url: "https://www.gia.edu/amber" },
    amethyst: { name: "GIA Gem Encyclopedia — Amethyst", url: "https://www.gia.edu/amethyst" },
    ametrine: { name: "GIA Gem Encyclopedia — Ametrine", url: "https://www.gia.edu/ametrine" },
    aquamarine: { name: "GIA Gem Encyclopedia — Aquamarine", url: "https://www.gia.edu/aquamarine" },
    citrine: { name: "GIA Gem Encyclopedia — Citrine", url: "https://www.gia.edu/citrine" },
    diamond: { name: "GIA Gem Encyclopedia — Diamond", url: "https://www.gia.edu/diamond" },
    emerald: { name: "GIA Gem Encyclopedia — Emerald", url: "https://www.gia.edu/emerald" },
    garnet: { name: "GIA Gem Encyclopedia — Garnet", url: "https://www.gia.edu/garnet" },
    iolite: { name: "GIA Gem Encyclopedia — Iolite", url: "https://www.gia.edu/iolite" },
    jadeite: { name: "GIA Gem Encyclopedia — Jade", url: "https://www.gia.edu/jade" },
    nephrite: { name: "GIA Gem Encyclopedia — Jade", url: "https://www.gia.edu/jade" },
    kunzite: { name: "GIA Gem Encyclopedia — Kunzite", url: "https://www.gia.edu/kunzite" },
    "lapis-lazuli": { name: "GIA Gem Encyclopedia — Lapis Lazuli", url: "https://www.gia.edu/lapis-lazuli" },
    moonstone: { name: "GIA Gem Encyclopedia — Moonstone", url: "https://www.gia.edu/moonstone" },
    morganite: { name: "GIA Gem Encyclopedia — Morganite", url: "https://www.gia.edu/morganite" },
    opal: { name: "GIA Gem Encyclopedia — Opal", url: "https://www.gia.edu/opal" },
    pearl: { name: "GIA Gem Encyclopedia — Pearl", url: "https://www.gia.edu/pearl" },
    peridot: { name: "GIA Gem Encyclopedia — Peridot", url: "https://www.gia.edu/peridot" },
    "quartz-rose": { name: "GIA Gem Encyclopedia — Rose Quartz", url: "https://www.gia.edu/rose-quartz" },
    ruby: { name: "GIA Gem Encyclopedia — Ruby", url: "https://www.gia.edu/ruby" },
    sapphire: { name: "GIA Gem Encyclopedia — Sapphire", url: "https://www.gia.edu/sapphire" },
    spinel: { name: "GIA Gem Encyclopedia — Spinel", url: "https://www.gia.edu/spinel" },
    sunstone: { name: "GIA Gem Encyclopedia — Sunstone", url: "https://www.gia.edu/sunstone" },
    tanzanite: { name: "GIA Gem Encyclopedia — Tanzanite", url: "https://www.gia.edu/tanzanite" },
    topaz: { name: "GIA Gem Encyclopedia — Topaz", url: "https://www.gia.edu/topaz" },
    tourmaline: { name: "GIA Gem Encyclopedia — Tourmaline", url: "https://www.gia.edu/tourmaline" },
    turquoise: { name: "GIA Gem Encyclopedia — Turquoise", url: "https://www.gia.edu/turquoise" },
    zircon: { name: "GIA Gem Encyclopedia — Zircon", url: "https://www.gia.edu/zircon" }
  };

  const giaLearningCards = {
    agate: {
      sourceLabel: "GIA 玉髓专题 · 灵玉智库整理",
      source: { name: "GIA — Gem Cutters Reveal the Beauty of Chalcedony", url: "https://www.gia.edu/gia-news-research/gem-cutters-reveal-beauty-chalcedony" },
      summary: "玛瑙是具纹带或图案特征的玉髓类石英材料。颜色、条带形态、半透明感与切磨方式共同构成观赏性。",
      dimensions: [
        { label: "纹带与图案", focus: "观察条带的层次、眼纹、景观图案和切面是否相互呼应。", caution: "不同玛瑙类型的图案差异很大；没有单一纹带样式适用于所有品种。" },
        { label: "颜色与透光", focus: "在漫射光下比较颜色分布、透明度和纹理对比，按珠串、印章或雕件用途选择。", caution: "鲜艳颜色可能经过染色；裂隙中的颜色聚集需进一步核实。" },
        { label: "结构与处理", focus: "查看切面、抛光、裂隙和完整度，并了解材料是否染色、加热或充填。", caution: "条带外观本身不能确认天然性；不使用刮划或化学品自行测试。" }
      ]
    },
    "rock-crystal": {
      sourceLabel: "GIA 石英专题资料 · 灵玉智库整理",
      source: { name: "GIA Gems & Gemology — Emerald in Rock Crystal Quartz", url: "https://www.gia.edu/gia-website/gems-gemology/fall-2019-microworld-emerald-in-rock-crystal-quartz" },
      summary: "水晶在此指无色至近无色的透明石英。晶体形态、透明度、内部包体或裂隙以及切磨方式，决定它更适合作为刻面宝石还是观赏标本。",
      dimensions: [
        { label: "透明度与色调", focus: "在中性光下观察是否清透、是否有雾感或可见色调，并结合尺寸比较。", caution: "水晶并非必须完全无包体；天然包体也不自动证明天然身份。" },
        { label: "包体与晶形", focus: "标本可关注晶面完整度、晶簇组合、矿物或流体包体形成的景观。", caution: "包体需要描述而非仅凭照片定性；收藏样品应区分单晶、晶簇和人工加工形态。" },
        { label: "切磨与材料身份", focus: "刻面石观察亮度、对称和抛光，标本则看晶形与展示状态。", caution: "玻璃、合成石英和天然石英外观可能相似；不要用划刻或冷热测试判断。" }
      ]
    },
    alexandrite: {
      summary: "变石的识别性观赏特征是不同光源下的明显变色；品质观察应把变色幅度、两端颜色、切磨方向与净度放在一起看。",
      dimensions: [
        { label: "变色表现", focus: "在日光类与暖色白炽光下分别观察，记录绿至蓝绿色和红至紫红色之间的变化。", caution: "室内灯光色调会影响观感，比较时记录光源类型和样品正面颜色。" },
        { label: "颜色与切磨", focus: "两种光源下的颜色都较鲜明，正面观察时能兼顾不同色相，通常更有观赏性。", caution: "切磨方向会影响正面看到的颜色；暗色、偏棕色或变色弱的样品不宜只看单一角度。" },
        { label: "净度与身份", focus: "结合肉眼净度、切工、尺寸及是否有猫眼效应综合比较。", caution: "查看检测报告中的天然或合成属性、处理情况和样品编号。" }
      ]
    },
    amber: {
      summary: "琥珀是古代树脂形成的有机宝石，颜色、透明度、包体和加工状态共同构成其外观；它不是矿物晶体。",
      dimensions: [
        { label: "颜色与透明度", focus: "在自然散射光下看颜色是否均匀、透明或云雾状态是否符合预期。", caution: "热处理、染色或表面氧化会改变外观；颜色深浅不能单独说明年代或产地。" },
        { label: "包体与内部", focus: "植物或动物包体的形态、位置与整体观赏性可作为收藏观察点。", caution: "包体本身不证明天然；须留意压制拼合、气泡形态、仿制物及包体是否后置。" },
        { label: "工艺与养护", focus: "检查抛光、边缘和珠孔，并确认是否为雕件、珠粒或原始标本。", caution: "琥珀较软，易受热、溶剂和磨损影响；盐水、热针等民间测试不可靠且可能损伤样品。" }
      ]
    },
    amethyst: {
      summary: "紫水晶是紫色石英。观察重点是紫色的色调与浓淡、面向观察时的均匀度、净度和切磨，而不是单看颜色够不够深。",
      dimensions: [
        { label: "颜色与色带", focus: "紫色鲜明、不过暗，正面颜色协调且明显色带较少，通常更耐看。", caution: "放在浅色背景下转动检查色带；太暗可能显黑，过浅或偏棕也会影响观感。" },
        { label: "净度与切工", focus: "刻面石可观察肉眼净度、对称性及亮度；晶簇则关注晶形和晶尖完整。", caution: "包体是否影响观赏要结合颜色和用途，不能用同一标准评价戒面与标本。" },
        { label: "处理与身份", focus: "把颜色、包体和晶体特征结合起来，并核对处理披露。", caution: "加热可改变颜色，市场也有合成、染色或覆膜材料；照片无法确认天然性。" }
      ]
    },
    ametrine: {
      summary: "紫黄晶是同一石英材料中呈现紫色与黄色分区的双色品种；双色边界和切磨方向是最直观的观察重点。",
      dimensions: [
        { label: "双色关系", focus: "紫、黄两色边界清楚，比例与色彩过渡符合个人审美，正面展示有辨识度。", caution: "分区比例没有适用于所有人的固定标准；偏好和设计用途会影响选择。" },
        { label: "切磨取向", focus: "观察切面是否把两种颜色共同呈现，颜色分布是否与刻面、器形协调。", caution: "切磨方向会明显影响双色效果，侧面或不同光线下的观感可能变化。" },
        { label: "净度与处理", focus: "检查裂隙、透明度、抛光和镶嵌完整度。", caution: "确认材料确为石英及颜色成因；分色外观本身不能证明天然或未处理。" }
      ]
    },
    aquamarine: {
      summary: "海蓝宝石是蓝至蓝绿色绿柱石，成品观感由颜色、透明度、净度、切工和尺寸共同塑造。",
      dimensions: [
        { label: "蓝色调", focus: "比较蓝色或略带绿调的蓝色是否匀称、明亮，并在中性光线下观察。", caution: "体色较浅很常见，不能仅凭颜色浓淡认定天然性、产地或价值。" },
        { label: "净度与透明度", focus: "刻面海蓝宝通常重视通透感和肉眼净度；包体标本也可按其独特性欣赏。", caution: "裂隙、明显色带或影响耐久的缺陷需结合大小和位置评估。" },
        { label: "切工与处理", focus: "切工应让颜色分布均匀并保持良好亮度；了解是否经过加热等处理。", caution: "加热处理较常见，处理信息应如实披露；不靠照片推断处理状态。" }
      ]
    },
    citrine: {
      summary: "黄水晶是黄色至橙色石英。颜色自然度、色带、透明度与处理披露比单纯追求“越黄越好”更有参考意义。",
      dimensions: [
        { label: "黄色至橙色", focus: "观察黄色、金黄色或橙色的色调与饱和度是否协调，整体是否明亮。", caution: "偏棕、过暗或颜色分布突兀可能不合个人审美；偏好并非统一等级。" },
        { label: "净度与切磨", focus: "常见刻面石可检查肉眼净度、色带和抛光；大尺寸也要看颜色是否均匀。", caution: "显眼裂隙和明显色带会改变视觉效果，但不能只按尺寸判断品质。" },
        { label: "颜色成因", focus: "核对天然色或处理信息，尤其是黄色石英的颜色来源。", caution: "不少市售黄水晶由紫水晶热处理而来；商业名称不等于未处理证明。" }
      ]
    },
    diamond: {
      summary: "钻石品质通常以 4C 描述：颜色、净度、切工和克拉重量。天然钻石、实验室培育钻石与仿钻必须分清。",
      dimensions: [
        { label: "颜色与净度", focus: "按对应分级体系比较颜色和内外部特征，并结合其对正面外观的影响。", caution: "肉眼观感不等同于实验室等级；荧光、奶咖色调等也要结合具体石头观察。" },
        { label: "切工与重量", focus: "观察比例、亮度、火彩和明暗对比；在预算中权衡尺寸与视觉表现。", caution: "克拉是重量单位，不直接等于直径、亮度或整体品质。" },
        { label: "来源与报告", focus: "核对天然或实验室培育属性、处理披露及报告编号与实物对应关系。", caution: "莫桑石和立方氧化锆是仿钻材料；划玻璃、哈气或火彩测试不能鉴定。" }
      ]
    },
    emerald: {
      summary: "祖母绿是绿柱石的绿色品种。颜色通常是关键观察面向，而天然包体较常见，净度与处理披露需一起理解。",
      dimensions: [
        { label: "颜色与分布", focus: "比较绿色的色相、饱和度、明暗和整体分布，避免只按“浓绿”下判断。", caution: "不同光源会影响颜色观感；产地不能仅由颜色推定。" },
        { label: "净度与完整度", focus: "在放大观察下了解包体、裂隙位置及对耐久性的影响。", caution: "祖母绿常有可见包体，不能把“无瑕”作为唯一标准，也不能把有包体当作天然证明。" },
        { label: "充填与披露", focus: "询问裂隙充填材料及程度，并按对应实物核对实验室报告。", caution: "油、树脂或其他材料可能改善表观净度；热、化学品和不当清洁可能影响填充物。" }
      ]
    },
    garnet: {
      summary: "石榴石是性质多样的矿物族，不是单一品种；先确认具体亚种，再比较颜色、透明度、净度和切磨表现。",
      dimensions: [
        { label: "先辨具体品种", focus: "结合颜色与宝石学数据判断是何种石榴石端元或品种。", caution: "不同石榴石的颜色、折射率和包体差异很大，不能把一个亚种的标准套给全部。" },
        { label: "颜色与光感", focus: "根据具体品种比较色相、饱和度、明暗与亮度，特殊颜色或效应可单独欣赏。", caution: "颜色相似的红色、绿色宝石不代表同一矿物；照片容易误导色调。" },
        { label: "净度与切磨", focus: "结合品种常见包体、刻面亮度、抛光和器形用途观察。", caution: "有些品种允许或常见可见包体；是否影响观感和耐久需逐件看。" }
      ]
    },
    iolite: {
      summary: "堇青石具有明显多色性，观察方向变化可能让蓝紫、灰蓝、浅色甚至黄褐色表现不同；切磨取向影响正面颜色。",
      dimensions: [
        { label: "多色性", focus: "在不同方向转动观察颜色变化，并记录正面佩戴时实际呈现的颜色。", caution: "单一方向出现的浅色或黄褐色不应脱离多色性背景解读。" },
        { label: "切磨与色调", focus: "留意切磨是否让蓝紫色在正面呈现得清晰、明亮且均匀。", caution: "切磨取向不佳可能显得灰淡；不同光线和角度会造成显著差异。" },
        { label: "净度与效应", focus: "观察肉眼净度；平行包体有时可形成猫眼等特殊效应。", caution: "猫眼效应需要清晰、连续并随光源移动；普通反光不等同于猫眼。" }
      ]
    },
    jadeite: {
      summary: "翡翠以硬玉为主要成分，常见细粒、多矿物集合结构。品质观察以颜色、质地、透光表现、完整度、切工和处理信息为主。",
      dimensions: [
        { label: "材料与颜色", focus: "先确认是硬玉质翡翠，再按绿色、紫色等色系分别比较色调、饱和度和均匀度。", caution: "“玉”“翡翠”市场名称可能涉及不同材料；颜色鲜艳不能证明天然或未处理。" },
        { label: "质地与透明度", focus: "在相近厚度和光照下比较颗粒细腻度、透光感、抛光与整体协调性。", caution: "棉、纹理和结构因材料而异；外观或放大图都不能独立确认漂白充填。" },
        { label: "器形与处理", focus: "结合尺寸、完整性、工艺和用途评价，并核对对应实物的处理结论。", caution: "天然、漂白充填、染色或组合处理须由专业检测确认；证书不是价值评级。" }
      ]
    },
    nephrite: {
      summary: "软玉主要由透闪石—阳起石系列组成，纤维交织结构带来韧性。品质观察以颜色、细腻度、润泽感、完整度、抛光和雕工为主。",
      dimensions: [
        { label: "颜色与料性", focus: "观察白、青、碧、墨等色调的均匀度、细腻度和与器形的搭配。", caution: "不同颜色各有特点，可结合玉料类型和雕刻设计选择。" },
        { label: "细腻度与光泽", focus: "细密纤维结构形成细致的表面，抛光后光泽柔和均匀。", caution: "明显粗糙感、抛光不匀或可见裂隙会影响成品观感和完整性。" },
        { label: "完整度与雕工", focus: "裂隙少、关键受力部位完整，雕工顺着颜色和纹理布局。", caution: "检查镂空、薄弱边缘和孔口是否有崩裂；佩戴时避免强撞击。" }
      ]
    },
    kunzite: {
      summary: "锂紫玉是锂辉石的粉色至紫色品种，具有多色性和完全解理；颜色方向与佩戴、储存环境都值得留意。",
      dimensions: [
        { label: "颜色与方向", focus: "比较粉至紫色的浓淡及不同方向的颜色表现，成品正面应呈现协调色彩。", caution: "颜色沿晶体方向有差异，转动时观感变化不代表变色效应。" },
        { label: "切工与解理", focus: "检查刻面、尖角、镶嵌和表面是否完整，器形应适合低碰撞用途。", caution: "完全解理使其受撞击或压力时可能开裂，不宜粗暴佩戴或测试。" },
        { label: "颜色稳定性", focus: "了解是否经辐照或加热，并避免长时间强光和热源。", caution: "强光或热可能使颜色变淡；天然与处理颜色也不能凭照片区分。" }
      ]
    },
    "lapis-lazuli": {
      summary: "青金石是以蓝色方钠石为主的岩石集合体，常伴黄铁矿与方解石；蓝色底、斑点和整体结构共同形成外观。",
      dimensions: [
        { label: "蓝色底与均匀度", focus: "比较蓝色浓淡、均匀程度和表面抛光，结合个人对天然纹理的偏好。", caution: "颜色过于均一也不自动代表更好；染色、稳定化和再造材料需区分。" },
        { label: "黄铁矿与方解石", focus: "观察金色黄铁矿点与浅色方解石脉的分布是否协调。", caution: "少量黄铁矿可形成装饰效果，过多浅色矿物是否影响观感因人而异。" },
        { label: "表面与处理", focus: "检查抛光、裂隙、孔隙和珠孔周边，并了解处理披露。", caution: "染色可能聚集在裂隙或孔隙；单凭金星或颜色无法确认身份。" }
      ]
    },
    moonstone: {
      summary: "月光石的核心现象是随角度移动的晕彩。体色、晕彩颜色与位置、透明度、裂隙及弧面切工共同影响表现。",
      dimensions: [
        { label: "晕彩与角度", focus: "缓慢转动样品，观察光带是否清楚、位置是否居中，并能否在较宽角度范围出现。", caution: "只在极窄角度出现的反光不一定有良好的观赏效果；蓝光不是天然性证明。" },
        { label: "体色与净度", focus: "结合底色、半透明感、包体和裂隙观察晕彩是否清晰。", caution: "不同体色和晕彩组合各有审美，不要只按蓝色作单一排名。" },
        { label: "弧面切工", focus: "弧面高度和方向应有助于呈现晕彩，检查对称性、抛光和完整度。", caution: "过平或方向不合适的切磨会削弱光效；相似光效材料需检测区分。" }
      ]
    },
    morganite: {
      summary: "摩根石是粉色至橙粉色绿柱石，通常呈柔和色调；颜色、肉眼净度、切工与处理信息应一同比较。",
      dimensions: [
        { label: "粉色表现", focus: "比较粉、紫粉或橙粉色的色调与饱和度，确认室内外光线下的整体观感。", caution: "浅色是常见外观；颜色偏好并非跨品种统一标准，产地也不能由色调确认。" },
        { label: "净度与切磨", focus: "刻面成品常关注肉眼净度、亮度、比例和大尺寸下的颜色呈现。", caution: "较大样品更容易显出包体；要结合实际观看距离和佩戴用途。" },
        { label: "处理与名称", focus: "了解是否经过加热及报告对天然或合成属性的描述。", caution: "加热可调整色调；“粉色祖母绿”等商业叫法容易混淆，应使用摩根石名称。" }
      ]
    },
    opal: {
      summary: "珍贵欧泊的变彩来自内部微结构对光的作用。观察时应同时记录底色、变彩强度与图案、透明度、完整度及拼合状态。",
      dimensions: [
        { label: "变彩与图案", focus: "在漫射与点状光下转动观察变彩覆盖、亮度、颜色范围和图案辨识度。", caution: "变彩可能有方向性；单张照片无法完整表现动态效果，也不能替代品种分类。" },
        { label: "底色与结构", focus: "结合黑、白、晶质等欧泊类型观察底色、透明度与变彩的对比关系。", caution: "无变彩的普通欧泊仍是欧泊材料，但评价重点不同；裂纹、龟裂和基质要如实描述。" },
        { label: "天然与拼合", focus: "检查侧边、层次和背衬，确认单体欧泊、双层或三层拼合等结构。", caution: "合成欧泊、拼合欧泊和稳定处理材料需要区分；避免干热和骤变温度。" }
      ]
    },
    "black-opal": {
      summary: "黑欧泊以深色底色衬托彩色变彩。变彩是转动宝石或改变光线时出现的彩色闪光，比较时要看正面表现和不同角度下的变化。",
      source: { name: "GIA Gem Encyclopedia — Opal", url: "https://www.gia.edu/opal" },
      dimensions: [
        { label: "底色与变彩", focus: "在深灰至黑色底色上，彩色闪光明亮、颜色丰富且覆盖较大正面区域，通常更醒目。", caution: "底色越黑不等于品质越高；比较同类样品时也要看变彩本身。" },
        { label: "图案与观看角度", focus: "色斑轮廓清楚，转动时在多个常见角度仍能看到变彩，图案分布符合整件器形。", caution: "只在很窄角度出现的颜色，日常佩戴时不容易持续看见。" },
        { label: "切磨与结构", focus: "切磨让变彩落在正面，表面光滑，边缘和背面结构完整。", caution: "查看侧边是否有粘合层或透明顶层；拼合结构应在商品说明中写清。" }
      ]
    },
    "nanhong-agate": {
      summary: "南红玛瑙的颜色从橙红、朱红到深红，常见珠串、弧面戒面和雕件。颜色、内部纹理、完整度与处理信息共同影响观感。",
      source: { name: "GIA Gems & Gemology — Nanhong: A New Red Gem Material", url: "https://www.gia.edu/gems-gemology/spring-2015-gemnews-nanhong-red-gem-material" },
      dimensions: [
        { label: "红色与均匀度", focus: "颜色鲜明、色调协调，正面没有突兀的灰暗区域；同类样品中，细腻均匀的红色通常更受欢迎。", caution: "不同南红料的颜色和纹理各有特点，比较时应结合相近款式和个人偏好。" },
        { label: "纹理与细腻感", focus: "颜色过渡自然，细纹和色带与珠型或雕件构图相称；表面抛光细致。", caution: "留意裂纹、孔洞和局部粗颗粒是否影响正面观感或佩戴耐久。" },
        { label: "完整度与处理", focus: "珠孔边缘、雕刻转角和抛光面完整；颜色和成品状态与处理披露相符。", caution: "询问是否经过加热、染色或充填，并核对报告对应的实物。" }
      ]
    },
    hydrogrossular: {
      summary: "水钙铝榴石多为半透明至不透明的细粒材料，可见绿、粉、白、灰、黄、褐等颜色，常加工成弧面饰品和雕件。",
      source: { name: "GIA Gems & Gemology — Hydrogrossular Garnet", url: "https://www.gia.edu/gems-gemology/spring-2015-gemnews-hydrogrossular-garnet" },
      dimensions: [
        { label: "颜色与分布", focus: "按绿色、粉色、黄色或褐色等颜色分别比较；颜色明快、分布协调，与器形相配时整体更舒服。", caution: "绿色并非唯一选择；色块和色带可保留，重点看它们是否与成品构图协调。" },
        { label: "细腻度与光泽", focus: "细粒结构均匀，抛光面细致，呈现柔和而连续的光泽；透光感与颜色相称。", caution: "检查明显粗颗粒、孔洞和裂隙是否影响表面或牢固度。" },
        { label: "器形与完整度", focus: "珠面、弧面或雕刻线条完整，边缘少崩口，颜色和纹理被清楚呈现。", caution: "按珠饰、弧面或雕件的实际用途比较表面状态和完整度。" }
      ]
    },
    pearl: {
      summary: "珍珠常从大小、形状、颜色、光泽、表面、珠层质量和匹配度观察；天然或养殖描述形成方式，品质还看外观与珠层。",
      dimensions: [
        { label: "光泽与珠层", focus: "看表面反射是否明亮清晰，并结合珠层厚度或相关报告理解持久度。", caution: "粉白或哑光表面可能受珠层、磨损或处理影响，单凭外观不易定性。" },
        { label: "表面与形状", focus: "记录瑕疵的数量、位置、大小，再按项链、耳钉或单颗设计比较形状。", caution: "天然珍珠并非都无瑕或正圆；轻微表面特征不一定明显影响佩戴效果。" },
        { label: "尺寸、颜色与匹配", focus: "多颗珠宝还要比较珠粒之间的大小、颜色、光泽与形状协调性。", caution: "核实天然、养殖、仿珠及染色等信息；避免用牙咬等可能损坏表面的方法。" }
      ]
    },
    peridot: {
      summary: "橄榄石常呈黄绿色至绿色；色调、饱和度、肉眼可见包体和切磨亮度是主要观察面向。",
      dimensions: [
        { label: "绿色表现", focus: "比较绿色的鲜明度与明暗，留意是否带明显黄褐色调。", caution: "体色会随光源和尺寸变化；颜色深浅不能单独确认产地或价值。" },
        { label: "包体与净度", focus: "观察黑色矿物点及俗称“睡莲叶”状包体是否影响整体观感。", caution: "包体特征只能作为观察线索，不是单独的身份鉴定方法。" },
        { label: "切磨与完整度", focus: "检查刻面亮度、抛光、尖角和裂隙，并按佩戴强度选择镶嵌方式。", caution: "边角和裂隙处要避免冲击；放大照片不能取代实物检查。" }
      ]
    },
    "quartz-rose": {
      summary: "蔷薇石英以粉色和常见的柔和半透明感为特征；颜色、内部特征、切型与星光效应共同形成多种观赏路线。",
      dimensions: [
        { label: "粉色与透明度", focus: "观察粉色是否协调、分布是否自然，并按透明刻面或半透明雕件分别比较。", caution: "内部纤维或微裂隙可造成云雾感；不应把所有半透明都简单判作瑕疵。" },
        { label: "星光与切型", focus: "星光品种可在点光源下转动弧面，查看星线是否清楚、居中、连续。", caution: "普通表面反光不是星光；效应强弱与切磨方向有关。" },
        { label: "处理与用途", focus: "结合珠串、弧面、雕件或刻面用途观察尺寸、抛光和完整度。", caution: "粉色石英可能存在辐照等处理；不能与粉色玉髓或摩根石仅凭颜色互认。" }
      ]
    },
    ruby: {
      summary: "红宝石是红色刚玉。颜色通常是关键观察因素，净度、尺寸、切工与加热或裂隙充填等处理也要一并核对。",
      dimensions: [
        { label: "红色表现", focus: "在中性光源下比较红色的色相、饱和度、明暗和均匀程度。", caution: "“鸽血红”等商业描述不等同于统一等级或实验室结论。" },
        { label: "净度与尺寸", focus: "观察肉眼包体、裂隙对美观和耐久的影响，并结合尺寸与切磨整体比较。", caution: "颜色很红或包体显眼都不能单独确认天然性、产地或价值。" },
        { label: "处理与身份", focus: "核对加热、玻璃充填或其他处理披露，并确认报告对应实物。", caution: "合成刚玉与天然红宝石肉眼可能相似；处理识别需实验室检测。" }
      ]
    },
    sapphire: {
      summary: "蓝宝石属于刚玉，除蓝色外也有多种颜色。颜色分布、净度、切磨、星光或变色效应及处理情况都可能影响判断。",
      dimensions: [
        { label: "颜色与分布", focus: "结合具体颜色比较色相、饱和度、明暗和色带，并看正面整体效果。", caution: "颜色带可能受晶体方向影响；外观不能可靠确定产地或加热状态。" },
        { label: "切磨与特殊效应", focus: "星光蓝宝石检查星线是否清楚、居中并能随光移动；刻面石检查亮度与对称。", caution: "扩散处理也可能产生星光或颜色变化，效应本身不能证明天然未经处理。" },
        { label: "处理与报告", focus: "询问加热、扩散等处理披露，并核对实验室报告。", caution: "合成刚玉与天然蓝宝石可能外观相近；报告内容要与实物特征对应。" }
      ]
    },
    spinel: {
      summary: "尖晶石是独立矿物，颜色范围很广。品质观察以具体颜色、净度、切磨、尺寸和天然或合成属性为主。",
      dimensions: [
        { label: "颜色与品种", focus: "结合红、粉、蓝等具体色系比较色相、饱和度与亮度。", caution: "尖晶石族内差异大；同一种颜色不能直接套用单一价值标准。" },
        { label: "净度与切磨", focus: "检查包体、裂隙、抛光与刻面亮度，按戒面或收藏用途评价整体。", caution: "单颗样品的包体不能单独判天然；放大观察也无法覆盖所有合成识别。" },
        { label: "材料身份", focus: "与红宝石、石榴石和玻璃等相似外观材料区分，并核对处理披露。", caution: "尖晶石不是红宝石；天然、合成和处理状态需由检测支持。" }
      ]
    },
    sunstone: {
      sourceLabel: "日光石品质观察",
      source: { name: "GIA — Sunstone Quality Factors", url: "https://www.gia.edu/sunstone-quality-factors" },
      summary: "日光石属于长石类，片状包体可能形成闪烁的砂金效应；底色、闪光分布、透明度与切磨方向共同决定观感。",
      dimensions: [
        { label: "底色与色带", focus: "黄、橙、红、绿等底色清晰，双色分区协调。俄勒冈日光石中，深红、深绿和鲜明双色较受青睐；其他产地可按各自底色和光效观察。", caution: "留意颜色是否发灰、过暗，双色分区是否清楚并与切磨造型协调。" },
        { label: "砂金效应", focus: "砂金效应是内部片状矿物反光形成的金属感细闪；小片状物可形成红金色光泽，较大片状物会形成更明显的闪点。转动样品观察闪光是否自然、与底色相衬。", caution: "并非所有日光石都有明显砂金效应；表面亮粉、涂层或普通反光可能看起来很闪，但不代表内部片状物形成了这种效果。" },
        { label: "切磨与净度", focus: "切磨方向应展示底色和内部闪光；刻面石看正面颜色与亮度，弧面石看闪光是否随角度呈现。", caution: "内部包体既可能形成特色，也可能影响透明度；不应只按“越干净越好”评价。" }
      ]
    },
    tanzanite: {
      summary: "坦桑石是黝帘石的宝石品种，具有多色性；切磨方向决定正面蓝紫色的组合，热处理在市场中常见。",
      dimensions: [
        { label: "蓝紫色与多色性", focus: "在不同方向转动观察蓝、紫等色调组合，并以正面佩戴效果为重点。", caution: "多色性是方向相关的颜色表现，不是变石式的光源变色。" },
        { label: "切磨与净度", focus: "比较色彩饱和度、明亮度、肉眼净度和刻面比例。", caution: "裂隙、尖角与解理方向影响耐久；日常佩戴需避免碰撞。" },
        { label: "处理与披露", focus: "了解颜色是否经加热改善，并核对对应样品的检测信息。", caution: "热处理常见且肉眼通常难以判断；不能把蓝紫色直接视为天然未处理。" }
      ]
    },
    topaz: {
      summary: "托帕石颜色多样，透明度通常较高，但完全解理使它在受冲击时可能沿特定方向破裂；颜色与处理披露也很重要。",
      dimensions: [
        { label: "颜色与明亮度", focus: "按蓝、黄、粉、无色或帝王托帕等类别比较色调、饱和度和切工亮度。", caution: "多种蓝色托帕常由无色材料经辐照及加热形成，颜色不能证明天然未处理。" },
        { label: "净度与切磨", focus: "检查肉眼包体、表面抛光和刻面亮度，并留意尖角与镶口状态。", caution: "高透明不等于没有内部裂隙；避免用敲击或硬度测试验证。" },
        { label: "耐久与护理", focus: "按戒指、吊坠或耳饰用途选择保护性镶嵌并询问清洁方式。", caution: "解理方向受撞击可导致破裂，热冲击和不当维修也有风险。" }
      ]
    },
    tourmaline: {
      summary: "碧玺是成分变化较大的矿物族，颜色分带和多色性很常见；应先明确具体品种，再比较颜色、净度与切磨。",
      dimensions: [
        { label: "颜色与分带", focus: "观察色相、饱和度、色带和双色或多色组合是否协调。", caution: "晶体不同方向可能显著变色；鲜艳颜色本身不证明具体品种或产地。" },
        { label: "净度与效应", focus: "结合具体颜色查看包体对透明度的影响；猫眼品种需观察连续移动的光带。", caution: "不同颜色品种对包体的容忍度不同，不能用统一净度线衡量。" },
        { label: "切工与处理", focus: "切磨需考虑多色性和晶体方向；了解加热、充填等处理披露。", caution: "帕拉伊巴等商业名称需有成分和检测依据；外观照片不能确认铜含量或产地。" }
      ]
    },
    turquoise: {
      summary: "绿松石常按颜色、质地和基质纹理观察。孔隙度、稳定化、染色或再造等处理会影响外观与养护。",
      dimensions: [
        { label: "颜色与质地", focus: "比较蓝至蓝绿色的色调、均匀度、表面质感和抛光。", caution: "绿色调也可能符合个人审美；颜色名称和商业等级不是实验室结论。" },
        { label: "基质纹理", focus: "观察基质脉络是否与整体构图协调，并描述其分布和密度。", caution: "有无网纹都不能单独判断天然或品质；不同设计对纹理有不同偏好。" },
        { label: "处理与护理", focus: "确认天然、稳定化、染色或再造等材料状态，并采用相应养护方式。", caution: "多孔材料可能受汗液、油污、热和化学品影响；避免自行刮擦或溶剂测试。" }
      ]
    },
    zircon: {
      summary: "锆石是天然硅酸锆矿物，双折射明显且常呈强火彩；材料名称和处理状态需与检测报告相符。",
      dimensions: [
        { label: "颜色与火彩", focus: "观察蓝、无色、黄、橙、红等颜色的饱和度、亮度和刻面火彩。", caution: "蓝色锆石通常与热处理有关；颜色鲜亮不代表未处理。" },
        { label: "净度与双影", focus: "在合适角度可观察刻面棱线的双影线索，并评估包体与切磨效果。", caution: "双影程度受切型、观察方向和光线影响，不能单独作为鉴定结论。" },
        { label: "耐久与身份", focus: "检查刻面棱角、磨损、抛光，并确认天然锆石而非立方氧化锆。", caution: "锆石相对脆，棱角容易受损；硬度划刻测试会伤害样品。" }
      ]
    }
  };

  const quartzThinSectionNote = {
    pages: "32-33",
    text: "石英类薄片通常无明显解理，交叉偏光下常见较低阶的干涉色；转动时可观察明暗变化。玛瑙、玉髓等由细微晶粒组成，可能呈纤维状或放射状，未必能看到完整单晶的光学图样。"
  };
  const chalcedonyThinSectionNote = {
    pages: "33",
    text: "玉髓由细微石英晶体组成，薄片中常见纤维状、放射状或球粒状结构；交叉偏光下可见随纤维方向变化的明暗。玛瑙纹带可结合细晶集合和色层形态观察。"
  };
  const berylThinSectionNote = {
    pages: "39-40",
    text: "绿柱石薄片常见柱状或粒状外形；单偏光下颜色随品种和成分变化，转动时呈现不同深浅，这种现象称为多色性。"
  };
  const tourmalineThinSectionNote = {
    pages: "45-47",
    text: "电气石常呈柱状，沿不同方向观察会出现深浅变化，这种方向相关的颜色变化称为多色性；黑色品种透光较弱，晶形、解理和颗粒组合可作为补充观察点。"
  };
  const corundumThinSectionNote = {
    pages: "57-58",
    text: "刚玉薄片中常见柱状、粒状或板状晶体，单偏光下可呈无色或品种相关的颜色，交叉偏光下可见较低阶干涉色。红宝石和蓝宝石都属于刚玉，颜色受致色元素影响；薄片可观察结构和光学表现。"
  };
  const garnetThinSectionNote = {
    pages: "18-22",
    text: "多数常见石榴石在交叉偏光下转动时保持暗色；部分品种或受应力的晶粒会出现异常干涉色。石榴石成分变化较大，观察时可结合晶形和其他光学特征记录。"
  };
  const feldsparThinSectionNote = {
    pages: "78-101",
    text: "长石薄片中常见成组、条纹状或交叉的双晶，也就是晶体内部有规律的重复结构；观察双晶样式有助于认识长石种类和内部构造。"
  };
  const thinSectionNotesById = {
    diamond: {
      pages: "26",
      text: "含钻石颗粒的岩石薄片中，钻石通常在交叉偏光下保持暗色；局部异常颜色可能与应力有关。钻石成品主要观察切磨、净度和报告等级。"
    },
    spinel: {
      pages: "17",
      text: "尖晶石薄片在交叉偏光下通常保持暗色，少数样品会出现异常干涉色；红色尖晶石的材料确认可结合晶体光学特征和成分检测。"
    },
    garnet: garnetThinSectionNote,
    "tsavorite-garnet": garnetThinSectionNote,
    "demantoid-garnet": garnetThinSectionNote,
    "rock-crystal": quartzThinSectionNote,
    amethyst: quartzThinSectionNote,
    citrine: quartzThinSectionNote,
    ametrine: quartzThinSectionNote,
    "quartz-rose": quartzThinSectionNote,
    "aventurine-quartz": quartzThinSectionNote,
    agate: chalcedonyThinSectionNote,
    chalcedony: chalcedonyThinSectionNote,
    chrysoprase: chalcedonyThinSectionNote,
    carnelian: chalcedonyThinSectionNote,
    onyx: chalcedonyThinSectionNote,
    "blue-lace-agate": chalcedonyThinSectionNote,
    "fire-agate": chalcedonyThinSectionNote,
    bloodstone: chalcedonyThinSectionNote,
    emerald: berylThinSectionNote,
    aquamarine: berylThinSectionNote,
    morganite: berylThinSectionNote,
    ruby: corundumThinSectionNote,
    sapphire: corundumThinSectionNote,
    tourmaline: tourmalineThinSectionNote,
    "black-tourmaline": tourmalineThinSectionNote,
    apatite: {
      pages: "41-42",
      text: "磷灰石薄片常见柱状晶体和较弱干涉色，部分晶体随方向转动呈现颜色变化；成分变化会影响光学表现和物理性质。"
    },
    zircon: {
      pages: "60-61",
      text: "锆石的双折射（光线在晶体内分成两束）较明显，薄片中可呈鲜明干涉色；成分、晶体受损或变质程度会影响光学表现。"
    },
    moonstone: feldsparThinSectionNote,
    sunstone: feldsparThinSectionNote,
    labradorite: feldsparThinSectionNote,
    amazonite: feldsparThinSectionNote,
    iolite: {
      pages: "103-104",
      text: "堇青石薄片转动时可见明显多色性，即颜色随观察方向变化，常见蓝、紫或灰黄色调；部分样品的晶体极细，颜色变化可能较弱。这是方向不同造成的颜色差异，不是换光源变色。"
    },
    topaz: {
      pages: "138-139",
      text: "托帕石薄片中常见柱状晶体、解理及方向相关的光学表现。解理是矿物容易沿固定方向裂开的性质；这也提醒成品受撞击时可能沿该方向开裂。薄片不能评价单件切工或处理。"
    },
    prehnite: {
      pages: "141-142",
      text: "葡萄石薄片中可见放射状、束状或粒状结构；单偏光下多为无色，交叉偏光下常见较明显干涉色。"
    },
    nephrite: {
      pages: "158-159",
      text: "软玉由细密交织的纤维状矿物组成，薄片中常见纤维集合和方向变化；纤维相互交错的结构与软玉较好的韧性有关。"
    },
    peridot: {
      pages: "175-176",
      text: "橄榄石薄片中的晶粒边界常与周围矿物形成明暗反差，可见干涉色或裂隙；成分变化会影响颜色与光学表现。"
    },
    diopside: {
      pages: "188-189",
      text: "透辉石薄片中可观察柱状外形、两组近乎垂直的解理（矿物容易沿其裂开的方向）和交叉偏光下的干涉色，并记录晶体组合。"
    },
    jadeite: {
      pages: "195",
      text: "硬玉宝石级材料多为细粒或纤维状结构，薄片中可观察晶粒形态、解理和颗粒组合；成品颜色、质地和表面状态需结合实物记录。"
    },
    kunzite: {
      pages: "196",
      text: "锂辉石薄片中可见柱状或板状晶体、明显解理及方向相关的颜色变化；紫锂辉石（锂紫玉）可呈紫色多色性。"
    },
    tanzanite: {
      pages: "200-201",
      text: "黝帘石薄片中可见柱状晶体；转动时颜色随观察方向变化（多色性），还可观察干涉色和解理。坦桑石的颜色常经加热改善，处理情况结合检测报告记录。"
    },
    andalusite: {
      pages: "144-145",
      text: "红柱石可呈明显多色性，即转动观察方向时颜色改变；薄片中还可观察晶形、解理和其他光学特征。成品切磨会影响正面所见颜色组合。"
    },
    kyanite: {
      pages: "206",
      text: "蓝晶石薄片可结合明显解理、较强的方向颜色变化和干涉色观察；晶体硬度还会随方向不同而变化。方向硬度属于实验室矿物特征，不建议用刻划成品的方式自行验证。"
    },
    chrysoberyl: {
      pages: "207-208",
      text: "金绿宝石薄片观察可结合解理、干涉色和多色性（转动时颜色随观察方向变化）；变石是其中会随光源改变体色的品种。薄片的方向颜色变化与变石的光源变色不是同一现象。"
    },
    alexandrite: {
      pages: "207-208",
      text: "变石属于金绿宝石。薄片中的多色性表现为转动样品时颜色随方向改变；变石的观赏特点是日光类与暖色灯光下体色改变。"
    },
    opal: {
      pages: "8",
      text: "蛋白石含水且没有规则晶体结构，薄片中可观察水合硅质材料的结构和光学表现；成品变彩来自内部微结构对光线的作用。"
    },
    "purple-fluorite": {
      pages: "8-9",
      text: "萤石薄片在交叉偏光下通常呈暗色，局部异常颜色可能与应力或结构有关；萤石容易沿固定方向裂开，观察晶体边缘时需留意解理面。"
    }
  };

  const qualityBestSignsById = {
    jadeite: [
      "颜色明快、色调与器形相称，绿色、紫色、白色等各按自身色系比较；色更浓并非一概更好。",
      "在相近厚度和光线下，质地细致、透光表现协调，表面反光柔和连续，通常更显翡翠的细润感。",
      "正面颜色与透光分布自然，抛光平整；明显裂隙不穿过关键受力位置，成品比例适合用途。"
    ],
    nephrite: [
      "白、青、碧、墨等颜色各有审美；颜色纯净或天然色带协调、与器形相称，通常更耐看。",
      "细密纤维交织带来柔和均匀的表面光泽，抛光后呈现细致、温润的观感。",
      "表面抛光均匀，裂纹少且避开关键受力处；雕刻顺应颜色与纹理，线条清楚。"
    ],
    agate: [
      "条带、眼纹或景观纹样边界清楚，构图完整，切面能把该块玛瑙最有特色的图案呈现出来。",
      "颜色层次自然，透光和纹带对比符合具体款式；条带规则或不规则都不自动代表高低。",
      "孔道、边缘和抛光面完整；无显眼贯穿裂，染色等处理如实说明，图案没有被加工破坏。"
    ],
    "rock-crystal": [
      "刻面用料以清透、少明显雾感和较少影响正面观感的裂隙为佳；标本则可按晶形或包体景观取向选择。",
      "晶体生长面、晶簇组合或内部特征清楚；矿物、液体包体和裂隙能形成有层次的标本景观。",
      "刻面成品亮度均匀、刻面交接整齐；晶体标本的主要晶面和晶尖保存较好，摆放稳定。"
    ],
    amethyst: [
      "紫色鲜明而不过暗，正面色调协调；相同类型中，明显灰褐色或大片发黑会削弱观感。",
      "刻面石在正面看颜色分布较匀、肉眼少见影响观感的裂隙；晶簇则以晶尖完整、色带有层次为特色。",
      "刻面明亮、抛光平顺，晶簇边缘无明显新磕损；热处理或合成等信息与报告描述一致。"
    ],
    citrine: [
      "黄色至橙黄色明亮协调；颜色浓淡按个人偏好选择，不以越深、越橙作为统一好坏标准。",
      "刻面正面颜色分布匀称，明显色带和裂隙少；大尺寸样品也不因中央发白或发暗而失去整体感。",
      "切面亮度与比例协调，边角完整；天然颜色或热处理情况有清楚披露。"
    ],
    turquoise: [
      "蓝至蓝绿色调清楚，表面颜色与器形协调；偏绿或偏蓝是审美差异，不是单独的等级结论。",
      "质地致密、抛光细润；“铁线”指深色基质脉纹，可有也可无，分布协调的网纹能成为设计特色。",
      "珠面、孔口与边缘无明显掉粉、崩口或贯穿裂；稳定化、染色或再造等状态明确说明。"
    ],
    "lapis-lazuli": [
      "蓝色浓淡协调、主体观感完整；黄铁矿金色小点和浅色方解石脉适量且布局合意时可增加图案层次。",
      "蓝色矿物主体占视觉重点，浅色方解石没有大面积打断整体；金色颗粒清楚但不必追求越多越好。",
      "抛光均匀、珠孔及边缘完整；染色、浸胶或再造等处理明确披露。"
    ],
    "nanhong-agate": [
      "橙红至红色调明快，整体颜色分布匀称；细腻、颜色鲜亮的同类材料通常更受欢迎。",
      "天然纹理和色带过渡协调，正面少见突兀的灰暗斑块或明显粗颗粒。",
      "珠孔、雕刻转角和表面抛光完整；颜色处理和填充情况清楚披露。"
    ],
    emerald: [
      "绿色鲜明且不显过暗，正面颜色分布协调；偏蓝或偏黄的绿色都应结合光线和个人取向比较。",
      "在祖母绿常见包体背景下，仍有足够通透感、颜色不被大裂隙明显切断；“花园”是对内部包体景象的俗称。",
      "切磨能呈现正面颜色和亮度，裂隙不明显威胁耐久；注油或树脂充填等处理程度有对应披露。"
    ],
    aquamarine: [
      "蓝至略带绿色的蓝色明亮、正面分布较匀；同批比较时，明显灰暗或褐调通常较不讨喜。",
      "肉眼看起来清爽通透，明显裂隙和深色包体较少；具体允许程度按尺寸与佩戴距离判断。",
      "刻面比例让颜色不至于过浅或发黑，棱角完整；加热等处理情况清楚说明。"
    ],
    ruby: [
      "红色鲜明、饱和度与明暗平衡；红得更深不一定更好，过暗会使正面显黑。",
      "在天然包体常见的前提下，肉眼观感仍清楚，裂隙未明显削弱耐久；包体多少需结合颜色和大小评估。",
      "切磨能把红色和亮度带到正面，边缘无明显崩口；加热、玻璃充填等处理明确披露。"
    ],
    sapphire: [
      "先按蓝色或其他具体色系比较；正面色调鲜明、亮暗分布协调，比单纯追求深色更有参考价值。",
      "刻面石有均衡亮度，明显裂隙少；星光蓝宝石的星线清楚、居中并能随转动移动，才是较好的视觉呈现。",
      "刻面比例、抛光和棱角状态良好；加热、扩散处理或合成属性有清楚说明。"
    ],
    garnet: [
      "先确认具体石榴石品种，再看该品种常见颜色是否鲜明、正面是否协调；石榴石不是一种固定颜色的宝石。",
      "刻面石看色彩和透明感是否平衡；翠榴石等可特别欣赏彩色闪光，但不同品种不套同一净度标准。",
      "切面明亮、边缘少崩口，裂隙不影响预期用途；材料品种与天然或合成身份清楚。"
    ],
    tourmaline: [
      "颜色鲜活且正面不显过暗；双色或多色分区边界清楚、比例与切磨造型协调时，更能体现特色。",
      "颜色带能在正面完整呈现，肉眼包体没有明显压住颜色；猫眼品种的亮带应清楚、连续并随角度移动。",
      "切磨方向能展现预期颜色，尖角与表面完整；处理及特殊商业名称有对应检测依据。"
    ],
    opal: [
      "变彩是转动时出现变化的彩色闪光；颜色鲜明、图案容易辨认，并在较多正面区域出现时更有观赏性。",
      "底色与变彩形成清晰对比，图案符合黑欧泊、白欧泊或晶质欧泊等具体类型的特点；变彩强弱不是所有欧泊的统一等级。",
      "表面完整、没有明显龟裂或脱层，边缘结构能确认是单体还是拼合；避开干热和骤冷骤热。"
    ],
    "black-opal": [
      "深灰至黑色底色衬托出明亮、颜色丰富的变彩，正面较大区域能看到彩色闪光。",
      "色斑轮廓清楚，转动时多个常见角度都能看见变彩，图案与器形相称。",
      "表面光滑、边缘完整，侧面结构清楚；拼合层或透明顶层如实说明。"
    ],
    hydrogrossular: [
      "颜色鲜明，色调和分布协调；绿色、粉色、黄色或褐色各按自身颜色特点比较。",
      "细粒结构均匀，抛光面细致有光泽；颜色、纹理和半透明感相互协调。",
      "弧面、珠面或雕件边缘完整，少明显裂隙和崩口；表面修补或填充情况有披露。"
    ],
    moonstone: [
      "晕彩是随角度移动的柔和光带；光带清楚、位置较居中且在正面容易看到，通常更有观赏性。",
      "体色与晕彩对比协调、内部裂隙较少；蓝光、白光等属于不同外观取向，并非只有蓝色才好。",
      "弧面高度和方向让光带落在正面，弧面圆顺、抛光均匀；边缘无明显崩口。"
    ],
    peridot: [
      "黄绿色鲜明而不显褐暗，正面颜色均匀；过深会显闷，过浅则颜色存在感较弱。",
      "肉眼看起来较清爽，黑色包体或裂隙没有明显影响正面观感；俗称“睡莲叶”的包体是形态描述，不是品质或天然性的证明。",
      "刻面亮度均匀、尖角完整，镶嵌能保护边缘；裂隙不贯穿关键部位。"
    ],
    topaz: [
      "按蓝、黄、粉或无色等具体类型比较；颜色清楚、正面明亮且与用途相称即可，不把罕见颜色当作唯一标准。",
      "肉眼少见明显裂隙和影响观感的包体，切面反光清晰；透明度高本身不能说明材料身份。",
      "刻面棱角完整、镶嵌能保护易受撞击的部位；蓝色处理与其他处理信息明确披露。"
    ],
    amber: [
      "颜色、透明度或云雾感符合成品设计，表面光泽自然；色调与透明程度搭配协调。",
      "内部植物、气泡或动物包体清楚且与整体构图协调时有观赏价值；包体本身不证明天然或未经处理。",
      "珠孔、边缘和抛光面完整，少见明显黏接痕；压制、染色、加热等处理状态有清楚说明。"
    ],
    pearl: [
      "表面反光明亮清晰，近看映像边界较利落；这类表面反光质量常称“光泽”，比单看颜色更能体现珍珠观感。",
      "表面瑕疵少且不集中在正面显眼处，形状适合单颗设计或整串搭配；圆度不是所有设计的唯一目标。",
      "整串大小、颜色、光泽和形状彼此协调，珠孔与珠层边缘完好；天然、养殖或仿珠身份如实标注。"
    ],
    diamond: [
      "按颜色、净度、切工和克拉重量分别比较；正面看起来明亮且颜色、瑕疵符合预算，比只追单一高等级实用。",
      "切工能带来均匀明亮的白光反射和适度彩色闪光；彩色闪光称为“火彩”，比例、对称和抛光也共同影响切工表现。",
      "刻面棱线清楚、抛光良好、无明显崩口；天然、实验室培育或仿钻身份与报告一致。"
    ],
    spinel: [
      "红、粉、蓝等具体颜色鲜明且正面明亮；不以“尖晶石”这一名称推断统一色调或价格等级。",
      "肉眼看起来清楚，包体没有明显破坏整体颜色；刻面反光均匀，透明度与颜色达到平衡。",
      "切磨对称、抛光平顺、边缘完整；天然或合成身份及任何处理有清楚说明。"
    ],
    zircon: [
      "颜色清楚、明暗协调，刻面能呈现明亮的彩色闪光；蓝色等常见处理色应按实际处理状态说明。",
      "肉眼明显裂隙较少，刻面棱线清楚；转动时看到的双影只是光学观察线索，不是品质高低判断。",
      "边棱、尖角少磨损，切磨比例合适；检测报告清楚标注天然锆石及处理状态。"
    ],
    alexandrite: [
      "在日光类与暖色灯光下都保有清楚颜色，绿/蓝绿到红/紫红的变化明显且两端不发灰时更有观赏性。",
      "颜色变化覆盖正面主要区域，切磨不会让一端颜色过暗；“变色”指换光源后颜色改变，不是转动时的普通明暗变化。",
      "肉眼净度和切磨效果适合样品尺寸，边缘完整；检测报告清楚注明天然或合成属性及处理情况。"
    ],
    tanzanite: [
      "蓝紫色鲜明，正面色彩协调；“多色性”是转动观察方向时颜色不同，不是换灯后才变色。",
      "刻面亮度和肉眼净度较好，裂隙不明显威胁耐久；不同方向的色彩能自然融入正面观感。",
      "切磨方向兼顾蓝紫色呈现，尖角和表面完整；常见加热处理有明确披露。"
    ],
    morganite: [
      "粉、桃或橙粉色柔和清楚，正面不显灰褐；颜色浓淡按个人偏好和成品尺寸选择。",
      "大多数常见刻面料以肉眼清透、少显眼裂隙为宜，切面亮度与颜色相协调。",
      "切磨比例让较浅的颜色不显得过淡，抛光和边缘完整；材料名称及加热等处理清楚披露。"
    ],
    sunstone: [
      "黄、橙或褐色底色清楚、分布协调；俄勒冈日光石中，深红、深绿和鲜明双色通常更受青睐。",
      "砂金效应是内部细小片状矿物或铜片反光形成的闪点，转动时闪点会明暗变化。作为日光石特色，闪点清楚、有层次且与底色相称通常更讨喜；有无或强弱都不单独代表整体品质。",
      "刻面或弧面能把内部闪点带到正面，颜色和闪光不被大暗区遮住；包体既能形成特色，也可能降低透明感。"
    ],
    iolite: [
      "正面呈现清楚的蓝或蓝紫色，灰暗或偏黄棕区域不过度占据正面；方向变化需一并考虑。",
      "多色性是同一颗石头沿不同方向看会出现不同颜色；切磨方向合适时，主要观赏面颜色清楚且协调。",
      "刻面明亮、裂隙少，抛光均匀；若有猫眼，亮带应清楚、连续并随角度移动。"
    ],
    kunzite: [
      "粉至紫色柔和、正面分布协调；相近样品比较时，不显过灰或过淡通常更有颜色表现。",
      "不同方向的颜色差异得到妥善切磨，正面仍有清楚色彩；多色性指方向不同而见色不同。",
      "刻面和尖角完整，采用低碰撞用途；颜色稳定性、光照和热敏感注意事项清楚说明。"
    ],
    "quartz-rose": [
      "粉色柔和且分布与成品相称；半透明的云雾感是常见外观，不应机械地当成缺陷。",
      "普通蔷薇石英以颜色与抛光协调为佳；星光品种的星线应清楚、居中，转动时仍可辨认。",
      "弧面圆顺、抛光细致，珠孔和边缘无明显崩损；有颜色处理时应披露。"
    ],
    "dushan-jade": [
      "多种颜色相互衬托，色块布局适合器形；颜色丰富是特色，但并非颜色越多越好。",
      "细腻部分与各色纹理形成清楚层次；雕刻顺着天然色块安排，这种利用色块的做法常称“俏色”。",
      "抛光平顺、主体完整，雕工不以过度挖薄或遮盖大裂为代价；矿物组成与商业名称相符。"
    ],
    "serpentine-jade": [
      "黄绿、浅绿或其他色调清楚，颜色与器形协调；选择时结合色调、质地和成品用途。",
      "颗粒细、表面光泽均匀，半透明感与颜色相称；蜡状光泽是柔和、不刺眼的表面反光。",
      "抛光面平顺，边缘和孔道无明显崩损；确认具体蛇纹石玉材料并披露染色或充填。"
    ],
    "quartzite-jade": [
      "绿色、白色或其他色调清楚明亮，颜色分布均匀，与成品设计相配。",
      "石英颗粒细密、表面少见粗糙颗粒感，抛光后呈现均匀光泽。",
      "结构紧密、少明显裂隙，抛光和雕刻完整；染色、浸渍等处理状态与名称分开说明。"
    ],
    chalcedony: [
      "颜色、半透明感和纹理符合具体品种取向；单色、条带或云雾纹都可以成为合适的外观。",
      "细密均匀的结构使表面呈柔和蜡状至玻璃光泽，颜色过渡自然且没有明显裂隙聚色。",
      "抛光细致、孔口和边缘完整；染色或其他处理有说明，不把颜色鲜艳当作天然证明。"
    ],
    "aventurine-quartz": [
      "绿色、红色或其他底色与闪点相衬；同一串或同一器形的颜色协调更利于整体观赏。",
      "砂金效应指内部片状矿物反光形成的细闪；闪点分布清楚、转动时可见变化且不过度遮住底色，通常更耐看。",
      "抛光平顺、闪点在正面能看见，孔道和边缘完整；闪点来自表面涂层还是内部结构不能只凭照片定论。"
    ],
    obsidian: [
      "黑色或带彩虹、金色等效应的表面表现清楚，光泽均匀，符合具体黑曜石类型。",
      "彩虹或金曜亮带在适合角度能连续呈现；雪花状斑点分布也可作为标本或饰品图案特色。",
      "天然玻璃表面抛光均匀、边缘无新崩口；展示或佩戴时注意尖锐断口和碰撞风险。"
    ],
    "tiger-eye": [
      "金黄、褐色或蓝色底色层次清楚，表面光带明亮且与颜色协调。",
      "猫眼效应是像猫眼细线的亮带随转动移动；带线清晰、连续、位置合宜时更能体现虎睛石特色。",
      "弧面方向能让光带横贯正面，带线清楚连续，抛光平顺、边缘完整。"
    ],
    malachite: [
      "深浅绿色条带或同心环纹清楚，构图完整，纹样与珠型、雕件形状相呼应。",
      "明暗绿带对比鲜明且层次自然；纹带宽窄和眼纹数量依设计而异，不以单一图案定级。",
      "抛光面均匀、裂隙和缺口少；材料较易受酸和磨损影响，处理或拼合情况需说明。"
    ],
    chrysocolla: [
      "蓝绿或青绿色泽清楚，颜色面积与基质比例协调，整体图案符合样品用途。",
      "不同矿物形成的脉纹和色块边界自然；基质指主体色块周围的伴生材料，多少没有统一优劣。",
      "抛光面稳定、少松散孔隙和贯穿裂；若经浸渍或树脂稳定化，应清楚披露。"
    ],
    labradorite: [
      "蓝、绿、金等彩闪面积较大、颜色明亮，在正面主要区域容易看到。",
      "拉动或转动时彩闪能随角度移动；长石内部结构造成的这种彩光是观赏特色，不是表面涂层的同义词。",
      "切磨方向让彩闪落在正面，表面平整、边缘无明显解理裂损。"
    ],
    amazonite: [
      "蓝绿或青绿色调清楚，白色网格和条纹分布与器形协调。",
      "颜色和格纹对比适度，纹路清晰但不被大片裂隙打断；均匀或有纹理可按设计取向选择。",
      "抛光均匀、边缘无明显崩口，裂隙不影响耐用；材料身份与处理披露明确。"
    ],
    jasper: [
      "不透明底色与斑纹、带状或景观图案有辨识度，整体构图完整。",
      "颜色组合自然或符合该类图案设计，切面能把主要纹样完整呈现；图案偏好没有统一答案。",
      "表面抛光平顺、少贯穿裂，雕工能利用纹样而不掩盖大面积损伤。"
    ],
    chrysoprase: [
      "苹果绿至黄绿色清楚明亮，颜色分布协调；偏好可从鲜绿到柔和绿变化。",
      "半透明感均匀、表面细润，明显褐色斑块或裂隙不压住正面观感。",
      "抛光细致、边缘和珠孔完整；颜色稳定性及染色等处理有明确说明。"
    ],
    "yellow-dragon-jade": [
      "在确认材料组成后，黄、金黄或橙黄色调明亮协调，颜色与器形相配。",
      "质地细、表面光泽均匀，颜色层次或天然色块有明确观赏效果；“润”描述外观，不是材料鉴定。",
      "抛光和雕刻完整，裂隙少且不靠厚蜡遮盖；商业名称与矿物组成、处理状态分开记录。"
    ],
    "chicken-blood-stone": [
      "红色斑块鲜明，形态与底色形成清楚对比；红色多少和分布取向因印章、摆件设计而异。",
      "辰砂形成的红色区域与浅色或深色伴生部分层次清楚，红斑位置利于展示，颜色鲜明。",
      "主体完整、少明显贯穿裂，雕刻能保留主要红色图案；矿物组成、来源和处理信息有依据。"
    ],
    "shoushan-stone": [
      "按具体品类比较颜色、透明度和天然纹理，色泽与器形相衬，不以单一“田黄”等名称代替鉴定。",
      "质地细致、抛光后光泽柔和；天然纹理与颜色层次能被清楚呈现，纹理多少依具体石种评价。",
      "雕件结构完整、线条清楚，关键部位不被裂隙削弱；石种、处理和来源说明清晰。"
    ],
    coral: [
      "颜色鲜明且分布协调，红、粉、白等品种按各自色系和成品用途比较。",
      "枝体或珠体结构细致，表面光泽均匀；天然生长纹理可见但不应有明显裂损或大孔洞。",
      "边缘、孔道和雕刻完整；来源及处理信息有凭据，涉及受保护物种时核对现行合规文件。"
    ],
    "shell-pearls": [
      "白色、乳白或其他自然色调均匀，壳面光泽与雕件用途相称。",
      "生长纹呈自然层次，抛光后表面细致；纹理清楚是材料特征，不要求像珍珠一样形成珠光。",
      "珠粒或雕件无明显分层、缺口和贯穿裂；材料名称与来源信息明确，按实际用途妥善养护。"
    ],
    moissanite: [
      "在明确为合成莫桑石后，颜色均匀、尺寸与设计协调；无色或带色款式按个人偏好选择。",
      "切工让亮度和火彩分布均匀；火彩是白光拆分出的彩色闪光，越强并不自动表示做工越好。",
      "刻面交接整齐、抛光平滑、镶嵌牢固；材料身份与任何颜色或表面处理清楚标注。"
    ],
    "cubic-zirconia": [
      "颜色均匀，透明款少见肉眼明显杂质；成品尺寸和色彩与设计相符。",
      "切面亮度均衡、火彩不过分刺眼；评价加工效果即可，不套用天然钻石身份或等级。",
      "抛光和刻面棱角完整，镶嵌牢固；明确标注实验室合成立方氧化锆及相关处理。"
    ],
    "purple-fluorite": [
      "紫色浓淡或色带清楚，晶体颜色与标本形态互相衬托。",
      "立方晶形、色带或透明区域保存良好；标本可欣赏生长形态，不必追求无包体透明。",
      "晶面、棱角和解理面无明显新损伤，展示稳定；因较易刮伤和沿平面裂开，更适合低碰撞用途。"
    ],
    "tsavorite-garnet": [
      "绿色鲜明、明暗适中，正面颜色清楚；避免暗到显黑或浅到失去绿色特点。",
      "透明度足以展现颜色和刻面闪光，肉眼显眼裂隙较少。",
      "切磨让颜色与亮度均衡，棱角完整；产地和天然属性需有对应检测依据。"
    ],
    "demantoid-garnet": [
      "绿色明亮鲜活，正面不显过暗；黄绿色调深浅是样品差异，不单凭名称定优劣。",
      "刻面可见明亮彩色闪光；有些样品的细丝状“马尾”包体具观赏或研究意义，但并非必需，也不是单独的天然证明。",
      "小刻面清楚、边角完整，裂隙不显著影响耐用；品种、处理与来源信息有依据。"
    ],
    chrysoberyl: [
      "黄绿至金绿色调明快，正面颜色与切型相称。",
      "若为猫眼石，亮带清楚、居中且随转动移动；猫眼效应是内部细长结构反光形成的线状亮带。",
      "刻面或弧面抛光平顺，边缘完整；普通金绿宝石、猫眼品种和变石需分别描述。"
    ],
    kyanite: [
      "蓝色鲜明或符合具体颜色取向，正面不过度发灰；颜色和方向变化应一起看。",
      "晶体或切面保存完整，方向性颜色表现能被清楚观察；多色性指转动方向时所见颜色不同。",
      "切面无明显沿平面裂开的损伤，镶嵌避开薄弱方向；不作为频繁受撞击的主石更稳妥。"
    ],
    diopside: [
      "绿色鲜明、正面颜色协调；不同颜色品种分别描述，不拿绿色一个标准覆盖全族。",
      "刻面亮度良好，肉眼明显裂隙较少；猫眼或星光等效应只有清晰呈现时才是观赏加分项。",
      "边缘和尖角无明显崩损，镶嵌能保护易受撞击部位；材料身份和处理状态有说明。"
    ],
    "black-jade": [
      "先确认具体玉石材料，再比较黑色浓淡、透光和纹理；黑得更纯并非对所有器形都更好。",
      "在相近厚度下透光表现均匀，结构细致、表面光泽协调；半透明与不透明款式按用途分开比较。",
      "表面无明显染色脱落或贯穿裂，雕工适配材料；“墨玉”名称与检测出的矿物组成对应。"
    ],
    "green-jasper": [
      "绿色底色与斑纹、色带形成清楚图案，纹样布局适合珠型或雕件。",
      "不透明主体颜色协调，切面能呈现主要纹理；天然斑纹多少因设计偏好不同。",
      "抛光平顺、边缘完整、明显裂隙少；染色或拼合信息如实说明。"
    ],
    sodalite: [
      "深蓝至蓝色主体清楚，白色方解石脉与蓝色对比协调。",
      "白脉形成有辨识度的纹样但不过度割裂主体，抛光后蓝白层次分明。",
      "珠面和雕件完整，抛光均匀，裂隙不贯穿；与青金石等相似材料分清。"
    ],
    rhodochrosite: [
      "粉红至红色调清楚，适合该样品的条带、色块或晶体形态。",
      "白色纹带与粉色层次自然，切面图案完整；纹带宽窄按材料形态和个人审美选择。",
      "晶体或抛光面无明显新崩裂，镶嵌避开脆弱边缘；酸敏感材料避免不当清洁。"
    ],
    smithsonite: [
      "蓝绿、粉或其他颜色清楚，整体色泽与葡萄状或块状形态相称。",
      "葡萄状表面是许多圆凸小结聚成的外观，轮廓保存完整、光泽均匀时标本表现更好。",
      "表面结晶和基底稳定，无明显脱落或修补遮盖；标本以安全展示和完整形态为主。"
    ],
    "black-tourmaline": [
      "黑色晶体柱状轮廓清楚，纵向沟纹和玻璃光泽保存良好。",
      "柱面棱线、端部晶形或矿物共生关系明确，适合作为标本或低碰撞饰品展示。",
      "晶体无明显新断裂、基座稳定；尖端较脆，佩戴时避免撞击。"
    ],
    prehnite: [
      "浅绿至黄绿色柔和清楚，半透明感和颜色相协调。",
      "葡萄状或团块状晶体轮廓完整；若出现猫眼，亮带应清晰连续并随角度移动。",
      "弧面或标本表面抛光、晶体保存较好，少明显裂隙；按硬度与结构选择低碰撞用途。"
    ],
    "petrified-wood": [
      "木纹、年轮或树皮结构保存清楚，颜色变化衬托原有纹理。",
      "切面能连续呈现木质结构与硅化矿物的层次；硅化指原有木质逐渐被二氧化硅等矿物保存或替代。",
      "切片和抛光面完整、无贯穿裂，雕刻不破坏主要纹样；来源和加工方式有记录。"
    ],
    "beijing-white-jade": [
      "确认具体石英质材料后，白色明净均匀，与器形和雕刻设计相配。",
      "颗粒细密、表面抛光平滑，白色不被明显灰黄斑块或粗糙结构打断。",
      "整体少贯穿裂和崩口，雕工线条清楚；检测报告中的材料名称与商品名称均有标注。"
    ],
    bloodstone: [
      "深绿色底色清楚，红褐色斑点分布与切面构图协调。",
      "红色斑点在正面清晰可辨，形状和疏密与整体图案协调。",
      "抛光面完整、裂隙少，主要图案保留在成品正面；染色和材料名称有依据。"
    ],
    carnelian: [
      "橙红至红褐色明快，颜色分布符合珠串、刻面或雕件的设计取向。",
      "半透明感和色层自然，内部云雾或条带不过度破坏正面观感。",
      "抛光均匀、孔道和边缘完整；若颜色经加热或染色改善，应有披露。"
    ],
    onyx: [
      "黑白或其他颜色带界线清楚，条带方向与切磨造型协调。",
      "平行色带连续、层次可辨；纯黑珠材颜色均匀，染色状态有清楚说明。",
      "珠面抛光平整、孔口无明显掉色或裂口；名称、基材和染色状态准确标明。"
    ],
    ametrine: [
      "紫色与黄色区域都清楚，双色比例符合设计；不要求固定各占一半。",
      "切磨能让两色在正面同时可见，边界自然或过渡有层次，颜色不被明显裂隙打断。",
      "透明度和切面亮度协调，棱角完整；双色区域清楚，颜色成因与处理情况有记录。"
    ],
    "fire-agate": [
      "红、橙、绿等虹彩在转动时清楚显现，主要观赏面覆盖合宜。",
      "火玛瑙的彩光来自内部薄层反射形成的颜色变化；彩层有层次且与褐色基底相衬更显特色。",
      "弧面切磨既展示彩光又保留结构，表面无明显磨损或崩口；避免把表面涂层反光当作内部效应。"
    ],
    "blue-lace-agate": [
      "浅蓝、白和灰蓝色条带清楚，细密纹样在正面连续展开。",
      "条带对比柔和、波纹自然，切面能呈现连续层次；颜色浅不是自动的缺点。",
      "半透明感、抛光和珠孔状态协调，明显裂隙不割断主要纹样。"
    ],
    charoite: [
      "紫色纤维状或旋涡状纹样清楚，颜色与白、黑等伴生区形成层次。",
      "丝绢至玻璃光泽均匀，纹理随切磨呈现流动感；不同矿物共生的图案是材料特色。",
      "抛光面完整、少明显松散裂隙，主体组成与“紫龙晶”商业名称相符。"
    ],
    larimar: [
      "蓝至蓝绿色清楚，白色云纹或波纹与蓝色区域对比协调。",
      "切面保留连贯的蓝白图案，颜色面积符合器形；纹理不必完全均匀才有观赏性。",
      "表面抛光平顺、裂隙和掉粉少；确认是针钠钙石材料并披露稳定化或染色处理。"
    ],
    moldavite: [
      "橄榄绿至褐绿色和天然不规则外形协调；颜色深浅不是单独的真假或品质判断。",
      "表面蚀刻凹坑、沟槽是天然玻璃常见外观，保存清楚可作标本特色；气泡和流纹只能作为观察线索。",
      "边缘无明显新断裂、整体质量和来源记录可核对；需要检测排除人工玻璃，不能只凭蚀刻定名。"
    ],
    variscite: [
      "苹果绿至蓝绿色主体清楚，颜色与网脉图案形成合意对比。",
      "白、褐或黑色脉纹构图自然，抛光后图案连续，与绿色主体形成协调对比。",
      "主体致密、少贯穿裂，边缘和孔道完整；矿物身份、染色或浸渍状态有依据。"
    ],
    rhodonite: [
      "粉红至玫红色底与黑色脉纹对比清楚，构图适合珠型或雕件。",
      "黑色锰氧化物脉呈自然纹样且不过度压住粉色主体；黑脉多少依图案偏好选择。",
      "抛光均匀、少贯穿裂或松散部位；主体矿物和伴生物描述准确。"
    ],
    sugilite: [
      "紫、玫紫或蓝紫色块清楚，颜色在主体区域有足够表现。",
      "紫色主体与黑褐基质形成层次，图案完整；苏纪石常与其他矿物共生，需按实际组成描述。",
      "表面抛光平顺、裂隙和树脂充填少；材料组成、拼合和处理披露清楚。"
    ],
    howlite: [
      "白色或灰白底与灰黑网脉清楚，整体纹样和珠串、雕件设计协调。",
      "网脉自然、表面细致；若染成蓝色作绿松石风格，评价的是成品外观而不是天然绿松石等级。",
      "孔道、边缘无明显掉色或裂口；染色状态与豪莱石材料名称明确标示。"
    ],
    apatite: [
      "蓝、蓝绿、绿或黄等具体颜色鲜明，颜色与透明度或标本形态相称。",
      "刻面石的颜色、透明感和亮度平衡；晶体标本则以形态保存和颜色清楚为主。",
      "刻面棱角完整、裂隙少，镶嵌适合较低碰撞场景；磷灰石族具体成分应准确标注。"
    ],
    titanite: [
      "黄、黄绿、绿或棕色调清楚，切面有明亮的彩色闪光。",
      "色散指白光被分成不同颜色的光，形成常说的“火彩”；闪光明显且正面仍保有主体颜色时更协调。",
      "刻面棱角完整、抛光良好，裂隙不影响耐久；按较脆弱材料谨慎镶嵌和佩戴。"
    ],
    andalusite: [
      "黄绿、褐绿或红褐等方向性色彩明快，正面综合色感协调。",
      "多色性指从不同方向观察同一颗宝石时颜色有变化；切磨取向合适时，正面颜色清楚而不过度杂乱。",
      "刻面明亮、裂隙少、尖角完整；颜色变化是观察特色，不单独确证材料身份。"
    ],
    scapolite: [
      "先明确方柱石族的具体材料，再比较无色、白、黄、粉或紫色的鲜明度与整体观感。",
      "刻面颜色与亮度协调；若有猫眼，亮带清楚居中，并能随转动平稳移动。",
      "切面和边缘完整，裂隙不明显影响耐久；族名、成分差异和检测信息分开说明。"
    ],
    danburite: [
      "无色、白或浅黄色等色调清爽，刻面正面透明明亮。",
      "肉眼明显包体和裂隙较少，刻面反光均匀；晶体标本则以晶形保存清楚为特色。",
      "边角、刻面棱线和抛光面完整，镶嵌适合预期用途；不凭无色外观或火彩定名。"
    ],
    euclase: [
      "无色、浅蓝、蓝绿或绿色调清楚，正面颜色与切磨比例协调。",
      "透明度和刻面亮度良好，明显裂隙少；不以硬度较高误认为耐撞。",
      "解理面和尖角保存完整，镶嵌避免集中受力；材料身份及含铍属性准确披露。"
    ],
    phenakite: [
      "无色、白或浅色样品清透明亮，颜色均匀；标本也可按晶形和稀有形态欣赏。",
      "刻面石肉眼包体较少、亮度均匀；晶体标本的晶面和共生关系保存良好。",
      "边角、抛光和整体完整度较好，切磨与用途相称；检测报告清楚注明硅铍石名称及处理状态。"
    ]
  };

  function inferPurposeTags(gem, use, folk, unprofiled = false) {
    const tags = new Set(purposeTagsById[gem.id] || []);
    const usageText = String(use || "");
    const folkText = String(folk || "");
    const materialText = [
      gem.name,
      gem.category,
      gem.hardness,
      ...(gem.visualClues || [])
    ].join(" ");
    const hardnessValue = Number((String(gem.hardness || "").match(/\d+(?:\.\d+)?/) || [0])[0]);
    if (/收藏|标本|摆件/.test(usageText)) tags.add("collect-display");
    if (/雕件|雕刻|印章/.test(usageText)) tags.add("carving-ornament");
    if (/低碰撞|吊坠、耳饰|耳饰和低碰撞|不宜.*活动戒指/.test(usageText)) tags.add("low-impact");
    if (/学习|观察|识别/.test(usageText)) tags.add("learning-identification");
    if (hardnessValue >= 7
      && /戒指|手镯|手链|日常佩戴/.test(usageText)
      && !/低碰撞|解理|脆|不宜/.test(usageText)) {
      tags.add("daily-wear");
    }
    if (unprofiled) {
      tags.add("collect-display");
      tags.add("learning-identification");
      if (/玉石|印章石|装饰|雕刻|雕件|摆件/.test(materialText)) tags.add("carving-ornament");
      if ((hardnessValue > 0 && hardnessValue <= 6.5) || /解理|脆|多孔|含水|易磨|易崩/.test(materialText)) {
        tags.add("low-impact");
      } else if (hardnessValue >= 7 && /宝石|珠宝|饰品/.test(materialText)) {
        tags.add("daily-wear");
      }
    }
    tags.add("learning-identification");
    if (/平安|守护|护身|保佑|避邪|护航|长寿/.test(folkText)) tags.add("folk-protection");
    if (/招财|聚财|财富|招福|守财|纳福/.test(folkText)) tags.add("folk-wealth");
    if (/爱情|人缘|桃花|感情|婚姻|亲密关系|友爱/.test(folkText)) tags.add("folk-love");
    if (/学业|事业|工作|贵人|决策|成功|行动力/.test(folkText)) tags.add("folk-career");
    return [...tags].filter(id => purposeIds.has(id));
  }

  const qualityStyleGroups = {
    jade: ["jadeite", "nephrite", "black-jade"],
    patterned: [
      "agate", "chalcedony", "aventurine-quartz", "jasper", "chrysoprase",
      "green-jasper", "bloodstone", "carnelian", "nanhong-agate", "onyx", "blue-lace-agate"
    ],
    optical: [
      "opal", "black-opal", "moonstone", "alexandrite", "sunstone", "iolite", "kunzite",
      "quartz-rose", "labradorite", "tiger-eye", "chrysoberyl", "demantoid-garnet",
      "fire-agate"
    ],
    ornamental: [
      "turquoise", "lapis-lazuli", "dushan-jade", "serpentine-jade", "quartzite-jade",
      "obsidian", "malachite", "chrysocolla", "amazonite", "chicken-blood-stone",
      "shoushan-stone", "sodalite", "rhodochrosite", "smithsonite", "hydrogrossular", "prehnite",
      "charoite", "larimar", "variscite", "rhodonite", "sugilite", "howlite"
    ],
    faceted: [
      "rock-crystal", "amethyst", "citrine", "emerald", "aquamarine", "ruby",
      "sapphire", "garnet", "tourmaline", "peridot", "topaz", "diamond", "spinel",
      "zircon", "tanzanite", "morganite", "ametrine", "purple-fluorite", "tsavorite-garnet",
      "kyanite", "diopside", "apatite", "titanite", "andalusite", "scapolite",
      "danburite", "euclase", "phenakite"
    ],
    organic: ["amber", "coral", "shell-pearls"],
    pearl: ["pearl"],
    specimen: ["black-tourmaline", "petrified-wood", "moldavite"],
    simulant: ["moissanite", "cubic-zirconia"],
    tradeName: ["yellow-dragon-jade", "beijing-white-jade"],
  };
  const qualityStyleById = Object.fromEntries(
    Object.entries(qualityStyleGroups).flatMap(([style, ids]) => ids.map(id => [id, style]))
  );
  const qualityStyleDetails = {
    jade: {
      focusLabel: "颜色、质地与整体协调",
      signatureLabel: "细度、结构与透光",
      stateLabel: "结构、绺裂与表面状态",
      signatureObserve: "按具体玉种观察颗粒或纤维结构、光泽与透光表现；细腻度和颜色分布与器形协调，通常更显材料特点。",
      signatureCaution: "颜色、细度和透光表现要结合器形、工艺与用途一起看。",
      craftObserve: "器形比例、雕工和抛光能呈现材料特征，边缘与佩戴或摆放方式相适配。",
      craftCaution: "检查薄弱位、贯穿裂、缺口和镶口松动，再按佩戴或摆放用途选择。"
    },
    patterned: {
      focusLabel: "颜色、纹带与图案",
      signatureLabel: "纹理、透光与表面",
      stateLabel: "纹带、裂隙与表面状态",
      signatureObserve: "纹带、斑纹或内部闪光层次清楚，并与切面、珠型或雕件构图相称，能呈现本品种的图案特色。",
      signatureCaution: "查看裂隙、孔道和表面是否有颜色堆积，并确认染色、浸渍等处理信息。",
      craftObserve: "切面、珠型或雕刻顺着纹带与图案布局，抛光平顺且整体完整。",
      craftCaution: "检查孔道、边缘和裂隙；染色或涂层材料需按对应方式养护。"
    },
    optical: {
      focusLabel: "颜色与特殊光学效应",
      signatureLabel: "光效、方向与切磨",
      stateLabel: "光效呈现与表面完整度",
      signatureObserve: "在适合的光源和角度下，变彩、晕彩、猫眼、星光、砂金或变色表现清楚，切磨方向能有效呈现该效应。",
      signatureCaution: "转动样品观察光效的位置与移动，再检查切面、弧面和表面状态。",
      craftObserve: "切磨方向、弧面高度或刻面布局有利于呈现预期光效，正面观赏与转动观察都自然。",
      craftCaution: "留意光效偏离正面、暗区明显、弧面不对称和表面磨损。"
    },
    ornamental: {
      focusLabel: "颜色、纹理与观赏性",
      signatureLabel: "质地、图案与抛光",
      stateLabel: "纹理、基质与整体完整度",
      signatureObserve: "颜色、基质、脉纹或共生图案彼此协调，表面处理能清楚展现材料的自然纹理和预期器形。",
      signatureCaution: "记录纹理、颜色和伴生底材的分布，并确认染色、浸渍、拼合等处理。",
      craftObserve: "造型、抛光与材料纹理相协调，成品或摆件整体完整且放置稳定。",
      craftCaution: "检查崩口、贯穿裂、修补痕迹和底座稳定性；软质或多孔材料注意防潮、防热和防化学品。"
    },
    faceted: {
      focusLabel: "颜色、净度与切磨表现",
      signatureLabel: "色彩、亮度与比例",
      stateLabel: "包体、裂隙与刻面状态",
      signatureObserve: "在中性光线和正面观察下，颜色或光学特征符合该品种特点，刻面亮度、对称性与整体比例协调。",
      signatureCaution: "检查暗区、中央发暗处、明显偏色和影响耐久的裂隙。",
      craftObserve: "刻面交接整齐、抛光均匀，比例和镶嵌方式适合预期佩戴或收藏用途。",
      craftCaution: "检查尖角、腰棱、崩口和镶口受力；有明显解理或裂隙的成品避免撞击。"
    },
    organic: {
      focusLabel: "色泽、内部特征与材料状态",
      signatureLabel: "表面、内部结构与形态",
      stateLabel: "表面、孔道与内部完整度",
      signatureObserve: "颜色、天然生长或内部特征清楚，表面与加工形态完整，并符合该有机材料的观赏或佩戴用途。",
      signatureCaution: "表面、孔道和连接处容易受磨损；有机材料需避开不耐受的热源与化学品。",
      craftObserve: "孔道、连接、雕刻或镶嵌牢固，表面状态适合该材料的预期佩戴或展示方式。",
      craftCaution: "查看孔道磨损、表面刮痕、黏接和修补，并按材料特性养护。"
    },
    pearl: {
      focusLabel: "光泽、珠层与表面",
      signatureLabel: "光泽、形状与匹配",
      stateLabel: "表面、珠孔与珠层状态",
      signatureObserve: "表面反射明亮清晰，珠层表现与预期用途相符；单颗或成串珍珠的形状、颜色和光泽协调。",
      signatureCaution: "观察表面瑕疵的位置与大小；珠层厚度可结合检测资料了解。",
      craftObserve: "钻孔、串联、扣头或镶嵌牢固，珠粒排列和匹配度符合成品设计。",
      craftCaution: "检查孔口磨损、松线、扣件和珠层擦伤；珍珠应避开香水、汗液、化妆品与热源。"
    },
    specimen: {
      focusLabel: "晶形、结构与标本观赏性",
      signatureLabel: "晶形、共生与展示",
      stateLabel: "晶体、表面与样品状态",
      signatureObserve: "典型晶形、集合体形态或共生关系清晰，样品能呈现该矿物的代表性特征且展示稳定。",
      signatureCaution: "分别记录天然晶面、采集断口、蚀刻纹和后期损伤，保持标本稳固展示。",
      craftObserve: "标本陈列稳定，关键晶面或代表性结构保存良好，共生关系可被清楚观察。",
      craftCaution: "晶尖、片状晶体和解理面容易受损，搬动与陈列时做好支撑。"
    },
    simulant: {
      focusLabel: "材料身份、外观与加工",
      signatureLabel: "切工、抛光与成品状态",
      stateLabel: "火彩、边棱与表面状态",
      signatureObserve: "在明确其为合成材料或仿钻材料后，再比较切磨对称、抛光、亮度、尺寸一致性和镶嵌质量。",
      signatureCaution: "按材料名称查看相应的颜色、切磨、抛光和成品信息。",
      craftObserve: "确认材料类别后，再看刻面一致性、抛光、边棱完整和镶嵌牢固度。",
      craftCaution: "留意磨损、崩口和镶嵌松动，并核对商品材料名称。"
    },
    tradeName: {
      focusLabel: "颜色、纹理与成品表现",
      signatureLabel: "颜色、纹理与材料组成",
      stateLabel: "纹理、裂隙与加工状态",
      signatureObserve: "颜色、纹理、完整度和加工表现与检测报告中的材料名称相符，成品描述清楚具体。",
      signatureCaution: "查看报告中的矿物或岩石名称，并记录颜色、纹理和加工状态。",
      craftObserve: "确认材料后，再比较器形、抛光或雕工是否呈现该材料的颜色和纹理特征。",
      craftCaution: "记录材料组成、加工状态和商业名称；雕工与抛光按成品用途观察。"
    },
  };

  function qualityDimensionsFor(gem, seed, learningCard) {
    const style = qualityStyleById[gem.id];
    const details = qualityStyleDetails[style];
    if (!details) throw new Error(`Missing quality profile style for ${gem.id}`);
    const cleanEnding = value => String(value || "").replace(/[。；;，,]+$/u, "");
    const bestSigns = qualityBestSignsById[gem.id] || [];
    const plainLanguage = value => String(value || "")
        .replace(/包体特征/gu, "内部特征")
        .replace(/内部包体/gu, "内部特征")
        .replace(/片状包体/gu, "片状物")
        .replace(/包体/gu, "内部特征")
        .replace(/“花园”/gu, "斑驳的内部纹理")
        .replace(/漏窗/gu, "中央发暗处")
        .replace(/基质/gu, "伴生底材")
        .replace(/俏色/gu, "按天然色块布局的雕刻")
        .replace(/共生关系/gu, "伴生矿物关系")
        .replace(/晶形/gu, "晶体外形")
        .replace(/内部特征产生的内部闪光/gu, "内部片状物产生的闪点");
    const defensiveQualityCopy = /GIA|CIA|不能仅凭|不能单独|不能替代|不能代替|不能确认|无法确认|不能证明|不代表|不等于|而非|与.{1,35}(?:区分|区别)|(?:区分|区别于).{1,35}|照片无法|外观相似|排除.{1,25}(?:材料|仿品)|不能把.{0,25}(?:套|当成|等同)|没有单一|无统一|不同.*差异很大/u;
    const qualityCautionsByStyle = {
      jade: [
        "留意色调发灰、颜色分布突兀或局部色差。",
        "查看颗粒或纤维粗细、透光变化和表面抛光是否均匀。",
        "重点检查贯穿裂、孔口崩损和薄弱雕刻部位。"
      ],
      patterned: [
        "查看颜色是否在裂隙或孔道集中，纹带有没有被切断。",
        "留意纹理周边的色料、表面坑点和透光不均。",
        "检查边缘、孔道及拼接处的磨损、开胶和缺口。"
      ],
      optical: [
        "留意暗区是否占据正面，颜色或光效是否明显偏离观赏面。",
        "查看光带是否居中、连续，转动时是否在多个角度清楚可见。",
        "检查切磨方向、弧面轮廓、表面划痕和边缘缺口。"
      ],
      ornamental: [
        "查看颜色、斑块与纹理是否协调，主体图案是否清楚。",
        "留意裂隙、孔洞或伴生部分对图案连续性的影响。",
        "检查修补、补胶、表面涂层及摆放稳定性。"
      ],
      faceted: [
        "留意颜色发灰、正面暗区和明显色带。",
        "查看肉眼可见裂隙、深色内部特征及雾感对亮度的影响。",
        "检查尖角、腰棱、刻面交接和镶嵌受力位置。"
      ],
      organic: [
        "查看表面颜色与光泽是否均匀，有无异常斑驳或沉积。",
        "检查生长纹、内部特征、裂口、孔洞及黏接痕迹。",
        "留意珠孔磨损、连接松动和表层脱落。"
      ],
      pearl: [
        "留意反光发散、局部暗哑和表面雾感。",
        "查看凹坑、擦痕及瑕疵是否集中在正面。",
        "检查珠孔、珠层边缘、串线和扣件状态。"
      ],
      specimen: [
        "查看晶体外形、颜色和伴生部分是否清楚完整。",
        "留意晶面缺损、粉化、修整痕迹和固定位置。",
        "重点检查晶尖、易裂面、底座和陈列支撑。"
      ],
      simulant: [
        "查看颜色是否均匀，表面有无覆层、气泡或流纹。",
        "留意刻面亮度、刻面一致性和抛光划痕。",
        "检查尖角磨损、镶嵌松动和表面磨耗。"
      ],
      tradeName: [
        "查看颜色、纹理和成品状态是否与报告描述相符。",
        "留意粗颗粒、裂隙、填充痕迹和表面涂层。",
        "核对报告名称、处理记录和手中样品的信息。"
      ],
      treated: [
        "查看颜色是否在裂隙、孔道或边缘集中。",
        "留意染色均匀度、纹带清晰度和表面沉积。",
        "检查磨损处的颜色变化、掉色和抛光状态。"
      ]
    };
    const cautionFor = (value, index, observe = "") => {
      const text = plainLanguage(value);
      return text && !defensiveQualityCopy.test(text) && text !== observe
        ? text
        : qualityCautionsByStyle[style]?.[index] || qualityCautionsByStyle.ornamental[index];
    };
    const identityObserve = {
      specimen: "矿物名称和伴生矿物记录清楚；清洗、粘接、修补或表面处理范围有说明。",
      simulant: gem.id === "moissanite"
        ? "材料名称准确标为莫桑石（合成碳化硅），并披露颜色或表面处理及成品信息。"
        : "材料名称准确标为立方氧化锆（实验室合成材料），并披露颜色或表面处理及成品信息。",
      tradeName: "检测资料明确写出可确认的矿物/岩石名称；商业名称与材料鉴定结论分开记录。",
      treated: "基材、染色状态和后续处理如实披露；实物描述与销售名称及检测资料一致。"
    }[style];

    const commonDimensions = [
      {
        label: "完整度、工艺与用途",
        observeLabel: "较佳表现",
        evidence: "结合器形检查",
        observe: seed.qualityCraftObserve || `${details.craftObserve}${seed.use ? ` ${seed.use}` : ""}`,
        howTo: style === "specimen"
          ? "查看主要晶面、底部固定、修补或胶结处，并核对标本标签。"
          : "在自然白光下看正面和边缘，轻转样品检查裂隙、磨损、孔口、棱角与镶嵌牢固度。",
        caution: seed.qualityCraftCaution || details.craftCaution
      },
      {
        label: "材料身份与处理披露",
        observeLabel: "较佳表现",
        evidence: "核对对应资料",
        observe: seed.qualityIdentityObserve || identityObserve || `材料名称清楚；如涉及${(gem.treatments || []).join("、") || "优化或处理"}，有明确披露，报告描述与实物对应。`,
        howTo: style === "specimen"
          ? "核对矿物标签、采集或来源记录，并询问是否清洗、粘接、修补或做过表面处理。"
          : "核对正规检测报告的名称、处理结论和编号，并确认报告描述对应手上这件实物。",
        caution: style === "specimen"
          ? "标本名称、采集信息和清洗、粘接或修补记录应与样品对应。"
          : seed.qualityIdentityCaution || `材料名称与${(gem.treatments || []).slice(0, 2).join("、") || "加工处理"}信息应有清楚记录。`
      }
    ];

    if (learningCard?.dimensions?.length) {
      return [
        ...learningCard.dimensions.map((item, index) => ({
          label: item.label,
          observeLabel: "较佳表现",
          evidence: "品质观察",
          observe: plainLanguage(bestSigns[index] || item.focus),
          howTo: plainLanguage(gem.safeObservation?.[index] || item.focus),
          caution: cautionFor(item.caution, index, plainLanguage(bestSigns[index] || item.focus))
        })),
        ...commonDimensions.map(item => ({
          ...item,
          observe: plainLanguage(item.observe),
          caution: item.caution
        }))
      ];
    }

    const firstClue = gem.visualClues?.[0] || "颜色、结构和表面特征";
    const secondClue = gem.visualClues?.[1] || "切磨、抛光或标本形态";
    const inspection = (gem.safeObservation || []).slice(0, 3).join("；");
    const unsafeTest = (gem.unsafeTests || [])[0];
    return [
      {
        label: details.focusLabel,
        observeLabel: "较佳表现",
        evidence: "按本品种比较",
        observe: plainLanguage(bestSigns[0] || cleanEnding(seed.qualityFocus || "结合本品种特征与用途综合观察")),
        howTo: plainLanguage(gem.safeObservation?.[0] || firstClue),
        caution: cautionFor("", 0)
      },
      {
        label: details.signatureLabel,
        observeLabel: "较佳表现",
        evidence: "特征与成因",
        observe: plainLanguage(bestSigns[1] || details.signatureObserve),
        howTo: plainLanguage(gem.safeObservation?.[1] || `${details.signatureObserve} 重点看：${cleanEnding(firstClue)}。`),
        caution: cautionFor(details.signatureCaution, 1, plainLanguage(bestSigns[1] || details.signatureObserve))
      },
      {
        label: details.stateLabel,
        observeLabel: "较佳表现",
        evidence: "外观与完整度",
        observe: plainLanguage(bestSigns[2] || `表面、边缘或晶体关键部位完整，预期观赏特征清楚；${cleanEnding(secondClue)}。`),
        howTo: plainLanguage(gem.safeObservation?.[2] || `在稳定白光下多方向观察，并记录裂隙、磨损和加工痕迹。${inspection ? ` ${inspection}` : ""}`),
        caution: cautionFor(`${details.craftCaution}${unsafeTest ? ` 避免${unsafeTest}。` : ""}`, 2)
      },
      ...commonDimensions.map(item => ({
        ...item,
        observe: plainLanguage(item.observe),
        caution: item.caution
      }))
    ];
  }

  function buildProfile(gem, seed = {}) {
    const qualityFocus = seed.qualityFocus || "结合具体材料观察颜色、纹理或光学效应、净度、完整性、尺寸、工艺和处理状态。";
    const use = seed.use || `适合${gem.category?.split(" / ")[0] || "饰品"}、标本或摆件；佩戴时应避免碰撞、强热和化学品。`;
    const summary = seed.summary || `${gem.name}的基础认识应结合成分、结构、颜色、产状、用途和常见处理方式学习。`;
    const folk = seed.folk || "民间常将其与平安、顺遂和美好愿望联系起来，具体说法因地区和家庭传统而异。";
    const identificationProfile = identificationProfilesById[gem.id];
    const identificationPoints = [...new Set(gem.identificationPoints || [])]
      .filter(point => !/GIA|CIA/i.test(point))
      .slice(0, 3);
    const observationClues = identificationProfile?.observations || (gem.visualClues || [])
      .map(point => String(point)
        .replace(/(?:，|；)?(?:不能仅凭|不能单独|不能替代|不能代替|不能确认|无法确认|不能证明|不代表|不等于|与[^，；。]{1,35}(?:区分|区别|不同)|(?:区分|区别于)[^，；。]{1,35}|外观相似[^，；。]{0,25})[^，；。]*[，；。]?$/u, "")
        .trim())
      .filter(Boolean)
      .slice(0, 3);
    return {
      knowledgeSummary: summary,
      knowledgePoints: [
        `常见使用：${use}`
      ],
      observationClues: observationClues.length
        ? observationClues
        : (gem.safeObservation || []).slice(0, 2),
      identificationBasics: identificationPoints.length
        ? identificationPoints
        : (gem.safeObservation || []).slice(0, 2),
      qualityGuideIntro: `${gem.name}的品相从颜色、纹理或光效、完整度和工艺观察，并结合佩戴或收藏用途比较。`,
      purposeTags: Array.isArray(seed.purposeTags)
        ? seed.purposeTags.filter(id => purposeIds.has(id))
        : inferPurposeTags(gem, seed.use || gem.use || "", seed.folk || "", !Object.keys(seed).length),
      wearingLore: [
        `怎么佩戴：${use}`,
        `民间寓意：${folk}`,
        "说明：招财、辟邪、转运、疗愈等属于民间文化表达和个人愿望，没有被宝石学或医学证明的确定功效。"
      ]
    };
  }

  const database = global.LINGYU_GEMSTONE_DATABASE;
  if (!database || !Array.isArray(database.gemstones)) return;

  const identificationProfilesById = {
    "dushan-jade": {
      observations: ["独山玉常见白、绿、紫、黄等颜色交错，细粒质地中可见不同矿物组成的斑块。", "观察颜色斑块与整体纹理是否自然衔接，并查看裂隙、孔口和雕刻薄处。"],
      points: ["独山玉由多种矿物共同组成，检测时会核对矿物种类和组合比例。", "斜长石、黝帘石等矿物的组合与分布，是确认材料组成的重要依据。", "颜色和斑块可作观察线索，矿物组成以检测结果为准。"]
    },
    "serpentine-jade": {
      observations: ["蛇纹石质玉常见黄绿至浅绿、蜡状光泽和细密或斑杂结构。", "多看自然光下的颜色层次、抛光面和裂隙；手感轻重只能作为很弱的参考。"],
      points: ["“岫玉”常用于蛇纹石质玉，具体检测名称应以样品的矿物组成表述。", "蛇纹石、透闪石、石英和方解石材料的外观可能接近，结构与物性数据需要合看。", "实验室可结合折射率、密度、显微结构和光谱核对矿物组成。"]
    },
    "quartzite-jade": {
      observations: ["石英岩玉由细小石英颗粒组成，放大观察常见颗粒状、拼接状结构。", "颜色可来自天然矿物，也可能经过染色；查看裂隙、孔隙和钻孔周围是否有色料集中。"],
      points: ["“石英岩玉”通常指以石英颗粒为主的集合体，颜色和纹理随样品变化。", "石英颗粒结构和约 2.65 的相对密度可作为实验室核对项目，集合体测值可能有变化。", "查看裂隙、孔隙和钻孔周围的色料分布，并核对染色、浸渍或表面涂层记录。"]
    },
    chalcedony: {
      observations: ["玉髓由肉眼难以分辨的细小石英晶体组成，常呈半透明、蜡状光泽。", "留意颜色带、裂隙和孔隙处的色料聚集；玛瑙是具有明显纹带的一类玉髓材料。"],
      points: ["玉髓与玛瑙都属于微晶质石英材料，名称常按纹带等外观特征使用。", "玻璃、染色材料和石英岩可能模仿颜色，内部结构与折射率数据更有区分力。", "实验室会结合折射率、相对密度、放大观察及光谱检查材料和染色情况。"]
    },
    "aventurine-quartz": {
      observations: ["东陵石转动时可见细小闪点，常由石英内部片状矿物包体反光形成。", "观察闪点是否分布在材料内部，并同时查看底色、颗粒感和抛光完整度。"],
      points: ["东陵石是含片状包体的石英质材料，闪光来源和分布会随样品而变化。", "日光石的闪光常与长石内部片状包体有关；玻璃仿品的闪点外观相近但结构不同。", "显微观察包体形态，并结合折射率、相对密度和成分分析核对材料。"]
    },
    obsidian: {
      observations: ["黑曜石是快速冷却形成的天然火山玻璃，常见玻璃光泽和弧形断口纹。", "雪花、金曜或彩虹等外观来自内部结构或光学反射，转动样品观察其位置和连续性。"],
      points: ["黑曜石没有晶体颗粒结构；天然玻璃也可能含气泡或流动纹，单个气泡不能判真假。", "黑玻璃、黑碧玺和煤玉的颜色接近，重量、光泽和内部结构需综合查看。", "实验室可结合折射率、密度、显微结构和成分分析确认玻璃材料及其来源类别。"]
    },
    "tiger-eye": {
      observations: ["虎睛石的猫眼光带来自平行排列的纤维状结构，转动时亮带会横向移动。", "弧面切磨应让光带清楚并大致居中；检查光带是否来自表面涂层或印刷效果。"],
      points: ["光带的连续性、方向和移动方式是虎睛石的重要观察线索。", "石英猫眼、玻璃猫眼可呈相似亮带，放大看内部纤维或气泡等结构线索。", "显微观察纤维方向，并结合折射率、密度和材料成分核对石英质基体。"]
    },
    malachite: {
      observations: ["孔雀石常见深浅绿色相间的条带、同心环或纤维状纹理，抛光后图案清楚。", "查看纹带是否贯穿材料内部，边缘、裂隙和孔口有无颜色堆积或补胶。"],
      points: ["孔雀石是含铜碳酸盐矿物，天然色带常呈弯曲、层叠或同心变化。", "染色碧玉、绿色玻璃和蛇纹石材料可以模仿颜色，纹理与成分数据更关键。", "实验室可用拉曼光谱等方法核对矿物成分；不要自行用酸液测试。"]
    },
    chrysocolla: {
      observations: ["硅孔雀石常呈蓝绿至青绿色块状，常与石英、孔雀石等矿物共生。", "观察蓝绿色区域、基质和孔隙的关系；松散或多孔样品可能经过树脂稳定处理。"],
      points: ["硅孔雀石的成分和结构变化较大，部分商品是多种矿物组成的集合体。", "绿松石、染色豪莱石和孔雀石外观可能相近，颜色不能替代成分确认。", "实验室会结合显微结构、密度和光谱核对主体矿物及浸渍处理。"]
    },
    labradorite: {
      observations: ["拉长石转动时会出现蓝、绿或金色闪光，闪光方向与内部层状结构有关。", "将光源和样品缓慢转动，观察闪光是否在材料内部移动；同时检查表面涂层和裂纹。"],
      points: ["拉长石属于斜长石，内部细密层片可产生随角度变化的彩色闪光。", "月光石呈现的光带通常较柔和，欧泊变彩则以色斑变化为特征，现象表现不同。", "实验室可结合折射率、双折射和显微结构核对长石种类及表面处理。"]
    },
    amazonite: {
      observations: ["天河石是绿色至蓝绿色微斜长石，常见白色条纹或格状纹理。", "观察颜色是否集中在裂隙、孔口或磨损处，并检查内部白色条纹的分布。"],
      points: ["天河石的底色和白色纹理与长石内部结构有关，天然材料常有不同程度的色彩变化。", "绿松石、绿色玻璃和其他长石可能外观接近，内部结构是重要核对内容。", "实验室可通过折射率、双折射、显微结构和成分分析确认微斜长石。"]
    },
    jasper: {
      observations: ["碧玉通常是不透明的微晶质石英材料，常见斑纹、色带或景观状图案。", "按整块材料观察图案布局、颜色过渡和抛光状态，并查看孔口与裂隙是否有染料聚集。"],
      points: ["“碧玉”常用于描述不透明、有图案的石英质材料，颜色和纹理并不固定。", "染色石材、陶瓷和其他石英质材料可模仿图案，需查看内部颗粒和材料组成。", "实验室可结合折射率、相对密度、显微观察和光谱确认石英质结构及处理。"]
    },
    chrysoprase: {
      observations: ["绿玉髓常呈苹果绿至黄绿色半透明外观，颜色通常来自微量镍。", "观察颜色在表面、裂隙和孔隙中的分布，检查是否有明显色料聚集。"],
      points: ["绿玉髓属于玉髓材料，常见绿色与微量镍有关。", "检查半透明质感、石英质结构和颜色在裂隙、孔隙中的分布。", "实验室结合折射率、光谱和显微结构确认石英质基体及颜色处理。"]
    },
    "yellow-dragon-jade": {
      observations: ["黄龙玉常见黄、橙黄至红色调，主体多为石英质集合体，质地可从半透明到不透明。", "观察颜色分布、内部颗粒或纹理、裂隙及抛光面，并核对报告写明的具体材料名称。"],
      points: ["黄龙玉是商品和地方使用的名称，具体样品的矿物组成应以检测报告为准。", "黄水晶、黄玉髓和染色石英质材料都可能出现相近色调。", "实验室通过折射率、相对密度、显微结构和光谱核对主体材料与染色情况。"]
    },
    "chicken-blood-stone": {
      observations: ["鸡血石常见红色辰砂斑块分布在浅色或深色基质中，红色形态和基质共同构成观赏效果。", "观察红色斑块与基质是否连贯，检查裂隙、边缘、雕刻薄处有无补色或修补。"],
      points: ["鸡血石是印章石类材料，基质矿物和辰砂含量会因样品而异。", "红色碧玉、染色大理岩和树脂仿品可模仿颜色或斑块。", "实验室可通过矿物成分分析确认辰砂与基质；不要刻划或打磨，以免产生含汞粉尘。"]
    },
    "shoushan-stone": {
      observations: ["寿山石涵盖多种细粒印章石材料，常见柔和蜡状光泽、色带或细密纹理。", "观察颜色、纹理、透明感和雕刻细部，并检查是否有补胶、上蜡或表面涂层。"],
      points: ["寿山石是材料类别和产地文化名称，具体矿物组成随品种而变化。", "石英质材料、蜡或树脂仿品可模拟部分外观，需结合内部结构观察。", "高价值样品应由实验室确认具体矿物组成，并核对产地或品种承诺的依据。"]
    },
    coral: {
      observations: ["珊瑚珠宝材料来自珊瑚骨骼，常见枝状生长纹、纵向细纹或细密孔隙。", "查看孔口、断面和裂隙的颜色是否一致，注意染料、填充物和拼接接缝。"],
      points: ["珊瑚材料可呈不同颜色和骨骼结构，检测名称应对应实际材料种类。", "放大观察枝状生长纹、细孔和断面结构，并查看孔口处的颜色与表面层。", "实验室可结合显微结构和光谱确认材料，并检查染色、填充或涂层。"]
    },
    "shell-pearls": {
      observations: ["砗磲是大型贝类的壳质材料，常见乳白色、层状结构和弧形生长纹。", "观察横截面、珠孔和表面层次，检查涂层是否起皮、磨损或在孔口聚集。"],
      points: ["砗磲壳以碳酸钙和有机质为主，壳层纹理可帮助观察材料结构。", "查看珠孔、断面和表层的层状纹理，并留意涂层磨损或起皮。", "实验室通过显微结构与成分分析确认贝壳材料及漂白、染色或涂层情况。"]
    },
    moissanite: {
      observations: ["莫桑石是实验室培育的碳化硅宝石，常有明亮火彩，刻面转动时可见刻面边缘重影。", "观察重影和火彩只作学习线索；戒镶遮挡较多时应查看专业报告。"],
      points: ["莫桑石是有明确材料名称的合成宝石，不等同于钻石，也不应只写成“仿品”。", "双折射、折射率和热学性质有助于专业鉴别；普通钻石笔可能无法可靠区分。", "购买时核对报告上的材料名称、合成属性、重量和实物对应关系。"]
    },
    "cubic-zirconia": {
      observations: ["立方氧化锆是人工合成材料，可制成多种颜色和透明度，常用于首饰镶嵌。", "颜色、火彩和刻面工艺反映成品外观，不代表天然矿物身份或贵金属材质。"],
      points: ["立方氧化锆的成分是氧化锆，晶体结构为立方结构，和矿物锆石不是同一种材料。", "其较高密度和光学性质可帮助专业人员与钻石、莫桑石等区分。", "购买描述应明确写出“立方氧化锆”，不要以“锆石”代替。"]
    },
    "purple-fluorite": {
      observations: ["紫色萤石常见颜色分带、立方晶形和清楚的解理面，硬度较低。", "观察刻面边缘、棱角和表面划痕；佩戴时注意避免与较硬宝石摩擦。"],
      points: ["萤石由氟化钙组成，晶体常见立方形；成品中的解理和内部结构可辅助观察。", "紫水晶、紫色尖晶石和玻璃可能颜色相近，颜色深浅不能单独定名。", "实验室通过折射率、相对密度、偏光和光谱等数据确认材料。"]
    },
    "tsavorite-garnet": {
      observations: ["沙弗莱石是绿色钙铝榴石，色调常鲜明，透明刻面可呈明亮反光。", "观察正面颜色是否均匀悦目、刻面是否明亮，并检查裂隙和尖角完整度。"],
      points: ["石榴石为等轴晶系，通常不呈明显双折射；沙弗莱石的颜色来自微量元素。", "祖母绿和绿色碧玺颜色相近，内部包体、光学数据和成分共同帮助确认。", "实验室可结合折射率、密度、光谱和包体特征确认钙铝榴石品种。"]
    },
    "demantoid-garnet": {
      observations: ["翠榴石是绿色钙铁榴石，色散强，切磨合适时可出现鲜明彩色火光。", "部分样品有细长弯曲包体；这类包体是观察特征之一，不是每颗都有的必备标记。"],
      points: ["翠榴石属于石榴石，亮丽火彩来自较强色散与切磨共同作用。", "橄榄石、沙弗莱石和绿色玻璃会造成外观混淆，包体形态也有差异。", "实验室结合折射率、密度、光谱和内部包体核对具体石榴石种类。"]
    },
    chrysoberyl: {
      observations: ["金绿宝石常见黄绿至金黄色；部分样品可呈猫眼光带或变色现象。", "猫眼成品缓慢转动时亮带应随角度移动；普通刻面石则观察颜色和刻面完整度。"],
      points: ["猫眼或变色是金绿宝石部分品种的光学表现，不是所有金绿宝石都具备。", "橄榄石、石英猫眼和玻璃可有相近颜色或光带，材料结构需进一步核对。", "实验室结合折射率、密度、光谱和包体特征确认金绿宝石及其特殊效应。"]
    },
    kyanite: {
      observations: ["蓝晶石常呈蓝色刀片状晶体，颜色可随观察方向改变，晶体有明显解理。", "成品查看边角和裂隙；蓝晶石硬度随方向变化，不能用划刻来验证。"],
      points: ["蓝晶石、红柱石和矽线石化学成分相同但晶体结构不同。", "蓝宝石、堇青石和蓝色玻璃外观相近，光学性质和晶体结构是关键依据。", "实验室结合折射率、双折射和拉曼等方法核对矿物种类。"]
    },
    diopside: {
      observations: ["透辉石可呈绿色透明晶体或深色矿物标本，晶体常见柱状外形。", "透明成品观察色调、净度与棱角；标本可查看晶形和伴生矿物。"],
      points: ["透辉石属于辉石族，矿物晶体可见两组近直角交叉的解理方向。", "记录绿色色调、柱状晶形和包体特征，成品还要检查刻面和裂隙。", "实验室结合折射率、双折射、密度和成分分析确认透辉石。"]
    },
    "black-jade": {
      observations: ["“墨玉”用于描述深色玉石外观，常见商品可能是黑色软玉，也可能是其他深色材料。", "观察薄边透光、内部结构和颜色分布；先核对检测报告写明的具体材料名称。"],
      points: ["黑色是颜色描述，不能据此推定样品一定属于软玉或某一矿物。", "黑曜石、黑色玻璃和黑色软玉的光泽、结构与相对密度各有差异。", "交易时让报告明确写出具体材料；产地或“墨玉”品种承诺需另有相应依据。"]
    },
    "green-jasper": {
      observations: ["绿碧玉通常是不透明的绿色石英质材料，可见斑纹、色带或其他矿物包体。", "查看图案在侧边和孔口是否延续，并观察裂隙处有无颜色聚集。"],
      points: ["碧玉的纹理与颜色变化较大，绿色本身不代表固定矿物组成。", "翡翠、蛇纹石质玉和染色石材都可能呈绿色，颗粒结构有助于观察。", "实验室可结合折射率、相对密度和光谱核对石英质材料及处理情况。"]
    },
    sodalite: {
      observations: ["方钠石常见深蓝色与白色方解石脉共生，呈不透明粒状集合体。", "观察蓝色和白脉是否自然交错，并查看裂隙、孔口处有无染料浓集。"],
      points: ["方钠石是单一矿物，青金石则通常由多种矿物组成，内部组合不同。", "染色方解石、青金石和蓝色玻璃可能呈相近色调。", "实验室结合矿物组合、密度和拉曼光谱确认材料；单凭黄铁矿有无不能判定。"]
    },
    rhodochrosite: {
      observations: ["菱锰矿常见粉红至玫红色，块状材料可见白色条带或同心纹。", "检查表面划痕、裂隙和层间缺口；材料硬度较低，佩戴和清洁要温和。"],
      points: ["菱锰矿是碳酸盐矿物，粉色、条带和葡萄状集合体是常见外观。", "粉色方解石、染色玛瑙和玻璃可能相似，颜色不能代替成分检测。", "实验室可结合折射率、相对密度和拉曼光谱确认矿物；不要自行用酸液测试。"]
    },
    smithsonite: {
      observations: ["菱锌矿常见蓝绿、绿、黄或粉色，可呈葡萄状、钟乳状或细粒集合体。", "观察弧面轮廓和表面完整度；多孔或细裂隙样品要留意树脂稳定处理。"],
      points: ["菱锌矿是碳酸锌矿物，集合体形态和颜色随样品变化。", "绿松石、硅孔雀石和染色方解石可能有相似颜色。", "实验室可结合较高相对密度、光谱和成分分析确认材料。"]
    },
    "black-tourmaline": {
      observations: ["黑碧玺常见柱状晶体和沿长度方向的细槽，横截面可呈近三角形。", "标本先观察晶形与纵纹；切磨成品则查看颜色、裂隙和边角磨损。"],
      points: ["黑碧玺通常是富铁电气石，柱面纵纹是有用的外观线索。", "黑曜石、黑玻璃和软玉颜色接近，晶体结构、光学性质和密度不同。", "实验室结合折射率、双折射、密度和成分分析确认电气石种类。"]
    },
    prehnite: {
      observations: ["葡萄石常呈浅绿至黄绿色半透明集合体，常见葡萄状或肾状外形。", "弧面观察颜色、透明感和内部包体；检查细小裂隙与表面抛光。"],
      points: ["葡萄状是常见生长形态，并非每件成品都能保留。", "绿玉髓、绿色玻璃和蛇纹石质材料可能外观相近，内部结构和光泽有差异。", "实验室结合折射率、双折射、密度及光谱确认矿物身份。"]
    },
    "petrified-wood": {
      observations: ["硅化木保留木材的年轮、导管或纤维纹理，原有组织被二氧化硅等矿物替代保存。", "沿不同切面查看木纹是否延续，并检查裂隙、填补和抛光是否遮盖纹理。"],
      points: ["年轮和细胞结构是判断硅化木的重要线索，颜色可因矿物杂质而变化。", "普通木材、树脂仿品和带木纹的碧玉可能模仿外观。", "放大观察组织并结合矿物成分分析，确认硅化结构及是否经过填补。"]
    },
    "beijing-white-jade": {
      observations: ["京白玉常指白色细粒石英岩，整体呈白色至乳白色，颗粒感可在放大下观察。", "查看内部细粒结构、边缘透光和表面抛光，并核对报告中的材料名称。"],
      points: ["“京白玉”是商品名称，常见主体为石英质岩石，报告应写出可检测的材料类别。", "软玉、大理岩和玻璃也可呈白色，内部颗粒与光学性质不同。", "实验室可结合折射率、相对密度、放大观察和光谱核对石英质组成。"]
    }
  };

  const imitationNames = {
    "aventurine-glass": "砂金玻璃",
    "black-glass": "黑色玻璃",
    "blue-glass": "蓝色玻璃",
    "calcite": "方解石",
    "cat-eye-quartz": "石英猫眼",
    "ceramic": "陶瓷",
    "dyed-agate": "染色玛瑙",
    "dyed-bone": "染色骨质材料",
    "dyed-calcite": "染色方解石",
    "dyed-chalcedony": "染色玉髓",
    "dyed-howlite": "染色豪莱石",
    "dyed-jasper": "染色碧玉",
    "dyed-marble": "染色大理岩",
    "dyed-stone": "染色石材",
    "glass-cat-eye": "玻璃猫眼",
    "green-glass": "绿色玻璃",
    "green-tourmaline": "绿色碧玺",
    "glass": "玻璃",
    "iridescent-glass": "虹彩玻璃",
    "jet": "煤玉",
    "marble": "大理岩",
    "microcline": "微斜长石",
    "nephrite": "软玉",
    "pink-calcite": "粉色方解石",
    "pink-glass": "粉色玻璃",
    "purple-spinel": "紫色尖晶石",
    "quartz-cat-eye": "石英猫眼",
    "red-jasper": "红色碧玉",
    "red-coral-imitation": "珊瑚仿制材料",
    "resin": "树脂",
    "sapphire": "蓝宝石",
    "serpentine-jade": "蛇纹石质玉",
    "tsavorite-garnet": "沙弗莱石",
    "wax": "蜡质材料",
    "wood": "木材"
  };

  const treatmentProfilesById = {
    "dushan-jade": ["部分样品可能染色或浸渍，需核对具体检测记录。", "上蜡和抛光属于表面加工，应与漂白充填等处理分别记录。"],
    "serpentine-jade": ["可见染色、浸蜡或树脂浸渍，处理情况以对应样品检测为准。"],
    "quartzite-jade": ["常见关注项为染色、聚合物浸渍和表面涂层。", "检查裂隙、孔口和磨损边缘的颜色是否集中。"],
    chalcedony: ["可见染色或浸渍处理；裂隙和孔隙处需重点查看。", "抛光、浸蜡等表面加工应与染色和充填分开说明。"],
    "aventurine-quartz": ["部分材料可能经过染色或表面处理；砂金玻璃应明确标注实际材质。"],
    obsidian: ["常规加工以切磨和抛光为主；如有涂层、拼合或颜色处理，应在商品说明中写明。"],
    "tiger-eye": ["部分成品可能染色或进行表面处理，核对颜色是否集中在裂隙和孔道。"],
    malachite: ["可见染色、树脂浸渍或压制复合材料，需分别注明。"],
    chrysocolla: ["多孔材料可能经过树脂浸渍或稳定处理；染色也应按样品披露。"],
    labradorite: ["常规加工以切磨和抛光为主；表面涂层或拼合材料须单独标注。"],
    amazonite: ["常规加工以切磨和抛光为主；如有染色、浸渍或表面涂层，应逐项披露。"],
    jasper: ["部分商品可能染色或浸渍；检查裂隙、孔口和磨损处的颜色变化。"],
    chrysoprase: ["可能出现染色或浸渍处理；颜色是否集中在孔隙和裂隙可作为询问线索。"],
    "yellow-dragon-jade": ["部分石英质材料可能染色或浸渍；具体成分和处理按样品报告记录。"],
    "chicken-blood-stone": ["可能涉及染色、树脂填充或复合制作；处理方式和基质材料应分别说明。"],
    "shoushan-stone": ["表面上蜡、浸油或树脂处理可能影响光泽和颜色；高价值样品核对材料及处理记录。"],
    coral: ["常见处理包括漂白、染色、填充或表面涂层；拼接和重组材料应注明。"],
    "shell-pearls": ["可见漂白、染色或表面涂层；检查珠孔、磨损处和表面层是否一致。"],
    moissanite: ["莫桑石本身为实验室培育材料；如有颜色涂层或其他后处理，应另行披露。"],
    "cubic-zirconia": ["颜色可在合成过程中形成；如有表面涂层或后续改色，应单独标注。"],
    "purple-fluorite": ["常规加工以切磨和抛光为主；颜色处理情况应按具体样品核对。"],
    "tsavorite-garnet": ["常规加工以切磨和抛光为主；若商家声明经过处理，应要求对应检测记录。"],
    "demantoid-garnet": ["翠榴石通常以切磨和抛光呈现天然绿色与火彩；商家如标注优化处理，应对应到具体样品。"],
    chrysoberyl: ["常规加工以切磨和抛光为主；猫眼或变色效果及处理状态按具体样品核实。"],
    kyanite: ["部分材料可能经过染色或浸渍；查看孔隙和裂隙处的颜色分布。"],
    diopside: ["常规加工以切磨和抛光为主；如有颜色处理或填充，应由销售方明确说明。"],
    "black-jade": ["“墨玉”涉及不同深色材料，先确认检测名称，再核对该材料对应的处理记录。"],
    "green-jasper": ["部分商品可能染色或浸渍；检查孔口、裂隙和磨损边缘的颜色变化。"],
    sodalite: ["可能出现染色或树脂稳定处理；蓝色材料应核对具体检测名称。"],
    rhodochrosite: ["多孔或裂隙较多的样品可能经过树脂浸渍或填充；具体情况需披露。"],
    smithsonite: ["多孔材料可能经过稳定化或树脂浸渍，也可能染色；按具体样品核对。"],
    "black-tourmaline": ["常规加工以切磨和抛光为主；如有表面涂层或填充，应在商品说明中注明。"],
    prehnite: ["常规加工以切磨和抛光为主；颜色或表面处理状态按具体样品核实。"],
    "petrified-wood": ["可能经过染色、树脂填充或稳定处理；检查裂隙、孔隙和表面修补处。"],
    "beijing-white-jade": ["部分石英岩材料可能染色或浸渍；报告应写清具体材料名称和处理结论。"]
  };

  function materialDisplayName(value) {
    const name = String(value || "");
    const knownGem = database.gemstones.find(gem => gem.id === name);
    if (knownGem) return knownGem.name;
    if (imitationNames[name]) return imitationNames[name];
    return name.replace(/-/g, " ");
  }

  const giaIndexUrl = "https://www.gia.edu/gem-encyclopedia";
  const thinSectionMethodRef = {
    name: "Open University OpenLearn — Minerals in thin section",
    url: "https://www.open.edu/openlearn/science-maths-technology/an-introduction-minerals-and-rocks-under-the-microscope/content-section-2.3.2"
  };
  database.gemstones.forEach(gem => {
    const identificationProfile = identificationProfilesById[gem.id];
    if (identificationProfile) {
      gem.identificationPoints = identificationProfile.points;
      gem.safeObservation = [
        `在中性白光下观察：${identificationProfile.observations[0]}`,
        `缓慢转动样品并查看：${identificationProfile.observations[1]}`,
        "用10倍放大镜查看颗粒、包体、裂隙、孔口和表面痕迹；记录观察结果，不做破坏性测试。"
      ];
    }
    if (treatmentProfilesById[gem.id]) gem.treatments = treatmentProfilesById[gem.id];
    gem.commonImitations = (gem.commonImitations || []).map(materialDisplayName);
    Object.assign(gem, buildProfile(gem, seeds[gem.id]));
    const page = giaGemPages[gem.id] || null;
    const learningCard = giaLearningCards[gem.id] || null;
    const thinSectionNote = thinSectionNotesById[gem.id] || null;
    gem.thinSectionObservation = thinSectionNote
      ? {
          method: {
            plane: "单偏光（只使用一片偏光片）下看颜色、颗粒轮廓、解理（矿物容易沿固定方向裂开的性质）和边缘与背景的明暗反差；转动薄片时，留意颜色会不会变化。",
            crossed: "交叉偏光（两片偏光片的方向相互垂直）下，不少矿物会显示干涉色（光在晶体内分成两束、再相互干涉形成的颜色，不是材料本身的颜色；会随晶体方向和薄片厚度变化）；转动时可观察消光（晶体转到特定方向时变暗）和双晶（晶体内部有规律的重复生长结构）。石榴石等在交叉偏光下可能始终显暗，但单偏光下仍能透光。"
          },
          feature: thinSectionNote.text
        }
      : null;
    gem.qualityGuide = qualityDimensionsFor(gem, seeds[gem.id] || {}, learningCard);
    gem.giaLearningCard = learningCard
      ? {
          summary: learningCard.summary,
          dimensions: gem.qualityGuide.slice(0, learningCard.dimensions.length).map(item => ({
            label: item.label,
            focus: item.observe,
            caution: item.caution
          }))
        }
      : null;
    gem.qualityGuideFlow = [
      { title: "观察特征", text: qualityStyleDetails[qualityStyleById[gem.id]].focusLabel },
      { title: "检查状态", text: "完整度、表面与加工" },
      { title: "核实资料", text: "材料身份、处理与用途" }
    ];
    const sourceRefs = [
      ...(gem.sourceRefs || []),
      ...(learningCard?.source ? [learningCard.source] : []),
      ...(thinSectionNote
        ? [
            { name: "《透明矿物薄片鉴定手册》（常丽华等，地质出版社，2006）" },
            thinSectionMethodRef
          ]
        : [])
    ].map(source => (
      source.url === giaIndexUrl && !page
        ? { ...source, name: "GIA Gem Encyclopedia — 总览索引（非本材料专属词条）" }
        : source
    )).filter(source => !(page && source.url === giaIndexUrl));
    gem.giaReference = page;
    gem.giaEntryStatus = page
      ? "entry"
      : sourceRefs.some(source => source.url?.includes("gia.edu") && source.url !== giaIndexUrl)
        ? "article"
        : "not-listed";
    gem.sourceRefs = page
      ? [page, ...sourceRefs.filter(source => source.url !== page.url)]
      : sourceRefs;
  });
  database.purposeCatalog = purposeCatalog;
  database.meta.version = "0.17.7";
  database.meta.updatedAt = "2026-10-30";
  database.meta.contentLayers = [
    "基础认识：名称、类别、颜色、产地、形成与常见用途",
    "宝石学属性：成分、晶系、硬度、折射率和密度",
    "专业资料整理：各宝石档案配有逐品种观察要点与开放许可样图",
    "鉴定常识：观察线索、偏光显微镜薄片特征、混淆材料、处理状态与检测边界",
    "品质判断：按品种观察特征、完整度、工艺、材料身份与用途，不设跨品种统一等级",
    "佩戴文化：佩戴方式、民间寓意与非科学功效边界",
    "分类浏览：按使用场景、学习用途与民间寓意筛选"
  ];
})(window);
