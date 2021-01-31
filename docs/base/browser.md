# 第二层《浏览器》

## 根据网址“？”后面的 key，来获取想对应的 value 值。

```
function getQueryString(name) {      
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
    var r = window.location.search.substr(1).match(reg);
    if (r != null) return unescape(r[2]);
    return null;
}
```

## 浏览器为 js 提供方法的对象有：

`window`、`navigator`、`screen`、`location`、`document`

## 判断手机是否转屏了：

```
var evt = "onorientationchange" in window ? "orientationchange" : "resize";
window.addEventListener(evt, function() {
    alert("屏幕旋转");
}, false);
```

## BOM

## 窗口关系

- `top` 对象始终指向最上层（最外层）窗口
- `parent` 对象则始终指向当前窗口的父窗口。如果当前窗口是最上层窗口，则 `parent` 等于 `top` （都等于 `window` ）。
- `self` 对象，它是终极 `window` 属性，始终会指向 `window` 。实际上， `self` 和 `window` 就是同一个对象。之所以还要暴露 `self` ，就是为了和 `top` 、 `parent` 保持一致

## 窗口位置

`window` 对象的位置可以通过不同的属性和方法来确定。现代浏览器提供了 `screenLeft` 和`screenTop` 属性，用于表示窗口相对于屏幕左侧和顶部的位置 ，返回值的单位是 CSS 像素。

## 导航与打开新窗口

`window.open()` 方法可以用于导航到指定 URL，也可以用于打开新浏览器窗口。
**const windowObjectReference = window.open(strUrl, strWindowName,[strWindowFeatures]);**
**参数说明**：
**WindowObjectReference**：打开的新窗口对象的引用。可以通过引用去操作新窗口，如：关闭新窗口。如果调用失败，返回值会是  `null` 。如果父子窗口满足“同源策略”，你可以通过这个引用访问新窗口的属性或方法。
**strUrl**：新窗口需要载入的`url`地址。`strUrl`可以是`web`上的`html`页面也可以是图片文件或者其他任何浏览器支持的文件格式。
**strWindowName**：新窗口的名称。可以是一个特殊的窗口名，比如 `_self` 、`_parent`、 `_top` 或 `_blank` 。
**strWindowFeatures**：可选参数。是一个字符串值，这个值列出了将要打开的窗口的一些特性(窗口功能和工具栏) 。 字符串中不能包含任何空白字符，特性之间用逗号分隔开。
如：

```
// 这行代码会打开一个窗口名为“myWindow”，可缩放的新窗口，大小为 400 像素×400 像素，位于离屏幕左边及顶边各 10 像素的位置。
window.open("http://www.wrox.com/","myWindow","height=400,width=400,top=10,left=10,resizable=yes");
```

新创建窗口的 `window` 对象有一个属性 `opener` ，指向打开它的窗口。通过这个引用可以操作“父窗口”，如关闭“父窗口”（这里的父窗口是指，打开新窗口的窗口，非父子嵌套关系）

此外，浏览器会在用户操作下才允许创建弹窗。在网页加载过程中调用 `window.open()` 没有效果，而且还可能导致向用户显示错误。弹窗通常可能在鼠标点击或按下键盘中某个键的情况下才能打开。

如果 `window.open()` 返回值为 `null` ，则表示浏览器屏蔽了弹窗（新开窗口）。有的浏览器如果屏蔽弹窗，使用`window.open()` 还有可能报错。所以通过返回值和 try .. catch 方式可以判断浏览器是否屏蔽了弹窗（新开窗口）。

```
wroxWin.opener = null;
```

把 `opener` 设置为 `null` 表示新打开的标签页不需要与打开它的标签页通信，因此可以在独立进程中运行。这个连接一旦切断，就无法恢复了。

## location 对象

