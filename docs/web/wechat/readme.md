# 小程序介绍与开发环境

​ 小程序是一种全新的连接用户与服务的方式，它可以在微信内被便捷地获取和传播，同时具有出色的使用体验。任何一个普通的开发者，经过简单的学习和练习后，都可以轻松地完成一个小程序的开发和发布。

## Hello World

在详细介绍小程序历史和技术细节前，请先跟随我们的步骤完成开发 Hello World 例子。

第一步，请前往https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html 微信开发者工具下载页面根据自己的操作系统下载对应的安装包进行安装。

第二步，打开微信开发者工具，选择新建小程序项目，我们先不需理解 AppID 的概念，新建项目时选择无 AppID，并取消勾选“建立普通快速启动模板”的选项。

最后一步，我们来添加必要的代码。

在根目录下创建 app.json，其内容如下。

```json
{
  "pages": ["pages/index/index"]
}
```

在根目录下新建 pages 目录，然后在 pages 目录下新建 index 目录，接着在 index 目录下创建两个文件 index.wxml 和 index.js。

index.wxml 的内容如下所示。`<text>Hello World</text>`

index.js 的内容如下所示。`Page({})`

通过编写以上短短的几行代码，微信开发者工具的模拟器界面上显示出 Hello World。

## 小程序介绍

### 小程序技术发展历史

​ 从技术的维度看，小程序并非凭空冒出来的一个概念。当微信中的 WebView 逐渐成为移动 Web 的一个重要入口时，微信就有相关的 JS API 了。

​ 一些开发者应该对下面的代码有印象：

代码清单 1-1 使用 WeixinJSBridge 预览图片

```js
WeixinJSBridge.invoke(
  "imagePreview",
  {
    current: "http://inews.gtimg.com/newsapp_bt/0/1693121381/641",
    urls: [
      // 所有图片的URL列表，数组格式
      "https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg",
      "https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg",
      "https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg",
    ],
  },
  function (res) {
    console.log(res.err_msg);
  }
);
```

​ 这是一个调用微信原生组件浏览图片的 JS API，相比于额外引入一个 JS 图片预览组件库，这种调用方式显得非常简洁和高效。

​ 实际上，微信官方是没有对外暴露过如此调用的，此类 API 最初是提供给腾讯内部一些业务使用，很多外部开发者发现了之后，依葫芦画瓢地使用了，逐渐成为微信中网页的事实标准。

​ 2015 年初，微信发布了一整套网页开发工具包，称之为 JS-SDK，开放了拍摄、录音、语音识别、二维码、地图、支付、分享、卡券等几十个 API。给所有的 Web 开发者打开了一扇全新的窗户，让所有开发者都可以使用到微信的原生能力，去完成一些之前做不到或者难以做到的事情了。

同样是调用原生的浏览图片，调用方式如代码清单 1-2 所示。

代码清单 1-2 使用 JS-SDK 调用图片预览组件

```js
wx.previewImage({
  current: "https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg",
  urls: [
    // 所有图片的URL列表，数组格式
    "https://img1.gtimg.com/10/1048/104857/10485731_980x1200_0.jpg",
    "https://img1.gtimg.com/10/1048/104857/10485726_980x1200_0.jpg",
    "https://img1.gtimg.com/10/1048/104857/10485729_980x1200_0.jpg",
  ],
  success: function (res) {
    console.log(res);
  },
});
```

​ JS-SDK 是对之前的 WeixinJSBrige 的一个包装，以及新能力的释放，并且由对内开放转为了对所有开发者开放，在很短的时间内获得了极大的关注。从数据监控来看，绝大部分在微信内传播的移动网页都使用到了相关的接口。

​ JS-SDK 解决了移动网页能力不足的问题，通过暴露微信的接口使得 Web 开发者能够拥有更多的能力，然而在更多的能力之外，JS-SDK 的模式并没有解决使用移动网页遇到的体验不良的问题。

