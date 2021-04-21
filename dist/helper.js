(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["helper"] = factory();
	else
		root["helper"] = factory();
})(window, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

!function(n,i){ true?module.exports=i():undefined}(this,function(){return function(n){function i(a){if(u[a])return u[a].exports;var e=u[a]={i:a,l:!1,exports:{}};return n[a].call(e.exports,e,e.exports,i),e.l=!0,e.exports}var u={};return i.m=n,i.c=u,i.i=function(n){return n},i.d=function(n,i,u){Object.defineProperty(n,i,{configurable:!1,enumerable:!0,get:u})},i.n=function(n){var u=n&&n.__esModule?function(){return n.default}:function(){return n};return i.d(u,"a",u),u},i.o=function(n,i){return Object.prototype.hasOwnProperty.call(n,i)},i.p="/",i(i.s=0)}({"./src/dict.ts":function(n,i){"use strict";var u=[["a","啊阿锕"],["ai","埃挨哎唉哀皑癌蔼矮艾碍爱隘诶捱嗳嗌嫒瑷暧砹锿霭"],["an","鞍氨安俺按暗岸胺案谙埯揞犴庵桉铵鹌顸黯"],["ang","肮昂盎"],["ao","凹敖熬翱袄傲奥懊澳坳拗嗷噢岙廒遨媪骜聱螯鏊鳌鏖"],["ba","芭捌扒叭吧笆八疤巴拔跋靶把耙坝霸罢爸茇菝萆捭岜灞杷钯粑鲅魃"],["bai","白柏百摆佰败拜稗薜掰鞴"],["ban","斑班搬扳般颁板版扮拌伴瓣半办绊阪坂豳钣瘢癍舨"],["bang","邦帮梆榜膀绑棒磅蚌镑傍谤蒡螃"],["bao","苞胞包褒雹保堡饱宝抱报暴豹鲍爆勹葆宀孢煲鸨褓趵龅"],["bei","杯碑悲卑北辈背贝钡倍狈备惫焙被孛陂邶埤蓓呗怫悖碚鹎褙鐾"],["ben","奔苯本笨畚坌锛"],["beng","崩绷甭泵蹦迸唪嘣甏"],["bi","逼鼻比鄙笔彼碧蓖蔽毕毙毖币庇痹闭敝弊必辟壁臂避陛匕仳俾芘荜荸吡哔狴庳愎滗濞弼妣婢嬖璧贲畀铋秕裨筚箅篦舭襞跸髀"],["bia","髟"],["bian","鞭边编贬扁便变卞辨辩辫遍匾弁苄忭汴缏煸砭碥稹窆蝙笾鳊"],["biao","标彪膘表婊骠飑飙飚灬镖镳瘭裱鳔"],["bie","鳖憋别瘪蹩鳘"],["bin","彬斌濒滨宾摈傧浜缤玢殡膑镔髌鬓"],["bing","兵冰柄丙秉饼炳病并禀邴摒绠枋槟燹"],["bo","剥薄玻菠播拨钵波博勃搏铂箔伯帛舶脖膊渤泊驳亳蕃啵饽檗擘礴钹鹁簸跛"],["bu","捕卜哺补埠不布步簿部怖拊卟逋瓿晡钚醭"],["ca","擦嚓礤"],["cai","猜裁材才财睬踩采彩菜蔡"],["can","餐参蚕残惭惨灿骖璨粲黪"],["cang","苍舱仓沧藏伧"],["cao","操糙槽曹草艹嘈漕螬艚"],["ce","厕策侧册测刂帻恻"],["cen","岑涔"],["ceng","层蹭噌"],["cha","插叉茬茶查碴搽察岔差诧猹馇汊姹杈楂槎檫钗锸镲衩"],["chai","拆柴豺侪茈瘥虿龇"],["chan","搀掺蝉馋谗缠铲产阐颤冁谄谶蒇廛忏潺澶孱羼婵嬗骣觇禅镡裣蟾躔"],["chang","昌猖场尝常长偿肠厂敞畅唱倡伥鬯苌菖徜怅惝阊娼嫦昶氅鲳"],["chao","超抄钞朝嘲潮巢吵炒怊绉晁耖"],["che","车扯撤掣彻澈坼屮砗"],["chen","郴臣辰尘晨忱沉陈趁衬称谌抻嗔宸琛榇肜胂碜龀"],["cheng","撑城橙成呈乘程惩澄诚承逞骋秤埕嵊徵浈枨柽樘晟塍瞠铖裎蛏酲"],["chi","吃痴持匙池迟弛驰耻齿侈尺赤翅斥炽傺墀芪茌搋叱哧啻嗤彳饬沲媸敕胝眙眵鸱瘛褫蚩螭笞篪豉踅踟魑"],["chong","充冲虫崇宠茺忡憧铳艟"],["chou","抽酬畴踌稠愁筹仇绸瞅丑俦圳帱惆溴妯瘳雠鲋"],["chu","臭初出橱厨躇锄雏滁除楚础储矗搐触处亍刍憷绌杵楮樗蜍蹰黜"],["chuai","嘬膪踹"],["chuan","揣川穿椽传船喘串掾舛惴遄巛氚钏镩舡"],["chuang","疮窗幢床闯创怆"],["chui","吹炊捶锤垂陲棰槌"],["chun","春椿醇唇淳纯蠢促莼沌肫朐鹑蝽"],["chuo","戳绰蔟辶辍镞踔龊"],["ci","疵茨磁雌辞慈瓷词此刺赐次荠呲嵯鹚螅糍趑"],["cong","聪葱囱匆从丛偬苁淙骢琮璁枞"],["cou","薮楱辏腠"],["cu","凑粗醋簇猝殂蹙"],["cuan","蹿篡窜汆撺昕爨"],["cui","摧崔催脆瘁粹淬翠萃悴璀榱隹"],["cun","村存寸磋忖皴"],["cuo","撮搓措挫错厝脞锉矬痤鹾蹉躜"],["da","搭达答瘩打大耷哒嗒怛妲疸褡笪靼鞑"],["dai","呆歹傣戴带殆代贷袋待逮怠埭甙呔岱迨逯骀绐玳黛"],["dan","耽担丹单郸掸胆旦氮但惮淡诞弹蛋亻儋卩萏啖澹檐殚赕眈瘅聃箪"],["dang","当挡党荡档谠凼菪宕砀铛裆"],["dao","刀捣蹈倒岛祷导到稻悼道盗叨啁忉洮氘焘忑纛"],["de","德得的锝"],["deng","蹬灯登等瞪凳邓噔嶝戥磴镫簦"],["di","堤低滴迪敌笛狄涤翟嫡抵底地蒂第帝弟递缔氐籴诋谛邸坻莜荻嘀娣柢棣觌砥碲睇镝羝骶"],["dia","嗲"],["dian","颠掂滇碘点典靛垫电佃甸店惦奠淀殿丶阽坫埝巅玷癜癫簟踮"],["diao","碉叼雕凋刁掉吊钓调轺铞蜩粜貂"],["die","跌爹碟蝶迭谍叠佚垤堞揲喋渫轶牒瓞褶耋蹀鲽鳎"],["ding","丁盯叮钉顶鼎锭定订丢仃啶玎腚碇町铤疔耵酊"],["diu","丢铥"],["dong","东冬董懂动栋侗恫冻洞垌咚岽峒夂氡胨胴硐鸫"],["dou","兜抖斗陡豆逗痘蔸钭窦窬蚪篼酡"],["du","都督毒犊独读堵睹赌杜镀肚度渡妒芏嘟渎椟橐牍蠹笃髑黩"],["duan","端短锻段断缎彖椴煅簖"],["dui","堆兑队对怼憝碓"],["dun","墩吨蹲敦顿囤钝盾遁炖砘礅盹镦趸"],["duo","掇哆多夺垛躲朵跺舵剁惰堕咄哚缍柁铎裰踱"],["e","蛾峨鹅俄额讹娥恶厄扼遏鄂饿噩谔垩垭苊莪萼呃愕屙婀轭曷腭硪锇锷鹗颚鳄"],["en","恩蒽摁唔嗯"],["er","而儿耳尔饵洱二贰迩珥铒鸸鲕"],["fa","发罚筏伐乏阀法珐垡砝"],["fan","藩帆番翻樊矾钒繁凡烦反返范贩犯饭泛蘩幡犭梵攵燔畈蹯"],["fang","坊芳方肪房防妨仿访纺放匚邡彷钫舫鲂"],["fei","菲非啡飞肥匪诽吠肺废沸费芾狒悱淝妃绋绯榧腓斐扉祓砩镄痱蜚篚翡霏鲱"],["fen","芬酚吩氛分纷坟焚汾粉奋份忿愤粪偾瀵棼愍鲼鼢"],["feng","丰封枫蜂峰锋风疯烽逢冯缝讽奉凤俸酆葑沣砜"],["fou","缶"],["fu","佛否夫敷肤孵扶拂辐幅氟符伏俘服浮涪福袱弗甫抚辅俯釜斧脯腑府腐赴副覆赋复傅付阜父腹负富讣附妇缚咐匐凫郛芙苻茯莩菔呋幞滏艴孚驸绂桴赙黻黼罘稃馥虍蚨蜉蝠蝮麸趺跗鳆"],["ga","噶嘎蛤尬呷尕尜旮钆"],["gai","该改概钙盖溉丐陔垓戤赅胲"],["gan","干甘杆柑竿肝赶感秆敢赣坩苷尴擀泔淦澉绀橄旰矸疳酐"],["gang","冈刚钢缸肛纲岗港戆罡颃筻"],["gao","篙皋高膏羔糕搞镐稿告睾诰郜蒿藁缟槔槁杲锆"],["ge","哥歌搁戈鸽胳疙割革葛格阁隔铬个各鬲仡哿塥嗝纥搿膈硌铪镉袼颌虼舸骼髂"],["gei","给"],["gen","根跟亘茛哏艮"],["geng","耕更庚羹埂耿梗哽赓鲠"],["gong","杠工攻功恭龚供躬公宫弓巩汞拱贡共蕻廾咣珙肱蚣蛩觥"],["gou","钩勾沟苟狗垢构购够佝诟岣遘媾缑觏彀鸲笱篝鞲"],["gu","辜菇咕箍估沽孤姑鼓古蛊骨谷股故顾固雇嘏诂菰哌崮汩梏轱牯牿胍臌毂瞽罟钴锢瓠鸪鹄痼蛄酤觚鲴骰鹘"],["gua","刮瓜剐寡挂褂卦诖呱栝鸹"],["guai","乖拐怪哙"],["guan","棺关官冠观管馆罐惯灌贯倌莞掼涫盥鹳鳏"],["guang","光广逛犷桄胱疒"],["gui","瑰规圭硅归龟闺轨鬼诡癸桂柜跪贵刽匦刿庋宄妫桧炅晷皈簋鲑鳜"],["gun","辊滚棍丨衮绲磙鲧"],["guo","锅郭国果裹过馘蠃埚掴呙囗帼崞猓椁虢锞聒蜮蜾蝈"],["ha","哈"],["hai","骸孩海氦亥害骇咴嗨颏醢"],["han","酣憨邯韩含涵寒函喊罕翰撼捍旱憾悍焊汗汉邗菡撖阚瀚晗焓颔蚶鼾"],["hang","杭航沆绗珩桁"],["hao","壕嚎豪毫郝好耗号浩薅嗥嚆濠灏昊皓颢蚝"],["he","呵喝荷菏核禾和何合盒貉阂河涸赫褐鹤贺诃劾壑藿嗑嗬阖盍蚵翮"],["hei","嘿黑"],["hen","夯痕很狠恨"],["heng","哼亨横衡恒訇蘅"],["hong","轰哄烘虹鸿洪宏弘红黉讧荭薨闳泓"],["hou","喉侯猴吼厚候后堠後逅瘊篌糇鲎骺"],["hu","呼乎忽瑚壶葫胡蝴狐糊湖弧虎唬护互沪户冱唿囫岵猢怙惚浒滹琥槲轷觳烀煳戽扈祜鹕鹱笏醐斛"],["hua","花哗华猾滑画划化话劐浍骅桦铧稞"],["huai","槐徊怀淮坏还踝"],["huan","欢环桓缓换患唤痪豢焕涣宦幻郇奂垸擐圜洹浣漶寰逭缳锾鲩鬟"],["huang","荒慌黄磺蝗簧皇凰惶煌晃幌恍谎隍徨湟潢遑璜肓癀蟥篁鳇"],["hui","灰挥辉徽恢蛔回毁悔慧卉惠晦贿秽会烩汇讳诲绘诙茴荟蕙哕喙隳洄彗缋珲晖恚虺蟪麾"],["hun","荤昏婚魂浑混诨馄阍溷缗"],["huo","豁活伙火获或惑霍货祸攉嚯夥钬锪镬耠蠖"],["ji","击圾基机畸稽积箕肌饥迹激讥鸡姬绩缉吉极棘辑籍集及急疾汲即嫉级挤几脊己蓟技冀季伎祭剂悸济寄寂计记既忌际妓继纪居丌乩剞佶佴脔墼芨芰萁蒺蕺掎叽咭哜唧岌嵴洎彐屐骥畿玑楫殛戟戢赍觊犄齑矶羁嵇稷瘠瘵虮笈笄暨跻跽霁鲚鲫髻麂"],["jia","嘉枷夹佳家加荚颊贾甲钾假稼价架驾嫁伽郏拮岬浃迦珈戛胛恝铗镓痂蛱笳袈跏"],["jian","歼监坚尖笺间煎兼肩艰奸缄茧检柬碱硷拣捡简俭剪减荐槛鉴践贱见键箭件健舰剑饯渐溅涧建僭谏谫菅蒹搛囝湔蹇謇缣枧柙楗戋戬牮犍毽腱睑锏鹣裥笕箴翦趼踺鲣鞯"],["jiang","僵姜将浆江疆蒋桨奖讲匠酱降茳洚绛缰犟礓耩糨豇"],["jiao","蕉椒礁焦胶交郊浇骄娇嚼搅铰矫侥脚狡角饺缴绞剿教酵轿较叫佼僬茭挢噍峤徼姣纟敫皎鹪蛟醮跤鲛"],["jie","窖揭接皆秸街阶截劫节桔杰捷睫竭洁结解姐戒藉芥界借介疥诫届偈讦诘喈嗟獬婕孑桀獒碣锴疖袷颉蚧羯鲒骱髫"],["jin","巾筋斤金今津襟紧锦仅谨进靳晋禁近烬浸尽卺荩堇噤馑廑妗缙瑾槿赆觐钅锓衿矜"],["jing","劲荆兢茎睛晶鲸京惊精粳经井警景颈静境敬镜径痉靖竟竞净刭儆阱菁獍憬泾迳弪婧肼胫腈旌"],["jiong","炯窘冂迥扃"],["jiu","揪究纠玖韭久灸九酒厩救旧臼舅咎就疚僦啾阄柩桕鹫赳鬏"],["ju","鞠拘狙疽驹菊局咀矩举沮聚拒据巨具距踞锯俱句惧炬剧倨讵苣苴莒掬遽屦琚枸椐榘榉橘犋飓钜锔窭裾趄醵踽龃雎鞫"],["juan","捐鹃娟倦眷卷绢鄄狷涓桊蠲锩镌隽"],["jue","撅攫抉掘倔爵觉决诀绝厥劂谲矍蕨噘崛獗孓珏桷橛爝镢蹶觖"],["jun","均菌钧军君峻俊竣浚郡骏捃狻皲筠麇"],["ka","喀咖卡佧咔胩"],["kai","开揩楷凯慨剀垲蒈忾恺铠锎"],["kan","刊堪勘坎砍看侃凵莰莶戡龛瞰"],["kang","康慷糠扛抗亢炕坑伉闶钪"],["kao","考拷烤靠尻栲犒铐"],["ke","咯坷苛柯棵磕颗科壳咳可渴克刻客课岢恪溘骒缂珂轲氪瞌钶疴窠蝌髁"],["ken","肯啃垦恳垠裉颀"],["keng","吭忐铿"],["kong","空恐孔控倥崆箜"],["kou","抠口扣寇芤蔻叩眍筘"],["ku","枯哭窟苦酷库裤刳堀喾绔骷"],["kua","夸垮挎跨胯侉"],["kuai","块筷侩快蒯郐蒉狯脍"],["kuan","宽款髋"],["kuang","匡筐狂框矿眶旷况诓诳邝圹夼哐纩贶"],["kui","亏盔岿窥葵奎魁傀馈愧溃馗匮夔隗揆喹喟悝愦阕逵暌睽聩蝰篑臾跬"],["kun","坤昆捆困悃阃琨锟醌鲲髡"],["kuo","括扩廓阔蛞"],["la","垃拉喇蜡腊辣啦剌摺邋旯砬瘌"],["lai","莱来赖崃徕涞濑赉睐铼癞籁"],["lan","蓝婪栏拦篮阑兰澜谰揽览懒缆烂滥啉岚懔漤榄斓罱镧褴"],["lang","琅榔狼廊郎朗浪莨蒗啷阆锒稂螂"],["lao","捞劳牢老佬姥酪烙涝唠崂栳铑铹痨醪"],["le","了勒乐肋仂叻嘞泐鳓"],["lei","雷镭蕾磊累儡垒擂类泪羸诔荽咧漯嫘缧檑耒酹"],["leng","楞愣"],["li","厘梨犁黎篱狸离漓理李里鲤礼莉荔吏栗丽厉励砾历利傈例俐痢立粒沥隶力璃哩俪俚郦坜苈莅蓠藜捩呖唳喱猁溧澧逦娌嫠骊缡珞枥栎轹戾砺詈罹锂鹂疠疬蛎蜊蠡笠篥粝醴跞雳鲡鳢黧"],["lian","俩联莲连镰廉怜涟帘敛脸链恋炼练挛蔹奁潋濂娈琏楝殓臁膦裢蠊鲢"],["liang","粮凉梁粱良两辆量晾亮谅墚椋踉靓魉"],["liao","撩聊僚疗燎寥辽潦撂镣廖料蓼尥嘹獠寮缭钌鹩耢"],["lie","列裂烈劣猎冽埒洌趔躐鬣"],["lin","琳林磷霖临邻鳞淋凛赁吝蔺嶙廪遴檩辚瞵粼躏麟"],["ling","棱冷拎玲菱零龄铃伶羚凌灵陵岭领另令酃塄苓呤囹泠绫柃棂瓴聆蛉翎鲮"],["liu","溜琉榴硫馏留刘瘤流柳六抡偻蒌泖浏遛骝绺旒熘锍镏鹨鎏"],["long","龙聋咙笼窿隆垄拢陇弄垅茏泷珑栊胧砻癃"],["lou","楼娄搂篓漏陋喽嵝镂瘘耧蝼髅"],["lu","芦卢颅庐炉掳卤虏鲁麓碌露路赂鹿潞禄录陆戮垆摅撸噜泸渌漉璐栌橹轳辂辘氇胪镥鸬鹭簏舻鲈"],["luan","峦孪滦卵乱栾鸾銮"],["lue","掠略锊"],["lun","轮伦仑沦纶论囵"],["luo","萝螺罗逻锣箩骡裸落洛骆络倮荦摞猡泺椤脶镙瘰雒"],["lv","驴吕铝侣旅履屡缕虑氯律率滤绿捋闾榈膂稆褛"],["ma","妈麻玛码蚂马骂嘛吗唛犸嬷杩麽"],["mai","埋买麦卖迈脉劢荬咪霾"],["man","瞒馒蛮满蔓曼慢漫谩墁幔缦熳镘颟螨鳗鞔"],["mang","芒茫盲忙莽邙漭朦硭蟒"],["mao","茅锚毛矛铆卯茂冒帽貌贸侔袤勖茆峁瑁昴牦耄旄懋瞀蛑蝥蟊髦"],["me","么"],["mei","玫枚梅酶霉煤没眉媒镁每美昧寐妹媚坶莓嵋猸浼湄楣镅鹛袂魅"],["men","门闷们扪玟焖懑钔"],["meng","氓萌蒙檬盟锰猛梦孟勐甍瞢懵礞虻蜢蠓艋艨黾"],["mi","眯醚靡糜迷谜弥米秘觅泌蜜密幂芈冖谧蘼嘧猕獯汨宓弭脒敉糸縻麋"],["mian","棉眠绵冕免勉娩缅面沔湎腼眄"],["miao","猫苗描瞄藐秒渺庙妙喵邈缈缪杪淼眇鹋蜱"],["mie","蔑灭咩蠛篾"],["min","民抿皿敏悯闽苠岷闵泯珉"],["ming","明螟鸣铭名命冥茗溟暝瞑酩"],["miu","谬"],["mo","摸摹蘑模膜磨摩魔抹末莫墨默沫漠寞陌谟茉蓦馍嫫镆秣瘼耱蟆貊貘"],["mou","谋牟某厶哞婺眸鍪"],["mu","拇牡亩姆母墓暮幕募慕木目睦牧穆仫苜呒沐毪钼"],["na","拿哪呐钠那娜纳内捺肭镎衲箬"],["nai","氖乃奶耐奈鼐艿萘柰"],["nan","南男难囊喃囡楠腩蝻赧"],["nang","攮哝囔馕曩"],["nao","挠脑恼闹孬垴猱瑙硇铙蛲"],["ne","淖呢讷"],["nei","馁"],["nen","嫩能枘恁"],["ni","妮霓倪泥尼拟你匿腻逆溺伲坭猊怩滠昵旎祢慝睨铌鲵"],["nian","蔫拈年碾撵捻念廿辇黏鲇鲶"],["niang","娘酿"],["niao","鸟尿茑嬲脲袅"],["nie","捏聂孽啮镊镍涅乜陧蘖嗫肀颞臬蹑"],["nin","您柠"],["ning","狞凝宁拧泞佞蓥咛甯聍"],["niu","牛扭钮纽狃忸妞蚴"],["nong","脓浓农侬"],["nou","耨"],["nu","奴努怒呶帑弩胬孥驽"],["nuan","暖"],["nue","疟谑"],["nuenue","虐"],["nuo","挪懦糯诺傩搦喏锘"],["nv","女恧钕衄"],["o","喔"],["ou","哦欧鸥殴藕呕偶沤怄瓯耦"],["pa","啪趴爬帕怕琶葩筢"],["pai","拍排牌徘湃派俳蒎"],["pan","攀潘盘磐盼畔判叛爿泮袢襻蟠蹒"],["pang","乓庞旁耪胖滂逄"],["pao","抛咆刨炮袍跑泡匏狍庖脬疱"],["pei","呸胚培裴赔陪配佩沛掊辔帔淠旆锫醅霈"],["pen","喷盆湓"],["peng","砰抨烹澎彭蓬棚硼篷膨朋鹏捧碰坯堋嘭怦蟛"],["pi","砒霹批披劈琵毗啤脾疲皮匹痞僻屁譬丕陴邳郫圮鼙擗噼庀媲纰枇甓睥罴铍痦癖疋蚍貔"],["pian","篇偏片骗谝骈犏胼褊翩蹁"],["piao","飘漂瓢票剽嘌嫖缥殍瞟螵"],["pie","撇瞥丿苤氕"],["pin","拼频贫品聘拚姘嫔榀牝颦"],["ping","乒坪苹萍平凭瓶评屏俜娉枰鲆"],["po","坡泼颇婆破魄迫粕叵鄱溥珀钋钷皤笸"],["pou","剖裒踣"],["pu","扑铺仆莆葡菩蒲埔朴圃普浦谱曝瀑匍噗濮璞氆镤镨蹼"],["qi","期欺栖戚妻七凄漆柒沏其棋奇歧畦崎脐齐旗祈祁骑起岂乞企启契砌器气迄弃汽泣讫亟亓圻芑萋葺嘁屺岐汔淇骐绮琪琦杞桤槭欹祺憩碛蛴蜞綦綮趿蹊鳍麒"],["qia","掐恰洽葜"],["qian","牵扦钎铅千迁签仟谦乾黔钱钳前潜遣浅谴堑嵌欠歉佥阡芊芡荨掮岍悭慊骞搴褰缱椠肷愆钤虔箝"],["qiang","枪呛腔羌墙蔷强抢嫱樯戗炝锖锵镪襁蜣羟跫跄"],["qiao","橇锹敲悄桥瞧乔侨巧鞘撬翘峭俏窍劁诮谯荞愀憔缲樵毳硗跷鞒"],["qie","切茄且怯窃郄唼惬妾挈锲箧"],["qin","钦侵亲秦琴勤芹擒禽寝沁芩蓁蕲揿吣嗪噙溱檎螓衾"],["qing","青轻氢倾卿清擎晴氰情顷请庆倩苘圊檠磬蜻罄箐謦鲭黥"],["qiong","琼穷邛茕穹筇銎"],["qiu","秋丘邱球求囚酋泅俅氽巯艽犰湫逑遒楸赇鸠虬蚯蝤裘糗鳅鼽"],["qu","趋区蛆曲躯屈驱渠取娶龋趣去诎劬蕖蘧岖衢阒璩觑氍祛磲癯蛐蠼麴瞿黢"],["quan","圈颧权醛泉全痊拳犬券劝诠荃獾悛绻辁畎铨蜷筌鬈"],["que","缺炔瘸却鹊榷确雀阙悫"],["qun","裙群逡"],["ran","然燃冉染苒髯"],["rang","瓤壤攘嚷让禳穰"],["rao","饶扰绕荛娆桡"],["re","热偌"],["ren","壬仁人忍韧任认刃妊纫仞荏葚饪轫稔衽"],["reng","扔仍"],["ri","日"],["rong","戎茸蓉荣融熔溶容绒冗嵘狨缛榕蝾"],["rou","揉柔肉糅蹂鞣"],["ru","茹蠕儒孺如辱乳汝入褥蓐薷嚅洳溽濡铷襦颥"],["ruan","软阮朊"],["rui","蕊瑞锐芮蕤睿蚋"],["run","闰润"],["ruo","惹若弱"],["sa","撒洒萨卅仨挲飒"],["sai","腮鳃塞赛噻"],["san","三叁伞散彡馓氵毵糁霰"],["sang","桑嗓丧搡磉颡"],["sao","搔骚扫嫂埽臊瘙鳋"],["se","瑟色涩啬铩铯穑"],["sen","森"],["seng","僧"],["sha","莎砂杀刹沙纱傻啥煞脎歃痧裟霎鲨"],["shai","筛晒酾"],["shan","珊苫杉山删煽衫闪陕擅赡膳善汕扇缮剡讪鄯埏芟潸姗骟膻钐疝蟮舢跚鳝"],["shang","墒伤商赏晌上尚裳垧绱殇熵觞"],["shao","梢捎稍烧芍勺韶少哨邵绍劭苕潲蛸笤筲艄"],["she","奢赊蛇舌舍赦摄射慑涉社设厍佘猞畲麝"],["shen","砷申呻伸身深娠绅神沈审婶甚肾慎渗诜谂吲哂渖椹矧蜃"],["sheng","声生甥牲升绳省盛剩胜圣丞渑媵眚笙"],["shi","师失狮施湿诗尸虱十石拾时什食蚀实识史矢使屎驶始式示士世柿事拭誓逝势是嗜噬适仕侍释饰氏市恃室视试谥埘莳蓍弑唑饣轼耆贳炻礻铈铊螫舐筮豕鲥鲺"],["shou","收手首守寿授售受瘦兽扌狩绶艏"],["shu","蔬枢梳殊抒输叔舒淑疏书赎孰熟薯暑曙署蜀黍鼠属术述树束戍竖墅庶数漱恕倏塾菽忄沭涑澍姝纾毹腧殳镯秫鹬"],["shua","刷耍唰涮"],["shuai","摔衰甩帅蟀"],["shuan","栓拴闩"],["shuang","霜双爽孀"],["shui","谁水睡税"],["shun","吮瞬顺舜恂"],["shuo","说硕朔烁蒴搠嗍濯妁槊铄"],["si","斯撕嘶思私司丝死肆寺嗣四伺似饲巳厮俟兕菥咝汜泗澌姒驷缌祀祠锶鸶耜蛳笥"],["song","松耸怂颂送宋讼诵凇菘崧嵩忪悚淞竦"],["sou","搜艘擞嗽叟嗖嗾馊溲飕瞍锼螋"],["su","苏酥俗素速粟僳塑溯宿诉肃夙谡蔌嗉愫簌觫稣"],["suan","酸蒜算"],["sui","虽隋随绥髓碎岁穗遂隧祟蓑冫谇濉邃燧眭睢"],["sun","孙损笋荪狲飧榫跣隼"],["suo","梭唆缩琐索锁所唢嗦娑桫睃羧"],["ta","塌他它她塔獭挞蹋踏闼溻遢榻沓"],["tai","胎苔抬台泰酞太态汰邰薹肽炱钛跆鲐"],["tan","坍摊贪瘫滩坛檀痰潭谭谈坦毯袒碳探叹炭郯蕈昙钽锬覃"],["tang","汤塘搪堂棠膛唐糖傥饧溏瑭铴镗耥螗螳羰醣"],["tao","掏涛滔绦萄桃逃淘陶讨套挑鼗啕韬饕"],["te","特"],["teng","藤腾疼誊滕"],["thang","倘躺淌"],["theng","趟烫"],["ti","梯剔踢锑提题蹄啼体替嚏惕涕剃屉荑悌逖绨缇鹈裼醍"],["tian","天添填田甜恬舔腆掭忝阗殄畋钿蚺"],["tiao","条迢眺跳佻祧铫窕龆鲦"],["tie","贴铁帖萜餮"],["ting","厅听烃汀廷停亭庭挺艇莛葶婷梃蜓霆"],["tong","通桐酮瞳同铜彤童桶捅筒统痛佟僮仝茼嗵恸潼砼"],["tou","偷投头透亠"],["tu","凸秃突图徒途涂屠土吐兔堍荼菟钍酴"],["tuan","湍团疃"],["tui","推颓腿蜕褪退忒煺"],["tun","吞屯臀饨暾豚窀"],["tuo","拖托脱鸵陀驮驼椭妥拓唾乇佗坨庹沱柝砣箨舄跎鼍"],["wa","挖哇蛙洼娃瓦袜佤娲腽"],["wai","歪外"],["wan","豌弯湾玩顽丸烷完碗挽晚皖惋宛婉万腕剜芄苋菀纨绾琬脘畹蜿箢"],["wang","汪王亡枉网往旺望忘妄罔尢惘辋魍"],["wei","威巍微危韦违桅围唯惟为潍维苇萎委伟伪尾纬未蔚味畏胃喂魏位渭谓尉慰卫倭偎诿隈葳薇帏帷崴嵬猥猬闱沩洧涠逶娓玮韪軎炜煨熨痿艉鲔"],["wen","瘟温蚊文闻纹吻稳紊问刎愠阌汶璺韫殁雯"],["weng","嗡翁瓮蓊蕹"],["wo","挝蜗涡窝我斡卧握沃莴幄渥杌肟龌"],["wu","巫呜钨乌污诬屋无芜梧吾吴毋武五捂午舞伍侮坞戊雾晤物勿务悟误兀仵阢邬圬芴庑怃忤浯寤迕妩骛牾焐鹉鹜蜈鋈鼯"],["xi","昔熙析西硒矽晰嘻吸锡牺稀息希悉膝夕惜熄烯溪汐犀檄袭席习媳喜铣洗系隙戏细僖兮隰郗茜葸蓰奚唏徙饩阋浠淅屣嬉玺樨曦觋欷熹禊禧钸皙穸蜥蟋舾羲粞翕醯鼷"],["xia","瞎虾匣霞辖暇峡侠狭下厦夏吓掀葭嗄狎遐瑕硖瘕罅黠"],["xian","锨先仙鲜纤咸贤衔舷闲涎弦嫌显险现献县腺馅羡宪陷限线冼藓岘猃暹娴氙祆鹇痫蚬筅籼酰跹"],["xiang","相厢镶香箱襄湘乡翔祥详想响享项巷橡像向象芗葙饷庠骧缃蟓鲞飨"],["xiao","萧硝霄削哮嚣销消宵淆晓小孝校肖啸笑效哓咻崤潇逍骁绡枭枵筱箫魈"],["xie","楔些歇蝎鞋协挟携邪斜胁谐写械卸蟹懈泄泻谢屑偕亵勰燮薤撷廨瀣邂绁缬榭榍歙躞"],["xin","薪芯锌欣辛新忻心信衅囟馨莘歆铽鑫"],["xing","星腥猩惺兴刑型形邢行醒幸杏性姓陉荇荥擤悻硎"],["xiong","兄凶胸匈汹雄熊芎"],["xiu","休修羞朽嗅锈秀袖绣莠岫馐庥鸺貅髹"],["xu","墟戌需虚嘘须徐许蓄酗叙旭序畜恤絮婿绪续讴诩圩蓿怵洫溆顼栩煦砉盱胥糈醑"],["xuan","轩喧宣悬旋玄选癣眩绚儇谖萱揎馔泫洵渲漩璇楦暄炫煊碹铉镟痃"],["xue","靴薛学穴雪血噱泶鳕"],["xun","勋熏循旬询寻驯巡殉汛训讯逊迅巽埙荀薰峋徇浔曛窨醺鲟"],["ya","压押鸦鸭呀丫芽牙蚜崖衙涯雅哑亚讶伢揠吖岈迓娅琊桠氩砑睚痖"],["yan","焉咽阉烟淹盐严研蜒岩延言颜阎炎沿奄掩眼衍演艳堰燕厌砚雁唁彦焰宴谚验厣靥赝俨偃兖讠谳郾鄢芫菸崦恹闫阏洇湮滟妍嫣琰晏胭腌焱罨筵酽魇餍鼹"],["yang","殃央鸯秧杨扬佯疡羊洋阳氧仰痒养样漾徉怏泱炀烊恙蛘鞅"],["yao","邀腰妖瑶摇尧遥窑谣姚咬舀药要耀夭爻吆崾徭瀹幺珧杳曜肴鹞窈繇鳐"],["ye","椰噎耶爷野冶也页掖业叶曳腋夜液谒邺揶馀晔烨铘"],["yi","一壹医揖铱依伊衣颐夷遗移仪胰疑沂宜姨彝椅蚁倚已乙矣以艺抑易邑屹亿役臆逸肄疫亦裔意毅忆义益溢诣议谊译异翼翌绎刈劓佾诒圪圯埸懿苡薏弈奕挹弋呓咦咿噫峄嶷猗饴怿怡悒漪迤驿缢殪贻旖熠钇镒镱痍瘗癔翊衤蜴舣羿翳酏黟"],["yin","茵荫因殷音阴姻吟银淫寅饮尹引隐印胤鄞堙茚喑狺夤氤铟瘾蚓霪龈"],["ying","英樱婴鹰应缨莹萤营荧蝇迎赢盈影颖硬映嬴郢茔莺萦撄嘤膺滢潆瀛瑛璎楹鹦瘿颍罂"],["yo","哟唷"],["yong","拥佣臃痈庸雍踊蛹咏泳涌永恿勇用俑壅墉慵邕镛甬鳙饔"],["you","幽优悠忧尤由邮铀犹油游酉有友右佑釉诱又幼卣攸侑莸呦囿宥柚猷牖铕疣蝣鱿黝鼬"],["yu","迂淤于盂榆虞愚舆余俞逾鱼愉渝渔隅予娱雨与屿禹宇语羽玉域芋郁吁遇喻峪御愈欲狱育誉浴寓裕预豫驭禺毓伛俣谀谕萸蓣揄喁圄圉嵛狳饫庾阈妪妤纡瑜昱觎腴欤於煜燠聿钰鹆瘐瘀窳蝓竽舁雩龉"],["yuan","鸳渊冤元垣袁原援辕园员圆猿源缘远苑愿怨院塬沅媛瑗橼爰眢鸢螈鼋"],["yue","曰约越跃钥岳粤月悦阅龠樾刖钺"],["yun","耘云郧匀陨允运蕴酝晕韵孕郓芸狁恽纭殒昀氲"],["za","匝砸杂拶咂"],["zai","栽哉灾宰载再在咱崽甾"],["zan","攒暂赞瓒昝簪糌趱錾"],["zang","赃脏葬奘戕臧"],["zao","遭糟凿藻枣早澡蚤躁噪造皂灶燥唣缫"],["ze","责择则泽仄赜啧迮昃笮箦舴"],["zei","贼"],["zen","怎谮"],["zeng","增憎曾赠缯甑罾锃"],["zha","扎喳渣札轧铡闸眨栅榨咋乍炸诈揸吒咤哳怍砟痄蚱齄"],["zhai","摘斋宅窄债寨砦"],["zhan","瞻毡詹粘沾盏斩辗崭展蘸栈占战站湛绽谵搌旃"],["zhang","樟章彰漳张掌涨杖丈帐账仗胀瘴障仉鄣幛嶂獐嫜璋蟑"],["zhao","招昭找沼赵照罩兆肇召爪诏棹钊笊"],["zhe","遮折哲蛰辙者锗蔗这浙谪陬柘辄磔鹧褚蜇赭"],["zhen","珍斟真甄砧臻贞针侦枕疹诊震振镇阵缜桢榛轸赈胗朕祯畛鸩"],["zheng","蒸挣睁征狰争怔整拯正政帧症郑证诤峥钲铮筝"],["zhi","芝枝支吱蜘知肢脂汁之织职直植殖执值侄址指止趾只旨纸志挚掷至致置帜峙制智秩稚质炙痔滞治窒卮陟郅埴芷摭帙忮彘咫骘栉枳栀桎轵轾攴贽膣祉祗黹雉鸷痣蛭絷酯跖踬踯豸觯"],["zhong","中盅忠钟衷终种肿重仲众冢锺螽舂舯踵"],["zhou","舟周州洲诌粥轴肘帚咒皱宙昼骤啄着倜诹荮鬻纣胄碡籀舳酎鲷"],["zhu","珠株蛛朱猪诸诛逐竹烛煮拄瞩嘱主著柱助蛀贮铸筑住注祝驻伫侏邾苎茱洙渚潴驺杼槠橥炷铢疰瘃蚰竺箸翥躅麈"],["zhua","抓"],["zhuai","拽"],["zhuan","专砖转撰赚篆抟啭颛"],["zhuang","桩庄装妆撞壮状丬"],["zhui","椎锥追赘坠缀萑骓缒"],["zhun","谆准"],["zhuo","捉拙卓桌琢茁酌灼浊倬诼廴蕞擢啜浞涿杓焯禚斫"],["zi","兹咨资姿滋淄孜紫仔籽滓子自渍字谘嵫姊孳缁梓辎赀恣眦锱秭耔笫粢觜訾鲻髭"],["zong","鬃棕踪宗综总纵腙粽"],["zou","邹走奏揍鄹鲰"],["zu","租足卒族祖诅阻组俎菹啐徂驵蹴"],["zuan","钻纂攥缵"],["zui","嘴醉最罪"],["zun","尊遵撙樽鳟"],["zuo","昨左佐柞做作坐座阝阼胙祚酢"]];i.__esModule=!0,i.default=u},"./src/index.ts":function(n,i,u){"use strict";var a=u("./src/simple-pinyin.ts");i.__esModule=!0,i.default=a.default},"./src/simple-pinyin.ts":function(n,i,u){"use strict";var a=u("./src/dict.ts"),e={pinyinOnly:!0},o=new RegExp("[a-zA-Z0-9]"),t=function(n){return function(i){return i[1].indexOf(n)>=0}},g=function(){return"function"==typeof Array.prototype.find?function(n){return a.default.find(n)}:"function"==typeof Array.prototype.filter?function(n){return a.default.filter(n)[0]}:function(n){for(var i,u=0;u<a.default.length;u++){var e=a.default[u];if(n(e)){i=e;break}}return i}},r=function(n,i){if(void 0===i&&(i=e),"string"!=typeof n)throw TypeError("Input for simplePinyin must be string");for(var u=g(),a=[],r=0;r<n.length;r++){var s=n.substr(r,1);if(0!==s.trim().length&&" "!==s)if(o.test(s)){if(i.pinyinOnly)continue;var h=n.substr(r-1,1);0!==r&&o.test(h)?a[a.length-1]+=s:a.push(s)}else{var c=t(s),f=u(c);if(f)a.push(f[0]);else{if(i.pinyinOnly)continue;a.push(s)}}}return a};i.__esModule=!0,i.default=r},0:function(n,i,u){n.exports=u("./src/index.ts")}})});
//# sourceMappingURL=index.min.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
 *  base64.js
 *
 *  Licensed under the BSD 3-Clause License.
 *    http://opensource.org/licenses/BSD-3-Clause
 *
 *  References:
 *    http://en.wikipedia.org/wiki/Base64
 */
;(function (global, factory) {
     true
        ? module.exports = factory(global)
        : undefined
}((
    typeof self !== 'undefined' ? self
        : typeof window !== 'undefined' ? window
        : typeof global !== 'undefined' ? global
: this
), function(global) {
    'use strict';
    // existing version for noConflict()
    global = global || {};
    var _Base64 = global.Base64;
    var version = "2.6.4";
    // constants
    var b64chars
        = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
    var b64tab = function(bin) {
        var t = {};
        for (var i = 0, l = bin.length; i < l; i++) t[bin.charAt(i)] = i;
        return t;
    }(b64chars);
    var fromCharCode = String.fromCharCode;
    // encoder stuff
    var cb_utob = function(c) {
        if (c.length < 2) {
            var cc = c.charCodeAt(0);
            return cc < 0x80 ? c
                : cc < 0x800 ? (fromCharCode(0xc0 | (cc >>> 6))
                                + fromCharCode(0x80 | (cc & 0x3f)))
                : (fromCharCode(0xe0 | ((cc >>> 12) & 0x0f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        } else {
            var cc = 0x10000
                + (c.charCodeAt(0) - 0xD800) * 0x400
                + (c.charCodeAt(1) - 0xDC00);
            return (fromCharCode(0xf0 | ((cc >>> 18) & 0x07))
                    + fromCharCode(0x80 | ((cc >>> 12) & 0x3f))
                    + fromCharCode(0x80 | ((cc >>>  6) & 0x3f))
                    + fromCharCode(0x80 | ( cc         & 0x3f)));
        }
    };
    var re_utob = /[\uD800-\uDBFF][\uDC00-\uDFFFF]|[^\x00-\x7F]/g;
    var utob = function(u) {
        return u.replace(re_utob, cb_utob);
    };
    var cb_encode = function(ccc) {
        var padlen = [0, 2, 1][ccc.length % 3],
        ord = ccc.charCodeAt(0) << 16
            | ((ccc.length > 1 ? ccc.charCodeAt(1) : 0) << 8)
            | ((ccc.length > 2 ? ccc.charCodeAt(2) : 0)),
        chars = [
            b64chars.charAt( ord >>> 18),
            b64chars.charAt((ord >>> 12) & 63),
            padlen >= 2 ? '=' : b64chars.charAt((ord >>> 6) & 63),
            padlen >= 1 ? '=' : b64chars.charAt(ord & 63)
        ];
        return chars.join('');
    };
    var btoa = global.btoa && typeof global.btoa == 'function'
        ? function(b){ return global.btoa(b) } : function(b) {
        if (b.match(/[^\x00-\xFF]/)) throw new RangeError(
            'The string contains invalid characters.'
        );
        return b.replace(/[\s\S]{1,3}/g, cb_encode);
    };
    var _encode = function(u) {
        return btoa(utob(String(u)));
    };
    var mkUriSafe = function (b64) {
        return b64.replace(/[+\/]/g, function(m0) {
            return m0 == '+' ? '-' : '_';
        }).replace(/=/g, '');
    };
    var encode = function(u, urisafe) {
        return urisafe ? mkUriSafe(_encode(u)) : _encode(u);
    };
    var encodeURI = function(u) { return encode(u, true) };
    var fromUint8Array;
    if (global.Uint8Array) fromUint8Array = function(a, urisafe) {
        // return btoa(fromCharCode.apply(null, a));
        var b64 = '';
        for (var i = 0, l = a.length; i < l; i += 3) {
            var a0 = a[i], a1 = a[i+1], a2 = a[i+2];
            var ord = a0 << 16 | a1 << 8 | a2;
            b64 +=    b64chars.charAt( ord >>> 18)
                +     b64chars.charAt((ord >>> 12) & 63)
                + ( typeof a1 != 'undefined'
                    ? b64chars.charAt((ord >>>  6) & 63) : '=')
                + ( typeof a2 != 'undefined'
                    ? b64chars.charAt( ord         & 63) : '=');
        }
        return urisafe ? mkUriSafe(b64) : b64;
    };
    // decoder stuff
    var re_btou = /[\xC0-\xDF][\x80-\xBF]|[\xE0-\xEF][\x80-\xBF]{2}|[\xF0-\xF7][\x80-\xBF]{3}/g;
    var cb_btou = function(cccc) {
        switch(cccc.length) {
        case 4:
            var cp = ((0x07 & cccc.charCodeAt(0)) << 18)
                |    ((0x3f & cccc.charCodeAt(1)) << 12)
                |    ((0x3f & cccc.charCodeAt(2)) <<  6)
                |     (0x3f & cccc.charCodeAt(3)),
            offset = cp - 0x10000;
            return (fromCharCode((offset  >>> 10) + 0xD800)
                    + fromCharCode((offset & 0x3FF) + 0xDC00));
        case 3:
            return fromCharCode(
                ((0x0f & cccc.charCodeAt(0)) << 12)
                    | ((0x3f & cccc.charCodeAt(1)) << 6)
                    |  (0x3f & cccc.charCodeAt(2))
            );
        default:
            return  fromCharCode(
                ((0x1f & cccc.charCodeAt(0)) << 6)
                    |  (0x3f & cccc.charCodeAt(1))
            );
        }
    };
    var btou = function(b) {
        return b.replace(re_btou, cb_btou);
    };
    var cb_decode = function(cccc) {
        var len = cccc.length,
        padlen = len % 4,
        n = (len > 0 ? b64tab[cccc.charAt(0)] << 18 : 0)
            | (len > 1 ? b64tab[cccc.charAt(1)] << 12 : 0)
            | (len > 2 ? b64tab[cccc.charAt(2)] <<  6 : 0)
            | (len > 3 ? b64tab[cccc.charAt(3)]       : 0),
        chars = [
            fromCharCode( n >>> 16),
            fromCharCode((n >>>  8) & 0xff),
            fromCharCode( n         & 0xff)
        ];
        chars.length -= [0, 0, 2, 1][padlen];
        return chars.join('');
    };
    var _atob = global.atob && typeof global.atob == 'function'
        ? function(a){ return global.atob(a) } : function(a){
        return a.replace(/\S{1,4}/g, cb_decode);
    };
    var atob = function(a) {
        return _atob(String(a).replace(/[^A-Za-z0-9\+\/]/g, ''));
    };
    var _decode = function(a) { return btou(_atob(a)) };
    var _fromURI = function(a) {
        return String(a).replace(/[-_]/g, function(m0) {
            return m0 == '-' ? '+' : '/'
        }).replace(/[^A-Za-z0-9\+\/]/g, '');
    };
    var decode = function(a){
        return _decode(_fromURI(a));
    };
    var toUint8Array;
    if (global.Uint8Array) toUint8Array = function(a) {
        return Uint8Array.from(atob(_fromURI(a)), function(c) {
            return c.charCodeAt(0);
        });
    };
    var noConflict = function() {
        var Base64 = global.Base64;
        global.Base64 = _Base64;
        return Base64;
    };
    // export Base64
    global.Base64 = {
        VERSION: version,
        atob: atob,
        btoa: btoa,
        fromBase64: decode,
        toBase64: encode,
        utob: utob,
        encode: encode,
        encodeURI: encodeURI,
        btou: btou,
        decode: decode,
        noConflict: noConflict,
        fromUint8Array: fromUint8Array,
        toUint8Array: toUint8Array
    };
    // if ES5 is available, make Base64.extendString() available
    if (typeof Object.defineProperty === 'function') {
        var noEnum = function(v){
            return {value:v,enumerable:false,writable:true,configurable:true};
        };
        global.Base64.extendString = function () {
            Object.defineProperty(
                String.prototype, 'fromBase64', noEnum(function () {
                    return decode(this)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64', noEnum(function (urisafe) {
                    return encode(this, urisafe)
                }));
            Object.defineProperty(
                String.prototype, 'toBase64URI', noEnum(function () {
                    return encode(this, true)
                }));
        };
    }
    //
    // export Base64 to the namespace
    //
    if (global['Meteor']) { // Meteor.js
        Base64 = global.Base64;
    }
    // module.exports and AMD are mutually exclusive.
    // module.exports has precedence.
    if ( true && module.exports) {
        module.exports.Base64 = global.Base64;
    }
    else if (true) {
        // AMD. Register as an anonymous module.
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function(){ return global.Base64 }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }
    // that's it!
    return {Base64: global.Base64}
}));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(2)))

/***/ }),
/* 2 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/uitls/cookie.js
/**
 * Created by shiyonggao on 2019/11/28.
 */

