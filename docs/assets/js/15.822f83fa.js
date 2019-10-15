(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{284:function(v,_,a){"use strict";a.r(_);var t=a(38),e=Object(t.a)({},function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"代码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#代码规范","aria-hidden":"true"}},[v._v("#")]),v._v(" 代码规范")]),v._v(" "),a("p",[v._v("JavaScript 是一个动态的弱类型语言，在开发中比较容易出错。")]),v._v(" "),a("p",[v._v("编码规范就是指导如何编写和组织代码的一系列标准，而代码检查是一种静态的分析，常用于寻找有问题的模式或者代码，并且不依赖于具体的编码风格。")]),v._v(" "),a("p",[v._v("遵循编码规范和使用语法检测，可以很好的提高代码的可读性，可维护性，并有效的减少一些编码错误。")]),v._v(" "),a("p",[v._v("为了提高团队开发vue项目的效率，我们约定一些基本的编码规范和基于开源的JS代码检查工具ESLint来应用Airbnb编码规则，详情请参考：https://www.html.cn/archives/8345。")]),v._v(" "),a("h2",{attrs:{id:"目录划分"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录划分","aria-hidden":"true"}},[v._v("#")]),v._v(" 目录划分")]),v._v(" "),a("p",[v._v("我们所有的项目使用基于vue-cli脚手架生成的目录，各主要目录如下：")]),v._v(" "),a("ul",[a("li",[v._v("views 放路由对应的页面，用来写逻辑，样式都尽量放在组件内；")]),v._v(" "),a("li",[v._v("components 放各种组件，如果多个页面都使用直接放在该目录，如果只是某个页面使用，放到该页面命名的组件目录下；")]),v._v(" "),a("li",[v._v("utils 存放项目使用的一些公共函数；")])]),v._v(" "),a("p",[v._v("当项目模块不多时，在src目录下添加一下文件：")]),v._v(" "),a("ul",[a("li",[v._v("router.js 文件用来处理路由；")]),v._v(" "),a("li",[v._v("store.js 用来定义vuex的功能；")]),v._v(" "),a("li",[v._v("api.js 用来封装请求；")])]),v._v(" "),a("p",[v._v("当项目模块较多时：")]),v._v(" "),a("ul",[a("li",[v._v("route 目录下包含index.js文件导出各模块对应js文件定义的路由；")]),v._v(" "),a("li",[v._v("store 目录下包含index.js文件导出各模块对应js文件定义的vuex;")]),v._v(" "),a("li",[v._v("api 目录下包含index.js文件导出各模块对应js文件封装的api;")]),v._v(" "),a("li",[v._v("同时views 目录下再把各模块对应的页面放到一个文件夹内；")])]),v._v(" "),a("h2",{attrs:{id:"命名约定"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命名约定","aria-hidden":"true"}},[v._v("#")]),v._v(" 命名约定")]),v._v(" "),a("ul",[a("li",[v._v("语义化命名")]),v._v(" "),a("li",[v._v("views和components下的.vue文件使用首字母大写开头的驼峰命名；")]),v._v(" "),a("li",[v._v("类的命令使用小写加 - 连接的方式命名；")]),v._v(" "),a("li",[v._v("变量和方法的命名使用首字母小写开头的驼峰命名，其中用来判断的变量使用is开头，如isShowHeader, 数组变量以s结尾，如swiperImgs, 事件方法以on开头，get请求方法以get开头，post的方法以post开头；")])]),v._v(" "),a("h3",{attrs:{id:"项目命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#项目命名","aria-hidden":"true"}},[v._v("#")]),v._v(" 项目命名")]),v._v(" "),a("ul",[a("li",[v._v("全部采用小写方式， 以短横线分隔，如：kpl-project")])]),v._v(" "),a("h3",{attrs:{id:"目录命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#目录命名","aria-hidden":"true"}},[v._v("#")]),v._v(" 目录命名")]),v._v(" "),a("ul",[a("li",[v._v("全部采用小写方式，以下划线分隔，如book_manager")]),v._v(" "),a("li",[v._v("有复数结构时，要采用复数命名法，如utils")]),v._v(" "),a("li",[v._v("vue的项目中，components下的组件目录名，使用大驼峰命令")])]),v._v(" "),a("h3",{attrs:{id:"js、css、html文件命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js、css、html文件命名","aria-hidden":"true"}},[v._v("#")]),v._v(" JS、css、html文件命名")]),v._v(" "),a("ul",[a("li",[v._v("均参照目录命名方式")])]),v._v(" "),a("h3",{attrs:{id:"html标签命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html标签命名","aria-hidden":"true"}},[v._v("#")]),v._v(" HTML标签命名")]),v._v(" "),a("ul",[a("li",[v._v("使用语义化标签，避免一个页面都是 div 或者 p 标签")])]),v._v(" "),a("h3",{attrs:{id:"css选择器命名规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#css选择器命名规范","aria-hidden":"true"}},[v._v("#")]),v._v(" CSS选择器命名规范")]),v._v(" "),a("ul",[a("li",[v._v("类名使用小写字母，以中划线分隔，如 .apply-btn")]),v._v(" "),a("li",[v._v("id 采用驼峰式命名, 如 #kplDialog")]),v._v(" "),a("li",[v._v("scss 中的变量、函数、混合、placeholder 采用驼峰式命名, 如 $colorBlack")])]),v._v(" "),a("h3",{attrs:{id:"变量命名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量命名","aria-hidden":"true"}},[v._v("#")]),v._v(" 变量命名")]),v._v(" "),a("ul",[a("li",[v._v("标准变量采用小写驼峰式命名，包括对象、函数、实例\n"),a("ul",[a("li",[v._v("前缀应当是名词。(函数的名字前缀为动词，以此区分变量和函数)")]),v._v(" "),a("li",[v._v("尽量在变量名字中体现所属类型，如:length、count等表示数字类型；而包含name、title表示为字符串类型")]),v._v(" "),a("li",[v._v("函数前缀应当为动词，动词约定如下：\n"),a("ul",[a("li",[v._v("can， 判断是否可执行某个动作(权限)")]),v._v(" "),a("li",[v._v("has， 判断是否含有某个值")]),v._v(" "),a("li",[v._v("is， 判断是否为某个值")]),v._v(" "),a("li",[v._v("get， 获取某个值")]),v._v(" "),a("li",[v._v("set， 设置某个值")]),v._v(" "),a("li",[v._v("load， 加载某些数据")])])])])]),v._v(" "),a("li",[v._v("常量全大写，用下划线连接")]),v._v(" "),a("li",[v._v("构造函数，大写第一个字母，前缀为名称")]),v._v(" "),a("li",[v._v("jquery对象必须以'$'开头命名")]),v._v(" "),a("li",[v._v("对上下文this的引用只能使用'_this', 'that', 'self'其中一个来命名")]),v._v(" "),a("li",[v._v("'ID'在变量名中全大写")]),v._v(" "),a("li",[v._v("'URL'在变量名中全大写")]),v._v(" "),a("li",[v._v("'Android'在变量名中大写第一个字母")]),v._v(" "),a("li",[v._v("'iOS'在变量名中小写第一个，大写后两个字母")])]),v._v(" "),a("h2",{attrs:{id:"html规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#html规范","aria-hidden":"true"}},[v._v("#")]),v._v(" HTML规范")]),v._v(" "),a("ul",[a("li",[v._v("减少标签数量，尽量避免多余的父节点")]),v._v(" "),a("li",[v._v("在属性上，使用双引号，不要使用单引号；")]),v._v(" "),a("li",[v._v("属性名全小写，用中划线做分隔符；")])]),v._v(" "),a("h3",{attrs:{id:"属性顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性顺序","aria-hidden":"true"}},[v._v("#")]),v._v(" 属性顺序")]),v._v(" "),a("p",[v._v("属性应该按照特定的顺序出现以保证易读性：")]),v._v(" "),a("ul",[a("li",[v._v("class")]),v._v(" "),a("li",[v._v("id")]),v._v(" "),a("li",[v._v("name")]),v._v(" "),a("li",[v._v("data-*")]),v._v(" "),a("li",[v._v("src,for,type,href,value,max-length,max,min,pattern")]),v._v(" "),a("li",[v._v("placeholder,title,alt")]),v._v(" "),a("li",[v._v("aria-*,role")]),v._v(" "),a("li",[v._v("required,readonly,disabled")])]),v._v(" "),a("h2",{attrs:{id:"js规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js规范","aria-hidden":"true"}},[v._v("#")]),v._v(" JS规范")]),v._v(" "),a("ul",[a("li",[a("p",[v._v("对所有的引用使用 "),a("code",[v._v("const")]),v._v(" ；不要使用 "),a("code",[v._v("var")]),v._v("：可以确保你无法对引用重新分配，重新分配可能会导致 bug 和难以理解的代码；")])]),v._v(" "),a("li",[a("p",[v._v("如果你一定需要可变动的引用，使用 let 代替 var：因为 let 是块级作用域，而 var 是函数作用域；")])]),v._v(" "),a("li",[a("p",[v._v("不要使用 arguments。可以选择 rest 语法 ... 替代: 使用 ... 能明确你要传入的参数。另外 rest（剩余）参数是一个真正的数组，而 arguments 是一个类数组。")])]),v._v(" "),a("li",[a("p",[v._v("Array.from代替展开操作符 "),a("code",[v._v("...")]),v._v(" 来映射迭代，因为它避免了创建媒介数组。")])]),v._v(" "),a("li",[a("p",[v._v("永远不要把参数命名为 arguments。这将会覆盖原来函数作用域内的 arguments 对象；")])]),v._v(" "),a("li",[a("p",[v._v("当访问和使用对象的多个属性时，请使用对象解构；")])]),v._v(" "),a("li",[a("p",[v._v("使用对象解构来实现多个返回值，而不是数组解构，可以随着时间的推移添加新的属性或更改排序，而不会改变调用时的位置。")])]),v._v(" "),a("li",[a("p",[v._v("使用命名函数表达式而不是函数声明： 函数声明很容易被提升（Hoisting），你可以在函数被定义之前引用该函数。这对可读性和可维护性来说都是不利的；")])]),v._v(" "),a("li",[a("p",[v._v("切勿使用 Function 构造函数来创建新函数：以这种方式创建一个函数，与 eval() 类似，会对字符串求值，这会打开漏洞。")])]),v._v(" "),a("li",[a("p",[v._v("不要改变参数，eslint: "),a("code",[v._v("no-param-reassign")]),v._v("，操作作为参数传入的对象，可能会在调用原始对象时造成不必要的变量副作用；")])]),v._v(" "),a("li",[a("p",[v._v("当您必须使用匿名函数（如在传递一个内联回调时），请使用箭头函数表示法：它创建了一个在 this 上下文中执行的函数的版本，这通常是你想要的，而且这样的写法更为简洁；")])]),v._v(" "),a("li",[a("p",[v._v("使用函数默认参数时，把默认参数赋值放在最后")])]),v._v(" "),a("li",[a("p",[v._v("少用迭代器。用 JavaScript 高阶函数代替for-in、 for-of。 "),a("code",[v._v("eslint: no-iterator no-restricted-syntax")]),v._v(", 不可变原则，处理纯函数的返回值比处理副作用更容易。数组的迭代方法： "),a("code",[v._v("map() / every() / filter() / find() / findIndex() / reduce() / some() / ...")]),v._v(", 对象的处理方法 ："),a("code",[v._v("Object.keys() / Object.values() / Object.entries()")]),v._v("  去产生一个数组， 这样你就能去遍历对象了")])]),v._v(" "),a("li",[a("p",[v._v("let和const声明时，const放一起，let放一起，这是因为新变量依赖之前的变量或常量时，是有帮助的")])]),v._v(" "),a("li",[a("p",[v._v("不要使用一元递增递减运算符（++， --）. "),a("code",[v._v("eslint no-plusplus")]),v._v(",一元递增和递减语句受到自动分号插入的影响，并且可能会导致应用程序中的值递增或递减的静默错误。 使用num += 1 而不是 num++ 或代替语句来改变你的值也更具表现力。")])]),v._v(" "),a("li",[a("p",[v._v("避免不需要的三元表达式, 如"),a("code",[v._v("const foo = a ? a : b;")]),v._v("更推荐用"),a("code",[v._v("const foo = a || b;")]),v._v("，  "),a("code",[v._v("const bar = c ? true : false;")]),v._v("更推荐用"),a("code",[v._v("const bar = !!c;")])])]),v._v(" "),a("li",[a("p",[v._v("对象和数组推荐使用字面量，因为这不仅是性能最优也有助于节省代码量")])]),v._v(" "),a("li",[a("p",[v._v("声明对象的属性值简写时，尽量将属性的缩写放在对象声明的开头")])]),v._v(" "),a("li",[a("p",[v._v("将对象的属性值保存为局部变量，因为对象成员嵌套越深，读取速度也就越慢")])]),v._v(" "),a("li",[a("p",[v._v("字符串转为整型时更推荐"),a("code",[v._v("Math.floor()")]),v._v("或者"),a("code",[v._v("Math.round()")]),v._v("，而不是使用"),a("code",[v._v("parseInt()")]),v._v("将字符串转换成数字。"),a("code",[v._v("Math")]),v._v("是内部对象，所以"),a("code",[v._v("Math.floor()")]),v._v("其实并没有多少查询方法和调用时间，速度是最快的")])]),v._v(" "),a("li",[a("p",[v._v("函数参数越少越好，如果参数超过两个，要使用 ES6的解构语法，不用考虑参数的顺序")])]),v._v(" "),a("li",[a("p",[v._v("使用参数默认值 替代 使用条件语句进行赋值, 如使用")]),v._v(" "),a("ul",[a("li",[v._v("推荐：")])]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v('function createUser(name = "kuaipeilian") {\n // ...\n}\n')])])]),a("ul",[a("li",[v._v("而不是")])]),v._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[v._v('function createUser(name) { \n\tname = name || "kuaipeilian";\n}\n')])])])]),v._v(" "),a("li",[a("p",[v._v("代码中使用了定时器 setTimeout 和 setInterval，需要在不使用时进行清除")])])]),v._v(" "),a("h2",{attrs:{id:"注释规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注释规范","aria-hidden":"true"}},[v._v("#")]),v._v(" 注释规范")]),v._v(" "),a("h3",{attrs:{id:"行内注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#行内注释","aria-hidden":"true"}},[v._v("#")]),v._v(" 行内注释")]),v._v(" "),a("ul",[a("li",[v._v("code // 这是行内注释，  双斜杠前后留一个空格")]),v._v(" "),a("li",[v._v("注释内容建议：\n"),a("ul",[a("li",[v._v("// 用来显示一个解释的评论")]),v._v(" "),a("li",[v._v("// -> 用来显示表达式的结果")]),v._v(" "),a("li",[v._v("// >用来显示 console 的输出结果")])])])]),v._v(" "),a("h3",{attrs:{id:"单行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单行注释","aria-hidden":"true"}},[v._v("#")]),v._v(" 单行注释")]),v._v(" "),a("p",[v._v("注释单独一行的情况下，注释的//后面要跟一个空格")]),v._v(" "),a("h3",{attrs:{id:"多行注释"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#多行注释","aria-hidden":"true"}},[v._v("#")]),v._v(" 多行注释")]),v._v(" "),a("ul",[a("li",[v._v("以下几种情况建议使用多行注释：\n"),a("ul",[a("li",[v._v("难于理解的代码段")]),v._v(" "),a("li",[v._v("可能存在错误的代码段")]),v._v(" "),a("li",[v._v("浏览器特殊的 HACK 代码")]),v._v(" "),a("li",[v._v("业务逻辑强相关的代码")])])])]),v._v(" "),a("h2",{attrs:{id:"vue-文件编码规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue-文件编码规范","aria-hidden":"true"}},[v._v("#")]),v._v(" .vue 文件编码规范")]),v._v(" "),a("ul",[a("li",[v._v("template script style 相互间空一行；")]),v._v(" "),a("li",[v._v("缩进为2两个空格；（或者 4 个，但是团队要统一，我们这里统一使用2个空格）")]),v._v(" "),a("li",[v._v("template 中标签属性，@方法 放最前面，class 放最后面；")]),v._v(" "),a("li",[v._v("class 命名，根元素的div，以页面或组件名+ctn结尾，其他元素以功能+wrap结尾，中间使用 - 连接；")]),v._v(" "),a("li",[v._v("其他格式基于airbnb的代码检测进行修正；")]),v._v(" "),a("li",[v._v("import 文件的时候，路径统一用 @开头，而不是相对路径；")]),v._v(" "),a("li",[v._v("避免 v-if 和 v-for 用在一起")]),v._v(" "),a("li",[v._v("import 放在其他所有语句之前")]),v._v(" "),a("li",[v._v("一个文件入口只 import 一次,  "),a("code",[v._v("eslint: no-duplicate-imports")]),v._v(", 从同一个路径下import多行会使代码难以维护")]),v._v(" "),a("li",[v._v("组件模板应该只包含简单的表达式，复杂的表达式则应该重构为计算属性或方法")])]),v._v(" "),a("h2",{attrs:{id:"vue文件-script-中模块的顺序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#vue文件-script-中模块的顺序","aria-hidden":"true"}},[v._v("#")]),v._v(" vue文件 script 中模块的顺序")]),v._v(" "),a("ul",[a("li",[v._v("name")]),v._v(" "),a("li",[v._v("props")]),v._v(" "),a("li",[v._v("data")]),v._v(" "),a("li",[v._v("computed")]),v._v(" "),a("li",[v._v("created")]),v._v(" "),a("li",[v._v("mounted")]),v._v(" "),a("li",[v._v("methods 通常放最后；")])]),v._v(" "),a("h2",{attrs:{id:"readme规范"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#readme规范","aria-hidden":"true"}},[v._v("#")]),v._v(" README规范")]),v._v(" "),a("p",[v._v("一份规范完整的README规范应该具备下面这些内容：")]),v._v(" "),a("ol",[a("li",[v._v("项目描述（包括项目名，项目功能简述，代码仓库地址，以及该项目的第一负责人）")]),v._v(" "),a("li",[v._v("如何运行（包括开发环境配置、开发&发布 命令、代理配置、接口API）")]),v._v(" "),a("li",[v._v("业务介绍（包括业务入口地址及渠道链接、各页面及描述）")]),v._v(" "),a("li",[v._v("项目备注")])])])},[],!1,null,null,null);_.default=e.exports}}]);