​ 用户在访问网页的时候，在浏览器开始显示之前都会有一个的白屏过程，在移动端，受限于设备性能和网络速度，白屏会更加明显。我们团队把很多技术精力放置在如何帮助平台上的 Web 开发者解决这个问题。因此我们设计了一个 JS-SDK 的增强版本，其中有一个重要的功能，称之为“微信 Web 资源离线存储”。

​ 以下文字引用自内部的文档（没有最终对外开放）：

微信 Web 资源离线存储是面向 Web 开发者提供的基于微信内的 Web 加速方案。

通过使用微信离线存储，Web 开发者可借助微信提供的资源存储能力，直接从微信本地加载 Web 资源而不需要再从服务端拉取，从而减少网页加载时间，为微信用户提供更优质的网页浏览体验。每个公众号下所有 Web App 累计最多可缓存 5M 的资源。

​ 这个设计有点类似 HTML5 的 Application Cache，但在设计上规避了一些 Application Cache 的不足。

​ 在内部测试中，我们发现 离线存储 能够解决了一些问题，但是对于一些复杂的页面依然会有白屏的问题，例如页面加载了大量的 CSS 或者是 JavaScript 文件，这些文件的执行时间占用了大量的 UI 线程，这种时候，即使通过离线存储快速的加载资源，但是依旧会有页面的白屏现象，同时这样分文件的 Cache 在处理代码文件更新的时候操作较为繁杂，对开发者的要求较高。

​ 除了白屏，影响 Web 体验的问题还有缺少操作的反馈，主要表现在两个方面：页面切换的生硬和点击的迟滞感。

​ 对于一些有经验的 Web 开发者而言，会使用一些 SPA 的框架，来模拟客户端原生的页面切换过渡。通常的方式是在一个 WebView 中去模拟多个页面，通过 CSS 处理，加之精细化的脚本代码做到点击反馈和页面切换，获得较好的体验。然而并不是所有的开发者都有足够的时间和精力来使得页面的体验变得出色。

​ 微信面临的问题是如何设计一个比较好的系统，使得所有开发者在微信中都能获得比较好的体验。这个问题是之前的 JS-SDK 所处理不了的，需要一个全新的系统来完成，它需要使得所有的开发者都能做到：

- 快速的加载

- 更强大的能力

- 原生的体验

- 易用且安全的微信数据开放

- 高效和简单的开发

​ 这一系统就是本课程中需要详细阐述的小程序。

### 小程序与普通网页开发的区别

​ 小程序的主要开发语言是 JavaScript ，所以通常小程序的开发会被用来同普通的网页开发来做对比。两者有很大的相似性，对于前端开发者而言，从网页开发迁移到小程序的开发成本并不高，但是二者还是有些许区别的。

​ 网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应，而在小程序中，二者是分开的，分别运行在不同的线程中。网页开发者可以使用到各种浏览器暴露出来的 DOM API，进行 DOM 选中和操作。而如上文所述，小程序的逻辑层和渲染层是分开的，逻辑层运行在 JSCore 中，并没有一个完整浏览器对象，因而缺少相关的 DOM API 和 BOM API。这一区别导致了前端开发非常熟悉的一些库，例如 jQuery、 Zepto 等，在小程序中是无法运行的。同时 JSCore 的环境同 NodeJS 环境也是不尽相同，所以一些 NPM 的包在小程序中也是无法运行的。

​ 网页开发者需要面对的环境是各式各样的浏览器，PC 端需要面对 IE、Chrome、QQ 浏览器等，在移动端需要面对 Safari、Chrome 以及 iOS、Android 系统中的各式 WebView 。而小程序开发过程中需要面对的是两大操作系统 iOS 和 Android 的微信客户端，以及用于辅助开发的小程序开发者工具，小程序中三大运行环境也是有所区别的，如表 1-1 所示。

表 1-1 小程序的运行环境

|     运行环境     |     逻辑层     |     渲染层     |
| :--------------: | :------------: | :------------: |
|       iOS        | JavaScriptCore |   WKWebView    |
|       安卓       |   X5 JSCore    |   X5 浏览器    |
| 小程序开发者工具 |      NWJS      | Chrome WebView |

