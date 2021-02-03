# 九阳神功《实用技巧》

## 可通过该网站直接访问，github 上 html 项目

[http://htmlpreview.github.io/](http://htmlpreview.github.io/)

## 在 input 或者 textarea 限制表情提交，导致后台数据报错：

```javascript
if (
  /[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g.test(
    value
  )
) {
  alert('不能输入表情符号');
  return;
}
```

## 实现文字转 base64，和 base64 转文字的方法

```javascript
!(function (W) {
  W.Base64 = {
    utf8ToBase64: str => {
      return btoa(unescape(encodeURIComponent(str)));
    },
    base64ToUtf8: str => {
      return decodeURIComponent(escape(atob(str)));
    }
  };
})(window);
```

## h5 页面，搜索框搜索的时候，给键盘加一个确定按钮，这样我们界面上就不需要加一个确定按钮。

实现步骤：

- 用`form`标签包裹`input`
- 给`form`加上`action`属性，如`action="javascript:void(0);"`
- 给`input`绑定，`onpress`事件，并且判断`keyCode`是否等于`13`，如果是`13`，则表示当前按下的是确定/前往的按钮。然后在该事件下执行对应的操作

## 对 input 输入的控制（vue 项目）

```html
<!--手机号码的输入处理(要求默认为数字键盘)-->
<input v-model="num" type="tel" @input="change" />
```

```javascript
//方法
change() {
    this.num = this.num.replace(/\D/g,'');
},
```

```html
<!--身份证号等其他输入-->
<input v-number-only @input="change2" ref="inp" />
```

```javascript
//方法
change2() {
    if(this.$refs.inp.value.length >= 18) {
        this.$refs.inp.value = this.$refs.inp.value.substr(0,18);
    }
}
//指令
directives: {
    numberOnly: {
        bind: function(el) {
            el.handler = function() {
                el.value = el.value.replace(/[^0-9a-zA-Z]+/, '')
            }
            el.addEventListener('input', el.handler)
        },
        unbind: function(el) {
            el.removeEventListener('input', el.handler)
        }
    }
}
```

## 判断 pc 端浏览器页面是否缩放（默认 100 ），以及缩放比例

```javascript
function detectZoom() {
  var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();

  if (window.devicePixelRatio !== undefined) {
    ratio = window.devicePixelRatio;
  } else if (~ua.indexOf('msie')) {
    if (screen.deviceXDPI && screen.logicalXDPI) {
      ratio = screen.deviceXDPI / screen.logicalXDPI;
    }
  } else if (
    window.outerWidth !== undefined &&
    window.innerWidth !== undefined
  ) {
    ratio = window.outerWidth / window.innerWidth;
  }

  if (ratio) {
    ratio = Math.round(ratio * 100);
  }

  return ratio;
}
```

## vuex 实现分模块打包打对应业务代码中

由于 vuex 模块全部打包到`app.js`  文件进去导致`app.js`文件过大。因此，实现`vuex`分模块打包到各自业务中去。
实现方式：做个`vue`插件，异步引入使用到的`vuex文`件（该业务专属的`vuex`文件），并且动态注册`vuex`。从而实现分模块打包 vuex 到各自业务
<img :src="$withBase('/imgs/1.png')" >
<img :src="$withBase('/imgs/2.png')">

## node  处理视频（格式转换等）

`fluent-ffmpeg`文档： [https://cloud.tencent.com/developer/article/1524052](https://cloud.tencent.com/developer/article/1524052)

`demo`： [https://www.jianshu.com/p/25816cc8a6bc](https://www.jianshu.com/p/25816cc8a6bc)

## 手机抓包工具 ios： Stream 安卓：httpCanary

## 匹配汉字的正则（永不过时）

汉子最先进的正则表达式：`/\p{Unified_Ideograph}/u`

## scrollIntoView() 方法

可以在所有 `HTML` 元素上调用，通过滚动浏览器窗口或某个容器元素，调用元素就可以出现在视口中。当页面发生变化时，一般会用这个方法来吸引用户的注意力。实际上，为表单元素（如：`input`，`select`等）设置焦点也会导致浏览器滚动并显示出获得焦点的元素。

```javascript
someDom.scrollIntoView();
```

## 最佳实践

**1. 可读性**

- 变量名应为名词如 `car` 或 `person`。
- 函数名应该以动词开始，如 `getName()`。返回布尔类型值的函数一般以 `is` 开头，`isEnable()`。
- 变量和函数都应使用合乎逻辑的名字，不要担心长度。

**2、可维护**

- 常量与代码逻辑分离

```javascript
// 分离前
if(true) {
    alert('成功！')
}else {
    alert('失败！')
}

// 分离后 （推荐）
const Constants = {
    SUCCESS: '成功',
    FAIL: ‘失败！’
}
if(true) {
    alert(Constants.SUCCESS)
}else {
    alert(Constants.FAIL)
}
```

**3、性能**

- 避免全局查找

  可能优化脚本性能最重要的就是注意全局查找。使用全局变量和函数肯定要比局部的开销更大，因为要涉及作用域链上的查找。请看以下函数：

  ```javascript
  function updateUI() {
    var imgs = document.getElementsByTagName('img');
    for (var i = 0, len = imgs.length; i < len; i++) {
      imgs[i].title = document.title + ' image ' + i;
    }
    var msg = document.getElementById('msg');
    msg.innerHTML = 'Update complete.';
  }
  ```

  该函数可能看上去完全正常，但是它包含了三个对于全局 `document` 对象的引用。如果在页面上有多个图片，那么`for` 循环中的 `document` 引用就会被执行多次甚至上百次，每次都会要进行作用域链查找。通过创建一个指向 `document` 对象的局部变量，就可以通过限制一次全局查找来改进这个函数的性能：

  ```javascript
  function updateUI() {
    var doc = document;
    var imgs = doc.getElementsByTagName('img');
    for (var i = 0, len = imgs.length; i < len; i++) {
      imgs[i].title = doc.title + ' image ' + i;
    }
    var msg = doc.getElementById('msg');
    msg.innerHTML = 'Update complete.';
  }
  ```

- 避免不必要的属性查找

  ```javascript
  var query = window.location.href.substring(window.location.href.indexOf('?'));
  ```

  在这段代码中，有 6 次属性查找：`window.location.href.substring()`有 3 次，`window. location.href.indexOf()`又有 3 次。只要数一数代码中的点的数量，就可以确定属性查找的次数了。

  推荐写法：

  ```javascript
  var url = window.location.href;
  var query = url.substring(url.indexOf('?'));
  ```

  这个版本的代码只有 4 次属性查找，相对于原始版本节省了 33%。在更大的脚本中进行这种优化，倾向于获得更多改进。

* 推荐写法

  ```javascript
  //《 案例1 》
  var name = values[i];
  i++;
  // 推荐改成
  var name = values[i++];

  //《 案例2 》
  var a = 1;
  var b = 2;
  // 推荐改成
  var a = 1,
    b = 2;
  ```

## 拖拽上传文件

```html
<div class="container">拖拽上传图片</div>
```

```javascript
// js
const container = document.querySelector('.container');
container.addEventListener('dragenter', e => {
  e.preventDefault();
});
container.addEventListener('dragover', e => {
  e.preventDefault();
});
container.addEventListener('drop', e => {
  e.preventDefault();
  const files = e.dataTransfer.files; // 获取文件对象列表
  toAjax(files);
});
function toAjax(files) {
  const form = new FormData();
  for (let i = 0; i < files.length; i++) {
    form.append(`img${i}`, files[i]);
  }
  const xhr = new XMLHttpRequest();
  xhr.open('post', 'http:xxx.com/upload');
  xhr.onreadystatechange = function () {
    if (xhr.readyState == 4) {
      alert(xhr.responseText);
    }
  };
  xhr.send(form);
}
```