class cookie {
    /**
     * 读取cookie值
     * @param key
     * @param options
     */
    get(key, options) {
        options = options || {};
        let result, decode = options.raw ? function (s) {
            return s;
        } : decodeURIComponent;
        return (result = new RegExp('(?:^|; )' + encodeURIComponent(key) + '=([^;]*)').exec(document.cookie)) ? decode(result[1]) : null;
    }

    /**
     * 删除指定键值所对应的cookie值
     * @param key
     * @param options
     */
    remove(key, options) {
        this.set(key, null, options ? options : {});
    }


    /**
     * 添加指定名称cookie值 , 过期时间小时制
     * @param key
     * @param value
     * @param options
     */
    set(key, value, options) {
        options = Object.assign({}, {
            domain: '',
            path: '/'
        }, options);

        //删除cookie操作处理
        if (value === null) {
            options.expires = -1;
        }

        //设置过期时间
        if (typeof options.expires === 'number') {
            let seconds = options.expires, t = options.expires = new Date();
            t.setTime(t.getTime() + seconds * 1000 * 60 * 60);
        }

        //强制转换为字符串格式
        value = '' + value;

        //设置cookie信息
        return (document.cookie = [
            encodeURIComponent(key), '=',
            options.raw ? value : encodeURIComponent(value),
            options.expires ? '; expires=' + options.expires.toUTCString() : '',
            options.path ? '; path=' + options.path : '',
            options.domain ? '; domain=' + options.domain : '',
            options['secure'] ? '; secure' : ''
        ].join(''));

    }
}