​ 网页开发者在开发网页的时候，只需要使用到浏览器，并且搭配上一些辅助工具或者编辑器即可。小程序的开发则有所不同，需要经过申请小程序帐号、安装小程序开发者工具、配置项目等等过程方可完成。

## 小程序的特色

对于普通用户，小程序实现了应用的触手可及，只需要通过扫描二维码、搜索或者是朋友的分享就可以直接打开，加上优秀的体验，小程序使得服务提供者的触达能力变得更强。

​ 对于开发者而言，小程序框架本身所具有的快速加载和快速渲染能力，加之配套的云能力、运维能力和数据汇总能力，使得开发者不需要去处理琐碎的工作，可以把精力放置在具体的业务逻辑的开发上。

​ 小程序的模式使得微信可以开放更多的数据，开发者可以获取到用户的一些基本信息，甚至能够获取微信群的一些信息，使得小程序的开放能力变得更加强大。

## 小程序开发准备

### 申请 AppID

开发小程序的第一步，需要拥有一个小程序 AppID，后续的所有开发流程会基于这个 AppID 来完成。小程序的注册非常简单，只需几个操作。

​ 使用浏览器打开 https://mp.weixin.qq.com/ 点击立即注册，如图 1-1 所示，在打开的页面中选择小程序后，填入相关的信息，就可以完成注册了。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807131046.png)
图 1-1 注册小程序

注册成功之后，点击 “开发”—“开发设置” 就可以看到小程序的 AppID，如图 1-2 所示。
![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807131110.png)
图 1-2 获取 AppID

### 安装开发者工具

​ 在小程序开发文档中找到小程序开发工具的下载页面，或者直接输入 https://mp.weixin.qq.com/debug/wxadoc/dev/devtools/download.html 根据自己的操作系统下载对应的安装包进行安装。需要注意的是，小程序开发工具在 Windows 上仅支持 Windows 7 及以上版，在 Mac 上支持 OS X 10.8 及以上版本。

​ Windows 上，双击下载完成的安装文件，如图 1-3 所示。根据提示点击下一步，即可完成安装，安装成功后，可以在桌面或者开始菜单中找到小程序开发工具的快捷方式，打开即可。
![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807131117.png)
图 1-3 Windows 的安装界面

​ Mac 上双击下载的 dmg 文件后，将小程序图标拖动至 Applications 中，然后在应用程序列表中打开小程序开发工具，见图 1-4。
![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807131123.png)
图 1-4 Mac 的安装界面

### 第一个小程序

​ 打开小程序开发工具，使用之前注册小程序所使用的微信扫码登录。选择小程序项目，如图 1-5 所示。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807131128.png)
图 1-5 选择小程序项目

​ 首先在操作系统创建一个目录，而后在开发者工具中点击新建项目，选择刚创建的目录，填入 AppID，然后勾选 "创建 QuickStart 项目"，点击确定，那么第一个小程序项目就创建成功了。

​ 点击“开发者工具”工具栏上的预览按钮，使用微信扫描生成的二维码，就可以看到这个小程序在手机端上的表现了，如图 1-6 所示。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807131133.png)

# 小程序代码组成

小程序由配置代码 JSON 文件、模板代码 WXML 文件、样式代码 WXSS 文件以及逻辑代码 JavaScript 文件组成。本章会结合读者在上一章中创建的 Quick Start 项目对这几种文件做简单的介绍，建议大家读写并行，从而对小程序的代码组成有一个大致的理解。

## JSON 配置

JSON 是一种数据格式，并不是编程语言，在小程序中，JSON 扮演的静态配置的角色。

### 一个例子

​ 先看一个例子，打开开发工具的编辑器，在根目录下可以找到 app.json 文件，双击打开，代码如下：

代码清单 2-1 app.json 文件代码

```json
{
  "pages": ["pages/index/index", "pages/logs/logs"],
  "window": {
    "backgroundTextStyle": "light",
    "navigationBarBackgroundColor": "#fff",
    "navigationBarTitleText": "WeChat",
    "navigationBarTextStyle": "black"
  }
}
```

尝试修改第 9 行为 `"navigationBarTitleText": "MiniProgram" `，如图 2-1 所示。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807140427.png)
图 2-1 修改 navigationBarTitleText