假设 url 地址为： `http://foouser:barpassword@www.wrox.com:80/WileyCDA/?q= javascript#index`
| 属性名 | 例子 | 说明 |
| -| -| -|
| `hash` | #index | 返回 URL 中的`hash`（#号后跟零或多个字符），如果 URL 中不包含散列，则返回空字符串|
| `host` | www.wrox.com:80 | 返回服务器名称和端口号（如果有） |
| `hostname` | www.wrox.com | 返回不带端口号的服务器名称 |
| `href` | http://www.wrox.com?q=javascript | 返回当前加载页面的完整 URL。而`location`对象的`toString()`方法也返回这个值 |
| `pathname` | /WileyCDA/ | 返回 URL 中的目录和（或）文件名 |
| `port`| 8080 | 返回 URL 中指定的端口号。如果 URL 中不包含端口号，则这个属性返回空字符串 |
| `protocol` | http: | 返返回页面使用的协议。通常是`http:`或`https:` |
| `search` | ?q=javascript | 返回 URL 的查询字符串。这个字符串以问号开头 |
| `origin` | http://www.wrox.com | 返回 URL 的协议，主机名和端口号（如果有）。为**只读属性** |
| `username` | foouser | 域名前指定的用户名 |
| `password` | barpassword | 域名前指定的密码 |
每次修改 `location` 的属性（ `hash` 除外），页面都会以新 URL 重新加载。只读属性不可修改，也就是修改无效。

`URLSearchParams` 提供了一组标准 API 方法，通过它们可以检查和修改查询字符串。实例上暴露了 `get()` 、`set()` 和 `delete()` 等方法，可以对查询字符串执行相应操作

```
let qs = "?q=javascript&num=10";
let searchParams = new URLSearchParams( qs );
alert(searchParams.toString()); // " q=javascript&num=10"
searchParams.has("num"); // true
searchParams.get("num"); // 10
searchParams.set("page", "3");
alert(searchParams.toString()); // " q=javascript&num=10&page=3"
searchParams.delete("q");
alert(searchParams.toString()); // " num=10&page=3"
```

## navigator 对象

| 属性或方法     | 说明                                                                                                                                 |
| -------------- | ------------------------------------------------------------------------------------------------------------------------------------ |
| `userAgent`    | 浏览器的用户代理字符串                                                                                                               |
| `geolocation`  | 地理位置 属性，拥有三个方法，`getCurrentPostion`、`watchPostion`、`clearWatch` ，必须在 https 协议下才能正常使用                     |
| `online`       | 设备是否能上网 ：`true`能，`false` 处于离线 ，可以配合 `window` 的 `online`（接通网络时触发） / `offline`（关闭网络时触发） 事件使用 |
| `connection`   | 是一个`NetworkInformation` 对象，从这个对象可以获得网络方面的信息。如：当前是 4G 网络、设备连接的是 Wiffi 等                         |
| `getBattery()` | 返回一个`BatteryManager` 对象，从这个对象可以获得电池电量方面的信息。如：当前电量是多少、是否处于充电中、当前电量还能使用多长时间等  |
| `plugins`      | 返回浏览器安装的所有插件（注意插件和扩展程序的区别：插件指更底层的功能如`flash`。扩展程序通常是基于页面上的功能）                    |
| `language`     | 浏览器的主语言（IE 不支持）                                                                                                          |
| `platform`     | 浏览器所在的系统平台，如：`Win32`                                                                                                    |
| ...            | ...                                                                                                                                  |

## screen 对象

| 属性     | 说明                        |
| -------- | --------------------------- |
| `height` | 屏幕像素高度 （分辨率高度） |
| `width`  | 屏幕像素宽度 （分辨率宽度） |

## history

- `history.go()`;
- `history.back()`;
- `history.forward()`;
- `history.length`：标识历史记录中多少个条目，值为 1 则表示第一个页面
- `history.pushState(state, title, path)`; 该方法可以接收三个参数：状态对象、新状态的标题和可选的相对 `URL`。浏览器都还未对第二个参数提供支持，所以传空字符串即可。
  ```
  // 如：
  history.pushState({age:18}, "", "test");
  ```
  执行 `pushState()` 方法后，新的状态信息就会被加入历史状态栈，而浏览器地址栏也会变成新的相对 `URL`。但是，浏览器并不会真的向服务器发送请求，即使状态改变之后查询 `location.href` 也会返回与地址栏中相同的地址。
  因为 `pushState()` 会创建新的历史状态，所以你会发现“后退”按钮也能使用了。按下“后退”按钮，会触发 `window` 对象的 **`popstate`** 事件。 `popstate`事件的事件对象有一个 `state` 属性，这个属性就包含着当初以第一个参数传递给 `pushState()` 的状态对象
  ```
  window.addEventListener('popstate',(event) => {
        if(event.state) { // 第一个页面加载时state 为null
          console.log(event.state)
        }
  })
  ```