/* harmony default export */ var uitls_cookie = (new cookie());

// CONCATENATED MODULE: ./src/uitls/common.js


 /***
 * @description 判断变量类型
 * @param obj
 * @returns {*}
 */
function checkVarType(obj) {
  let toString = Object.prototype.toString;
  let map = {
    '[object Boolean]': 'boolean',
    '[object Number]': 'number',
    '[object String]': 'string',
    '[object Function]': 'function',
    '[object Array]': 'array',
    '[object Date]': 'date',
    '[object RegExp]': 'regExp',
    '[object Undefined]': 'undefined',
    '[object Null]': 'null',
    '[object Object]': 'object'
  };
  return map[toString.call(obj)];
}






// CONCATENATED MODULE: ./src/uitls/storage.js




/**
 * 本地Session存储
 */
class storage_SessionStorage {
  constructor() {
    this.regKey = /^[a-zA-Z_]+$/;
    this.store = window.sessionStorage ? window.sessionStorage : null;
  }

  check(key) {
    if (!this.store) throw "Browser don't support sessionStorage";
    if (!this.regKey.test(key)) throw "Key the rules is error";
  }

  /***
   * @description 设置sessionStorage值
   * @param key [a-zA-Z_]
   * @param value
   */
  set(key, value) {
    this.check(key);
    /**数组与对象需要序列号**/
    if (checkVarType(value) === 'object'
      || checkVarType(value) === 'array'
    ) {
      value = JSON.stringify(value);
    }
    this.store.setItem(key, value);
  }