保存代码，开发者工具自动刷新后，注意到模拟器顶部 bar 的文本字段由 Wechat 变为了 MiniProgram。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807142617.png)
图 2-2 顶部 bar 的 wording 发生了变化

JSON 文件在小程序代码中扮演静态配置的作用，在小程序运行之前就决定了小程序一些表现，需要注意的是小程序是无法在运行过程中去动态更新 JSON 配置文件从而发生对应的变化的。

### JSON 语法

相比于 XML ，JSON 格式最大的优点是易于人的阅读和编写，通常不需要特殊的工具，就能读懂和修改，是一种轻量级的数据交换格式。

JSON 文件都是被包裹在一个大括号中 {}，通过 key-value 的方式来表达数据。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807140436.png)
图 2-3 JSON 格式

看起来同 JavaScript 的对象表达方式十分相似，但是有所不同。

JSON 的 Key 必须包裹在一个双引号中，在实践中，编写 JSON 的时候，忘了给 Key 值加双引号或者是把双引号写成单引号是常见错误。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807140440.png)
图 2-4 没有包裹在双引号中将会触发错误

JSON 的值只能是以下几种数据格式：

数字，包含浮点数和整数
字符串，需要包裹在双引号中
Bool 值，true 或者 false
数组，需要包裹在方括号中 []
对象，需要包裹在大括号中 {}
Null
其他任何格式都会触发报错，例如 JavaScript 中的 undefined 。

![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807140449.png)
图 2-5 JSON 不支持 undefined

