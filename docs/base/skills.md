# 九阳神功《实用技巧》

## 可通过该网站直接访问，github 上 html 项目

[http://htmlpreview.github.io/](http://htmlpreview.github.io/)

## 在 input 或者 textarea 限制表情提交，导致后台数据报错：

```
if(/[^\u0020-\u007E\u00A0-\u00BE\u2E80-\uA4CF\uF900-\uFAFF\uFE30-\uFE4F\uFF00-\uFFEF\u0080-\u009F\u2000-\u201f\u2026\u2022\u20ac\r\n]/g.test(value)) {
    alert("不能输入表情符号");
    return;
}
```

## 实现文字转 base64，和 base64 转文字的方法

```
!function(W){  
    W.Base64 = {     
        utf8ToBase64: (str) => {       
            return btoa(unescape(encodeURIComponent(str)));    
        },
        base64ToUtf8: (str) => {        
            return decodeURIComponent(escape(atob(str)));     
        }  
      }
  }(window);
```

## h5 页面，搜索框搜索的时候，给键盘加一个确定按钮，这样我们界面上就不需要加一个确定按钮。

实现步骤：

- 用`form`标签包裹`input`
- 给`form`加上`action`属性，如`action="javascript:void(0);"`
- 给`input`绑定，`onpress`事件，并且判断`keyCode`是否等于`13`，如果是`13`，则表示当前按下的是确定/前往的按钮。然后在该事件下执行对应的操作

## 对 input 输入的控制（vue 项目）

```
<!--手机号码的输入处理(要求默认为数字键盘)-->
<input v-model="num" type="tel" @input="change">

//方法
change() {
    this.num = this.num.replace(/\D/g,'');
},

<!--身份证号等其他输入-->
<input v-number-only @input="change2" ref="inp"/>
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

```
function detectZoom (){
    var ratio = 0,
    screen = window.screen,
    ua = navigator.userAgent.toLowerCase();

    if (window.devicePixelRatio !== undefined) {
        ratio = window.devicePixelRatio;
    } else if (~ua.indexOf('msie')) {
        if (screen.deviceXDPI && screen.logicalXDPI) {
            ratio = screen.deviceXDPI / screen.logicalXDPI;
        }
    } else if (window.outerWidth !== undefined && window.innerWidth !== undefined) {
        ratio = window.outerWidth / window.innerWidth;
    }

    if (ratio){
        ratio = Math.round(ratio * 100);
   }

    return ratio;
};


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

```
someDom.scrollIntoView();
```