  /**
   * @description 获取sessionStorage值
   * @param key
   * @returns {string|null}
   */
  get(key) {
    this.check(key);
    let value = this.store.getItem(key);
    try{
      value = JSON.parse(value);
    }catch (e) {
      console.log('不是对象或者数组')
    }
    return value;
  }

  /**
   *  @description 删除sessionStorage键值
   * @param key
   */
  remove(key) {
    this.check(key);
    this.store.removeItem(key);
  }
}

/**
 * 本地Local存储
 */
class storage_LocalStorage {
  constructor() {
    this.regKey = /^[a-zA-Z_]+$/;
    this.store = window.localStorage ? window.localStorage : null;
  }

  check(key) {
    if (!this.store) throw "Browser don't support localStorage";
    if (!this.regKey.test(key)) throw "Key the rules is error";
  }

  getTime() {
    return Math.floor(new Date().getTime() / 1000);
  }

  /***
   * @description 设置LocalStorage值
   * @param key {string}
   * @param value { Object|Array|string }
   * @param expire {number} 小时单位
   */
  set(key, value, expire) {
    this.check(key);

    /**数组与对象需要序列号**/
    if (checkVarType(value) === 'object'
      || checkVarType(value) === 'array'
    ) {
      value = JSON.stringify(value);
    }

    /**已设置过期期间处理**/
    if (expire && typeof expire === 'number') {
      let expireKey = `${key}_expire_date`;
      let expireValue = this.getTime() + expire * 60 * 60;
      this.store.setItem(expireKey, expireValue);
      this.store.setItem(key, value);
    } else {
      this.store.setItem(key, value);
    }
  }