还需要注意的是 JSON 文件中无法使用注释，试图添加注释将会引发报错。
![](https://cdn.jsdelivr.net/gh/linzhaopu/dolimima-img/20220807142800.png)
图 2-6 JSON 不支持注释

## WXML 模板

WXML 全称是 WeiXin Markup Language，是小程序框架设计的一套标签语言，结合小程序的基础组件、事件系统，可以构建出页面的结构。

打开开发工具的编辑器，在根目录下找到 app.json 文件，双击打开，在 "pages/index/index" 上新增一行 "pages/wxml/index" 保存文件。模拟器刷新后，读者可以在编辑器中找到 pages/wxml/index.wxml 文件，本小结的学习通过修改这个文件来完成。

### 介绍

WXML 文件后缀名是 .wxml ，打开 pages/wxml/index.wxml 文件，有过 HTML 的开发经验的读者应该会很熟悉这种代码的书写方式，简单的 WXML 语句在语法上同 HTML 非常相似。

```html
<!--pages/wxml/index.wxml-->

<text>pages/wxml/index.wxml</text>
​不带有任何逻辑功能的 WXML 基本语法如下：

<!-- 在此处写注释 -->
```

`<标签名 属性名1="属性值1" 属性名2="属性值2" ...> ...</标签名>`
​ 一个完整的 WXML 语句由一段开始标签和一段结束标签组成，在标签中可以是内容，也可以是其他的 WXML 语句，这一点上同 HTML 是一致的。有所不同的是，WXML 要求标签必须是严格闭合的，没有闭合将会导致编译错误。

代码清单 2-2 编译错误

```html
<text
  >hello world

  <!--
text 没有闭合，导致编译错误：
VM148:2 ./pages/wxml/index.wxml
 end tag missing, near text
> 1 | <text>hello world
    | ^
--></text>
```

​ 标签可以拥有属性，属性提供了有关的 WXML 元素更多信息。属性总是定义在开始标签中，除了一些特殊的属性外，其余属性的格式都是 key="value" 的方式成对出现。需要注意的是，WXML 中的属性是大小写敏感的，也就是说 class 和 Class 在 WXML 中是不同的属性，代码 2-3 是一个文本标签的示例。

代码清单 2-3 WXML 标签

```html
<!--一个简单的文本标签 -->
<text>hello world</text>

<!-- view 中包含了 text 标签 -->
<view>
  <text>hello world</text>
</view>
```

代码 2-4 是一个带属性的图片标签的例子。

代码清单 2-4 带有属性的图片标签

```
<image class="userinfo-avatar" src="./image/a.png" ></image>
```

### 数据绑定

用户界面呈现会因为当前时刻数据不同而有所不同，或者是因为用户的操作发生动态改变，这就要求程序的运行过程中，要有动态的去改变渲染界面的能力。在 Web 开发中，开发者使用 JavaScript 通过 Dom 接口来完成界面的实时更新。在小程序中，使用 WXML 语言所提供的数据绑定功能，来完成此项功能。

先看一个简单的例子。

将 `pages/wxml/index.wxml` 文件的内容做一些简单的修改，如代码 2-5 所示。

代码清单 2-5 数据绑定示例

```html
<!--pages/wxml/index.wxml-->

<text>当前时间：{{time}}</text>
```

​ 保存后工具刷新，模拟器并没有显示出当前的时间，这是因为我们并没有给 `time` 设置任何初始值，请打开` pages/wxml/index.js` 文件，在 `data `的大括号中加入：`time: (new Date()).toString()`。

如代码 2-6 所示。

代码清单 2-6 数据绑定示例

```js
// pages/wxml/index.js
Page({
  //页面的初始数据
  data: {
    time: new Date().toString(),
  },
});
```

保存，模拟器刷新后正确的展示了当前时间，并且每次编译时间都会被更新。

WXML 通过` {{变量名}}` 来绑定 WXML 文件和对应的 JavaScript 文件中的 data 对象属性。

后文中为了保持简单，通过以下格式来展示上述的代码逻辑，使用第一段注释来表明 WXML 对应的脚本文件中的 data 结构。

代码清单 2-7 展示格式

```js
<!--
{
  time: (new Date()).toString()
}
-->
<text>当前时间：{{time}}</text>
```

属性值也可以动态的去改变，有所不同的是，属性值必须被包裹在双引号中，如下：

代码清单 2-8 属性值的绑定

```js
<!-- 正确的写法 -->

<text data-test="{{test}}"> hello world</text>

<!-- 错误的写法  -->

<text data-test={{test}}> hello world </text >
```

需要注意的是变量名是大小写敏感的，也就是说 {{name}} 和 {{Name}} 是两个不同的变量。

代码清单 2-9 绑定的变量大小写敏感

```html
<!--
{
  w: 'w',
  W: 'W'
}
-->

<view>{{w}}</view>
<view>{{W}}</view>

<!-- 输出
w
W
-->
```

还需要注意，没有被定义的变量的或者是被设置为 undefined 的变量不会被同步到 wxml 中，如代码 2-10 所示。

代码清单 2-10 undefined 值不会被输出到 wxml 中

```html
<!--
{
  var2: undefined,
  var3: null,
  var4: "var4"
}
-->

<view>{{var1}}</view>
<view>{{var2}}</view>
<view>{{var3}}</view>
<view>{{var4}}</view>

<!--
输出：
null
var4
-->
```

关于数据绑定的概念在第三章中有更为详细的介绍。

### 逻辑语法

通过 {{ 变量名 }} 语法可以使得 WXML 拥有动态渲染的能力，除此外还可以在 {{ }} 内进行简单的逻辑运算。

三元运算：

```html
<!-- 根据 a 的值是否等于 10 在页面输出不同的内容 -->

<text>{{ a === 10? "变量 a 等于10": "变量 a 不等于10"}}</text>
算数运算：

<!--
{ a: 1,  b: 2, c: 3 }
-->

<view> {{a + b}} + {{c}} + d </view>

<!-- 输出 3 + 3 + d -->
```

类似于算数运算，还支持字符串的拼接，如代码 2-11 所示。

代码清单 2-11 字符串的拼接

```html
<!--
{ name: 'world' }
-->

<view>{{"hello " + name}}</view>

<!-- 输出 hello world -->
```

{{ }}中还可以直接放置数字、字符串或者是数组

代码清单 2-12 常量

```html
<text>{{[1,2,3]}}</text>

<!-- 输出 1,2,3 -->

<text>{{"hello world"}}</text>

<!-- 输出 hello world -->
```

### 条件逻辑

WXML 中，使用 wx:if="{{condition}}" 来判断是否需要渲染该代码块：

```html
<view wx:if="{{condition}}"> True </view>
使用 wx:elif 和 wx:else 来添加一个 else 块：

<view wx:if="{{length > 5}}"> 1 </view>
<view wx:elif="{{length > 2}}"> 2 </view>
<view wx:else> 3 </view>
```

因为 wx:if 是一个控制属性，需要将它添加到一个标签上。如果要一次性判断多个组件标签，可以使用一个 <block/> 标签将多个组件包装起来，并在上边使用 wx:if 控制属性。

```html
<block wx:if="{{true}}">
  <view> view1 </view>
  <view> view2 </view>
</block>
```

### 列表渲染

在组件上使用 wx:for 控制属性绑定一个数组，即可使用数组中各项的数据重复渲染该组件。默认数组的当前项的下标变量名默认为 index，数组当前项的变量名默认为 item

代码清单 2-13 列表渲染示例

```html
<!-- array 是一个数组 -->
<view wx:for="{{array}}"> {{index}}: {{item.message}} </view>

<!-- 对应的脚本文件
Page({
  data: {
    array: [{
      message: 'foo',
    }, {
      message: 'bar'
    }]
  }
})
-->
```

使用 wx:for-item 指定数组当前元素的变量名，使用 wx:for-index 指定数组当前下标的变量名：

```html
<view wx:for="{{array}}" wx:for-index="idx" wx:for-item="itemName">
  {{idx}}: {{itemName.message}}
</view>
```

类似 block wx:if ，也可以将 wx:for 用在 <block/> 标签上，以渲染一个包含多节点的结构块。例如：

```html
<block wx:for="{{[1, 2, 3]}}">
  <view> {{index}}: </view>
  <view> {{item}} </view>
</block>
```

如果列表中项目的位置会动态改变或者有新的项目添加到列表中，并且希望列表中的项目保持自己的特征和状态（如`<input/>`中的输入内容，` <switch/>` 的选中状态），需要使用 wx:key 来指定列表中项目的唯一的标识符。

wx:key 的值以两种形式提供：

字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。

保留关键字 this 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字，如：

当数据改变触发渲染层重新渲染的时候，会校正带有 key 的组件，框架会确保他们被重新排序，而不是重新创建，以确保使组件保持自身的状态，并且提高列表渲染时的效率。

代码清单 2-14 使用 wx:key 示例（WXML）

```html
<switch wx:for="{{objectArray}}" wx:key="unique"> {{item.id}} </switch>
<button bindtap="switch">Switch</button>
<button bindtap="addToFront">Add to the front</button>

<switch wx:for="{{numberArray}}" wx:key="*this"> {{item}} </switch>
<button bindtap="addNumberToFront">Add Number to the front</button>
```

代码清单 2-15 使用 wx:key 示例（JavaScript）

```js
Page({
data: {
objectArray: [
{id: 5, unique: 'unique_5'},
{id: 4, unique: 'unique_4'},
{id: 3, unique: 'unique_3'},
{id: 2, unique: 'unique_2'},
{id: 1, unique: 'unique_1'},
{id: 0, unique: 'unique_0'},
],
numberArray: [1, 2, 3, 4]
},
switch: function(e) {
const length = this.data.objectArray.length
for (let i = 0; i < length; ++i) {
const x = Math.floor(Math.random() _ length)
const y = Math.floor(Math.random() _ length)
const temp = this.data.objectArray[x]
this.data.objectArray[x] = this.data.objectArray[y]
this.data.objectArray[y] = temp
}
this.setData({
objectArray: this.data.objectArray
})
},
addToFront: function(e) {
const length = this.data.objectArray.length
this.data.objectArray = [{id: length, unique: 'unique_' + length}].concat(this.data.objectArray)
this.setData({
objectArray: this.data.objectArray
})
},
addNumberToFront: function(e){
this.data.numberArray = [ this.data.numberArray.length + 1 ].concat(this.data.numberArray)
this.setData({
numberArray: this.data.numberArray
})
}
})
```

### 模板

WXML 提供模板（template），可以在模板中定义代码片段，然后在不同的地方调用。使用 name 属性，作为模板的名字。然后在 `<template/> `内定义代码片段，如：

代码清单 2-16 定义模板

```html
<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>
```

使用 is 属性，声明需要的使用的模板，然后将模板所需要的 data 传入，如代码 2-17 所示。

代码清单 2-17 模板使用示例

```html
<!--
item: {
  index: 0,
  msg: 'this is a template',
  time: '2016-06-18'
}
-->

<template name="msgItem">
  <view>
    <text> {{index}}: {{msg}} </text>
    <text> Time: {{time}} </text>
  </view>
</template>

<template is="msgItem" data="{{...item}}" />

<!-- 输出
0: this is a template Time: 2016-06-18
-->
```

is 可以动态决定具体需要渲染哪个模板，如代码 2-18 所示。

代码清单 2-18 动态使用模板

```html
<template name="odd">
  <view> odd </view>
</template>

<template name="even">
  <view> even </view>
</template>

<block wx:for="{{[1, 2, 3, 4, 5]}}">
  <template is="{{item % 2 == 0 ? 'even' : 'odd'}}" />
</block>

<!-- 输出
odd
even
odd
even
odd
-->
```

### 引用

WXML 提供两种文件引用方式` import` 和 `include`。

`import` 可以在该文件中使用目标文件定义的 `template`，如：

在 item.wxml 中定义了一个叫 item 的 template ：

```html
<!-- item.wxml -->
<template name="item">
  <text>{{text}}</text>
</template>
```

在 index.wxml 中引用了 item.wxml，就可以使用 item 模板：

```html
<import src="item.wxml" />

<template is="item" data="{{text: 'forbar'}}" />
```

需要注意的是 import 有作用域的概念，即只会 import 目标文件中定义的 template，而不会 import 目标文件中 import 的 template，简言之就是 import 不具有递归的特性。

例如：C 引用 B，B 引用 A，在 C 中可以使用 B 定义的 template，在 B 中可以使用 A 定义的 template ，但是 C 不能使用 A 定义的 template ，如代码 2-19、代码 2-20、代码 2-21 所示。

代码清单 2-19 模板 A

```html
<!-- A.wxml -->
<template name="A">
  <text> A template </text>
</template>
```

代码清单 2-20 模板 B

```html
<!-- B.wxml -->
<import src="a.wxml" />

<template name="B">
  <text> B template </text>
</template>
```

代码清单 2-21 模板 C

```html
<!-- C.wxml -->
<import src="b.wxml" />

<template is="A" />
<!-- 这里将会触发一个警告，因为 b 中并没有定义模板 A -->

<template is="B" />
```

include 可以将目标文件中除了 `<template/>` `<wxs/>` 外的整个代码引入，相当于是拷贝到 include 位置，如代码 2-22、代码 2-23、代码 2-24 所示。

代码清单 2-22 index.wxml

```html
<!-- index.wxml -->
<include src="header.wxml" />

<view> body </view>

<include src="footer.wxml" />
```

代码清单 2-23 header.wxml

```html
<!-- header.wxml -->

<view> header </view>
```

代码清单 2-24 footer.wxml

```html
<!-- footer.wxml -->
```

<view> footer </view>

### 共同属性

所有 wxml 标签都支持的属性称之为共同属性，如表 2-1 所示。

表 2-1 共同属性

|    属性名    |     类型     |      描述      |                   注解                   |
| :----------: | :----------: | :------------: | :--------------------------------------: |
|      id      |    String    | 组件的唯一标识 |               整个页面唯一               |
|    class     |    String    |  组件的样式类  |       在对应的 WXSS 中定义的样式类       |
|    style     |    String    | 组件的内联样式 |          可以动态设置的内联样式          |
|    hidden    |   Boolean    |  组件是否显示  |             所有组件默认显示             |
|   data-\*    |     Any      |   自定义属性   | 组件上触发的事件时，会发送给事件处理函数 |
| bind*/catch* | EventHandler |   组件的事件   |