- `replaceState(state, title)`; 调用这个方法不会在历史状态栈中创建新状态，只会重写当前状态。传入的参数与 `pushState()` 的前两个参数相同。

## Node 节点

## Node 类型

**`DOM1`** 级定义了一个 `Node` 接口，这个接口在`JavaScript` 中是作为 `Node` 类型实现的；除了 IE 之外，在其他所有浏览器中都可以访问到这个类型。`JavaScript` 中的所有节点类型都继承自 `Node` 类型，因此所有节点类型都共享着相同的基本属性和方法。

### 所有节点都具有的属性

1、 **`nodeType`** 该属性用于表明节点的类型。节点类型由在 `Node` 类型中定义的下列 12 个数值常量来表示，任何节点类型必居其一：

- Node.ELEMENT_NODE (1)；
- Node.ATTRIBUTE_NODE (2)；
- Node.TEXT_NODE (3)；
- Node.CDATA_SECTION_NODE (4)；
- Node.ENTITY_REFERENCE_NODE (5)；
- Node.ENTITY_NODE (6)；
- Node.PROCESSING_INSTRUCTION_NODE (7)；
- Node.COMMENT_NODE (8)；
- Node.DOCUMENT_NODE (9)；
- Node.DOCUMENT_TYPE_NODE (10)；
- Node.DOCUMENT_FRAGMENT_NODE (11)；
- Node.NOTATION_NODE (12)

```
// 通过比较上面这些常量，可以很容易地确定节点的类型，例如：
if (someNode.nodeType == Node.ELEMENT_NODE){ //在 IE 中无效
    alert("Node is an element.");
}

if (someNode.nodeType == 1){ // 适用于所有浏览器
    alert("Node is an element.");
}

```

2、`childNodes` 该属保存着一个 `NodeList` 对象，`NodeList` 是一种类数组对象，用于保存一组有序的节点，可以通过位置来访问这些节点（包含空白节点）。请注意，虽然可以通过方括号语法来访问 `NodeList` 的值，而且这个对象也有 `length` 属性，但它并不是 `Array` 的实例。
3、 `parentNode` 该属性指向文档树中的父节点。
4、 `ownerDocument` 该属性指向表示整个文档的文档节点，（即 `#document` ）。通过这个属性，我们可以不必在节点层次中通过层层回溯到达顶端，而是可以直接访问文档节点
5、`children` 该属性和`childNodes` 类似，只是不包含空白节点

### 判断是否有子节点方法

`hasChildNodes()` ：返回 `Boolean`。比起用 `childNodes.length` 方便的多

### 操作节点方法

- `appendChild()` 用于向 `childNodes` 列表的末尾添加一个节点。如果传入到 `appendChild()` 中的节点已经是文档的一部分了，那结果就是将该节点从原来的位置转移到新位置（即，不重复同一节点）。

---

- `insertBefore()` 这个方法接受两个参数：要插入的节点和作为参照的节点。在参照节点前插入节点。如果参照节点是`null` ，则 `insertBefore()` 与 `appendChild()` 执行相同的操作

---

- `replaceChild()` 方法接受的两个参数是：要插入的节点和要替换的节点。在使用 `replaceChild()` 插入一个节点时，该节点的所有关系指针都会从被它替换的节点复制过来。尽管从技术上讲，被替换的节点仍然还在文档中，但它在文档中已经没有了自己的位置。

---

- `removeChild()` 这个方法接受一个参数，即要移除的节点。与使用 `replaceChild()` 方法一样，通过 `removeChild()` 移除的节点仍然为文档所有，只不过在文档中已经没有了自己的位置。

---

- `cloneNode()` 方法接受一个布尔值参数，表示是否执行深复制。在参数为 `true` 的情况下，执行深复制，也就是复制节点及其整个子节点树；在参数为 `false` 的情况下，执行浅复制，即只复制节点本身。

---

- `normalize()` 这个方法唯一的作用就是处理文档树中的文本节点。由于解析器的实现或 `DOM` 操作等原因，可能会出现文本节点不包含文本，或者接连出现两个文本节点的情况。当在某个节点上调用这个方法时，就会在该节点的后代节点中查找上述两种情况。如果找到了空文本节点，则删除它；如果找到相邻的文本节点，则将它们合并为一个文本节点。

---