  /**
   * @description 获取LocalStorage值
   * @param key {string}
   * @returns {string|null}
   */
  get(key) {
    this.check(key);
    let value = this.store.getItem(key);

    /**有值**/
    if (value) {
      let expireKey = `${key}_expire_date`;
      let time = this.store.getItem(expireKey);
      /**判断是否设置有效期**/
      if (time) {
        /**数据已过期**/
        if (time < this.getTime()) {
          this.remove(key);
          this.remove(expireKey);
          return null;
        } else {
          try {
            return JSON.parse(value);
          } catch (e) {
            console.log('不是对象或者数组')
            return value;
          }
        }
      } else {
        try {
          return JSON.parse(value);
        } catch (e) {
          console.log('不是对象或者数组')
          return value;
        }
      }
    } else {
      return null;
    }
  }

  /**
   *@description 删除LocalStorage值
   * @param key
   */
  remove(key) {
    this.check(key);
    let expireKey = `${key}_expire_date`;
    this.store.removeItem(key);
    let time = this.store.getItem(expireKey);
    if (time) this.store.removeItem(expireKey);
  }
}

/* harmony default export */ var storage = ({
  sessionStore: new storage_SessionStorage(),
  localStore: new storage_LocalStorage()
});

// EXTERNAL MODULE: ./node_modules/simple-pinyin/dist/index.min.js
var index_min = __webpack_require__(0);
var index_min_default = /*#__PURE__*/__webpack_require__.n(index_min);

