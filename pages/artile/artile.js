// pages/artile/artile.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: ["生活垃圾分类制度实施方案", "中国关于垃圾分类的法律规定", "全国政协委员王济光：建议垃圾分类标准全国统一", "【垃圾分类科普知识】垃圾分类有哪些误区？"],
    info: ["国务院办公厅 2017年03月18日", "信达范文 2020-04-09 12:33:03", "05-24 14:01 人民日报社", "上海滨江森林公园 2018 - 09 - 07"],
    detail: ["生活垃圾分类制度实施方案\n国家发展改革委　住房城乡建设部\n随着经济社会发展和物质消费水平大幅提高，我国生活垃圾产生量迅速增长，环境隐患日益突出，已经成为新型城镇化发展的制约因素。遵循减量化、资源化、无害化的原则，实施生活垃圾分类，可以有效改善城乡环境，促进资源回收利用，加快“两型社会”建设，提高新型城镇化质量和生态文明建设水平。为切实推动生活垃圾分类，根据党中央、国务院有关工作部署，特制定以下方案。[1]\n一、总体要求\n      （一）指导思想。全面贯彻党的十八大和十八届三中、四中、五中、六中全会精神，深入贯彻习近平总书记系列重要讲话精神和治国理政新理念新思想新战略，统筹推进“五位一体”总体布局和协调推进“四个全面”战略布局，牢固树立和贯彻落实创新、协调、绿色、开放、共享的发展理念，加快建立分类投放、分类收集、分类运输、分类处理的垃圾处理系统，形成以法治为基础、政府推动、全民参与、城乡统筹、因地制宜的垃圾分类制度，努力提高垃圾分类制度覆盖范围，将生活垃圾分类作为推进绿色发展的重要举措，不断完善城市管理和服务，创造优良的人居环境。\n      （二）基本原则。\n      政府推动，全民参与。落实城市人民政府主体责任，强化公共机构和企业示范带头作用，引导居民逐步养成主动分类的习惯，形成全社会共同参与垃圾分类的良好氛围。\n      因地制宜，循序渐进。综合考虑各地气候特征、发展水平、生活习惯、垃圾成分等方面实际情况，合理确定实施路径，有序推进生活垃圾分类。\n      完善机制，创新发展。充分发挥市场作用，形成有效的激励约束机制。完善相关法律法规标准，加强技术创新，利用信息化手段提高垃圾分类效率。\n      协同推进，有效衔接。加强垃圾分类收集、运输、资源化利用和终端处置等环节的衔接，形成统一完整、能力适应、协同高效的全过程运行系统。\n      （三）主要目标。到2020年底，基本建立垃圾分类相关法律法规和标准体系，形成可复制、可推广的生活垃圾分类模式，在实施生活垃圾强制分类的城市，生活垃圾回收利用率达到35 % 以上。[1]\n二、部分范围内先行实施生活垃圾强制分类\n      （一）实施区域。2020年底前，在以下重点城市的城区范围内先行实施生活垃圾强制分类。\n      1.直辖市、省会城市和计划单列市。\number      2.住房城乡建设部等部门确定的第一批生活垃圾分类示范城市，包括：河北省邯郸市、江苏省苏州市、安徽省铜陵市、江西省宜春市、山东省泰安市、湖北省宜昌市、四川省广元市、四川省德阳市、西藏自治区日喀则市、陕西省咸阳市。\n      3.鼓励各省（区）结合实际，选择本地区具备条件的城市实施生活垃圾强制分类，国家生态文明试验区、各地新城新区应率先实施生活垃圾强制分类。\n      （二）主体范围。上述区域内的以下主体，负责对其产生的生活垃圾进行分类。\n      1.公共机构。包括党政机关，学校、科研、文化、出版、广播电视等事业单位，协会、学会、联合会等社团组织，车站、机场、码头、体育场馆、演出场馆等公共场所管理单位。\n      2.相关企业。包括宾馆、饭店、购物中心、超市、专业市场、农贸市场、农产品批发市场、商铺、商用写字楼等。\n      （三）强制分类要求。实施生活垃圾强制分类的城市要结合本地实际，于2017年底前制定出台办法，细化垃圾分类类别、品种、投放、收运、处置等方面要求；其中，必须将有害垃圾作为强制分类的类别之一，同时参照生活垃圾分类及其评价标准，再选择确定易腐垃圾、可回收物等强制分类的类别。未纳入分类的垃圾按现行办法处理。[1]\n1.有害垃圾。\n      （1）主要品种。包括：废电池（镉镍电池、氧化汞电池、铅蓄电池等），废荧光灯管（日光灯管、节能灯等），废温度计，废血压计，废药品及其包装物，废油漆、溶剂及其包装物，废杀虫剂、消毒剂及其包装物，废胶片及废相纸等。\n      （2）投放暂存。按照便利、快捷、安全原则，设立专门场所或容器，对不同品种的有害垃圾进行分类投放、收集、暂存，并在醒目位置设置有害垃圾标志。对列入《国家危险废物名录》（环境保护部令第39号）的品种，应按要求设置临时贮存场所。\n      （3）收运处置。根据有害垃圾的品种和产生数量，合理确定或约定收运频率。危险废物运输、处置应符合国家有关规定。鼓励骨干环保企业全过程统筹实施垃圾分类、收集、运输和处置；尚无终端处置设施的城市，应尽快建设完善。\n      2.易腐垃圾。\n      （1）主要品种。包括：相关单位食堂、宾馆、饭店等产生的餐厨垃圾，农贸市场、农产品批发市场产生的蔬菜瓜果垃圾、腐肉、肉碎骨、蛋壳、畜禽产品内脏等。\n      （2）投放暂存。设置专门容器单独投放，除农贸市场、农产品批发市场可设置敞开式容器外，其他场所原则上应采用密闭容器存放。餐厨垃圾可由专人清理，避免混入废餐具、塑料、饮料瓶罐、废纸等不利于后续处理的杂质，并做到“日产日清”。按规定建立台账制度（农贸市场、农产品批发市场除外），记录易腐垃圾的种类、数量、去向等。[1]\n      （3）收运处置。易腐垃圾应采用密闭专用车辆运送至专业单位处理，运输过程中应加强对泄露、遗撒和臭气的控制。相关部门要加强对餐厨垃圾运输、处理的监控。\n      3.可回收物。\n      （1）主要品种。包括：废纸，废塑料，废金属，废包装物，废旧纺织物，废弃电器电子产品，废玻璃，废纸塑铝复合包装等。\n      （2）投放暂存。根据可回收物的产生数量，设置容器或临时存储空间，实现单独分类、定点投放，必要时可设专人分拣打包。\n      （3）收运处置。可回收物产生主体可自行运送，也可联系再生资源回收利用企业上门收集，进行资源化处理。\n      三、引导居民自觉开展生活垃圾分类\n城市人民政府可结合实际制定居民生活垃圾分类指南，引导居民自觉、科学地开展生活垃圾分类。前述对有关单位和企业实施生活垃圾强制分类的城市，应选择不同类型的社区开展居民生活垃圾强制分类示范试点，并根据试点情况完善地方性法规，逐步扩大生活垃圾强制分类的实施范围。本方案发布前已制定地方性法规、对居民生活垃圾分类提出强制要求的，从其规定。\n      （一）单独投放有害垃圾。居民社区应通过设立宣传栏、垃圾分类督导员等方式，引导居民单独投放有害垃圾。针对家庭源有害垃圾数量少、投放频次低等特点，可在社区设立固定回收点或设置专门容器分类收集、独立储存有害垃圾，由居民自行定时投放，社区居委会、物业公司等负责管理，并委托专业单位定时集中收运。\n      （二）分类投放其他生活垃圾。根据本地实际情况，采取灵活多样、简便易行的分类方法。引导居民将“湿垃圾”（滤出水分后的厨余垃圾）与“干垃圾”分类收集、分类投放。有条件的地方可在居民社区设置专门设施对“湿垃圾”就地处理，或由环卫部门、专业企业采用专用车辆运至餐厨垃圾处理场所，做到“日产日清”。鼓励居民和社区对“干垃圾”深入分类，将可回收物交由再生资源回收利用企业收运和处置。有条件的地区可探索采取定时定点分类收运方式，引导居民将分类后的垃圾直接投入收运车辆，逐步减少固定垃圾桶。[1]\n四、加强生活垃圾分类配套体系建设\n      （一）建立与分类品种相配套的收运体系。完善垃圾分类相关标志，配备标志清晰的分类收集容器。改造城区内的垃圾房、转运站、压缩站等，适应和满足生活垃圾分类要求。更新老旧垃圾运输车辆，配备满足垃圾分类清运需求、密封性好、标志明显、节能环保的专用收运车辆。鼓励采用“车载桶装”等收运方式，避免垃圾分类投放后重新混合收运。建立符合环保要求、与分类需求相匹配的有害垃圾收运系统。\n      （二）建立与再生资源利用相协调的回收体系。健全再生资源回收利用网络，合理布局布点，提高建设标准，清理取缔违法占道、私搭乱建、不符合环境卫生要求的违规站点。推进垃圾收运系统与再生资源回收利用系统的衔接，建设兼具垃圾分类与再生资源回收功能的交投点和中转站。鼓励在公共机构、社区、企业等场所设置专门的分类回收设施。建立再生资源回收利用信息化平台，提供回收种类、交易价格、回收方式等信息。\n      （三）完善与垃圾分类相衔接的终端处理设施。加快危险废物处理设施建设，建立健全非工业源有害垃圾收运处理系统，确保分类后的有害垃圾得到安全处置。鼓励利用易腐垃圾生产工业油脂、生物柴油、饲料添加剂、土壤调理剂、沼气等，或与秸秆、粪便、污泥等联合处置。已开展餐厨垃圾处理试点的城市，要在稳定运营的基础上推动区域全覆盖。尚未建成餐厨（厨余）垃圾处理设施的城市，可暂不要求居民对厨余“湿垃圾”单独分类。严厉打击和防范“地沟油”生产流通。严禁将城镇生活垃圾直接用作肥料。加快培育大型龙头企业，推动再生资源规范化、专业化、清洁化处理和高值化利用。鼓励回收利用企业将再生资源送钢铁、有色、造纸、塑料加工等企业实现安全、环保利用。\n      （四）探索建立垃圾协同处置利用基地。统筹规划建设生活垃圾终端处理利用设施，积极探索建立集垃圾焚烧、餐厨垃圾资源化利用、再生资源回收利用、垃圾填埋、有害垃圾处置于一体的生活垃圾协同处置利用基地，安全化、清洁化、集约化、高效化配置相关设施，促进基地内各类基础设施共建共享，实现垃圾分类处理、资源利用、废物处置的无缝高效衔接，提高土地资源节约集约利用水平，缓解生态环境压力，降低“邻避”效应和社会稳定风险。[1]\n五、强化组织领导和工作保障\n      （一）加强组织领导。省级人民政府、国务院有关部门要加强对生活垃圾分类工作的指导，在生态文明先行示范区、卫生城市、环境保护模范城市、园林城市和全域旅游示范区等创建活动中，逐步将垃圾分类实施情况列为考核指标；因地制宜探索农村生活垃圾分类模式。实施生活垃圾强制分类的城市人民政府要切实承担主体责任，建立协调机制，研究解决重大问题，分工负责推进相关工作；要加强对生活垃圾强制分类实施情况的监督检查和工作考核，向社会公布考核结果，对不按要求进行分类的依法予以处罚。\n      （二）健全法律法规。加快完善生活垃圾分类方面的法律制度，推动相关城市出台地方性法规、规章，明确生活垃圾强制分类要求，依法推进生活垃圾强制分类。发布生活垃圾分类指导目录。完善生活垃圾分类及站点建设相关标准。\n      （三）完善支持政策。按照污染者付费原则，完善垃圾处理收费制度。发挥中央基建投资引导带动作用，采取投资补助、贷款贴息等方式，支持相关城市建设生活垃圾分类收运处理设施。严格落实国家对资源综合利用的税收优惠政策。地方财政应对垃圾分类收运处理系统的建设运行予以支持。\n      （四）创新体制机制。鼓励社会资本参与生活垃圾分类收集、运输和处理。积极探索特许经营、承包经营、租赁经营等方式，通过公开招标引入专业化服务公司。加快城市智慧环卫系统研发和建设，通过“互联网 +”等模式促进垃圾分类回收系统线上平台与线下物流实体相结合。逐步将生活垃圾强制分类主体纳入环境信用体系。推动建设一批以企业为主导的生活垃圾资源化产业技术创新战略联盟及技术研发基地，提升分类回收和处理水平。通过建立居民“绿色账户”、“环保档案”等方式，对正确分类投放垃圾的居民给予可兑换积分奖励。探索“社工 + 志愿者”等模式，推动企业和社会组织开展垃圾分类服务。\n      （五）动员社会参与。树立垃圾分类、人人有责的环保理念，积极开展多种形式的宣传教育，普及垃圾分类知识，引导公众从身边做起、从点滴做起。强化国民教育，着力提高全体学生的垃圾分类和资源环境意识。加快生活垃圾分类示范教育基地建设，开展垃圾分类收集专业知识和技能培训。建立垃圾分类督导员及志愿者队伍，引导公众分类投放。充分发挥新闻媒体的作用，报道垃圾分类工作实施情况和典型经验，形成良好社会舆论氛围。[1]\n方案解答\n出台背景\n　近年来，随着经济社会发展和物质消费水平提高，我国生活垃圾产生量迅速增长，环境隐患日益突出，已经成为新型城镇化发展的制约因素。2015年9月，中共中央、国务院印发《生态文明体制改革总体方案》，将制定垃圾分类制度列为一项重要改革任务，由我委与住房城乡建设部共同组织完成。2016年12月，习近平总书记主持召开的中央财经领导小组第十四次会议强调“从解决人民群众普遍关心的突出问题入手、推进全面小康社会建设”，提出“要加快建立分类投放、分类收集、分类运输、分类处理的垃圾处理系统，形成以法治为基础、政府推动、全民参与、城乡统筹、因地制宜的垃圾分类制度，努力提高垃圾分类制度覆盖范围”。推行生活垃圾分类，可以有效减轻清运压力和终端处理压力，改善城乡环境，促进资源回收利用，提高新型城镇化质量和生态文明建设水平，对于培养全社会资源环境意识，不断提升中华民族整体文明素质具有重要意义。\n      2016年初，我委会同住房城乡建设部启动《方案》编制工作，委托中咨公司、中国城建院、住建部环卫中心、杭州环境集团等单位开展专题调研和国内外资料收集，研究起草了《方案》初稿。在此基础上，多次征求专家学者、行业协会意见，修改形成征求意见稿，并广泛征求了省市人民政府、国务院有关部门意见，同时也在我委门户网站向社会公开征求意见。根据各方面的反馈意见，反复修改完善后向国务院办公厅报送，经国务院审改后最终形成《方案》发布稿。[2]\n总体思路\n　在征求意见过程中，我们收到了社会各界提出的很多不同意见。有的认为目现价值相对较高的可回收物基本进入不了垃圾处理系统，且在终端处理设施无法满足分类要求的情况下，无需再对现有生活垃圾过多细化分类；有的认为应向德国、日本等发达国家学习，进一步细化分类类别；有的认为应对居民进行强制分类等等，这说明社会各界对如何实施生活垃圾分类仍存在较大争议，也充分反映了现我国生活垃圾分类工作的艰巨性和复杂性。对此，《方案》在总结此前试点工作经验教训的基础上，经过深入研究，提出了“政府推动，全民参与；因地制宜，循序渐进；完善机制，创新发展；协同推进，有效衔接”的基本原则，《方案》总体设计如下：[2]\n      （一）明确政府的主导作用。从我国垃圾分类处理的现状看，政府在生活垃圾分类制度推进过程中必须发挥主导作用。省级人民政府和国务院有关部门应对生活垃圾分类工作加强指导；各城市人民政府应承担起主体责任，完善相关法规，加大资金支持，强化监督检查；责任明确的公共机构和企事业单位也应做好带头示范，推动全社会参与生活垃圾分类。\n      （二）循序渐进推进生活垃圾分类。生活垃圾分类涉及社会生活方方面面，不可能一蹴而就，从可操作的角度出发，《方案》提出强制分类和引导分类同时开展的总体思路，在部分具备条件的区域对公共机构和企事业单位先行实施强制分类，对于城镇居民，在现法律法规尚不健全的情况下仍以引导分类为主。\n      （三）因地制宜确定分类方法。我国各地气候特征、发展水平、生活习惯不同，生活垃圾成分差异显著。为避免各地“一刀切”制定分类方法，《方案》提出由各地结合实际，合理确定强制分类的品种，细化分类收运处置等方面的要求，给地方政府较大灵活性。\n      （四）注重系统配套。生活垃圾分类是一项复杂的系统性工作，分类后续的收集、回收、处理等环节直接影响到垃圾分类能否顺利实施。因此，《方案》对分类后端的收运体系、回收体系、终端处理设施建设提出了要求，使其更好地与垃圾分类品种相衔接、与资源回收利用相协调。\n      总体来看，《方案》对生活垃圾分类制度的总体设计思路，符合我国现阶段国情，具有较强的可操作性。今后，随着垃圾分类工作的推进和相关法律法规的完善，可逐步对《方案》进行调整，使之与经济社会发展相适应。[2]\n分类实施\n      （一）关于实施强制分类\n一是强制分类的实施范围。《方案》明确在以下城市的城区范围内实施强制分类，包括：直辖市、省会城市、计划单列市；住房城乡建设部等部门确定的第一批生活垃圾分类示范城市，共46个城市。主要考虑这些城市经济相对发达，市民素质普遍较高，且多数已先行开展垃圾分类试点，具备实施条件。对于其他城市，《方案》也鼓励由各省（区）结合实际，选择具备条件的实施强制分类，同时在生态文明试验区、各地新城新区率先实施生活垃圾强制分类。[2]\n二是实施强制分类的主体。上述区域内的公共机构和相关企业是实施强制分类的主体，主要包括党政机关；学校、科研、文化等事业单位；协会、学会、联合会等社团组织；车站、机场、码头等公共场所管理单位；宾馆、饭店、购物中心等相关企业。这些机构和企业主体责任清晰，实施范围明确，适宜先行实施强制分类。\n      三是强制分类方法。《方案》强调首先必须要求强制分类主体对有害垃圾进行分类，主要考虑有害垃圾环境污染风险较大，如与其它垃圾混合处理，可能存在二次污染的风险。其次，各地可根据当地生活垃圾成分、收运和处理设施建设情况等，选择易腐垃圾、可回收物等类别进行分类。\n      四是时限要求。《方案》要求实施生活垃圾强制分类的城市要结合本地实际，于2017年底前制定出台办法，细化垃圾分类类别、品种、投放、收运、处置等方面要求。\n      （二）关于引导居民自觉分类\n从此前开展生活垃圾分类试点的情况看，居民形成分类习惯是个长期的过程。在法律法规正在完善的情况下，目前对居民个人要采取激励和约束相结合的措施开展分类，只使用强制手段难以取得良好效果。因此，《方案》提出“引导居民自觉开展生活垃圾分类”。\n      尽管没有提出强制分类要求，《方案》对引导居民分类提出：一是城市人民政府可结合实际制定居民生活垃圾分类指南，引导居民自觉、科学地开展生活垃圾分类。二是此前已制定地方性法规、对居民生活垃圾分类提出强制要求的，仍按原规定继续实施。三是在实施生活垃圾强制分类的城市选择不同类型的社区，开展居民生活垃圾强制分类示范试点，并根据试点情况完善地方性法规，逐步扩大强制分类实施范围。四是引导居民单独投放有害垃圾，分类投放其它生活垃圾，结合本地实际尽可能干湿分类、深入分类。[2]\n系统配套\n　垃圾分类确实是一项非常复杂且系统的工作，如不能打通后续收运、利用、处理等诸多环节，垃圾分类工作将难以持续。《方案》因此着重强调了收运、回收、终端处理等设施建设与前端分类工作的配套衔接，避免影响居民垃圾分类的积极性和分类效果。《方案》要求：一是要建立与分类品种相配套的收运体系。在收集阶段要完善垃圾分类标志、改造垃圾房、转运站等。在运输阶段要配备专用收运车辆，避免将分类好的垃圾混合装运。此外，由于目前有害垃圾收运系统还不够完善，《方案》提出要加快建立符合环保要求的有害垃圾收运系统。二是要建立与再生资源利用相协调的回收体系。我国历来就存在规模庞大的废品回收网点，在一定程度上促进了垃圾分类工作，但这些回收点还需规范。对此，《方案》提出要健全再生资源回收利用网络，合理布局布点，推进垃圾收运系统和再生资源回收利用系统的衔接，便于对生活垃圾分类回收利用全口径管理。此外，《方案》还提出建立再生资源回收利用信息化平台，提供回收种类、交易价格等信息，以便各方面能公开、便捷的进行再生资源回收利用交易。三是要完善与垃圾分类相衔接的终端处理设施。根据《方案》提出的强制分类方法，为确保终端处理设施与垃圾分类相衔接，《方案》要求在有害垃圾处理方面，要加快危险废物处理设施建设，建立健全非工业源有害垃圾收运处理系统；在易腐垃圾处理方面，要鼓励利用易腐垃圾、加快餐厨垃圾处理设施建设；在可回收物处理方面，要加快培育大型龙头企业，推动再生资源规范化、专业化、清洁化处理和高值化利用。四是要探索建立垃圾协同处置利用基地。目前我国垃圾分类终端处理能力还需加强，设施选址难的问题急需突破。因此，《方案》提出应对终端处理利用设施建设加强统筹规划，探索建立集焚烧、餐厨垃圾资源化利用、再生资源回收利用、填埋、有害垃圾处置于一体的生活垃圾协同处置利用基地，以提高土地资源节约集约利用水平，也便于对各类垃圾集中、高效的运输处理。[2]\n相关措施\n　一是组织领导方面。《方案》明确了城市人民政府在垃圾分类工作中的主体责任，要求其对强制分类实施情况加强监督检查和工作考核，并向社会公布考核结果。同时，提出省级人民政府、国务院有关部门要加强指导，在生态文明先行示范区、卫生城市等创建中，逐步将生活垃圾分类实施情况列为考核指标。\n      二是健全法律法规方面。法治是开展垃圾分类工作的基础。目前，垃圾分类方面的法律法规还有待完善。《方案》提出要加快完善相关法律制度，推动出台地方性法规、规章，依法推进生活垃圾强制分类。\n      三是完善支持政策方面。目前，我国垃圾处理收费制度仍处于起步阶段，垃圾处理费费率标准和收缴率仍然很低，收费与处理成本之间还存在很大缺口，还难以保障垃圾分类体系建设。因此，《方案》提出完善垃圾处理收费制度，落实相关税收优惠政策，同时加大中央资金和地方财政的引导支持。\n      四是创新体制机制方面。《方案》注重垃圾分类领域的体制机制创新，积极鼓励社会资本和专业化服务公司参与垃圾分类收集、运输、处理相关工作。《方案》还提出了加快建设城市智慧环卫系统、建设生活垃圾资源化产业技术创新战略联盟及技术研发基地、推广“互联网 +”新模式等一系列有利于垃圾分类的新举措。\n      五是动员社会参与方面。从发达国家垃圾分类的经验来看，推进生活垃圾分类需要社会全体参与，因此必须提高公众参与度，使垃圾分类理念深入人心，成为人们的自觉行为。《方案》要求开展多种形式的环保宣传、强化国民教育，引导公众从身边做起、从点滴做起。同时通过建设生活垃圾分类示范教育基地、开展垃圾分类收集专业知识和技能培训、建立垃圾分类督导员及志愿者队伍等措施，形成良好的全民参与氛围，确保工作有效推进。", "       城市生活垃圾分类是指按照城市生活垃圾的不同性质、不同处置方式的要求，从垃圾产生的源头上将垃圾分类后收集、储存及运输，它是城市生活垃圾处理体系中的一个关键环节。通过垃圾分类，可有效地实现废弃物的重新利用和最大程度的废品回收，为先进的垃圾处理方式的应用奠定基础，为垃圾处理实现减量化、资源化、无害化目标创造良好条件。目前西方发达国家普遍采用垃圾分类的方法，垃圾分类的法律体系相对完善。而中国城市生活垃圾分类处于起步阶段，现存的相关法律体系不健全，大部分城市还是实行垃圾混合收集的方式，这些给资源回收及处理带来极大困难，也给环境污染的治理提出了巨大挑战。\n      1中国城市生活垃圾分类的法律制度现状\n1.1中国城市生活垃圾分类的现状\n　　目前，中国大部分城市生活垃圾还是采用混合收集的方法。在居民区一般都建有专门的垃圾堆放处，居民将家中垃圾装袋后放入其中，每天由环卫工人或垃圾车将这些垃圾运往垃圾中转站；在公共场所或马路两边，分段设置垃圾箱，由专人定时清理。[2]2000年，国家建设部确定北京、上海、广州、南京、深圳、杭州、厦门、桂林八个城市作为“生活垃圾分类收集试点城市”。试点城市可以在法规、政策、技术和方法等方面进行探索和总结，并为在全国实行垃圾分类收集创造条件。[3]\n　　然而多数城市经过近八年的多方努力，垃圾分类依然举步维艰。存在的主要问题有：市民对垃圾分类的意识不强、积极性不高；管理部门重视程度不够；城市拾荒者问题突出；缺少有力的政策扶持和配套的执行措施；法律体系不够健全等。\n      1.2相关法律制度\n　　中国现行的关于城市生活垃圾管理方面的主要法律法规有以下几部：\n      1.2.1《中华人民共和国环境保护法》\n      　　1989年12月26日公布并实施的《中华人民共和国环境保护法》是环境保护方面的基本法，其中第四章“防治环境污染和其他公害”专门规定了防治包括城市垃圾在内的污染物对环境的污染，是城市垃圾管理及污染防治其他立法的基础，但该法中对于城市生活垃圾分类并无具体规定。\n      1.2.2《中华人民共和国固体废物污染环境防治法》（2004年修订）（以下简称《固体废物污染环境防治法》）\n      　　《固体废物污染环境防治法》是中国防治固体废物污染的单行法，该法第三章第三节为“生活垃圾污染环境的防治”，其中第四十二条中做出了对城市生活垃圾分类的规定：“对城市生活垃圾应当及时清运，逐步做到分类收集和运输，并积极开展合理利用和实施无害化处置。”\n      1.2.3《城市市容和环境卫生管理条例》\n      　　国务院1992年颁布的《城市市容和环境卫生管理条例》是系统地对城市固体废物进行管理的法令，其中第二十八条规定：“对城市生活废弃物应当逐步做到分类收集、运输和处理。”\n      1.2.4《城市生活垃圾管理办法》（2007年）\n      　　2007年4月建设部颁布了《城市生活垃圾管理办法》，随着经济水平的不断提高，新的城市生活垃圾管理存在的问题日益突出，迫使相关部门对此做出相应措施，其中对于垃圾分类有了较详细的规定。第三章第十五条规定：“城市生活垃圾应当逐步实行分类投放、收集和运输。具体办法，由直辖市、市、县人民政府建设（环境卫生）主管部门根据国家标准和本地区实际制定。”第十六条第二款规定：“城市生活垃圾实行分类收集的地区，单位和个人应当按照规定的分类要求，将生活垃圾装入相应的垃圾袋内，投入指定的垃圾容器或者收集场所。”\n      1.2.5各种地方性法规、规章和法律性文件\n　　各地区根据自身的具体情况和实际需要，陆续颁布了一些与垃圾分类相关的地方性法规、规章和法律性文件。例如深圳市政府于2002年颁布的《深圳市城市垃圾分类收集运输处理实施方案》、《上海市市容环卫局关于进一步开展本市居住区生活垃圾分类新方式试点工作的通知》（2007年）等。这些地方性法规、规章和法律性文件细化了垃圾分类的具体规定，对制定垃圾分类的详细标准、明确相关管理责任等方面起到了一定的积极作用。（来源：环境科学与管理）", 
"“处理垃圾时也会由于标识、标志、标准的不统一而出现诸多不必要的矛盾。所以，这是一个全社会都要关心的‘关键小事’，应当引起有关方面重视。”\n今年，“垃圾分类”成为全国政协委员、重庆市政协副秘书长王济光关注的一大议题。5月18日，王济光告诉澎湃新闻，今年全国两会，他带来了《关于建立垃圾分类全国统一标准的提案》。\n      王济光说：“住建部前些年制定过一个标准，是参考性质的，各地都在此基础上根据本地实际又制定了自己的标准和标识，但是，由于各地标准有时有较大差别，外地游客经常按照自己的垃圾分类习惯行事，有次在外地旅游时还遭到过当地人的白眼。此后我对此进行了调研。”\n      王济光调研后发现，“垃圾分类”虽已形成较好的工作推进态势，但从各地实施过程和效果来看，实际成效尚未尽如人意。\n      “其中主要原因就在于各地区根据自身经济发展情况并参照住建部《生活垃圾分类标志》对本地生活垃圾进行分类，客观上造成缺乏生活垃圾分类统一标准的现实状况。”王济光分析认为，这不利于垃圾从源头上进行分类。一方面，在当前信息量大、交互沟通强的互联网时代，各地垃圾分类缺乏统一的标准、标志、标识，极易使居民对垃圾分类标准产生困惑、无所适从，影响居民分类合作意愿。另一方面，随着旅游业快速发展、产业转移、人流迁徙，国内跨省区人口流动量不断增大，垃圾分类标准及标志标示的不统一，也不利于在全国范围内进行垃圾分类宣传，不利于培养垃圾分类的良好习惯。\n      此外，各地不一的垃圾分类将影响相关单位、机构和企业完整的收购、运输、销售、加工以及成品市场等垃圾再利用产业体系的形成，增加不必要的人力、物力、财力成本。\n      对此，王济光建议尽快制定全国统一的垃圾分类标准。按照有利于居民“认得清、分得明”的原则，结合垃圾分类后续处理程序，尽快将先行试点城市实践中积累的有益经验上升为全国统一标准，确定通俗易懂的分类名称，对生活垃圾分类标准和标示语进行统一，将垃圾桶颜色与对应的垃圾类别规范统一，将生活垃圾分类类别的外语译文规范统一，以最大程度方便各地群众分类投放，全局一盘棋地推动垃圾分类工作有序高效开展。\n      “确立垃圾分类全国统一标准的权威性也是重要的一环。”王济光还建议，要推动官方垃圾分类科普平台建设，并将垃圾分类知识纳入学校教育。(来源：澎湃新闻)", 
"现在，越来越多的人加入到垃圾分类行动当中啦，\n但是，你投放的垃圾分对了吗？\n小编今天就给你讲讲，\n那些垃圾分类中的误区，\n看看你有没有中过招？\n误区一：厕纸也是纸，可以回收\n可回收的废纸主要包括报纸、期刊、图书、各种包装纸等（污染严重的纸除外）。在一般的认知中，厕纸属于纸张，是可回收的。但实际上，厕纸遇水即溶，不算可回收的“纸张”。类似的还有餐巾纸、厨房用纸等，也不可回收，都属于“干垃圾”。\n:\n误区二：干的纸尿裤是干垃圾，湿的是湿垃圾\n不论纸尿裤湿不湿，纸尿裤都是干垃圾！因为干垃圾、湿垃圾并不是根据含水量来区分的，湿垃圾是指日常生活产生的容易腐烂的生物质废弃物，干垃圾是指除有害垃圾、可回收物、湿垃圾以外的其他废弃物。类似的还有餐巾纸、湿纸巾、卫生间用纸等。\n:\n误区三：大骨头从厨房来，属于湿垃圾\n事实上，大骨头因为“难腐蚀”且“质地坚硬不易粉碎易损坏湿垃圾末端处理设备”而被列入“干垃圾”，类似的还有榴莲壳、椰子壳等，但鸡骨、鱼骨、玉米棒、苹果核等较软 “易腐蚀”，属于“湿垃圾”。\n:\n误区四：将湿垃圾装袋子后，直接扔进垃圾桶\n常用的塑料袋，即使是可以降解的，也远比湿垃圾更难腐蚀。此外装过湿垃圾的塑料袋沾有各类污迹，因此正确做法是先破袋，将湿垃圾倒入“湿垃圾”桶中，再把袋子扔进“干垃圾”桶中。\n:\n误区五：饮料没喝完，塑料饮料瓶直接投入可回收垃圾桶\n不可以！塑料饮料瓶里剩下的液体，属于纯流质的食物垃圾，应先将液体直接倒进下水口，再将塑料饮料瓶冲洗干净后压扁，投放到“可回收物”垃圾桶中。这样既可以减少环卫工人的工作量，又可以压缩塑料瓶的体积，方便运输。类似的还有装可乐的易拉罐、装牛奶的利乐包装等。\n:\n误区六：过期食品连带包装物一起丢进垃圾桶\n过期食品，比如一包受潮过期的瓜子，连带包装物一起丢进垃圾桶？这样做显然不妥！因为瓜子容易腐烂，属于湿垃圾，而包装物（如塑料包装袋），属于干垃圾，所以正确做法是将瓜子投放到湿垃圾的收集容器，塑料包装袋投放到干垃圾的收集容器中。\n:\n误区七：玻璃瓶收破烂的都不要，扔进干垃圾桶\n玻璃瓶属于“可回收物”，可是因为它们个头大、分量重、回收利润低，就连收破烂的都嫌弃！收破烂的不收，那我们就只能把他们扔进“干垃圾”桶吗？不！正确的做法是投放到小区公共区域设置的可回收物收集容器，如果小区有开展两网融合服务站点，还可以将可回收物交投到这里，由保洁员分拣后纳入废品回收系统。"],
    index: 0,
    allcontent: ""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var ind = options.index;
      this.setData({
        index: ind,
        allcontent: this.data.detail[ind]
      })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})