- 获取第一个或最后一个子节点：父节点的 `firstChild` 和 `lastChild` 属性分别指向其 `childNodes` 列表中的第一个和最后一个节点。其中， `someNode.firstChild` 的值始 终 等 于 `someNode.childNodes[0]` ， 而 `someNode.lastChild` 的 值 始 终 等 于 `someNode.childNodes[someNode.childNodes.length-1]`。

## Document 类型

js 通过`Document`类型表示文档。在浏览器中`document` 对象是`HTMLDocument`（继承自`Document`类型）的一个实例，表示整个`HTML`页面。而且`document` 对象是`window`对象的一个属性，因此可以将其作为全局对象来访问。Document 节点具有以下特征：

- `nodeType` 值为 `9`
- `nodeName` 值为 `#document`
- `nodeValue` 值为`null`
- `parentNode` 值为`null`
- `ownerDocument` 值为`null`
- 其子节点可能是一个`DocumentType`（最多一个）、`Element`（对多一个）、`ProcessingInstruction`或`Conment`。

### document 的属性：

- `documentElement` 为`<html>`的引用
- `head` 为`<head>`的引用
- `charset` 文档中实际使用的字符集
- `title` 文档标题
- `body` 为`<body>` 的引用
  ```
  const html = document.documentElement;  // 取得<html>的引用
  html === document.childNodes[0];  // true
  html === document.firstChild; // true
  const body = document.body; // 取得<body>的引用
  ```
- `URL` 页面完整的地址（即地址栏中的`URL`）
- `domain` 包含页面的域名
- `referrer` 保存着链接到当前页面的那个页面`URL`，在没有来源页面的情况下可能为空字符串。

  `URL、domain、referrer` 都会存在请求的`HTTP` 头部。`URL` 与`domain` 属性是相互关联的。如`document.URL` 为`http://www.baidu.com/index`，那么`document.domain` 就等于 `www.baidu.com`。
  在这三个属性中只有`domain`是可以设置的，但由于安全方面的限制，也并非可以给`domain` 设置任何值。如果`URL` 中包含一个子域名，如 `test.baidu.com`，那么就只能将`domain`设置为`baidu.com`。不能将这个属性设置为`URL`中不包含的域，如下例子

  ```
  // 假设页面的来自test.baidu.com 域
  document.domain = "baidu.com"; // 成功
  document.domain = "taobao.com";  // 失败
  ```

  当页面中包含来自其他子域名的框架或内嵌框架时，能够设置`document.domain` 就非常方便了。由于跨域安全限制，来自不同子域名的页面无法通过 js 通信。而通过将每个页面的`document.domain` 设置为相同的值，这些页面就可与相互访问对方包含的`js`对象了。

  注意：浏览器对`domain`属性还有一个限制，即如果域名一开始是“松散的”，那么不能将它再设置为“紧绷的”。换句话说，在将`document.domain` 设置为 “`baidu.com`”后，就不能再将它设置回“`test.baidu.com`”。如：

  ```
  // 假设页面来自于 test.baidu.com 域
  document.domain = "baidu.com";  // 成功（松散的）
  document.domain = "test.baidu.com";  // 失败 （紧绷的）
  ```

- `readyState` 使用 `document.readyState` 的最恰当方式，就是通过它来实现一个指示文档已经加载完成的指示器。该属性有两个可能的值：
  1、`loading` 正则加载中
  2、`complete` 已经加装完成
  在这个属性得到广泛支持之前，要实现这样一个指示器，必须借助 `onload` 事件处理程序设置一个标签，表明文档已经加载完毕。

pis: `document` 对象上还暴露了几个特殊集合，这些集合也都是 `HTMLCollection` 的实例，如下

- `document.anchors` 包含文档中所有带 `name` 属性的`<a>`元素
- `document.forms` 包含文档中所有`<form>`元素（与 document.getElementsByTagName ("form")返回的结果相同）。
- `document.images` 包含文档中所有`<img>`元素（与 `document.getElementsByTagName ("img")`返回的结果相同）。
- `document.links` 包含文档中所有带 `href` 属性的`<a>`元素。

### document 方法

- `getElementById()`根据`id`查找元素，返回元素或`null`
- `getElementsByTagName()` 标签名查找，返回`HTMLCollection` 对象，作为一个“动态”集合。该对象与`NodeList`非常类似。
- `getElementsByName()` 返回带有给定`name`特性的所有元素。返回和`getElementByTagName` 类似，也是`HTMLCollecttion` 对象。
- `querySelector()`
- `write()`