// CONCATENATED MODULE: ./src/uitls/pinyin.js




class pinyin_Pinyin {
  constructor() {

    /**
     * @description 转化类型
     * @type {{matchFullText: string}}
     * //blank，非拼音输出为空字符串
     * //空 跳过非拼音
     * //original 非拼音输出为原始字符
     */
    this.options = {
      matchFullText: ''
    }
  }

  /**
   * @description 获取全拼字符串
   * @param str
   * @returns {string}
   */
  getfullName(str) {
    this.options.matchFullText = 'original';
    let temp = index_min_default()(str, this.options);
    return temp.join('');
  }

  /**
   * @description 获取汉字的拼音首字母 汉英混排的时候汉语与英语之间使用"空格"隔开
   * @example getFirstLetter('妈妈跟我说再也不用担心我的 Chinese 不知道怎么念了。');
   * @param str
   */
  getFirstLetter(str) {
    this.options.matchFullText = 'original';
    let temp = index_min_default()(str, this.options);
    let len  = temp.length;
    let tempLetter = [];
    for(let i = 0; i < len ; i++) {
      if(temp[i].length > 1) {
        if(i === 0) {
          tempLetter.push(temp[i]);
        }
        else {
          tempLetter.push(' ');
          tempLetter.push(temp[i]);
        }
      }else {
        tempLetter.push(temp[i]);
      }
    }

    let newArr = tempLetter.join('').split(' ');
    let newArrLen = newArr.length;
    let firstLetter = [];
    for(let k = 0; k < newArrLen; k++) {
      if(newArr[k].length > 1) {
        firstLetter.push(newArr[k][0]);
      }else{
        firstLetter.push(newArr[k]);
      }
    }
    //console.log(firstLetter.join(''));
    return firstLetter.join('');

  }
}

/* harmony default export */ var pinyin = (new pinyin_Pinyin());

// EXTERNAL MODULE: ./node_modules/js-base64/base64.js
var base64 = __webpack_require__(1);

// CONCATENATED MODULE: ./src/uitls/helper.js









class helper_Helpers {

  constructor(setting){
    this.setting = setting
  }

  /***
   * @description 判断变量类型
   * @param obj
   * @returns {*}
   */
	checkVarType(obj){
    return checkVarType(obj)
	}

  /**
   * @description 获取最近某时间断内的时间
   * @param lastDay 默认30天
   * @returns {number}
   */
  getTime(lastDay = 30) {
    let now = new Date().getTime();
    let randomDay = this.random({min: 0, max: lastDay}); //获取随机天数毫秒数字
    let randomHour = this.random({min: 0, max: 23}); //获取随机小时数
    let randomMinutes = this.random({min: 0, max: 59}); //获取随机分钟数
    let randomSeconds = this.random({min: 0, max: 59}); //获取随机秒数

    randomDay = randomDay * 24 * 60 * 60 * 1000;
    randomHour = randomHour * 60 * 60 * 1000;
    randomMinutes = randomMinutes * 60 * 1000;
    randomSeconds = randomSeconds * 1000;
    return now - randomDay + randomHour + randomMinutes + randomSeconds;
  }

  /**
   * @description 简单深拷贝
   * @param json
   * @returns {any}
   */
  cloneDeep(json){
    if(this.checkVarType(json) ==='object'
      || this.checkVarType(json) === 'array'
    ) {
      return JSON.parse(JSON.stringify(json));
    }
    return json;
  }

  /***
   * @description 随机数字值
   * @param min 最小数
   * @param max 最大数
   * @returns {*}
   */
  random(min, max) {
    let Range = max - min;
    let Rand = Math.random();
    return (min + Math.round(Rand * Range));
  }

  /**
   * @description 随机数组的值
   * @param arr {Array}
   */
  romdomArray(arr = []) {
    if (arr.length === 0) return null;
    if (arr.length === 1) return arr[0];
    let min = 0;
    let max = arr.length - 1;
    let index = this.random(min, max);
    return arr[index];
  }

  /**
   * @description 统一返回格式
   * @param data
   * @param code
   * @param message
   */
  callback(data = [], code = 200, message = 'success') {
    return {
      code,
      data,
      message
    }
  }


  /**
   * @description 检测查找数组是否在原数组中
   * @param sourceArray 原数组
   * @param findArray 查找数组
   * @returns {boolean}
   */
  inArray(sourceArray = [], findArray = []){
    if(this.checkVarType(sourceArray) === 'array' &&
      this.checkVarType(findArray) === 'array'
    ){
      let sourceArraylen = sourceArray.length;
      let find = this.cloneDeep(findArray);
      let temp = [];
      //console.log(findArray, sourceArray)
      for(let i =0 ;i < sourceArraylen;i++) {
        let sourceVal = sourceArray[i];
        for( let k = 0 ; k < find.length; k++) {
          if(find[k] === sourceVal) {
            temp.push(true);
            find.splice(k,1);
            break;
          }
        }
      }
      //console.log('kkkkk',findArray, temp);
      return findArray.length === temp.length;
    }
    else {
      return false;
    }
  }

  /**
   * @description 数组去重复
   * @param sourceArray
   * @returns {*[]}
   */
  repeatArray(sourceArray = []){
    if(this.checkVarType(sourceArray) !== 'array') {
      console.log('repeatArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')
    }
    return Array.from(new Set(sourceArray))
  }

  /***
   * @description 数组并集
   * @param sourceArray
   * @param findArray
   * @returns {*[]}
   */
  unionArray(sourceArray = [], findArray = []){
    if (this.checkVarType(sourceArray) !== 'array') {
      console.log('unionArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')

    }
    if (this.checkVarType(findArray) !== 'array') {
      console.log('unionArray.findArray.error', findArray);
      throw new Error('findArray参数类型是数组')
    }
    return Array.from(new Set(sourceArray.concat(findArray)))
  }

  /**
   * @description 数组交集
   * @param sourceArray
   * @param findArray
   * @returns {*[]}
   */
  intersectionArray(sourceArray = [], findArray = []){
    if (this.checkVarType(sourceArray) !== 'array') {
      console.log('intersectionArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')
    }
    if (this.checkVarType(findArray) !== 'array') {
      console.log('intersectionArray.findArray.error', findArray);
      throw new Error('findArray参数类型是数组')
    }
    return sourceArray.filter(function (v) {
      return findArray.indexOf(v) > -1
    })
  }

  /**
   * @description 数组差集
   * @param sourceArray
   * @param findArray
   * @returns {*[]}
   */
  differenceArray(sourceArray = [], findArray = []){
    if (this.checkVarType(sourceArray) !== 'array') {
      console.log('differenceArray.sourceArray.error', sourceArray);
      throw new Error('sourceArray参数类型是数组')
    }
    if (this.checkVarType(findArray) !== 'array') {
      console.log('differenceArray.findArray.error', findArray);
      throw new Error('findArray参数类型是数组')
    }
    return sourceArray.filter(function (v) {
      return findArray.indexOf(v) === -1
    }).concat(findArray.filter(function (v) {
      return sourceArray.indexOf(v) === -1
    }))
  }

  /**
   * @description 检查对象或者数组是否为空
   * @param obj
   * @return boolean
   */
  isEmpty(obj) {
    if (this.checkVarType(obj) === 'array' ||
      this.checkVarType(obj) === 'object'
    ) {
      let str = JSON.stringify(obj);
      if (str === '{}' || str === '[]') {
        return true;
      } else {
        return false;
      }
    } else {
      console.log('isEmpty.error', obj);
      throw new Error('只支持数组与JSON对象格式');
    }
  }


  /**
   * @description 只支持数组与JSON对象格式遍历
   * @param source
   * @param callback
   */
  forEach(source, callback){
    if(this.checkVarType(source) === 'object' && !this.isEmpty(source)) {
      Object.keys(source).forEach(callback);
    }else if(this.checkVarType(source) === 'array') {
      source.forEach((item, index)=>{
        callback(index);
      });
    }else{
      console.log('forEach.error', source);
      throw new Error('只支持数组与JSON对象格式');
    }
  }

  /***
   * @description 转化为vue element UI选择插件数据格式
   * @example {key1: 'name',key1: 'name'}
   * @param data
   * @return Array
   */
  keyToSelectData(data) {
    let temp = [];
    let reg = /^[0-9]+$/;
    this.forEach(data, (key) => {
      let k = key;
      if (reg.test(key)) k = parseInt(key);
      temp.push({
        id: k,
        key: key,
        value: k,
        label: data[key],
        fullname: pinyin.getfullName(data[key]),
        firstLetter: pinyin.getFirstLetter(data[key]),
      });
    });
    return temp
  }

  /**
   * @description 转化为vue element UI选择插件数据格式
   * @example [{id: 1,name: 'name1'},{id: 1,name: 'name1'}];
   * @param data 原始数据
   * @param name 指定Name key
   * @param id 指定Name kei
   * @param force 字符串数字id是否强制转换数字类型
   */
  idToSelectData(data, name = 'name', id = 'id', force = true) {

    if (this.checkVarType(data) !== 'array') {
      console.log('idToSelectData() Data type not array', data);
      console.error('idToSelectData() Data type not array');
      return [];
    }

    let temp = [];
    this.forEach(data, (index) => {

      let regNumber = /^[0-9]+$/;
      let item = this.cloneDeep(data[index]);
      let numId = item[id];
      if (numId !== '') {

        //字符串数字id转number
        if (force && this.checkVarType(item[id]) === 'string' && regNumber.test(item[id])) {
          numId = parseInt(item[id]);
        }
        if(force) {
          item['id'] = numId;
          item['key'] = numId;
        }else {
          if (!item['id']) item['id'] = numId;
          if (!item['key']) item['key'] = numId;
        }

        item['value'] = numId;
        item['label'] = item[name];
        item['fullname'] = pinyin.getfullName(item[name]);
        item['firstLetter'] = pinyin.getFirstLetter(item[name]);
        temp.push(item);
      }
    });
    //console.log('idToSelectData', name, id, temp);
    return temp
  }

  /**
   * @deprecated 检查值是否在数组中或者对象中并返回结果
   * @param list
   * @param value
   * @param keyName
   * @example
   * [{id: 1,name:'gao'},{id: 2,name:'wu'}]
   * OR
   * {'1':{id: 1,name:'gao'},'2':{id: 2,name:'wu'}}
   * @return []
   */
  isKeyInLists(list, value, keyName='id'){
    let items = null;
    if(this.checkVarType(list) === 'array'
      || this.checkVarType(list) === 'object'
    ){
      this.forEach(list,(index)=>{
        let item = list[index];
        if(String(value) === String(list[index][keyName])) {
          items = item;
        }
      });
      return items;
    }
    else{
      console.log('isKeyInLists.error', list);
      throw new Error('只支持数组与JSON对象格式');

    }
  }

  /**
   * @deprecated 获取数组或者对象中的摸个key的value值
   * @param list
   * @param keyName
   * @example
   * [{id: 1,name:'gao'},{id: 2,name:'wu'}]
   * OR
   * {'1':{id: 1,name:'gao'},'2':{id: 2,name:'wu'}}
   * @return []
   */
  getListKeyForValue(list, keyName = 'id'){
    let arr = [];
    if (this.checkVarType(list) === 'array'
      || this.checkVarType(list) === 'object'
    ) {
      this.forEach(list, (index) => {
        let item = list[index];
        arr.push(item[keyName]);
      });
      return arr;
    } else {
      console.log('getListKeyForValue.error', list);
      throw new Error('只支持数组与JSON对象格式');
    }
  }

  /**
   * @description 删除参数中[all|''|null|undefined]
   * @param source
   * @param ignoreKey 忽略的key
   */
  deleteParamEmptyKey(source, ignoreKey = [] ){
    let data = this.cloneDeep(source); //防止对象浅拷贝
    this.forEach(data, (key) => {
      if(ignoreKey.length > 0) {
        if(!this.inArray(ignoreKey,[key])) {
          if (data[key] === 'all' || data[key] === '' || data[key] === null  || data[key] === undefined ) {
            delete data[key];
          }
        }
      }
      else{
        if (data[key] === 'all' || data[key] === '') {
          delete data[key];
        }
      }

    });
    return data;
  }


  checkPath(path, params) {
    let arr = path.split('/');
    this.forEach(params, (key) => {
      let val = params[key];
      for (let i = 0; i < arr.length; i++) {
        if (val === arr[i]) {
          arr.splice(i, 1, ':' + key);
        }
      }
    });
    return arr.join('/');
  }

  /**
   * @description Menu Tree
   * @param paths
   * @param path
   */
  isFindPath(paths, path) {
    let temp = [];
    let deep = (tree, parent) => {
      for (let i = 0; i < tree.length; i++) {
        if (tree[i]['children'] && tree[i]['children'].length > 0) {
          deep(tree[i]['children']);
        } else {
          temp.push(tree[i]['parentFullPath']);
          //console.log('parentFullPath', tree[i]['parentFullPath']);
        }
      }
    };
    deep(paths);

    let flag = false;
    for (let j = 0; j < temp.length; j++) {
      let fullname = this.checkPath(path.path, path.params);
      //console.log('fullname', fullname , temp[j]);
      if (fullname === temp[j]) {
        flag = true;
        break;
      }
    }
    //console.log('flag', flag, this.checkPath(path.path, path.params));
    return flag;
  }


  /**
   * @description url base64.encode
   * @param row
   */
  paramsBase64Encode(row){
    return base64["Base64"].encodeURI(JSON.stringify(row));
  }

  /**
   * @description url base64.decode
   * @param base64Str
   */
  paramsBase64Decode(base64Str) {
    try{
      return JSON.parse(base64["Base64"].decode(base64Str));
    }
    catch (e) {
      return {};
    }

  }

  /**
   * @description 对象转url参数
   * @param params
   */
  jsonToParams(params){
    params = this.cloneDeep(params);
    let paramsStr = '';
    let count = 0;
    this.forEach(params, (key) => {
      if(count === 0) {
        paramsStr = `${key}=${params[key]}`;
      }
      else{
        paramsStr += `&${key}=${params[key]}`;
      }
      count++;
    });
    return paramsStr;
  }


  /**
   * @description 字符串截取
   * @param val
   * @param len
   */
  cutStringLen(val, len = 10) {
    let fix = '...';
    let newLength = 0;
    let newStr = "";
    let chineseRegex = /[^\x00-\xff]/g;
    let singleChar = "";
    let strLength = val.replace(chineseRegex, "**").length;
    for (let i = 0; i < strLength; i++) {
      singleChar = val.charAt(i).toString();
      if (singleChar.match(chineseRegex) != null) {
        newLength += 2;
      } else {
        newLength++;
      }
      if (newLength > len) {
        break;
      }
      newStr += singleChar;
    }
    if (strLength > len) {
      newStr += fix;
    }
    return newStr;
  }