## Element 类型

`Element` 类型用于表现`XML`或 H`TML`元素，提供了对元素标签名、子节点及特性的访问。`Element` 节点具有以下特征：

- `nodeType` 值为 `1`
- `nodeName` 值为元素标签名
- `nodeValue` 值为`null`
- `parentNode` 可能是`Document` 或 `Element`
- `ownerDocument` 值为`#document`
- 其子节点可能是 `Element、Text、Comment、ProcessingInstruction、CDATASection或EntityReference`

所有的`HTML`元素都是由`HTMLElement` 类型表示，不是直接通过这个类型，也是通过它的子类型来表示。`HTMLElement`类型直接继承自`Element`并添加了一些属性。

每个元素都有一个或多个特性，这些特性的用途是给出相应元素或其内容的附加信息。特性的名称是不区分大小写（都会转小写），即"ID"和“id”代表的都是同一属性。另外也要注意，根据`HTML5`规范，自定义的特性应该加上`data-` 前缀以便验证。操作特性的`DOM`方法主要是三个，分别是：

- `getAttribute()` 如 `div.getAttribute( "class" )`
- `setAttribute()` 如：`div.setAttribute( "id","test" )`
- `removeAttribute()` 如：`div.remove( "class" )`

  **ps**：因为所有特性都是属性，所以直接给属性赋值可以设置特性的值，如 `div.id = "test"`。不过像下面为`DOM` 元素添加一个自定义属性，改属性不会自动成为元素的特性。自定义属性必须使用`setAtrribute` 和 `getAttribute` 方法。

  ```
  div.myColor = "red";
  div.getAttribute("myColor"); // null

  div.setAttribute( 'myColor', 'red' )
  div.getAttribute( 'myColor' ); // red
  ```

  **ps**：通过 ‘ `.` ’的方式获取属性值，和`getAttribute`方法获取正常是没有什么区别，但是在 `style` 这个属性 和 类似`onclick`（`onload`）事假处理程序的属性时，就有区别了。 `getAttribute()` 获得的属性永远是字符串，用 ‘ `.` ’获取的`style`属性则是一个`CSSStyleDeclaration`对象。用 ‘ `.` ’获取的`onlick` 属性是一个函数对象

- `attributes` 属性 返回元素上所有属性的`NamedNodeMap` 实例集合，是一个类似 NodeList 的“实时”集合。这个属性最有用的场景是需要迭代元素上所有属性的时候。

* **创建元素**：`document.createElement()` 方法可以创建新元素，这个方法只接受一个参数，即要创建元素的标签名。这个标签名在 HTML 文档中不区分大小写。（_在使用 `createElement()` 方法创建新元素的同时，也自动为新元素设置了 `ownerDocuemnt` 属性_）

* Element 新增属性
  IE9 之前的版本不会把元素间的空格当成**空白节点**，而其他浏览器则会。这样就导致了 `childNodes`和 `firstChild` 等属性上的差异。为了弥补这个差异，同时不影响 DOM 规范，W3C 通过新的 ElementTraversal 规范定义了一组新属性
  `childElementCount` ，返回子元素数量（不包含文本节点和注释）；
  `firstElementChild` ，指向第一个 Element 类型的子元素（ Element 版 firstChild ）
  `lastElementChild` ，指向最后一个 Element 类型的子元素（ Element 版 lastChild ）；
  `previousElementSibling`， 指 向 前 一 个 Element 类 型 的 同 胞 元 素 （ Element 版
  previousSibling ）；
  `nextElementSibling` ，指向后一个 Element 类型的同胞元素（ Element 版 nextSibling ）。

## Text 类型

文本节点由 Text 类型表示，包含的是可以照字面解释的纯文本内容。纯文本中可以包含转义后的
HTML 字符，但不能包含 HTML 代码。 Text 节点具有以下特征：

- `nodeType` 的值为 `3`；
- `nodeName` 的值为 "`#text`" ；
- `nodeValue` 的值为节点所包含的文本；
- `parentNode` 是一个 `Element` ；
- 不支持（没有）子节点。

**创建文本节点**：可以使用 `document.createTextNode()` 创建新文本节点，这个方法接受一个参数——要插入节点中的文本。