  /***
   * 解析url地址
   * @param url
   * @returns {}
   */
  parseURL(url) {
    if (!url) url = window.location.href;
    let a = document.createElement('a');
    a.href = url;
    return {
      source: url,
      protocol: a.protocol.replace(':', ''),
      host: a.hostname,
      port: a.port,
      query: a.search,
      params: (function () {
        let ret = {},
          seg = a.search.replace(/^\?/, '').split('&'),
          len = seg.length, i = 0, s;
        for (; i < len; i++) {
          if (!seg[i]) {
            continue;
          }
          s = seg[i].split('=');
          if (s[1]) {
            ret[s[0]] = s[1];
          }
        }
        return ret;
      })(),
      file: (a.pathname.match(/\/([^\/?#]+)$/i) || [, ''])[1],
      hash: a.hash.replace('#', ''),
      path: a.pathname.replace(/^([^\/])/, '/$1'),
      relative: (a.href.match(/tps?:\/\/[^\/]+(.+)/) || [, ''])[1],
      segments: a.pathname.replace(/^\//, '').split('/')
    };
  }

  /**
   * 获取参数值
   * @param key
   * @returns {null|*}
   */
  getParmater(key) {
    let params = this.parseURL()['params'];
    if (params && params[key]) {
      return params[key];
    } else {
      return null;
    }
  }

  /**
   * @description 获取用户登录token
   */
  getToken() {
    if(this.setting && this.setting['userInfoSaveCookieKey']) {
      let token = uitls_cookie.get(this.setting['userInfoSaveCookieKey']);
      if (token) {
        return uitls_cookie.get(this.setting['userInfoSaveCookieKey']);
      } else {
        this.removeUserInfo();
        return token;
      }
    }
    else {
      throw new Error('无配置信息选项');
    }
  }

  /***
   * @description 获取用户信息
   */
  getUserInfo() {
    if (this.setting && this.setting['userInfoSaveStoreKey']) {
      if (this.getToken) {
        return storage.localStore.get(this.setting['userInfoSaveStoreKey']);
      } else {
        return null;
      }
    }
    else {
      throw new Error('无配置信息选项');
    }

  }

  /**
   * @description 退出登录
   */
  removeUserInfo() {
    if (this.setting && this.setting['userInfoSaveCookieKey']) {
      uitls_cookie.remove(this.setting['userInfoSaveCookieKey']);
      uitls_cookie.remove('demandCount');
    } else {
      throw new Error('无配置信息选项');
    }

    if (this.setting && this.setting['userInfoSaveStoreKey']) {
      storage.localStore.remove(this.setting['userInfoSaveStoreKey']);
    } else {
      throw new Error('无配置信息选项');
    }
  }

  /***
   * @description 根据路由获取商品类型
   * @param markeConstant
   * @param route
   */
  getMarketType(route, markeConstant) {
    if(!markeConstant) {
      markeConstant = {
        SHOP: '1',
        CAKE: '2',
        BOOK: '4',
        MEDIA: '5',
        TRAVEL: '6'
      }
    }
    let routeArr = route.path.split('/');
    let typeKey = routeArr[2].toLocaleUpperCase();
    console.log('routeArr', markeConstant[typeKey],typeKey);
    return markeConstant[typeKey];
  }

  /***
   * @description 根据路由获取商品类型路由名称
   * @param route
   * @param index
   */
  getMarketRouteListName(route,index=2){
    let routeArr = route.path.split('/');
    let typeKey = routeArr[index].toLocaleLowerCase();
    console.log('routeArr', typeKey, index);
    return `/market/${typeKey}/list`;
  }

  /***
   * @description 获取路由某段值
   * @param route
   * @param index
   */
  getMarketRouteKey(route, index=0) {
    let routeArr = route.path.split('/');
    let typeKey = routeArr[index].toLocaleLowerCase();
    console.log('routeArr', typeKey, index);
    return typeKey
  }

  /**
   * @description 判断俩个需要处理的数字谁的小数点后位数多，
   * 以多的为准，值乘以10的小数位的幂数，相加以后，再除以10的小数位的幂数
   * @param currentNum
   * @param targetNum
   */
  checkFloatMore(currentNum, targetNum){
    let sq1, sq2;
    try {sq1 = currentNum.toString().split(".")[1].length;}
    catch (e) {sq1 = 0;}
    try {sq2 = targetNum.toString().split(".")[1].length;}
    catch (e) {sq2 = 0;}
    return Math.pow(10, Math.max(sq1, sq2));
  }

  /**
   * @description 两个小数相加
   * @param currentNum
   * @param targetNum
   * @return number
   */
  addFloatNumber(currentNum, targetNum){
    let power = this.checkFloatMore(currentNum, targetNum);
    return (currentNum * power + targetNum * power) / power;
  }

  /**
   * @description 两个小数减
   * @param currentNum
   * @param targetNum
   * @return number
   */
  cutFloatNumber(currentNum, targetNum) {
    let power = this.checkFloatMore(currentNum, targetNum);
    return (currentNum * power - targetNum * power) / power;
  }

  /**
   * @description 计算两个小数相乘
   * @param currentNum
   * @param targetNum
   * @returns {number}
   */
  multiplyFloatNumber(currentNum, targetNum){
    let m = 0, s1 = currentNum.toString(), s2 = targetNum.toString();
    try {m += s1.split(".")[1].length;} catch (e) {}
    try {m += s2.split(".")[1].length;} catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  }

  /**
   * @description 计算两个小数相除
   * @param currentNum
   * @param targetNum
   * @returns {number}
   */
  divisionFloatNumber(currentNum, targetNum){
    let t1 = 0, t2 = 0, r1, r2;
    try {t1 = currentNum.toString().split(".")[1].length} catch (e) {}
    try {t2 = targetNum.toString().split(".")[1].length} catch (e) {}
    r1 = Number(currentNum.toString().replace(".", ""))
    r2 = Number(targetNum.toString().replace(".", ""))
    return (r1 / r2) * Math.pow(10, t2 - t1);
  }

  /**
   * @description 去掉左边指定字符串
   * @param str
   * @param replaceStr
   * @returns {string}
   */
  tirmL(str = '', replaceStr = ',') {
    if (!str || this.checkVarType(str) !== 'string') {
      return str;
    }
    let homeReg = new RegExp(`^(${replaceStr})(.+)$`);
    let homeMatchStr = str.match(homeReg);
    if (homeMatchStr) str = homeMatchStr[2];
    return str;
  }

  /**
   * @description 去掉右边指定字符串
   * @param str
   * @param replaceStr
   * @returns {string}
   */
  tirmR(str = '', replaceStr = ',') {
    if (!str || this.checkVarType(str) !== 'string') {
      return str;
    }
    let endReg = new RegExp(`^(.+)(${replaceStr})$`);
    let endMatchStr = str.match(endReg);
    if (endMatchStr) str = endMatchStr[1];
    return str;
  }

  /**
   * @description 去掉两部指定字符串
   * @param str
   * @param replaceStr
   * @return {string}
   */
  tirm(str = '', replaceStr = ',') {
    str = this.tirmL(str, replaceStr);
    str = this.tirmR(str, replaceStr);
    return str;
  }

  /**
   * @description 搜索到匹配关键字高亮处理
   * @param str {string} 需要检索的字符串
   * @param keyword {string|array} 搜索关键字
   * @param options {object}
   * @param options.tag 有效的html中有效的tag标签
   * @param options.color 匹配的字符高亮颜色 默认：red
   * @param options.weight
   * ，css font-weight有效值，默认：normal
   * @returns {*}
   */
  searchHigh(str, keyword, options = {}) {
    try {
      let __option = {
        tag: 'span',
        color: 'red',
        weight: 'normal',
      };
      if (this.checkVarType(keyword) === 'array') {
        keyword = keyword.join('|');
      } else if (this.checkVarType(keyword) === 'string') {
        keyword = keyword.trim();
      } else {
        throw new Error('关键字类型错误')
      }
      let opt = Object.assign({}, __option, options);
      let reg = new RegExp(`(${keyword})`, 'ig');
      return str.replace(reg, `<${opt.tag} style="color:${opt.color};font-weight: ${opt.weight}">$1</${opt.tag}>`);
    } catch (e) {
      console.error(e)
      return str;
    }
  }

  /**
   * @description 加载js文件
   * @param src
   * @param done
   */
  sripts(src, done) {
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = src;
    document.body.appendChild(s);
    s.onload = () => {
      done();
    }
  }

  /**
   * @description 加载js|css文件
   * @param arr {string|array} js地址 ['http://www.xxx.com/xxx.js'] | 'http://www.xxx.com/xxx.js'
   * @param type {string} // type=css|js
   * @return {Promise}
   */
  loadFile(arr, type = 'js') {
    let loader = [];
    if (this.checkVarType(arr) === 'string' || this.checkVarType(arr) === 'array') {
      if (this.checkVarType(arr) === 'string') {
        arr = [arr];
      }
      let len = arr.length;
      return new Promise((resolve) => {
        arr.map((value) => {
          let fnName = 'sripts';
          if (type === 'css') {
            fnName = 'css';
          }
          this[fnName](value, () => {
            loader.push(value);
            if (len === loader.length) {
              resolve(loader);
            }
          })
        });
      });
    } else {
      console.error('传入的参数格式错误', arr);
      throw Error('传入的参数格式错误');
      return new Promise((resolve, reject) => {
        reject('传入的参数格式错误')
      });
    }

  }

  /**
   * @description 加载文件
   * @param url
   * @param done
   */
  css(url, done) {
    let ele = document.createElement('link');
    ele.type = "text/css";
    ele.rel = "stylesheet";
    ele.href = url;
    document.head.appendChild(ele);
    ele.onload = () => {
      setTimeout(() => {
        done();
      }, 500);
    }
  }

  /**
   * @description 过滤html标签
   * @param html html文本
   * @param allowed 允许通过的标签 例如：'<p><a><li>'
   * @returns {string|XML}
   */
  filterHtml(html, allowed) {
    allowed = allowed == undefined ? '' : allowed;
    allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join('');
    let tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
      commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;
    return html.replace(commentsAndPhpTags, '').replace(tags, function ($0, $1) {
      return allowed.indexOf('<' + $1.toLowerCase() + '>') > -1 ? $0 : '';
    });
  };



}

/* harmony default export */ var helper = (helper_Helpers);

// CONCATENATED MODULE: ./src/uitls/regExps.js

class RegExps {
  constructor() {
    this.regChinese = '([\u4E00-\uFA29]|[\uE7C7-\uE7F3])';
    this.letter = '[a-zA-Z]';
    this.letterD = '[A-Z]';
    this.num = '[0-9]';
    this.email = new RegExp("^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    this.regChineseAndLetter = "([\u4E00-\uFA29]|[\uE7C7-\uE7F3]|[a-zA-Z])";
    this.numberAndletter = "([0-9]|[a-zA-Z])";
    this.character = "(\.)";
    this.rankname = "([a-zA-Z0-9\.])";
  }

  /**
   * @description 获取任意长度数字和大小写字母
   * @returns {RegExp}
   */
  getAnyNumAndLetter() {
    return new RegExp(`^${this.numberAndletter}*$`);
  }

  /**
   * @description 获取固定长度数字和大小写字母
   * @returns {RegExp}
   */
  getFixedLenNumAndLetter(min = 0, max = 10) {
    return new RegExp(`^${this.numberAndletter}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度任意字符集正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenChar(min = 0, max = 10) {
    return new RegExp(`^${this.character}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度大小写字母和点正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getRank(min = 0, max = 10) {
    return new RegExp(`^${this.rankname}{${min},${max}}$`);
  }

  /**
   * @description 电话正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getTel(min = 7, max = 20) {
    return new RegExp(`^${this.num}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度大小写字母正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenLetter(min = 0, max = 10) {
    return new RegExp(`^${this.letter}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度大写字母正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenUppercaseLetter(min = 0, max = 10) {
    return new RegExp(`^${this.letterD}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度数字长度正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenNumber(min = 0, max = 10) {
    return new RegExp(`^${this.num}{${min},${max}}$`);
  }

  /**
   * @description 获取任意长度数字正则
   * @returns {RegExp}
   */
  getAnyLenNumber() {
    return new RegExp(`^${this.num}*$`);
  }

  /**
   * @description 获取邮件正则表达式
   * @returns {RegExp}
   */
  getEmail() {
    return this.email;
  }

  /**
   * @description 获取固定长度汉字正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenChinese(min = 0, max = 10) {
    return new RegExp(`^${this.regChinese}{${min},${max}}$`);
  }

  /**
   * @description 获取固定长度汉字与字母长度正则
   * @param min
   * @param max
   * @returns {RegExp}
   */
  getFixedLenChineseAndLetter(min, max) {
    return new RegExp(`^${this.regChineseAndLetter}{${min},${max}}$`);
  };

  /**
   * @description 获取网络地址文件名称
   * @example getUpdateFileNmae('https://admin.jufubao.cn/index.html'); => index.html
   * @param url
   * @returns {null|*}
   */
  getUrlForFileNmae(url) {
    let reg = /^(http:\/\/|https:\/\/|\/\/)(.*)(\/((.*)\.(.*)))$/;
    let match = url.match(reg);
    if (!match) {
      return null;
    }
    console.log('getUpdateFileNmae', match[4]);
    return match[4];
  }

  /***
   * @description 检查是否为网络地址
   * @param url
   * @returns {boolean}
   */
  validURL(url){
    const reg = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
    return reg.test(url)
  }

}

/* harmony default export */ var regExps = (new RegExps());

// CONCATENATED MODULE: ./src/index.js








const src_helper= (setting) =>{
  return new helper(setting)
};

const install = function (Vue, setting) {
  if (install.installed) return;
  install.installed = true;
  Vue.prototype.$helper = src_helper(setting);
  Vue.prototype.$xdHelper = src_helper(setting);
  Vue.prototype.$xdCookie = uitls_cookie;
  Vue.prototype.$xdStorage = storage;
  Vue.prototype.$xdRegExps = regExps;
  Vue.prototype.$xdPinyin = pinyin;
  console.log('初始化成功！','Vue.use(gxd-helper)=> options', setting);

};

//浏览器使用
if (typeof window !== 'undefined' && window['Vue']) {
  install(window['Vue'])
  window['xdHelper'] = src_helper;
  window['xdCookie'] = uitls_cookie;
  window['xdStorage'] = storage;
  window['xdPinyin'] = pinyin;
  window['xdRegExps'] = regExps;
}


/* harmony default export */ var src = __webpack_exports__["default"] = ({
  cookie: uitls_cookie,
  storage: storage,
  pinyin: pinyin,
  helper: src_helper,
  regExps: regExps,
  install,
});



/***/ })
/******/ ])["default"];
});