**合并文本节点**： `normalize()` 如果在一个包含两个或多个文本节点的父元素上调用 `normalize()` 方法，则会将所有文本节点合并成一个节点，结果节点的 `nodeValue` 等于将合并前每个文本节点的 `nodeValue` 值拼接起来的值

**分割文本节点**： `splitText()` 这个方法会将一个文本节点分成两个文本节点，即按照指定的位置分割 `nodeValue` 值。原来的文本节点将包含从开始到指定位置之前的内容，新文本节点将包含剩下的文本。返回一个新文本节点

```
var element = document.createElement("div");
element.className = "message";

var textNode = document.createTextNode("Hello world!");
element.appendChild(textNode);

document.body.appendChild(element);

var newNode = element.firstChild.splitText(5);
alert(element.firstChild.nodeValue);  // "Hello"
alert(newNode.nodeValue);  // " world!"
alert(element.childNodes.length);  // 2
```

## Comment 类型

注释在 `DOM` 中是通过 `Comment` 类型来表示的。 `Comment` 节点具有下列特征：

- `nodeType` 的值为 `8`；
- `nodeName` 的值为 "`#comment`" ；
- `nodeValue` 的值是注释的内容；
- `parentNode` 可能是 `Document` 或 `Element` ；
- 不支持（没有）子节点。

`Comment` 类型与 `Text` 类型继承自相同的基类，因此它拥有除 `splitText()` 之外的所有字符串操作方法。与 `Text` 类型相似，也可以通过 `nodeValue` 或 `data` 属性来取得注释的内容。

**创建注释节点**： `document.createComment()`，接收一个参数接注释文本

## CDATASection 类型

`CDATASection`类型只针对基于 `XML` 的文档，表示的是 `CDATA` 区域。与 `Comment` 类似，`CDATASection` 类型继承自 `Text` 类型，因此拥有除 `splitText()` 之外的所有字符串操作方法。

CDATASection 节点具有下列特征：

- `nodeType` 的值为 `4`；
- `nodeName` 的值为 "`#cdata-section`" ；
- `nodeValue` 的值是 `CDATA` 区域中的内容；
- `parentNode` 可能是 `Document` 或 `Element` ；
- 不支持（没有）子节点。

## DocumentFragment 类型

在所有节点类型中，只有 `DocumentFragment` 在文档中没有对应的标记。`DOM` 规定文档片段（`document fragment`）是一种“轻量级”的文档，可以包含和控制节点，但不会像完整的文档那样占用额外的资源。也就是说文档片段是一个容器，用于存储其它节点，然后一次性添加入文档树中，保证了`dom`树渲染的高效性。但是文档片段本身永远不会成为文档树的一部分。 `DocumentFragment` 节点具有下列特征：

- `nodeType` 的值为 `11`；
- `nodeName` 的值为 "`#document-fragment`" ；
- `nodeValue` 的值为 `null`；
- `parentNode` 的值为 `null` ；
- 子节点可以是 `Element` 、 `ProcessingInstruction` 、 `Comment` 、 `Text`、`CDATASection` 或`EntityReference` 。

**创建文档片段**：`document.createDocumentFragment()`

```
< -- html -->
<ul id="myList"></ul>

// js 代码
var fragment = document.createDocumentFragment(); // 创建文档片段
var ul = document.getElementById("myList");
var li = null;
for (var i=0; i < 3; i++){
    li = document.createElement("li");
    li.appendChild(document.createTextNode("Item " + (i+1)));
    fragment.appendChild(li);
}
ul.appendChild(fragment);

```

## Attr 类型

元素的特性在 `DOM` 中以 `Attr` 类型来表示。在所有浏览器中（包括 IE8），都可以访问 `Attr` 类型的构造函数和原型。从技术角度讲，特性就是存在于元素的 `attributes` 属性中的节点。
特性节点具有下列特征：

- `nodeType` 的值为 `2`；
- `nodeName` 的值是特性的名称；
- `nodeValue` 的值是特性的值；
- `parentNode` 的值为 `null` ；
- 在 `HTML` 中不支持（没有）子节点；
- 在 `XML` 中子节点可以是 `Text` 或 `EntityReference` 。

尽管它们也是节点，但特性却不被认为是 `DOM` 文档树的一部分。开发人员最常使用的是 `getAttribute()` 、 `setAttribute()` 和 `remveAttribute()`方法，很少直接引用特性节点。

## NodeList

理解 `NodeList` 及其“近亲” `NamedNodeMap` 和 `HTMLCollection` ，是从整体上透彻理解 `DOM` 的关键所在。这三个集合都是“动态的”；换句话说，每当文档结构发生变化时，它们都会得到更新。因此，它们始终都会保存着最新、最准确的信息。从本质上说，所有 `NodeList` 对象都是在访问 `DOM`文档时实时运行的查询。例如，下列代码会导致无限循环：

```
var divs = document.getElementsByTagName("div"),
i,
div;
for (i=0; i < divs.length; i++){
    div = document.createElement("div");
    document.body.appendChild(div);
}
```

**获取对应的集合：**
`document.getElementsByTagName()`获取是`HTMLCollection` 集合
`document.querySelectorAll()` 获取的是`NodeList` 集合（someDom`.childNodes` 也是返回`Nodelist` 集合。但是前者只是当时的一个“快照”集合，后者则是实时的数量集合）
`someNode.attributes` 获取 `NamedNodeMap`  集合
<img :src="$withBase('/imgs/12.jpg')">

## MutationObserver 接口

使用 `MutationObserver` 可以观察整个文档、`DOM` 树的一部分，或某个元素。此外还可以观察元素属性、子节点、文本，或者前三者任意组合的变化。变化的回调是以一个微任务（异步）方式处理。

```
var test = document.querySelector('.test');
// 这里的回调是异步（微任务）
const myObsever = new MutationObserver(( mutationRecords ) => {
    console.log( mutationRecords ); // 是一个修改记录集合
    console.log( 'element attributes update' )
})
// 对test 元素进行属性变化上的监听
myObsever.observe(test, { attributes: true });
```

_pis: `MutationObserver` (DOM3)是为代替性能不好的 `MutationEvent`(DOM2) 而问世的_

## DOM 扩展

## CSS 类扩展

- `getElementsByClassName()` 方法接收一个参数，即包含一个或多个类名的字符串，返回类名中包含相应类的元素的 `NodeList`

- `classList` 属性
  之前~要操作类名，可以通过 className 属性实现添加、删除和替换。但 className 是一个字符串，所以每次操作之后都需要重新设置这个值才能生效，即使只改动了部分字符串也一样，所以比较麻烦。
  现在~ `classList` 主角登场。`classList` 是一个新的集合类型 `DOMTokenList` 的实例。与其他 DOM 集合类型一样， `DOMTokenList`也有 length 属性表示自己包含多少项，也可以通过 `item()` 或中括号取得个别的元素。此外，`DOMTokenList` 还增加了以下方法：
  **add(value)**，向类名列表中添加指定的字符串值 value 。如果这个值已经存在，则什么也不做。
  **contains(value)**，返回布尔值，表示给定的 value 是否存在。
  **remove(value)** ，从类名列表中删除指定的字符串值 value 。
  **toggle(value)** ，如果类名列表中已经存在指定的 value ，则删除；如果不存在，则添加
  **\*pis**：添加了 `classList` 属性之后，除非是完全删除或完全重写元素的 `class` 属性，否则 `className` 属性就用不到了\*

## 焦点管理

**`document.activeElement`** 返回前拥有焦点的 DOM 元素。默认情况下`document.activeElement` 在页面刚加载完之后会设置为 `document.body` 。而在页面完全加载之前， `document.activeElement` 的值为 `null`

```
let button = document.getElementById("myButton");
button.focus();
console.log(document.activeElement === button); // true
```

**`document.hasFocus()`** 方法返回布尔值，表示文档是否拥有焦点

```
let button = document.getElementById("myButton");
button.focus();
console.log(document.hasFocus()); // true
```

## 自定义数据属性

定义了自定义数据属性后，可以通过元素的 `dataset` 属性来访问。 `dataset` 属性是一个`DOMStringMap` 的实例，包含一组键/值对映射。元素的每个 `data-name` 属性在 `dataset` 中都可以通过 `data-` 后面的字符串作为键来访问（例如，属性 `data-myname` 、 `data-myName` 可以通过 `myname` 访问，但要注意 `data-my-name` 、 `data-My-Name` 要通过 `myName` 来访问）。例如：

```
let div = document.getElementById("myDiv");
// 取得自定义数据属性的值
let appId = div.dataset.appId;
let myName = div.dataset.myname;

// 设置自定义数据属性的值
div.dataset.appId = 23456;
div.dataset.myname = "Michael";
```
