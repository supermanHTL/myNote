# 内功心法《基础》

## 字符串/数组方法小记

- `trim()`去除字符串首尾残留的空格

```
var str = '              11223    ';  
console.log(str.trim());  //输出的是11223，左右两端无空格。
```

- `substr(start, length)` 在字符串中抽取从  start  下标开始的指定   数目的字符。

```
var str = 'abcdef';
str.substr(1,2);  //结果是：bc;
```

- `str.toLowerCase()`   把 str 字符中含有英文大写的，都改成小写；       
  `str.toUpperCase()`   把 str 字符串中含有小写的都改成大写；

- `indexOf()`和`search()`区别：     
  这两个方法作用相似，都是可以找出目标的位置索引值，如果没有目标则，都是返回-1.但是`indexOf`效率高于  `search`方法`indexOf()`用于字符串和数组，`search`只用于字符串。`indexOf()`,的`‘()’`里放的是数字或者字符串，而`search()`的`“()”`里多数放的是正则表达式或者放字符串。
- `filter()` 筛选的作用，最终是返回一个数组。

```
var arr = [1,2,3,4,5];  function fn(a) { return a &gt;= 3};  
var me = arr.filter(fn);  // 结果是me： 3，4，5；  说明了filter方法可以将满足fn条件的值，放入一个新数组里。  
```

- `Obj.hasOwnProperty('xx')`  返回一个`boolean`，表示`Obj`是否包含'xx'这个属性

## image 中的 complete 和 onload 属性

- `complete` 属性返回一个布尔值，表示浏览器是否已完成对图像的加载。即，在 onload 方法里面`img.complete` 属性为肯定为`true`，因为图片已经加载完成。
- `onload` 方法表示图片加载完成后的回调钩子

## 不同类型比较，true 还是 false 的比较原则

两个操作数都是数值，则进行数值比较两个操作数。都是字符串，则比较两个字符串对应的字符编码值。两个操作数有一个是数值，则将另一个转换为数值，再进行数值比较。两个操作数有一个是对象，则先调用`valueOf()`方法或`toString()`方法，再用结果比较

## Object.preventExtensions()、Object.seal()、Object.freeze()  区别

**相同**：直接对源对象，造成不可扩展。其返回值就是源对象
**不同**：

- `preventExtensions`之后只是不允许添加新属性, 原有属性可修改可删除；
- `seal`之后不允许添加新属性， 不允许删除原有属性， 是否可修改由原属性的配置决定；
- `freeze`之后不允许添加新属性， 不允许删除原有属性, 不允许修改值以及属性描述符；

**由此可见, 锁定深度是一层一层递进的；注意：以上处理后，Object.isExtensible(obj)判断都是返回 false。对象不可扩展。**

## js 语言的描述

js 是一门基于对象的，多范式的编程语言。多范式是指多方法的编程风格，如：面向对象编程、面向过程编程、函数式编程。

## typeof 操作符

typeof 操作符用来判断数据类型，得到的值是：number\bealoon\object\function\undefined   其中一种，但是注意 typeof null    浏览器给出的是‘object’。因为 null 被认为是一个空对象的引用。

## js 继承的概述

js 继承的概述 js 面向对象编程和`java`的不同，`java`的面向对象有两个概念即：**类**和**实例**。
如：学生就是一个类，小明则是一个实例，则实例继承了类的属性方法。
`js`则是通过原型来实现面向对象编程，在`js`里一切皆为对象，所以继承也就是把一个对象的原型指向另外一个对象罢了。
如: 利用`var obj1 = Object.create(obj2)`来创建新对象，此时`obj1`的原型就指向了`obj2`，所以`obj1`拥有了`obj2`的属性和方法，从而实现了继承关系。

## js 里面一切皆为对象，这里的对象有分两个大类，一个是普通对象，另一个是函数对象。如何区分呢？

用`new Function()`来创建的对象，称之为函数对象，有：`Object、Array、String、Boolean`和普通的`function`。除此之外都是普通对象。

## 那函数对象和普通对象有何本质上的区别呢？

函数对象有原型对象`prototype`和原型指针`__proto__`。而普通对象只有原型指针`__proto__` 。
**概括**：`Function、Array、String、Boolean`的原型继承了`Object`，但是`Object、Array、String、Boolean`确是`Function`的实例

## Symbol 有感

`Symbol`表示唯一，主要用于作为对象属性而存在。它不能进行四则运算，可以用显示方法转成字符串和布尔值。作为对象的属性时，用普通的`for....in`或者`for .... of`或者`Object.keys()`等方式是无法获取`Symbol`属性的，必须要用专用的方法来获取对象里面所有的`Symbol`属性，方法为:
`Object.getOwnPropertySymbols( obj )` 只获取 obj 对象里面的`symbol` 键的名称集合
`Reflect.ownKeys( obj )` 获取 obj 对象，所有的键名称集合，包括普通属性和`symbol`的属性

## 面向对象面向对象和面向过程概述

**面向过程**：亲力亲为、事无巨细、面面俱到、步步紧跟
**面向对象**：找一个对象指挥得到结果，也就是直接使用一个对象，即面向对象的“面向”相当于“使用”的意思，也就是使用对象。面向对象开发其实就是对面向过程的封装的一个过程。

## 面向对象特性：

1. 抽象性：1、抽取核心数据 2、不在特定条件下，不知道该对象描述的是什么
2. 封装性：对象将数据与方法封装起来，方法将过程（面向过程）封装
3. 继承性：把别人的拿来成为自己的编码

## 从某个数值区间获取随机数公式

**公式**：number = Math.floor(Math.random() \* **total_number_of_choices** + **first_possible_value**)
**total_number_of_choices**： 这个区间一共有几个数值
**first_possible_value**：这个区间最小的值
如：在 2 ~ 10 直接获取随机数，total_number_of_choices 为 9，first_possible_value 为 2，因此

```
const  num = Math.floor( Math.random() * 9 + 2 )
```

## js 进制之间的互相转换

将 10 进制转换为任何进制使用`toString(radix)`。需要将非 10 进制转换为 10 进制，推荐`parseInt(str,radix)`。
`number.toString(radix)`：表示将该数字转为 `radix` 进制。
`parseInt(str,radix)`：表示`str`字符串以`radix`进制的身份，转为 10 进制。

```
// 10进制转2进制
const num = 8;
num.toString(2);  //   "1000"

// 2进制转成10进制
const str = '1000';
parseInt(str, 2); //   8

```

## 位操作符

- 按位非：用波浪符（~）表示，最终效果是对数值取反并减 1。如：`~-1 === 0` 为 `true`

## 什么是渐进式框架（如：vue）？

框架提供了 N 多功能，你可以选择性的使用你想用的（如：`vuex`、`vue-router`）。并非强制使用“全家桶”

## 命令式渲染（如：模板引擎）和声明式渲染（如：vue）区别？

**命令式**：需要以具体代码表达在哪里做什么？它是如何实现的  
**声明式**：只需要声明在哪里需要做什么？不需要关心具体怎么实现的  
例子：有一个数组，我们要让里面的每个数字乘以 2

```
// 命令式
let arr=[2,4,5,6]
let arr2=[]
for(let i=0;i<arr.length;i++){
    arr2.push(arr[i]*2)
}

//声明式
let arr=[2,4,5,6]
let arr2=arr.map(item=>item*2)
console.log(arr2)
```

## 位操作符

ECMAScript 中所有数值都以`IEEEE-754 64`位格式存储，但位操作符并不是直接操作`64`位的值，而是先将`64`位的值转换成`32`位的整数，然后执行操作，最后再将结果转回`64`位。

## RegExp 实例属性

- **global**：布尔值，表示是否设置了`g`标志
- **ignoreCase**：布尔值，表示是否设置了`i`标识
- **lastIndex**：整数，表示开始搜索下一个匹配项的字符位置，从`0`算起
- **multiline**：布尔值，标识是否设置了`m`标识
- **source**：正则表达式的字符串表示，按照字面量形式而非传入构造函数中的字符串模式返回。

```
const pattern = new RegExp("\\[bc\\]at", "i");
console.log(pattern.global);  // false
console.log(pattern.ignoreCase);  // true
console.log(pattern.multiline);  // false
console.log(pattern.lastIndex);  // 0
console.log(pattern.source);  // \[bc\]at
```

## RegExp 实例方法

- **exec()**：改方法专门为捕获组而设计的。接收一个字符串，然后返回一个匹配项信息的数组，或者`null`。数组中额外包含了两个属性，`index`和`input`。`index`表示匹配项在字符串中的位置，即索引。`input`表示当前完整的字符串，即`exec`的参数。
  注意：`exec`方法，在不管有没有设置`g`标识，都会进行一次完整的匹配，再返结果。

```
    const text = "mom and dad and baby";
    const pattern = /mom( and dad( and baby)?)?/gi;
    const res = pattern.exec(text);
    res.index // 0
    res.input // "mom and dad and baby"
    res[0] // "mom and dad and baby"
    res[1] // " and dad and baby"
    res[2] // " and baby"
```

- **test()**：接收一个字符串，返回`true`或者`false`。只为判断字符串是否满足了正则规则而已。

**共同点**：模式中如果设置了 g 标识，则`lastIndex`会基于上一次匹配的位置，作为下一次匹配的起始位置。若匹配结束，则`lastIndex`再从`0`开始。

```
      const p = /abc/g;
      const text = 'ffabc';
      p.test(text); // true;
      p.lastIndex; // 5
      p.test(text); // false
      p.lastIndex; // 0
```

## RegExp 构造函数属性

`RegExp.$1`、`RegExp.$2` ······ `RegExp.$9` 分别用于存储`第一`、`第二` ······ `第九`个匹配的捕获组。在调用 `exec()` 或 `test()` 方法时，这些属性会被自动填充。

```
const text = "this has been a short summer";
const pattern = /(..)or(.)/g;
if(pattern.test(text)) {
    RegExp.$1  //  sh
    RegExp.$2  //  t
}
```

<img :src="$withBase('/imgs/3.png')">

**注意 RegExp 构造函数的所有属性都没有任何 Web 标准出处，因此不要在生产环境中使用它们。**

## Function

### 函数内部属性

`arguments` 类数组对象，包含传入函数的所有参数。这对象还有一个叫`callee`的属性（**严格模式或箭头函数均无法使用**），该属性是一个指针，指向拥有这个`arguments`对象的函数。

```
    // 递归算法，有个问题，函数执行与函数名 factorial 紧紧耦合一起了，为了消除这种
    // 耦合现象，可以使用 arguments.callee
    function factorial(num) {
        if(num <= 1) {
            return 1;
        }else {
            return num * factorial(num - 1)
        }
    }
    // arguments.callee写法，消除耦合
    function factorial(num) {
        if(num <= 1) {
            return 1;
        }else {
            return num * arguments.callee(num - 1)
        }
    }
    // arguments.callee 严格不是下无法使用，可以用这种写法
    var factorial = (function f (num){
        if (num <= 1){
            return 1;
        } else {
            return num * f(num-1);  // f 方法只有在函数内部才能访问到
        }
    });
```

`new.target`：函数始终可以作为构造函数实例化一个新对象，或者作为普通函数被调用。ECMAScript 6 新增了检测函数是否使用 new 关键字调用的 new.target 属性。如果函数是正常调用的，则 new.target 的值是 undefined；如果是使用 new 关键字调用的，则 new.target 将引用被调用的构造函数

```
function King() {
    if (!new.target) {
        throw 'King must be instantiated using "new"'
    }
    console.log('King instantiated using "new"');
}
new King(); // King instantiated using "new"
King(); // Error: King must be instantiated using "new"
```

因此通过这个属性，也可以实现**抽象类**的功能。如下：

```
// 这里A 要做为抽象类
class A {
    constructor() {
        if(new.target === A) {
            throw Error('A 为抽象类，不能被实例化')
        }
    }
}
```

### 函数属性

    1. `length` 表示函数型参个数
    2. `prototype` 在`ECMAScript`中的引用类型而言，`prototype` 是保存他们所有实例方法的真正所在。    `prototype`属性是不可枚举的，因此用`for-in` 无法发现。
    3. `caller` 这个属性保存着调用当前函数的函数的引用（**严格模式或箭头函数均无法使用**），如果是在全局作用域中调用当前函数，它的值为null。

### 函数方法

- `apply()` 和 `call()`这两个方法的用途都是在特定的作用域中调用函数，实际上等于设置函数体内`this`对象的值。不同在于入参形式，`apply` 接收数组，`call` 需要分别传入。

````
   // apply 和call 用法
   const name = 'wrap';
   const obj = {
       name: 'inner'
   }
   function test(a,b) {
       return a + b + this.name ;
   }
   test.apply( obj, [1,2] );  // 3inner
   test.call( obj, 1 ,2 );  // 3 inner

   ```
   2. `bind()` 这个方法会创建一个函数的实例，其`this`会被绑定到传给`bind()`函数的值。
   ```
   window.color = "red";
   const o = { color: "blue" };
   function sayColor() {
       console.log(this.color);
   }
   const sayColor2 = sayColor.bind(o);
   sayColor2();  // blue
````

- bind() 方法会创建一个新的函数实例，其 this 值会被绑定到传给 bind()的对象

```
window.color = 'red';
var o = {
   color: 'blue'
};
function sayColor() {
   console.log(this.color);
}
let objectSayColor = sayColor.bind(o); // 返回新的函数实例
objectSayColor(); // blue
```

### 箭头函数

箭头函数虽然语法简洁，但也有很多场合不适用。箭头函数不能使用 `arguments`、`super` 和
`new.target`，也不能用作构造函数。此外，箭头函数也没有 `prototype` 属性。

### arguments 不同情景表现不同

情景 1：非严格模式下，修改参数的值，`arguments`的值也会一起同步

```
function fn(a) {
    a = 123;
    console.log( a, arguments[0] )
}
fn(1);  // 123, 123
```

情景 2：严格模式下，修改参数的值，则`arguments` 是不会同步

```
"use strict"
function fn(a) {
    a = 123;
    console.log( a, arguments[0] )
}
fn(1); // 123, 1
```

情景 3：函数参数有默认值的时候，`arguments`是无感知的。`arguments` 只关心 实际传入的参数

```
function fn(a = 666){
    console.log(a, arguments[0]);
}
fn(); // 666, undefined
```

**总结**：`arguments` 的值和 函数定义的参数，并非访问同一内存地址，只是在某种程度上做到了同步而已。`arguments` 只关心调用函数时，实际传入的参数值。

### js 函数无重载

ECMAScript 函数不能像传统编程那样重载。在其他语言比如 Java 中，一个函数可以有两个定义，只要签名（接收参数的类型和数量）不同就行。ECMAScript 函数没有签名，因为参数是由包含零个或多个值的数组表示的。没有函数签名，自然也就没有重载。

### 尾调用优化

ECMAScript 6 规范新增了一项内存管理优化机制，让 JavaScript 引擎在满足条件时可以重用栈帧。具体来说，这项优化非常适合“尾调用”。
**尾调用**：指外部函数的返回值是一个内部函数的返回值。如下：

```
function outerFunction() {
    return innerFunction(); // 尾调用
}
```

尾调用优化的条件就是确定外部栈帧真的没有必要存在了。涉及的条件如下：

- 代码在严格模式下执行；
- 外部函数的返回值是对尾调用函数的调用
- 尾调用函数返回后不需要执行额外的逻辑；
- 尾调用函数不是引用外部函数作用域中自由变量的闭包。

```
//  ------  无优化的例子  ------
"use strict";
// 无优化：尾调用没有返回
function outerFunction() {
    innerFunction();
}
// 无优化：尾调用没有直接返回
function outerFunction() {
    let innerFunctionResult = innerFunction();
    return innerFunctionResult;
}
// 无优化：尾调用返回后必须转型为字符串
function outerFunction() {
    return innerFunction().toString();
}
// 无优化：尾调用是一个闭包
function outerFunction() {
    let foo = 'bar';
    function innerFunction() { return foo; }
    return innerFunction();
}

// ---- 有优化的例子 ----
"use strict";
// 有优化：栈帧销毁前执行参数计算
function outerFunction(a, b) {
    return innerFunction(a + b);
}
// 有优化：初始返回值不涉及栈帧
function outerFunction(a, b) {
    if (a < b) {
        return a;
    }
    return innerFunction(a + b);
}
// 有优化：两个内部函数都在尾部
function outerFunction(condition) {
    return condition ? innerFunctionA() : innerFunctionB();
}


```

## 基本包装类型

为了便于操作基本类型值`ECMAScript`提供了 3 个特殊引用类型：`Boolean`、`Number`、`String`。每当读取一个基本类型值的时候，后台会创建一个对应的基本包装类型的对象，从而让我们能够调用一些方法来操作这些数据。如下：

```
const s1 = "some text";
const s2 = s1.substring(2);   // 此步为 读取模式
```

我们知道基本类型值不是对象，因而从逻辑上讲他们不应该有方法。其实，为了让我们实现这种直观的操作，后台已经自动完成了一系列的处理。而在读取模式中访问字符串是，后台都会自动完成下列处理。

1. 创建 `String` 类型的一个实例，即，基本包装类型的对象；
2. 在实例上调用指定方法；
3. 销毁这个实例

经过这样的处理，基本的字符串值就变得跟对象一样了。这三个步骤也分别适用于 `Boolean` 和`Number`类型对应的布尔值和数字值。

**注意**：引用类型与基本包装类型的主要区别就是对象的生存期。使用`new`操作符创建的引用类型的实例，在执行流离开当前作用域之前都一直保存在内存中。而自动创建的基本包装类型的对象，则只存在于一行代码的执行瞬间，然后立即被销毁。这意味着我们不能在运行时为基本类型值添加属性和方法。

## String

- **字符方法**
  `chatAt()` 和`chartCodeAt()` 两个用于访问字符串中特定字符串的方法，都是接收一个参数，基于 `0` 的字符位置。

      `chatAt()` 方法以单字符字符串的形式返回给定位置的那个字符。
      ```
      const str = "hello world";
      console.log( str.charAt(1) );  // "e"
      ```
      `chatCodeAt() `方法以返回给定位置的那个字符的十进制的 `Uicode` 码，在标准的 `Uicode` 码中都是以`16`进制表示。
      ```
      const str = "hello world";
      console.log( str.charCodeAt(1) ); // 101
      ```

- **字符串操作方法**
  `concat()` 用于将一个或多个字符串拼接，返回一个新的字符串。不过通常都是直接用`“+”`来做这个操作。
  `slice()`、`substr()`、和`substring()`，这三个方法都会返回被操作字符串的一个子字符串，而且也都是接收一或两个参数。第一个参数指定字符串的开始位置，第二个参数（在指定的情况下）表示子字符串到哪里结束。
  `slice()` 和 `substring()` 的第二个参数指定的是子字符串最后一个字符后面的位置。`substr()` 的第二个参数指定的则是返回的字符串个数。如果没有给这些方法传递第二个参数，则将字符串的长度最为结束位置。和`concat()`方法一样，都不会修改字符串本身的值。
  在参数为正数的时候，`slice()` 和`substring()`的功能基本相同，若参数为负数时，则他们的行为就不尽相同了。`slice()`方法会将传入的的负值与字符串的长度相加，`substr()`方法将负的第一个参数加上字符串的长度，而负的第二个参数转为`0`。最后，`substring()` 方法会把所有负值参数都转为`0`。如下例子：
  ```
  const str = "hello world";
  str.slice(-3);  // "rld"
  srt.substring(-3); // "hello world"
  str.substr(-3); // "rld"
  str.slice(3, -4); // "lo w"
  str.substring(3, -4 ); // "hel"
  str.substr(3,  -4);  // ""
  ```
  ***
- **字符串位置方法**
  `indexOf()`
  `lastIndexOf()` 从字符串的末尾往前找
  都是从一个字符串中搜索给定的的子字符串，然后返回子字符串的位置（如果没有找到该子字符串，则返回-1）

---

- **字符串包含方法**
  `startsWith( searchString [, position] )` 从指定位置开始操作，默认从头开始查找，返回`Boolean`
  `endsWith( searchString)` 返回`Boolean`
  `includes( searchString [, position] )` 从指定位置开始操作，默认从头开始查找，返回`Boolean`

---

- **trim() 方法**
  去除字符串首尾的空格

---

- **字符串大小写转换方法**
  `toLowerCase()` 全部转小写
  `toUpperCase()` 全部转大写

---

- **字符串的模式匹配方法**
  `match()` 接收一个参数，可以是 RegExp 对象或字符串。返回结果和`RegExp`对象`exec()`相同。
  `search()` 接收一个参数，可以是 RegExp 对象或字符串。返回目标位置索引，没找到匹配项，则返回-1；
  `replace()` 接收两个参数，第一个参数可以是`RegExp`对象或者字符串（这个字符串不会被转成正则表达式），第二个参数可以是一个字符串或做一个函数。
  `split()` 可以指定分隔符将一个字符串分割成多个字字符串，并将结果放到一个数组中。分割符可以是字符串可以是`RegExp`对象或字符串。第二个是可选参数，用于指定结果数组的大小。

---

- **localeCompare() 方法**
  这个方法比较两个字符串，并返回下列值中的一个：
  1. 如果字符串在 _字母表_ 中应该排在**字符串参数**之前，则放回负数（大多数是-1）
  2. 如果是字符串等于**字符串参数**，则返回 0
  3. 如果字符串在 _字母表_ 中应该排在**字符串参数**之后，则返回一个整数（大多数是 1）

---

- **fromCharCode() 方法**
  `String` 构造函数本身还有一个静态方法，`fromCharCode()`。这个方法的任务就是接受一或多个字符编码，然后将它们转换成一个字符串。从本质上来看，这个方法和`charCodeAt()` 执行的是相反操作。
  `console.log( String.fromCharCode( 104, 101, 108, 108, 111 ) ); // "hello"`

---

- **repeat()方法**
  这个方法接收一个整数参数，表示要将字符串复制多少次，然后返回拼接所有副本后的结果

---

- **padStart()和 padEnd()方法**
  `padStart()`和 `padEnd()`方法会复制字符串，如果小于指定长度，则在相应一边填充字符，直至
  满足长度条件。这两个方法的第一个参数是长度，第二个参数是可选的填充字符串，默认为空格

---

**注意：**（BMP 与 代理对）
对于 U+0000~U+FFFF 范围内的字符，`length`、`charAt()`、`charCodeAt()`和 `fromCharCode()`
返回的结果都跟预期是一样的。这是因为在这个范围内，每个字符都是用 16 位表示的，而这几个方法也都基于 16 位码元完成操作。只要字符编码大小与码元大小一一对应，这些方法就能如期工作。这个对应关系在扩展到 `Unicode` 增补字符平面时就不成立了。问题很简单，即 16 位只能唯一表示 65 536 个字符。这对于大多数语言字符集是足够了，在 `Unicode` 中称为基本多语言平面（`BMP`）。为了表示更多的字符，`Unicode` 采用了一个策略，即每个字符使用另外 16 位去选择一个增补平面。这种每个字符使用两个 16 位码元的策略称为**代理对**。

在超出 BMP 的字符时 （代理对 字符），其字符长度 length 为 2。操作这类字符用`codePoinAt` 替代 `charCodeAt`，`String.fromCodePoint` 替代 `String.fromcharCode` 操作。

```
var a = 'ab😊';
a.length; // 为 4
```

## encodeURI() 和 encodeURIComponent()

`encodeURI()` 主要用于整个 URI 进行编码
`encodeURIComponent()`主要用于对 URI 中的某一段进行编码
使用 `encodeURI()`编码后的结果是除了**空格**之外的其他字符都原封不动，只有**空格**被替换成 `%20`。而 `encodeURIConponent()` 方法会对所有**非字母数字**字符进行编码。这也正是可以对整个`URI`使用`encodeURI()`,而只能对附加在现有`URI`后面的字符串使用`encodeURIConpoent()` 的原因了。

## eval() 像是一个完整的 ECMAScript 解析器

`eval()` 只接受一个参数，即要执行的 `ECMAScript` 字符串。

```
eval("console.log('abc')");  // 等同于 console.log('abc')
```

当解析器发现代码中调用 `eval()` 方法时，它会将传入的参数当做实际的 `ECMAScript`语句来解析，然后把执行结果插入到原位置。通过 eval()执行的代码被认为是包含该次调用的执行环境的一部分，因此被执行的代码具有与该执行环境相同的作用域链。这意味着通过 `eval()` 执行的代码可以引用在包含环境中定义的变量，如：

```
// 例子1：
const msg = "hello";
eval( "console.log(msg)" );   // hello

// 例子2：
eval("function say() {console.log('hello')}")；
say()； // hello
```

**注意：** 在 `eval()` 中创建的人变量或者函数都不会被提升，因为在解析代码的时候，它们被包含在一个字符串中。它们只在`eval()`执行的时候创建。**在严格模式下，在外部访问不到 `eval()` 创建的的任何变量和函数，因此以上两个例子在严格模式中都会报错**。

```
// 严格模式中，这样是没问题的（只是外面访问不到eval() 里所定义的变量和方法）
"use scrict"
const msg = "hello";
eval("console.log(msg)");  // hello
```

## Array

### Array.from( arrayLike [, mapFn[, thisArg]] )

方法从一个类似数组或可迭代对象创建一个新的，浅拷贝的数组实例。
参数描述：
`arrayLike`：想要转换成数组的伪数组对象或可迭代对象。
`mapFn`：如果指定了该参数，新数组中的每个元素会执行该回调函数。
`thisArg`：可选参数，执行回调函数  mapFn  时  this  对象。

`Array.from(obj, mapFn, thisArg)` 就相当于 `Array.from(obj).map(mapFn, thisArg)`

```
// 从 String 生成数组
Array.from('foo');  // [ "f", "o", "o" ]

// 从 Set 生成数组
const set = new Set(['foo', 'bar', 'baz', 'foo']);
Array.from(set);  // [ "foo", "bar", "baz" ]

// 从 Map 生成数组
const map = new Map([[1, 2], [2, 4], [4, 8]]);
Array.from(map);  // [[1, 2], [2, 4], [4, 8]]

// 使用第二个参数，处理数组中的值
Array.from([1, 2, 3], x => x + x);  // [2, 4, 6]

```

### Array.of()

可以把一组参数转换为数组。

```
console.log(Array.of(1, 2, 3, 4)); // [1, 2, 3, 4]
```

### Array.isArray( arr ) 确定一个值是否为数组

## 二进制家族：Blob、ArrayBuffer 和 Buffer

**关系图：**
<img :src="$withBase('/imgs/4.jpg')">

**`Blob`**: 前端的一个专门用于支持文件操作的二进制对象
**`ArrayBuffer`**：前端的一个通用的二进制缓冲区，类似数组，但在 API 和特性上却有诸多不同
**`Buffer`**：Node.js 提供的一个二进制缓冲区，常用来处理 I/O 操作

### Blob

我们首先来介绍`Blob`，`Blob`是用来支持文件操作的。简单的说：在`JS`中，有两个构造函数 `File` 和 `Blob`, 而`File`继承了所有`Blob`的属性。所以在我们看来，`File`对象可以看作一种特殊的`Blob`对象。
在前端工程中，我们在哪些操作中可以获得 File 对象呢？
<img :src="$withBase('/imgs/5.jpg')">

我们上面说了，`File`对象是一种特殊的`Blob`对象，那么它自然就可以直接调用`Blob`对象的方法。让我们看一看`Blob`具体有哪些方法，以及能够用它们实现哪些功能
<img :src="$withBase('/imgs/6.jpg')">

**Blob 实战**

通过 `window.URL.createObjectURL`方法可以把一个`blob`转化为一个`Blob URL`，并且用做文件下载或者图片显示的链接。`Blob URL`所实现的下载或者显示等功能，仅仅可以在单个浏览器内部进行。而不能在服务器上进行存储，亦或者说它没有在服务器端存储的意义。下面是一个`Blob`的例子，可以看到它很短

```
blob:d3958f5c-0777-0845-9dcf-2cb28783acaf
```

和冗长的`Base64`格式的`Data URL`相比，`Blob URL`的长度显然不能够存储足够的信息，这也就意味着它只是类似于一个浏览器内部的“引用“。从这个角度看，`Blob URL`是一个浏览器自行制定的一个伪协议

- `Blob`实现下载文件

我们可以通过`window.URL.createObjectURL`，接收一个`Blob（File）`对象，将其转化为`Blob URL`,然后赋给 `a.download`属性，然后在页面上点击这个链接就可以实现下载了

```
<!-- html部分 -->
<a id="h">点此进行下载</a>
<!-- js部分 -->
<script>
    var blob = new Blob(["Hello World"]);
    var url = window.URL.createObjectURL(blob);
    var a = document.getElementById("h");
    a.download = "helloworld.txt";
    a.href = url;
 </script>
```

(备注：`download`属性不兼容`IE`, 对`IE`可通过`window.navigator.msSaveBlob`方法或其他进行优化)

- `Blob`实现图片本地显示

`window.URL.createObjectURL`生成的`Blob URL`还可以赋给`img.src`，从而实现图片的显示

```

<!-- html部分 -->
<input type="file" id='f' />
<img id='img' style="width: 200px;height:200px;" />

<!-- js部分 -->
<script>
  document.getElementById('f').addEventListener('change', function (e) {
        var file = this.files[0];
        const img = document.getElementById('img');
        const url = window.URL.createObjectURL(file);
        img.src = url;
        img.onload = function () {
            // 释放一个之前通过调用 URL.createObjectURL创建的 URL 对象
            window.URL.revokeObjectURL(url);
        }
  }, false);
</script>
```

- `Blob`实现文件分片上传

通过`Blob.slice(start,end)`可以分割大`Blob为`多个小`Blob`。`xhr.send`是可以直接发送`Blob`对象的

```

<!-- html部分 -->
<input type="file" id='f' />
<!-- js部分 -->

<script>
function upload(blob) {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', '/ajax', true);
    xhr.setRequestHeader('Content-Type', 'text/plain')
    xhr.send(blob);
}
document.getElementById('f').addEventListener('change', function (e) {
    var blob = this.files[0];
    const CHUNK_SIZE = 20; .
    const SIZE = blob.size;
    var start = 0;
    var end = CHUNK_SIZE;
    while (start < SIZE) {
        upload(blob.slice(start, end));
        start = end;
        end = start + CHUNK_SIZE;
 }}, false);
```

- 本地读取文件内容

如果想要读取`Blob`或者文件对象并转化为其他格式的数据，可以借助`FileReader`对象的`API`进行操作
**FileReader.readAsText(Blob)**：将`Blob`转化为文本字符串
**FileReader.readAsArrayBuffer(Blob)**： 将`Blob`转为`ArrayBuffer`格式数据
**FileReader.readAsDataURL()**: 将`Blob`转化为`Base64`格式的`Data URL`

### ArrayBuffer

让我们用一张图看下`ArrayBuffer`的大体的功能
<img :src="$withBase('/imgs/7.jpg')">

同时要说明，`ArrayBuffer`跟`JS`的原生数组有很大的区别，如图所示
<img :src="$withBase('/imgs/8.jpg')">

**ArrayBuffer 实战**

- 通过`ArrayBuffer`的格式读取本地数据

```
document.getElementById('f').addEventListener('change', function (e) {
      const file = this.files[0];
      const fileReader = new FileReader();
      fileReader.onload = function () {
            const result = fileReader.result;
            console.log(result)
      }
      fileReader.readAsArrayBuffer(file);
}, false);
```

结果：
<img :src="$withBase('/imgs/9.jpg')">

- 通过`TypeArray`对`ArrayBuffer`进行写操作

```
const typedArray1 = new Int8Array(8);
typedArray1[0] = 32;

const typedArray2 = new Int8Array(typedArray1);
typedArray2[1] = 42;

console.log(typedArray1);//  output: Int8Array [32, 0, 0, 0, 0, 0, 0, 0]
console.log(typedArray2);//  output: Int8Array [32, 42, 0, 0, 0, 0, 0, 0]
```

- 通过`DataView`对`ArrayBuffer`进行写操作

```
const buffer = new ArrayBuffer(16);
const view = new DataView(buffer);
view.setInt8(2, 42);
console.log(view.getInt8(2));// 输出: 42
```

### Buffer

`Buffer`是`Node.js`提供的对象，前端没有。 它一般应用于`IO`操作，例如接收前端请求数据时候，可以通过以下的`Buffer`的`API`对接收到的前端数据进行整合
<img :src="$withBase('/imgs/10.jpg')">

**Buffer 实战**

```

// Node端（Koa）
const app = new Koa();
app.use(async (ctx, next) => {
    if (ctx.path === '/ajax') {
        const chunks = [];
        const req = ctx.req;
        req.on('data', buf => {
            chunks.push(buf);
        })
        req.on('end', () => {
            let buffer = Buffer.concat(chunks);
            console.log(buffer.toString())
        })
    }}
 );
app.listen(3000)


// 前端
const xhr = new XMLHttpRequest();xhr.open("POST", "ajax", true);
xhr.setRequestHeader('Content-Type', 'text/plain');
xhr.send("asdasdsadfsdfsadasdas");
```

运行结果

```
// Node端输出
asdasdsadfsdfsadasdas
```

## Map

`Map` 的大多数特性都可以通过 `Object` 类型实现，但二者之间还是存在一些细微的差异，`Map`可以用对象作为健。
初始化之后，可以使用 `set()`方法再添加键/值对。另外，可以使用 `get()`和 `has()`进行查询，可
以通过 `size` 属性获取映射中的键/值对的数量，还可以使用 `delete()`和 `clear()`删除值。

```
// 使用嵌套数组初始化映射
const m1 = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);
alert(m1.size); // 3

const m = new Map();
alert(m.has("firstName")); // false
alert(m.get("firstName")); // undefined
alert(m.size); // 0

const m = new Map().set("key1", "val1");
m.set("key2", "val2")
   .set("key3", "val3");
alert(m.size); // 3
```

**迭代特性：**
可以通过 `entries()`方法（或者 `Symbol.iterator` 属性，它引用 `entries()`）取得这个迭代器。`keys()`和 `values()`分别返回以插入顺序生成键和值的迭代器。还可以用 `forEach` 来遍历 `map` 集合。

```
const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);

//---- entries()取得的迭代器 ---
for (let pair of m.entries()) {
    alert(pair);
}
// [key1,val1]
// [key2,val2]
// [key3,val3]

//---- keys()取得的迭代器---
for (let key of m.keys()) {
    alert(key);
}
// key1
// key2
// key3

//---- values()取得的迭代器 ---
for (let key of m.values()) {
    alert(key);
}
// value1
// value2
// value3

//---- forEach 遍历 map 集合 ---
m.forEach((val, key) => alert(`${key} -> ${val}`));
// key1 -> val1
// key2 -> val2
// key3 -> val3

```

因为`entries()`是默认迭代器，所以可以直接对映射实例使用扩展操作，把映射转换为数组：

```
const m = new Map([
    ["key1", "val1"],
    ["key2", "val2"],
    ["key3", "val3"]
]);
console.log([...m]); // [ [ key1,val1 ],[ key2,val2 ],[ key3,val3 ] ]

```

## WeakMap

`WeakMap` 是 `Map` 的“兄弟”类型，其 `API` 也是 `Map` 的子集。`WeakMap` 中的“weak”（弱），描述的是 `JavaScript` 垃圾回收程序对待“弱映射”中键的方式。
弱映射中的键只能是 `Object` 或者继承自 `Object` 的类型，这些键不属于正式的引用，不会阻止垃圾回收。也就是说一旦作为 key 的对象被删除，则这个对象就会被销毁。因为`WeakMap`的引用，不会阻止它被回收。如果是 `Map` 则该对象还会被保存在内存中。

_pis: `weakMap` 集合不能迭代_

```
// 情景 1
const ele = document.querySelect('button');
const m = new Map();
m.set(ele, '这是一个dom节点多为key')；
// 当 button 这个dom元素被移除后，button的内存不会被销毁

// 情景 2
const ele document.querySelect('button');
const wm = new WeakMap();
const wm.set( ele, '这是一个dom节点多为key' )
// 当button 这个dom元素被移除后，button的内存会被销毁

```

## Set

初始化之后，可以使用 `add()`增加值，使用 `has()`查询，通过 `size`取得元素数量，以及使用 `delete()`和 `clear()`删除元素

**迭代特性：**
可以通过 `values()`方法及其别名方法 `keys()`（或者 `Symbol.iterator` 属性，它引用 `values()`）取得这个迭代器。还有`entries()`方法返回一个迭代器。也可以用 `forEach` 来遍历 `set 集合。

```
const s = new Set(["val1", "val2", "val3"]);
alert(s.values === s[Symbol.iterator]); // true
alert(s.keys === s[Symbol.iterator]); // true

// ---- values()取得的迭代器---
for (let value of s.values()) {
    alert(value);
}
// val1
// val2
// val3

for (let value of s[Symbol.iterator]()) {
    alert(value);
}
// val1
// val2
// val3


// ---- entries()取得的迭代器---
for (let pair of s.entries()) {
    console.log(pair);
}
// ["val1", "val1"]
// ["val2", "val2"]
// ["val3", "val3"]


// ---- forEach()取得的迭代器---
s.forEach((val, dupVal) => alert(`${val} -> ${dupVal}`));
// val1 -> val1
// val2 -> val2
// val3 -> val3


```

因为 `values()`是默认迭代器，所以可以直接对集合实例使用扩展操作，把集合转换为数组：

```
const s = new Set(["val1", "val2", "val3"]);
console.log([...s]); // ["val1", "val2", "val3"]
```

## WeakSet

`WeakSet` 中的“weak”（弱），描述的是 `JavaScript` 垃圾回收程序对待“弱集合”中值的方式。意思就是，这些值不属于正式的引用，不会阻止垃圾回收。即：如果集合中的对象，被删除则会被回收。
弱集合中的值只能是 `Object` 或者继承自 `Object` 的类型

_pis: `weakSet` 集合不能迭代_

## ECMAScript 中有两种属性：数据属性和访问器属性

- **数据属性** ：数据属性包含一个数据值的位置。在这个位置可以读取和写入值。数据属性有 4 个描述其行为的特性。 1.`Configurable`：表示能否通过 `delete` 删除属性从而重新定义属性，能否修改属性的特
  性，或者能否把属性修改为访问器属性，默认是 `true` 2.`Enumerable`：表示能否通过 `for-in` 循环返回属性，默认值是 `true` 3.`Writable`：表示能否修改属性的值。默认值是 `true` 4.`Value`：包含这个属性的数据值。读取属性值的时候，从这个位置读；写入属性值的时候，
  把新值保存在这个位置。这个特性的默认值为 `undefined`。
  **pis：要修改属性默认的特性，必须使用 ECMAScript 5 的 Object.defineProperty() 方法。这个方法接收三个参数：属性所在的对象、属性的名字和一个描述符对象。其中，描述符（descriptor）对象的属性必须是： configurable 、 enumerable 、 writable 和 value 。设置其中的一或多个值，可以修改对应的特性值。**

---

- **访问器属**：性访问器属性不包含数据值；它们包含一对儿 `getter` 和 `setter` 函数（不过，这两个函数都不是必需的）。在读取访问器属性时，会调用 `getter` 函数，这个函数负责返回有效的值；在写入访问器属性时，会调用`setter` 函数并传入新值，这个函数负责决定如何处理数据。 1.`Configurable`：表示能否通过 `delete` 删除属性从而重新定义属性，能否修改属性的特
  性，或者能否把属性修改为访问器属性，默认是 `true` 2.`Enumerable`：表示能否通过 `for-in` 循环返回属性，默认值是 `true` 3.`Get`：在读取属性时调用的函数。默认值为 `undefined` 。 4.`Set`：在写入属性时调用的函数。默认值为 `undefined` 。
  **pis：访问器属性不能直接定义，必须使用 Object.defineProperty() 来定义**

---

- **读取属性的特性**
  用 `Object.getOwnPropertyDescriptor()` 方法，可以取得给定属性的描述符。这个方法接收两个参数：**属性所在的对象**和**要读取其描述符的属性名称**。返回值是一个对象，如果是访问器属性，这个对象的属性有 `configurable` 、 `enumerable` 、 `get` 和 `set` ；如果是数据属性，这个对象的属性有 `configurable` 、 `enumerable` 、 `writable` 和 `value` 。

## for-in 与 Object.keys() 所能枚举的属性

**`for-in`**： 可以遍历对象的**实例属性**或者**原型上**的**可以枚举**属性
**`Object.keys()`：**只返回**实例属性**上可枚举的`key`值
**`Object.getOwnPropertyNames()`：** 列出所有实例属性，无论是否可以枚举
**`Object.getOwnPropertySymbols()`**：列出所有实例 Symbol 属性，无论是否可以枚举

**`Object.values()`**：列出对象值的数组
**`Object.entries()`**：列出键/值对的数组

总结：在以上的迭代中，只有`Object.getOwnPropertySymbols()`方法能得到`symbol` 的属性。在正常的迭代中，是不会被获取到。

## 判断某个属性，是否存在于某对象的方法

- 属性  `in`   对象
- `obj.hasOwnProperty()`。
- `Reflect.has( obj, k)` 返回 `true` /`false`
  **区别**：都是返回一个布尔值，`in` 操作符和`Reflect.has()` 查找的范围包括了原型链和对象实例，`obj.hasOwnProperty()`查找的范围只是对象实例，不包含原型链的属性

## 用 new 操作符调用构造函数，创建对象。历经 5 个步骤

1. 创建一个新对象
2. 这个新对象内部的`[[Prototype]]` 特性被赋值为构造函数的 `prototype` 属性。
3. 构造函数内部的 `this` 被赋值为这个新对象（即 `this` 指向新对象）。
4. 执行构造函数内部的代码（给新对象添加属性）。
5. 如果构造函数返回非空对象，则返回该对象；否则，返回刚创建的新对象。

## 继承

### 对象伪装（经典继承）

在子类构造函数中通过 apply()或者 call()调用父类构造函数。
缺点：只实现了实例属性上的继承，所以父类方法不能定义到 prototype 上。

```
    function SuperType(name){
        this.name = name;
    }
    function SubType() {
        // 继承 SuperType 并传参
        SuperType.call(this, "Nicholas");
        // 实例属性
        this.age = 29;
    }
    const instance = new SubType();
```

### 组合继承（伪经典）

使用原型链继承原型上的属性和方法，而通过盗用构造函数继承实例属性。
缺点：
1、效率问题，就是父类构造函数始终会被调用两次
2、子类的实例属性以及原型上都会包含了父类的实例属性（name、colors）

```
   function SuperType(name){
       this.name = name;
       this.colors = ["red", "blue", "green"];
   }
   SuperType.prototype.sayName = function() {
       console.log(this.name);
   };
   function SubType(name, age){
       // 继承属性
       SuperType.call(this, name); // 第一调用
       this.age = age;
   }
   // 继承方法
   SubType.prototype = new SuperType(); // 第二次调用
   SubType.prototype.sayAge = function() {
       console.log(this.age);
   };
   const instance1 = new SubType("Nicholas", 29);
```

### 原型式继承

你有一个对象，想在它的基础上再创建一个新对象。ECMAScript 5 通过增加 Object.create() 方法将原型式继承的概念规范化了。

- **寄生式继承**
  创建一个实现继承的函数，以某种方式增强对象，然后返回这个对象
  缺点：通过寄生式继承给对象添加函数会导致函数难以重用，与构造函数模式类似。

```
   function object(o) {      
       function F() {};       
       F.prototype = o;       
       return new F();
   }
   // object() 函数不是寄生式继承所必需的，任何返回新对象的函数都可以在这里使用。
   function createAnother(original){
       const clone = object(original); // 通过调用函数创建一个新对象
       clone.sayHi = function() { // 以某种方式增强这个对象
           console.log("hi");
       };
       return clone; // 返回这个对象
   }

   let person = {
       name: "Nicholas",
       friends: ["Shelby", "Court", "Van"]
   };
   const anotherPerson = createAnother(person);
   anotherPerson.sayHi();  // "hi"
```

### 寄生式组合继承（寄生式组合继承可以算是引用类型继承的最佳模式）

通过对象伪装来继承父类属性，使用寄生式继承来继承父类原型。

```
    function SuperType(name) {
          this.name = name;
          this.colors = ["red", "blue", "green"];
     }
    SuperType.prototype.sayName = function(){
          alert(this.name);
    };
    function SubType(name, age) {
          SuperType.call(this,name);
          this.age = age;
     }
    function object(o) {
          function F() {};
          F.prototype = o;
          return new F();
    }
    // 寄生式继承对父原型链的继承
    function inheritPrototype(subType,superType) {
          var prototype = object(superType.prototype);  // 创建对象
          prototype.constructor = subType; // 增强对象
          subType.prototype = prototype; // 赋值对象
     }
    inheritPrototype(SubType,SuperType);  // 关键
    SubType.prototype.sayAge = function() {
          console.log(this.age);
    }
```

## 确定原型和实例的关系

- `instanceof`

```
p instanceof Person; // true|false
```

- `isPrototypeOf()`

```
Person.prototype.isPrototypeOf(p); // true|false
```

## Object.getPrototypeOf(） 与 Object.setPrototypeOf(）

- `Object.getPrototypeOf( obj )` 获取 obj 的内部特性`[[Prototype]]` 的值（也就是在浏览器中`obj.__proto__`的值）
  ```
  const obj = {};
  Object.getPrototypeOf( obj ) === obj.__proto__; // true
  ```
- `Object.setPrototypeOf(obj, prototype)` 可以向实例的私有特性 `[[Prototype]]` 写入一个新值。这样就可以重写一个对象的原型继承关系。参数说明：
  **obj**：要设置其原型的对象。
  **prototype**：该对象的新原型(一个对象 或  `null`).

  注意：`Object.setPrototypeOf()` 可能会严重影响代码性能。为避免使用 `Object.setPrototypeOf()` 可能造成的性能下降，可以通过 `Object.create()` 来创建一个新对象。达到相同目的。

## 闭包

闭包是指有权访问另一个函数作用域中的变量的函数。（创建闭包的常见方式，就是在一个函数内部创建另一个函数）

## 一个函数被调用时，里面发生了什么（执行环境、作用域链、活动对象）

当某个函数被调用时，会创建一个**执行环境**（`execution context`）及相应的**作用域链**。然后，使用 `arguments` 和其他命名参数的值来初始化函数的**活动对象**（`activation object`）。但在作用域链中，外部函数的活动对象始终处于第二位，外部函数的外部函数的活动对象处于第三位，……直至作为作用域链终点的全局执行环境。

```
function createComparisonFunction(propertyName) {
    return function(object1, object2){
        var value1 = object1[propertyName];
        var value2 = object2[propertyName];
        if (value1 < value2){
            return -1;
        } else if (value1 > value2){
            return 1;
        } else {
            return 0;
        }
    };
}
//创建函数
var compareNames = createComparisonFunction("name");
//调用函数
var result = compareNames({ name: "Nicholas" }, { name: "Greg" });
//解除对匿名函数的引用（以便释放内存）
compareNames = null;
```

调用 `compareNames()`的过程中产生的作用域链之间的关系，如下图
<img :src="$withBase('/imgs/11.png')">

## this 对象

`this` 对象是在运行时基于函数的执行环境绑定的：在全局函数中， this 等于 `window` ，而当函数被作为某个对象的方法调用时， `this` 等于那个对象。不过，**匿名函数的执行环境具有全局性，因此其 `this` 对象通常指向 `window`**。

```
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        return function(){   // 匿名函数
            return this.name;
        };
    }
};
alert(object.getNameFunc()()); //"The Window"（在非严格模式下）
```

每个函数在被调用时都会自动取得两个特殊变量： `this` 和 `arguments` 。内部函数在搜索这两个变量时，只会搜索到其活动对象为止，因此永远不可能直接访问外部函数中的这两个变量（这一点通过上面的作用域图， 可以看得更清楚）。不过，把外部作用域中的 `this` 对象保存在一个闭包能够访问到的变量里，就可以让闭包访问该对象了

```
var name = "The Window";
var object = {
    name : "My Object",
    getNameFunc : function(){
        var that = this;   // 声明一个that变量
        return function(){
            return that.name; // 访问that变量，通过作用域找到外层的that变量，
        };
    }
};
alert(object.getNameFunc()()); //"My Object"
```

## 垃圾回收机制

- 标记清除（普遍使用）
- 引用计次

## 元素大小

- 偏移量
  `offsetHeight` ：元素在垂直方向上占用的空间大小，以像素计。包括元素的高度、（可见的）
  水平滚动条的高度、上边框高度和下边框高度。
  `offsetWidth`：元素在水平方向上占用的空间大小，以像素计。包括元素的宽度、（可见的）垂
  直滚动条的宽度、左边框宽度和右边框宽度。
  `offsetLeft`：元素的左外边框至 `offsetParent` （通常是`body`）左侧之间的像素距离
  `offsetTop`：元素的上外边框至 `offsetParent` （通常是`body`） 顶部之间的像素距离
  <img :src="$withBase('/imgs/13.jpg')">
  **pis：一般来说，包含在 `<div>` 元素中所有元素都以 `<body>` 为其 `offsetParent`。但是`table` 里面则不同。**
  要严谨的拿到元素的偏移量，可以把它的 `offsetLeft` 和 `offsetTop` 属性分别与 `offsetParent`的相同属性相加，一直加到根元素。下面是一个例子（`offsetTop`也是这样获取）：

  ```
  function getElementLeft(element) {
    let actualLeft = element.offsetLeft;
    let current = element.offsetParent;
    while (current !== null) {
      actualLeft += current.offsetLeft;
       current = current.offsetParent;
    }
    return actualLeft;
    }
    // 一般someDom.offsetLeft === getElementLeft（someDom）// true // table里面的元素 就不遵循这个条件
  ```

  _pis：所有这些**偏移尺寸属性**都是只读的，**每次访问都会重新计算**。因此，应该尽量减少查询它们的次数。**比如把查询的值保存在局量中**，就可以避免影响性能。_

- 客户区大小
  `clientWidth` ：属性是元素内容区宽度加上左右内边距宽度
  `clientHeight`：属性是元素内容区高度加上上下内边距高度
  <img :src="$withBase('/imgs/14.jpg')">
  _pis：与偏移尺寸一样，客户端尺寸也是只读的，而且每次访问都会重新计算。_

- 滚动大小
  `scrollHeight` ：在没有滚动条的情况下，元素内容的总高度。
  `scrollWidth`：在没有滚动条的情况下，元素内容的总宽度。
  `scrollLeft`：被隐藏在内容区域左侧的像素数。通过设置这个属性可以改变元素的滚动位置（容器上设置）
  `scrollTop`：被隐藏在内容区域上方的像素数。通过设置这个属性可以改变元素的滚动位置（容器上设置）。
  <img :src="$withBase('/imgs/15.jpg')">
  **`scrollWidth` 和 `scrollHeight` 与 `clientWidth` 和 `clientHeight` 区别：**
  在不需要滚动的文档上是分不清的。如果文档尺寸超过视口尺寸，则在所有主流浏览器中这两对属性都不相等，`scrollWidth` 和 `scollHeight` 等于文档内容的宽度，而 `clientWidth` 和 `clientHeight` 等于视口的大小。

* 确定元素大小
  `getBoundingClientRect()`这个方法返回元素的大小及其相对于视口的位置。
  返回果如下：
  <img :src="$withBase('/imgs/16.png')">

  ## DOM 遍历

### 方法一： `NodeIterator`

通过 `document.createNodeIterator(root[, whatToShow[, filter]])` 方法创建`NodeIterator`实例，参数描述：
**root**：遍历起始处的根节点
**whatToShow**： 可选，数值代码，表示应该访问哪些节点。（具体值，[查看文档](https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createNodeIterator)）
**filter** 可选，NodeFilter 对象或函数，表示是否接收或跳过特定节点。

`NodeIterator`实例 两个主要方法是 `nextNode()` 和 `previousNode()` 。 `nextNode()` 方法在 DOM 子树中以深度优先方式进前一步，而 `previousNode()` 则是在遍历中后退一步。

```
// NodeFilter.SHOW_ELEMENT 表示只遍历标签
let iterator = document.createNodeIterator(div, NodeFilter.SHOW_ELEMENT);
let node = iterator.nextNode();
while (node !== null) {
    console.log(node.tagName); // 输出标签名
    node = iterator.nextNode();
}
```

### 方法二： `TreeWalker`

调用 `document.createTreeWalker()` 方法来创建，这个方法接收与`document.createNodeIterator()` 同样的参数。`TreeWalker` 是 `NodeIterator` 的高级版。除了包含同样的 `nextNode()` 、 `previousNode()` 方法，`TreeWalker` 还添加了如下在 DOM 结构中向不同方向遍历的方法。

- parentNode() ，遍历到当前节点的父节点。
- firstChild() ，遍历到当前节点的第一个子节点。
- lastChild() ，遍历到当前节点的最后一个子节点。
- nextSibling() ，遍历到当前节点的下一个同胞节点。
- previousSibling() ，遍历到当前节点的上一个同胞节点。

## DOM 范围

### 选择范围

通过 `document.createRange()` 方法可以创建一个 DOM 范围对象

- 简单选择：
  `selectNode( someDom )` 择整个节点，包括其后代节点
  `selectNodeContents( someDom )` 选择该节点子代（不包含本身）

- 复杂选择
  `setStart( someDom, startOffset )` 设置范围起点
  `setEnd( someDom, endOffset )` 设置范围终点

### 操作范围（Range 实例方法）

**`deleteContents()`** 从文档中删除范围包含的节点
**`extractContents()`** 跟 `deleteContents()`类似，也会从文档中移除范围选区。但不同的是，`extractContents()`方法返回范围对应的文档片段。这样，就可以把范围选中的内容插入文档中其他地方。
**`cloneContents()`** 创建一个副本，然后把这个副本插入到文档其他地方
**`insertNode()`** 在范围选区的开始位置插入一个节点
**`surroundContents()`** 环绕插入，这个方法接收一个参数，即包含范围内容的节点。（如：实现选范围区高亮）

```
<!-- html 通用示例 -->
<body>
    <div class="test">
        <span>111</span>
        <span>222</span>
  </div>
</body>

// 示例1：deleteContents 删除范围
const test = document.querySelector('.test');
const selectNode = test.firstElementChild;
const range = document.createRange();
range.selectNode(selectNode)
range.deleteContents();  // <span>111</span> 节点被删除


```

## 事件

### DOM 事件流

DOM2 Events 规范规定事件流分为 3 个阶段：事件捕获、到达目标和事件冒泡。
通常建议使用事件冒泡，特殊情况下可以使用事件捕获。现代浏览器添加事件处理的时候，默认也是冒泡。如使用 `addEventListener()` 第三个参数 默认 `false`，即为冒泡。

### 事件 之 event 对象

**以下 “现代浏览器”也包含了 IE9、以及 9+。**

- 绑定事件
  方式一：`dom0`级，`myDiv.onclick = function() {};` 支持所有浏览器
  方式二：`dom2`级（现代浏览器写法和 IE8 写法）
  **现代浏览器写法**
  `addEventListener()`和 `removeEventListener()` 这两个方法接受相同的三个个参数，第一个参数为事件名称，第二个为 事件处理函数，第三个选填参数`true` 捕获，`false`冒泡，默认`false`。

  ```
  function handler() {
  console.log(66)
  }
  myDiv.addEventListener('click', handler, false); // 为 myDiv 元素添加点击事件
  myDiv.removeEventListener('click', handler, false); // 为 myDiv 元素移除点击事件
  ```

  **IE8 浏览器写法**
  `attachEvent()` 和 `detachEvent()` 。这两个方法接受相同的两个参数：事件处理程序名称与事件处理程序函数。

  ```
      function handler() {
          console.log(66)
      }
      btn.attachEvent("onclick", handler);
      btn.detachEvent("onclick", handler);
  ```

* 事件对象 `event`
  兼容 `DOM` 的浏览器会将一个 `event` 对象传入到事件处理程序中。要访问 IE8 中的 `event` 对象有几种不同的方式，取决于指定事件处理程序的方法。在使用 `DOM0` 级方法添加事件处理程序时， `event` 对象作为 `window` 对象的一个属性存在。如果事件处理程序是使用 `attachEvent()` 添加的，那么就会有一个 `event` 对象作为参数被传入事件处理程序函数中，则和普通浏览器一样。当然像这样使用 `attachEvent()` 的情况下，也可以通过 `window` 对象来访问 `event` 对象，就像使用`DOM0` 级方法时一样。因此有这样的一个兼容写法： `var e = event || window.event;`

**`evenet`属性/方法 现代浏览器（部分属性 IE9、10 不支持，如 currentTarget）**
| 属性/方法 | 类型 | 读/写 | 说明 |
| --- | --- | --- | --- |
| `currentTarget` | Element | 只读 | 其事件处理程序当前正在处理事件的那个元素 |
| `target` | Element | 只读 | 事件的目标 |
| `type` | String | 只读 | 被触发的事件的类型 |
| `cancelable` | Boolean | 只读 | 表明是否可以取消事件的默认行为 |
| `stopPropagation` | Function | 只读 | 取消事件的进一步捕获或冒泡 |
| `preventDefault` | Function | 只读 | 取消事件的默认行为 |
| `eventPhase` | Integer | 只读 | 调用事件处理程序的阶段：1 表示捕获阶段，2 表示“处于目标”，3 表示冒泡阶段 |
| ...... | ...... | ...... | ...... |
在事件处理程序内部，对象 `this` 始终等于 `currentTarget` 的值，而 `target` 则只包含事件的实际目标。如果直接将事件处理程序指定给了目标元素，则 `this` 、 `currentTarget` 和 `target` 包含相同的值。来看下面的例子。

```
var btn = document.getElementById("myBtn");
btn.onclick = function(event){
  alert(event.currentTarget === this); //true
  alert(event.target === this); //true
};
```

这个例子检测了 `currentTarget` 和 `target` 与 `this` 的值。由于 `click` 事件的目标是**按钮**，因此这三个值是相等的。如果事件处理程序存在于按钮的父节点中（例如 `document.body` ），那么这些值是不相同的。再看下面的例子。

```
document.body.onclick = function(event){
  alert(event.currentTarget === document.body); //true
  alert(this === document.body); //true
  alert(event.target === document.getElementById("myBtn")); //true
};
```

**`evenet`属性/方法 之 IE 之览器（高低版本都有）：**
| 属性/方法 | 类型 | 读/写 | 说明 |
| --- | --- | --- | --- |
| `cancelBubble` | Boolean | 读/写 | 默认值为 false ，但将其设置为 true 就可以取消事件冒泡（与 DOM 中的 stopPropagation() 方法的作用相同） |
| `returnValue` | 读/写 | 只读 | 默认值为 true ，但将其设置为 false 就可以取消事件的默认行为（与 DOM 中的 preventDefault() 方法的作用相同） |
| `srcElement` | Element | 只读 | 事件的目标（与 DOM 中的 target 属性相同） |
| `type` | String | 只读 | 被触发的事件的类型 |

- 阻止默认行为 和 阻止冒泡
  阻止默认行为：
  `event.preventDefault();`// 普通浏览器写法
  `event.returnValue = false;` // IE 8
  阻止冒泡：
  `event.stopPropagation();`// 普通浏览器写法
  `event.cancelBubble = true;`// IE 8
  **EventUtil 浏览器兼容分装**（底下会有引用）
  ```
  var EventUtil = {
        addHandler: function(element, type, handler){   // 添加事件
           if (element.addEventListener){
                element.addEventListener(type, handler, false);
            } else if (element.attachEvent){
                element.attachEvent("on" + type, handler);
            } else {
                element["on" + type] = handler;
            }
        },
        getEvent: function(event){  // 获取event 对象
            return event ? event : window.event;
        },
        getTarget: function(event){  // 获取目标对象
            return event.target || event.srcElement;
        },
        preventDefault: function(event){  // 阻止默认
            if (event.preventDefault){
                event.preventDefault();
            } else {
                event.returnValue = false;
            }
        },
        removeHandler: function(element, type, handler){  // 移除事件
           if (element.removeEventListener){
                element.removeEventListener(type, handler, false);
            } else if (element.detachEvent){
                element.detachEvent("on" + type, handler);
            } else {
                element["on" + type] = null;
            }
        },
        stopPropagation: function(event){  // 阻止冒泡
            if (event.stopPropagation){
                event.stopPropagation();
            } else {
                event.cancelBubble = true;
            }
        }
    };
  ```

### 事件类型

Web 浏览器中可以发生很多种事件。发生事件的类型决定了事件对象中会保存什么信息。DOM3 Events 定义了如下事件类型。

- 用户界面事件（`UIEvent`）：涉及与 BOM 交互的通用浏览器事件。
- 焦点事件（`FocusEvent`）：在元素获得和失去焦点时触发。
- 鼠标事件（`MouseEvent`）：使用鼠标在页面上执行某些操作时触发。
- 滚轮事件（`WheelEvent`）：使用鼠标滚轮（或类似设备）时触发。
- 输入事件（`InputEvent`）：向文档中输入文本时触发。
- 键盘事件（`KeyboardEvent`）：使用键盘在页面上执行某些操作时触发。
- 合成事件（`CompositionEvent`）：在使用某种 IME（Input Method Editor，输入法编辑器）输入字符时触发。

_pis：DOM3 Events 在 DOM2 Events 基础上重新定义了事件，并增加了新的事件类型。所有主流浏览器都支持 DOM2 Events 和 DOM3 Events。_

### 用户界面事件（`UIEvent`）

- **load 事件** `JavaScript` 中最常用的一个事件就是 `load` 。当页面完全加载后（包括所有图像、JavaScript 文件、CSS 文件等外部资源），就会触发 `window` 上面的 `load` 事件。有两种定义 `onload` 事件处理程序的方式。
  第一种方式是使用如下所示的 `JavaScript` 代码：
  `EventUtil.addHandler(window, "load", function(event){ alert("Loaded!"); });`
  第二种指定 `onload` 事件处理程序的方式是为 `<body>` 元素添加一个 `onload` 特性
  `<!DOCTYPE html> <html> <head> <title>Load Event Example</title> </head> <body onload="alert('Loaded!')"> </body> </html>`
  还有其他元素支持`load`事件：`<img>、<script>、<iframe>`。

  _ps：`img`元素设置了`src`后会立马加载资源。而`script`设置了`src`后，并不会马上加载，直到`script`元素添加到文档后才会开始加载`src`上的资源。_

- **unload 事件**
  与 `load` 事件对应的是 `unload` 事件，这个事件在文档被完全卸载后触发。只要用户从一个页面切换到另一个页面，就会发生 `unload` 事件。而利用这个事件最多的情况是清除引用，以避免内存泄漏。
  与 `load`事件类似，也有两种指定 `onunload` 事件处理程序的方式。无论使用哪种方式，都要小心编写 `onunload` 事件处理程序中的代码。既然 `unload` 事件是在一切都被卸载之后才触发，那么在页面加载后存在的那些对象，此时就不一定存在了。此时，操作 `DOM`节点或者元素的样式就会导致错误

- **resize 事件**
  当浏览器窗口被调整到一个新的高度或宽度时，就会触发 resize 事件。监听对象只能为 `window`。

- **scroll 事件** 监听对象可 `window` ，可**标签元素**（即，容器元素）。

### 焦点事件

`blur` ：在元素失去焦点时触发。这个事件不会冒泡；
`focus` ：在元素获得焦点时触发。这个事件不会冒泡；
`focusin` ：在元素获得焦点时触发。这个事件与 HTML 事件 `focus` 等价，但它**冒泡**。
`focusout` ：在元素失去焦点时触发。这个事件是 HTML 事件 `blur` 的通用版本,但它**冒泡**。

### 鼠标事件 （event）- 坐标

- 客户区坐标位置 `clientX`和`clientY`
  鼠标事件都是在浏览器视口中的特定位置上发生的。这个位置信息保存在事件对象的`clientX` 和`clientY` 它们的值表示事件发生时鼠标指针在视口中的水平和垂直坐标。
  **注意，这些值中不包括页面滚动的距离，因此这个位置并不表示鼠标在页面上的位置。**

---

- 页面坐标位置 `pageX` 和 `pageY`
  通过`clientX`和`clientY`能够知道鼠标是在视口中什么位置发生的，而页面坐标通过事件对象的 `pageX` 和`pageY` 属性，能告诉你事件是在页面中的什么位置发生的。换句话说，这两个属性表示鼠标光标在页面中的位置，因此坐标是从页面本身而非视口的左边和顶边计算的。
  **所以在页面没有滚动的情况下， pageX 和 pageY 的值与 clientX 和 clientY 的值相等。**

---

- 屏幕坐标位置 `screenX` 和 `screenY`
  鼠标事件发生时，不仅会有相对于浏览器窗口的位置，还有一个相对于整个电脑屏幕的位置。而通过 `screenX` 和 `screenY` 属性就可以确定鼠标事件发生时鼠标指针相对于整个屏幕的坐标信息。
  <img :src="$withBase('/imgs/17.png')">

---

- 滚动条距离操作与获取
  操作滚动条距离：`window.scroll( x , y)` 和 `window.scrollTo( x, y)` 。这两个都是可以用在都没
  元素上
  获取滚动条位置：`window.pageYOffset` 、`window.scrollY` 、`document.body.scrollTop`。前两个都只能用在 window，最后一个可以用在 dom 元素

### 鼠标事件（event） - 修改键

修改键就是 `Shift`、`Ctrl`、`Alt` 和 `Meta`（在 `Windows`键盘中是 `Windows`键，在苹果机中是 `Cmd` 键），它们经常被用来修改鼠标事件的行为。`DOM`为此规定了 4 个属性，表示这些修改键的状态： `shiftKey` 、 `ctrlKey` 、 `altKey` 和 `metaKey` 。这些属性中包含的都是布尔值，如果相应的键被按下了，则值为 `true`，否则值为 `false` 。

```
myDom.addEventListener('click',(event) => {
      console.log(event.shiftKey);  // true / false
})

```

### 鼠标事件（event） - 鼠标按钮

对于 `mousedown` 和 `mouseup` 事件来说，则在其 `event` 对象存在一个 `button` 属性，表示按下或释放的按钮。`button` 属性可能有如下 3 个值：
**0** 表示主鼠标按钮（左键）
**1**表示中间的鼠标按钮（鼠标滚轮按钮）
**2** 表示次鼠标按钮 （右键）

**ps**：一组的 `mousedown` 和 `mouseup` 事件等于一次 `click`事件。规范在 `event` 对象中还提供了 `detail` 属性，用于给出有关事件的更多信息。对于鼠标事件来说， `detail` 中包含了一个数值，表示在给定位置上发生了多少次单击。在同一个元素上相继地发生一次 `mousedown` 和一次 `mouseup` 事件算作一次单击。 `detail` 属性从 **1** 开始计数，每次单击发生后都会递增。如果鼠标在 `mousedown` 和 `mouseup` 之间移动了位置，则 `detail` 会被重置为 **0** 。

### 键盘与文本事件

`keydown` ：当用户按下键盘上的任意键时触发，而且如果按住不放的话，会重复触发此事件。
`keypress` ：当用户按下键盘上的**字符键**时触发，而且如果按住不放的话，会重复触发此事件。按下 `Esc`键也会触发这个事件。（_试了下，发现只有英文输入法，输入时才会触发事件_）
`keyup` ：当用户释放键盘上的键时触发。
`textInput`：“`DOM3` 级事件”规范中引入了一个新事件，名叫 `textInput` 。根据规范，当用户在可编辑区域中输入字符时，就会触发这个事件。（_我在 ie11 下测试没有效果）_

在发生 `keydown` 或 `keyup` 事件时， `event` 对象的 `keyCode` 属性中会包含一个代码，与键盘上一个特定的键对应。（如 `keyCode`为`13`，则表示 **回车键 Enter**）

### DOM 变动事件

`DOMSubtreeModified` ：在 DOM 结构中发生任何变化时触发。这个事件在其他任何事件触发
后都会触发。
`DOMNodeInserted`：在一个节点作为子节点被插入到另一个节点中时触发。
`DOMNodeRemoved` ：在节点从其父节点中被移除时触发。
`DOMAttrModified`：在特性被修改之后触发。
`DOMCharacterDataModified` ：在文本节点的值发生变化时触发

### HTML5 事件

- `contextmenu` 事件
  通过单击鼠标右键可以调出上下文菜单。（在 `Windows` 中，是右键单击；在 `Mac` 中，是 `Ctrl+单击`）

---

- `beforeunload` 事件
  之所以有发生在 `window` 对象上的 `beforeunload` 事件，是为了让开发人员有可能在页面卸载前阻止这一操作。这个事件会在浏览器卸载页面之前触发，可以通过它来取消卸载并继续使用原有页面。（ie9 支持，但是谷歌没有效果，应该是把弹窗禁止制了）

---

- `DOMContentLoaded` 事件
  `window` 的 `load` 事件会在页面中的一切都加载完毕时触发，但这个过程可能会因为要加载的外部资源过多而颇费周折。而 `DOMContentLoaded` 事件则在形成完整的 `DOM`树之后就会触发，不理会图像、`JavaScript`文件、`CSS`文件或其他资源是否已经下载完毕。与 `load`事件不同，`DOMContentLoaded` 支持在页面下载的早期添加事件处理程序，这也就意味着用户能够尽早地与页面进行交互

---

- `readystatechange` 事件
  这个事件的目的是提供与文档或元素的加载状态有关的信息，但这个事件的行为有时候也很难预料。支持`readystatechange` 事件的每个对象都有一个 `readyState` 属性，**可能**包含下列 5 个值中的一个。
  `uninitialized` （未初始化）：对象存在但尚未初始化。
  `loading` （正在加载）：对象正在加载数据。
  `loaded` （加载完毕）：对象加载数据完成。
  `interactive` （交互）：可以操作对象了，但还没有完全加载。
  `complete`（完成）：对象已经加载完毕。
  这些状态看起来很直观，但并非所有对象都会经历 `readyState`的这几个阶段。换句话说，如果某个阶段不适用某个对象，则该对象完全可能跳过该阶段；并没有规定哪个阶段适用于哪个对象。显然，这意味着 `readystatechange` 事件经常会少于 4 次，而 `readyState` 属性的值也不总是连续的。

---

- `pageshow` 和 `pagehide` 事件
  Firefox 和 Opera 有一个特性，名叫“往返缓存”（`back-forward cache`，或 `bfcache`）（ios 微信中 h5 页面会有这个效果），可以在用户使用浏览器的“后退”和“前进”按钮时加快页面的转换速度。这个缓存中不仅保存着页面数据，还保存了 `DOM` 和 `JavaScript` 的状态；实际上是将整个页面都保存在了内存里。如果页面位于 `bfcache` 中，那么再次打开该页面时就不会触发 `load` 事件。
  **`pageshow`** ，这个事件在页面显示时触发，无论该页面是否来自 `bfcache`。在重新加载的页面中， pageshow 会在`load` 事件触发后触发；而对于 `bfcache` 中的页面， `pageshow` 会在页面状态完全恢复的那一刻触发。pageshow 事件的 event 对象还包含一个名为 persisted 的布尔值属性。如果页面被保存在了 bfcache 中，则这个属性的值为 true ；否则，这个属性的值为 false 。
  `window.addEventListener('pageshow',function(event) { if(event.persisted) { console.log('来自缓存') } })`
  **`pagehide`** 与 `pageshow`事件对应的是 `pagehide`事件，该事件会在浏览器卸载页面的时候触发，而且是在`unload` 事件之前触发。对于 `pagehide` 事件，如果页面在卸载之后会被保存在 `bfcache` 中，那么 `persisted` 的值也会被设置为 `true`
  ***
- `hashchange` 事件
  `HTML5` 新增了 `hashchange` 事件，以便在 `URL` 的参数列表（及 `URL` 中“`#`”号后面的所有字符串）发生变化时通知开发人员。必须要把 `hashchange` 事件处理程序添加给 `window` 对象，然后 `URL` 参数列表只要变化就会调用它。此时的 `event` 对象应该额外包含两个属性：`oldURL` 和 `newURL` 。这两个属性分别保存着参数列表变化前后的完整 `URL`

### 事件之-内存和性能

由于事件处理程序可以为现代 `Web` 应用程序提供交互能力，因此许多开发人员会不分青红皂白地向页面中添加大量的处理程序。在创建 `GUI` 的语言（如 `C#`）中，为 `GUI` 中的每个按钮添加一个 `onclick`事件处理程序是司空见惯的事，而且这样做也不会导致什么问题。可是在 `JavaScript` 中，添加到页面上的事件处理程序数量将直接关系到页面的整体运行性能。导致这一问题的原因是多方面的。首先，每个函数都是对象，都会占用内存；内存中的对象越多，性能就越差。其次，必须事先指定所有事件处理程序而导致的 `DOM`访问次数，会延迟整个页面的交互就绪时间。事实上，从如何利用好事件处理程序的角度出发，还是有一些方法能够提升性能的。

- **优化 1：事件委托**，父元素绑定事件，通过`event.target`获取具体元素
- **优化 2：移除事件处理程序**
  每当将事件处理程序指定给元素时，运行中的浏览器代码与支持页面交互的 `JavaScript` 代码之间就会建立一个连接。这种连接越多，页面执行起来就越慢。如前所述，可以采用事件委托技术，限制建立的连接数量。另外，在不需要的时候移除事件处理程序，也是解决这个问题的一种方案。内存中留有那些过时不用的“**空事件处理程序**”（`dangling event handler`），也是造成 `Web` 应用程序内存与性能问题的主要原因。
  在两种情况下，可能会造成上述问题：
  1、从文档中直接移除带有事件处理程序的元素时，导致元素是不见了，但是与之连接的处理事件方法，确一直在内存中，无法得到释放。（如：使用`removeChild()` 和 `replaceChild()` 方法，或者使用`innerHTML`)。应该手动释放，如：
  `btn.onclick = function(){ //先执行某些操作 btn.onclick = null; // 移除事件处理程序 document.getElementById("myDiv").innerHTML = "Processing..."; };`
  2、就是卸载页面的时候。如果在页面被卸载之前没有清理干净事件处理程序，那它们就会滞留在内存中。每次加载完页面再卸载页面时（可能是在两个页面间来回切换，也可以是单击了“刷新”按钮），内存中滞留的对象数目就会增加，因为事件处理程序占用的内存并没有被释放。一般来说，最好的做法是在页面卸载之前，先通过 `onunload` 事件处理程序移除所有事件处理程序。我们可以把它想象成：只要是通过 `onload` 事件处理程序添加的东西，最后都要通过 `onunload` 事件处理程序将它们移除。

### 模拟事件

可以在 `document`对象上使用 `createEvent()` 方法创建 `event` 对象。这个方法接收一个参数，即表示要创建的事件类型的字符串。在 `DOM2` 级中，所有这些字符串都使用英文复数形式，而在 `DOM3`级中都变成了单数。这个字符串可以是下列几字符串之一。
**`UIEvent`** ：一般化的 `UI` 事件。鼠标事件和键盘事件都继承自 `UI`事件。`DOM2` 级中是`UIEvents`
**`MouseEvent`**：一般化的鼠标事件。`DOM2` 级中是 `MouseEvents` 。
**`MutationEvent`** ：一般化的 `DOM` 变动事件。`DOM2` 级中是 `MutationEvents` （`DOM3` 把这个事件废弃，使用`MutationObserver`来替代）。

在创建了 `event` 对象之后，还需要使用与事件有关的信息对其进行初始化。每种类型的 `event`对象都有一个特殊的方法，为它传入适当的数据就可以初始化该 `event` 对象。不同类型的这个方法的名字也不相同，具体要取决于 `createEvent()` 中使用的参数。

模拟事件的最后一步就是触发事件。这一步需要使用 `dispatchEvent()` 方法，所有支持事件的
`DOM`节点都支持这个方法。调用 `dispatchEvent()` 方法时，需要传入一个参数，即表示要触发事件的 `event`对象。触发事件之后，该事件就跻身“**官方事件**”之列了，因而能够照样冒泡并引发相应事件处理程序的执行。

模拟不同的事件，不同的初始化方法
|模拟的事件| 初始化方法| 初始化参数|
|-|-|-|
|鼠标事件 `MouseEvent` | `initMouseEvent()` |...|
|DOM 变动事件 `MutationEvents` | `initMutationEvent()` |...|
|自定义 DOM 事件 `CustomEvent` | `initCustomEvent()`|...|
例子：_自定义 DOM 事件_

```
someNode.addEventListener('myevent',(event) => {  // 给元素绑定自定义事件
      console.log(event);
})
const event = document.createEvent('CustomEvent');  // 创建自定义事件
event.initCustomEvent('myevent',true,false,'hello word'); // 给自定义事件初始化信息
someNode.dispatchEvent(event);  // 元素触发自定义事件
```

输出结果：
<img :src="$withBase('/imgs/18.jpg')">

## 表单脚本

### 提交表单

使用 `<input>` 或 `<button>` 都可以定义提交按钮，只要将其`type`特性的值设置为 "`submit`" 即可，而图像按钮则是通过将 `<input>` 的 `type` 特性值设置为"`image`" 来定义的。因此，只要我们单击以下代码生成的按钮，就可以提交表单。

```
<!-- 通用提交按钮 -->
<input type="submit" value="Submit Form">
<!-- 自定义提交按钮 -->
<button type="submit">Submit Form</button>
<!-- 图像按钮 -->
<input type="image" src="graphic.gif">
```

只要表单中存在上面列出的任何一种按钮，那么在相应表单控件拥有焦点的情况下，按回车键就可以提交该表单。（ `textarea` 是一个例外，在文本区中回车会换行。）如果表单里没有提交按钮，按回车键不会提交表单。
以这种方式提交表单时，浏览器会在将请求发送给服务器之前触发 `submit`事件。这样，我们就有机会验证表单数据，并据以决定是否允许表单提交。阻止这个事件的默认行为就可以取消表单提交。

在 `JavaScript` 中，以编程方式调用 `submit()` 方法也可以提交表单。而且，这种方式无需表单包含提交按钮，任何时候都可以正常提交表单。但是不会触发 `submit` 事件，因此要记得在调用此方法之前先验证表单数据。如：

```
var form = document.getElementById("myForm");
// 提交表单
form.submit();  // 不会触发 表单的submit事件。直接提交表单
```

### 重置表单

在用户单击重置按钮时，表单会被重置。使用 `type` 特性值为 "`reset`" 的 `<input>` 或 `<button>` 都可以创建重置按钮

```
<!-- 通用重置按钮 -->
<input type="reset" value="Reset Form">
<!-- 自定义重置按钮 -->
<button type="reset">Reset Form</button>
```

这两个按钮都可以用来重置表单。在重置表单时，所有表单字段都会恢复到页面刚加载完毕时的初始值。如果某个字段的初始值为空，就会恢复为空；而带有默认值的字段，也会恢复为默认值。
与提交表单一样，也可以通过 `JavaScript` 来重置表单，如下面的例子所示。

```
var form = document.getElementById("myForm");
// 重置表单
form.reset(); // 会触发表单的 reset 事件
```

与调用 `submit()` 方法不同，调用 `reset()` 方法会像单击重置按钮一样触发 `reset` 事件。

### 表单字段

除了可以像访问页面中的其他元素一样，使用原生 `DOM` 方法访问表单元素。还可以使用表单的`elements` 属性，该属性是该表单中所有表单元素（字段）的集合。每个表单字段在 `elements`集合中的顺序，与它们出现在标记中的顺序相同，可以按照**位置**和 `name` 特性来访问它们。

```
var form = document.getElementById("form1");
//取得表单中的第一个字段
var field1 = form.elements[0];

//取得名为"textbox1"的字段，如果表单内同时存在多个相同name，则返回的是一个集合。
var field2 = form.elements["textbox1"];

//取得表单中包含的字段的数量
var fieldCount = form.elements.length;
```

### 选择文本

**select() 方法**
文本框都支持 `select()` 方法，这个方法用于选择文本框中的所有文本。在实践中通过这个方法，用户可以快速清空文本框内容，提升表单的易用性。

**select 事件**
与 `select()` 方法对应的，是一个 `select` 事件。在选择了文本框中的文本时，就会触发 `select`事件。

**取得选择的文本** (‘被动’)
虽然通过 `select` 事件我们可以知道用户什么时候选择了文本，但仍然不知道用户选择了什么文本。因此，要取得用户在文本框中选择的文本，可以使用 `selectionStart` 和 `selectionEnd` 两个属性表示所选择文本的范围（即文本选区开头和结尾的偏移量）。再搭配上字符串的 `substring()` 方法，可轻松取其值。

```
inputDom.addEventListener('select',function() {
      const selectText = this.value.substring(this.selectionStart,this.selectionEnd);
      console.log(selectText); // 鼠标选中的文本
})
```

**选择部分文本** （‘_主动_’）
文本框都有一个 `setSelectionRange()` 方法。这个方法接收两个参数：要选择的第一个字符的索引和要选择的最后一个字符之后的字符的索引（类似于 `substring()` 方法的两个参数）

注意：要看到选择的文本，必须在调用 `setSelectionRange()` 之前或之后立即将焦点设置到文本框。

```
inputDow.value = "Hello world!"

//选择所有文本
inputDow.setSelectionRange(0, textbox.value.length);  // "Hello world!"

//选择前 3 个字符
inputDow.setSelectionRange(0, 3);  // "Hel"

//选择第 4 到第 6 个字符
inputDow.setSelectionRange(4, 7);  // "o w"
```

### 操作剪贴板

**Dom 元素 剪贴板事件：**
`copy` ：在发生复制操作时触发。
`cut` ：在发生剪切操作时触发。
`paste` ：在发生粘贴操作时触发。

要访问剪贴板中的数据，可以使用 `clipboardData` 对象：在 IE 中，这个对象是 `window` 对象的属性；而在 Firefox 4+、Safari 和 Chrome 中，这个对象是相应 `event` 对象的属性。这个 `clipboardData` 对象有三个方法：
**`getData()`** ：用于从剪贴板中取得数据，它接受一个参数，即要取得的数据的格式。在 IE 中，有两种数据格式： "`text`"和 "`URL`" 。在 Firefox、Safari 和 Chrome 中，这个参数是一种 `MIME` 类型；不过，可以用 "`text`" 代表"`text/plain`"
**`setData()`**： 方法的第一个参数也是数据类型，第二个参数是要放在剪贴板中的文本。（ _试过无效_ ）
**`clearData()`**： _试过无效_

示例：文本框对黏贴内容进行，格式校验，内容不符合，则黏贴无效。

```
inputDom.addEventListener('paste',function(event) {
     var clipboardData = (event.clipboardData || window.clipboardData);
     var text = clipboardData.getData("text");
     if(!/abc/.test(text)) {
           event.preventDefault(); // 不符合条件，阻止默认。则不进行复制文本
     }
})
```

### 富文本编辑

- **实现富文本方式有两种：**
  **第一种**：页面中嵌入一个包含空 HTML 页面的 `iframe` 通过设置 `document`的`designMode` 属性，这个空白的 `HTML` 页面可以被编辑，而编辑对象则是该页面 `<body>` 元素的 `HTML` 代码。`designMode` 属性有两个可能的值： "`off`" （默认值）和 "`on`" 。在设置为 "`on`" 时，整个文档都会变得可以编辑（显示插入符号），然后就可以像使用字处理软件一样，通过键盘将文本内容加粗、变成斜体，等等。
  **第二种**：是使用名为 `contenteditable` 的特殊属性，可以把 `contenteditable` 属性应用给页面中的任何元素，然后用户立即就可以编辑该元素。这种方法之所以受到欢迎，是因为它不需要 `iframe` 、空白页和 `JavaScript`，只要为元素设置 `contenteditable`属性即可。

---

- 操作富文本

  当一个`HTML`文档切换到设计模式时，`document`暴露  `execCommand`  方法，该方法允许运行命令来操纵可编辑内容区域的元素

  **`document.execCommand( aCommandName, aShowDefaultUI, aValueArgument)`** 用这个方法与编辑器交互。参数描述：
  `aCommandName`：命令的名称，如`bold` 、`copy`复制、`createlink`等
  `aShowDefaultUI`：一个  `Boolean`， 是否展示用户界面，一般为 false。
  `aValueArgument`：一些命令（例如`createlink`）需要额外的参数（`createlink`创建的地址），默认为`null`

  ```
   //转换粗体文本
   document.execCommand("bold", false, null);

   //创建指向 www.wrox.com 的链接
   document.execCommand("createlink", false,"http://www.wrox.com");

   //格式化为 1 级标题
   document.execCommand("formatblock", false, "<h1>");
  ```

  **`window.getSelection()`** 返回一个  `Selection`对象，表示用户选择的文本范围或光标的当前位置。

  ```
  const selection = window.getSelection() ;
  ```

  `selection`  是一个  `Selection`  对象。 如果想要将  `selection`  转换为字符串(即，获取用户鼠标选中的文本)，可通过连接一个空字符串（""）或使用  `String.toString()`  方法。

---

- 获取富文本的元素：
  `document.body.innerHTML` （`iframe`方式）
  `someDom.innerHTML` （`contenteditable` 属性的方式）

  ***

- EEMO 编辑器简版

  效果：

  <img :src="$withBase('/imgs/19.png')">

  代码：

  <img :src="$withBase('/imgs/20.png')">

## Canvas

`2D` 上下文的两种基本绘图操作是填充和描边。填充，就是用指定的样式（颜色、渐变或图像）填充图形；描边，就是只在图形的边缘画线。操作的结果取决于两个属性：`fillStyle` 和 `strokeStyle`。这两个属性的值可以是字符串、渐变对象或模式对象，而且它们的默认值都是"`#000000`"。

**矩形**是唯一一种可以直接在 `2D` 上下文中绘制的形状。与矩形有关的方法包括 `fillRect()`、
`strokeRect()`和 `clearRect()`。这三个方法都能接收 4 个参数：矩形的 `x` 坐标、矩形的 `y` 坐标、矩形
`宽度`和矩形`高度`。这些参数的单位都是像素。

**`drawImage()`** 绘制图片，第一个参数可以是一个 `HTML <img>`元素或者是另外一个`canvas`元素。结合使用 `drawImage()`和其他方法，可以对图像进行各种基本操作。而操作的结果可以通过`toDataURL()`方法获得。不过，有一个例外，即**图像不能来自其他域**。如果图像来自其他域，调用`toDataURL()`会抛出一个错误。

`3D` `webGL` `ArrayBuffer` `DataVeiw`

## HTML5 脚本编程

### 跨文档消息传递 postMessage

跨文档消息传送（`cross-document messaging`），有时候简称为 `XDM`，指的是在来自**不同域的页面间**传递消息。

`postMessage()`方法接收两个参数：一条消息和一个表示消息接收方来自哪个域的字符串（可以用“\*”但不推荐）。第二个参数对保障安全通信非常重要，可以防止浏览器把消息发送到不安全的地方。

接收到 `XDM` 消息时，会触发 `window` 对象的 `message` 事件。这个事件是以异步形式触发的，因此从发送消息到接收消息（触发接收窗口的 `message` 事件）可能要经过一段时间的延迟。触发 `message`事件后，传递给 `onmessage` 处理程序的事件对象(`event`)包含以下三方面的重要信息。

- `data`：作为 `postMessage()` 第一个参数传入的字符串数据。
- `origin`：发送消息的文档所在的域，例如"http://www.wrox.com"。
- `source`：发送消息的文档的 `window` 对象的代理。这个代理对象主要用于在发送上一条消息的窗口中调用 `postMessage()`方法。

```
window.addEventListener("message", function(event) {
    if (event.origin == "http://www.wrox.com") {
        //接收到的数据
        console.log(event.data);
        //可选：向来源窗口发送回执
        event.source.postMessage("Received!", "http://p2p.wrox.com");
    }
 });
```

### 拖放事件

- **拖动某元素时，将依次触发下列事件，事件的目标都是被拖动的元素**
  (1) `dragstart` 按下鼠标键并开始移动鼠标时，会在被拖放的元素上触发 dragstart 事件。
  (2) `drag` 触发 dragstart 事件后，随即会触发 `drag` 事件，而且在元素被拖动期间会持续触发该事件。
  (3) `dragend` 拖动停止时（无论是把元素放到了有效的放置目标，还是放到了无效的放置目标上），会触发 `dragend` 事件。

---

- **当某个元素被拖动到一个有效的放置目标上时，下列事件会依次发生，事件的目标是作为放置目标的元素：**
  (1) `dragenter` 只要有元素被拖动到放置目标上，就会触发 `dragenter`事件
  (2) `dragover` 触发 `dragenter` 事件后马上触发 `dragover` 事件，而且在被拖动的元素还在放置目标的范围内移动时，就会持续触发该事件
  (3) `dragleave` 或 `drop` 如果元素被拖出了放置目标， `dragover` 事件不再发生，但会触发 `dragleave` 事件。如果元素被放到了放置目标中，则会触发 `drop` 事件而不是 `dragleave` 事件

---

- **自定义放置目标**
  在拖动元素经过某些无效放置目标时，可以看到一种特殊的光标（圆环中有一条反斜线），表示不能放置。虽然所有元素都支持放置目标事件，但这些元素默认是不允许放置的。如果拖动元素经过不允许放置的元素，无论用户如何操作，都不会发生 `drop` 事件。不过，你可以把任何元素变成有效的放置目标，方法是重写 `dragenter` 和 `dragover` 事件的默认行为。

      ```
      // container 元素为放置目标
      container.addEventListener('dragenter',function(event) {  // 修改默认行为
            event.preventDefault();
      })
      container.addEventListener('dragover',function(event) {   // 修改默认行为
            event.preventDefault();
      })
      container.addEventListener('drop',function(event) {
            console.log('会触发drop事件');
      })
      ```
      *以上代码执行后，你就会发现当拖动着元素移动到放置目标上时，光标变成了允许放置的符号。当然，释放鼠标也会触发 `drop` 事件。*

---

- **dataTransfer 对象**
  `dataTransfer` 对象，它是事件对象的一个属性，**用于从被拖动元素向放置目标传递字符串格式的数据**。因为它是事件对象的属性，所以只能在拖放事件的事件处理程序中访问 `dataTransfer` 对象。`dataTransfer` 对象有两个主要方法：`getData()` 和 `setData()` 。
  **setData(format,data)** 接受两个参数，第一个表示要存入的数据类型表示保存的数据类型，取值为 "`text`" 或 "`URL`" 。第二个参数为真实数据(字符串)。
  **getData(format)** 可以取得由 `setData()` 保存的值，接收一个参数为在`setData`方法中指定的数据类型，如:“`text`”
  ```
  //拖拽目标上设置文本数据 (dragstart事件设置)
  dragDom.addEventListener('dragstart',function(event) {
    console.log('dragstart')
    event.dataTransfer.setData('text','我在测试拖放直接传递数据666')
  })
  // 放置目标上，接收传过来的数据 （在drop事件接收）
  container.addEventListener('drop',function(event) {
    console.log('drop');
    console.log(event.dataTransfer.getData('text'))
  })
  ```

## JSON

### JSON.stringify(value [, filter [, space]])

参数说明：

- `value` 将要序列化成 一个 JSON 字符串的值。
- `filter` （ **选填**）是个过滤器，可以是一个数组，也可以是一个函数。
  如果过滤器参数是数组，那么`JSON.stringify()` 的结果中将只包含数组中列出的属性。
  如果过滤器参数是函数，传入的函数接收两个参数，属性（键）名和属性值。根据属性（键）名可以知道应该如何处理要序列化的对象中的属性。如果返回了`undefined`，则该属性会被忽略。属性名只能是字符串，而在值并非键值对儿结构的值时，键名可以是空字符串
- `space` （**选填**）指定缩进用的空白字符串。如果参数是个数字，它代表有多少的空格；上限为 10。该值若小于 1，则意味着没有空格；如果该参数为字符串（当字符串长度超过 10 个字母，取其前 10 个字母），该字符串将被作为空格；如果该参数没有提供（或者为 `null`），将没有空格。
  **例一**：方法过滤器
  ```
  const obj = {
    name: 'htl',
     age: 29,
    like: ['html','css','js']
  }
  const res = JSON.stringify(obj,
    (key,value) => {
      switch(key){
          case "like": return value.join(",")
          case "age": return undefined;
          default: return value;
        }
      },
    4)
  ```
  结果：res
  `{ "name": "htl", "like": "html,css,js" }`
  **例二：** 数组过滤器
  `const obj = { name: 'htl', age: 29, like: ['html','css','js'] } const res2= JSON.stringify(obj, ['name', 'age'], 'abcd')`
  结果：res2
  `"{ abcd"name": "htl", abcd"age": 29 }"`

`toJSON()` 方法
有时候， `JSON.stringify()` 还是不能满足对某些对象进行自定义序列化的需求。在这些情况下，可以给对象定义 `toJSON()` 方法，返回其自身的 `JSON` 数据格式。

```
const obj = { 
      name: 'htl',
      age: 29,
      toJSON: function() {
            return this.name 
      }  
} 
JSON.stringify(obj);  // 'htl'
```

### JSON.parse(text[, reviver])

参数说明：

- `text` 要被解析成 `JavaScript` 值的字符串
- `reviver` 转换器, 如果传入该参数(函数)，可以用来修改解析生成的原始值，调用时机在 `parse` 函数返回之前。如果函数返回 `undefined` ，则表示要从结果中删除相应的键；如果返回其他值，则将该值插入到结果中

```
const obj = { 
      name: 'htl',
      age: 29,
      like: 'js'
    } 
const text = JSON.stringify(obj);
const p = JSON.parse(text, (key,val) => {
    if(key === 'name') {
        return undefined;
    }
    return val
})
// 结果：
{ age: 29, like: "js" }

```

### 自定义事件

事件是一种叫做观察者的设计模式，这是一种创建松散耦合代码的技术。观察者模式由两类对象组成：**主体**和**观察者**。主体负责发布事件，同时观察者通过订阅这些事件来观察该主体。该模式的一个关键概念是主体并不知道观察者的任何事情，也就是说它可以独自存在并正常运作即使观察者不存在。涉及 `DOM`上时，`DOM` 元素便是主体，你的事件处理代码便是观察者。

事件是与 `DOM` 交互的最常见的方式，但它们也可以用于非 `DOM` 代码中——**通过实现自定义事件**。自定义事件背后的概念是创建一个管理事件的对象，让其他对象监听那些事件。实现自定义事件的基本模式可以如下定义：

```
class CustormEvent {
        pool = {};  // 事件池
        // 添加事件，参数：type事件类型，handler 事件处理方法
        addEvent(type,handler) {
            if(!this.pool[type]) {
                    this.pool[type] = [];
            }
            this.pool[type].push(handler);
        }

         // 触发事件，参数：event 一个对象，需要包含type属性。如：{type: 'testFn'}
        fire(event) {
            if(!event.target) {
                event.target = this;
            }
            const handlerFn = this.pool[event.type];
            if(handlerFn instanceof Array) {
                for(let i = 0; i < handlerFn.length; i++) {
                    handlerFn[i](event);
                }
            }
        }

         // 移除事件，参数：type事件类型，handler 事件处理方法
        removeEvent(type,handler) {
            const handlerFn = this.pool[type];
            if(handlerFn instanceof Array) {
                for(var i = 0; i< handlerFn.length; i ++) {
                    if(handlerFn[i] === handler) {
                        break;
                    }
                }
                handlerFn.splice(i,1);
            }
        }
 }


const testEvent = new CustormEvent(); // 创建管理事件对象（主体）
testEvent.addEvent('myFn',fn);  // 订阅 ‘myFn’事件，来观察主体
testEvent.fire('myFn');  // 主体发布事件
```

## 离线应用与客户端存储（离线应用即将废弃）

`HTML5`为此定义了一个`navigator.onLine`属性，这个属性值为 `true` 表示设备能上网，值为 `false` 表示设备离线。这个属性的关键是浏览器必须知道设备能否访问网络，从而返回正确的值。

`navigator.onLine` 属性之外，为了更好地确定网络是否可用，`HTML5` 还定义了两个事件：`online` 和 `offline`。当网络从离线变为在线或者从在线变为离线时，分别触发这两个事件。这两个事件在 `window` 对象上触发。

为了检测应用是否离线，在页面加载后，最好先通过 `navigator.onLine` 取得初始的状态。然后，就是通过上述两个事件来确定网络连接状态是否变化。

**indexedDB** 前端数据库 ，参考阮一峰文章：[http://www.ruanyifeng.com/blog/2018/07/indexeddb.html](http://www.ruanyifeng.com/blog/2018/07/indexeddb.html)

## Page Visibility API

- `document.hidden`：表示页面是否隐藏的布尔值。页面隐藏包括页面在后台标签页中或者浏览
  器最小化。
- `visibilitychange` 事件 当文档从可见变为不可见或从不可见变为可见时，触发该事件。
  ```
  document.addEventListener("visibilitychange", e => {
          if(document.hidden) { // 通过这个属性，区分页面当前状态
               console.log('页面隐藏')
          }else{
               console.log('页面展示')
          }
  });
  ```

## Geolocation API

`Geolocation API` 在浏览器中的实现是 `navigator.geolocation` 对象，这个对象包含 3 个方法。

- `getCurrentPosition(successCallback, errorCallback, type)`
  调用这个方法就会触发请求用户共享地理定位信息的对话框。这个方法接收 3 个参数：成功回调函数、可选的失败回调函数和可选的选项对象。

- `watchPosition()`
  如果你希望跟踪用户的位置，那么可以使用这个方法。这个方法接收的参数与 `getCurrentPosition()` 方法完全相同。`watchPosition()` 与定时调用`getCurrentPosition()`的效果相同。在第一次调用 `watchPosition()`方法后，会取得当前位置，执行成功回调或者错误回调。然后，`watchPosition()`就地等待系统发出位置已改变的信号（它不会自己轮询位置）。

- `clearWatch`
  调用 `watchPosition()`会返回一个数值标识符，用于跟踪监控的操作。基于这个返回值可以取消
  监控操作，只要将其传递给 `clearWatch()`方法即可（与使用 `setTimeout`)和 `clearTimeout()`类似）。例如

      ```
      var watchId = navigator.geolocation.watchPosition(function(position){
          console.log(position.coords.latitude, positions.coords.longitude);
      }, function(error){
          console.log("Error code: " + error.code);
          console.log("Error message: " + error.message);
      });
      clearWatch(watchId);

      ```

## FileReader 类型

提供如下实例方法如下：

- `readAsText(file,encoding)`：以纯文本形式读取文件，将读取到的文本保存在 result 属
  性中。第二个参数用于指定编码类型，是可选的。
- `readAsDataURL(file)`：读取文件并将文件以数据 URI 的形式保存在 result 属性中(`base64`)。
- `readAsBinaryString(file)`：读取文件并将一个字符串保存在 result 属性中，字符串中的
  每个字符表示一字节。
- `readAsArrayBuffer(file)`：读取文件并将一个包含文件内容的 ArrayBuffer 保存在 result 属性中。

提供了三个事件：
三个事件是`progress`、`error` 和 `load`，分别表示是否又读取了新数据、是否发生了错误以及是否已经读完了整个文件。

## 对象 URL

对象 `URL` 也被称为 `blob URL`，指的是引用保存在 `File` 或 `Blob` 中数据的 `URL`。使用对象 `URL` 的好处是可以不必把文件内容读取到 `JavaScript` 中而直接使用文件内容。为此，只要在需要文件内容的地方提供对象 `URL` 即可。要创建对象 `URL`，可以使用 `window.URL.createObjectURL()`方法，并传入`File` 或 `Blob` 对象。

与之对应的，释放对象`URL` 方法为 `window.URL.revokeOjbectURL( url )`，参数接收需要释放内存的对象`URL`

## Web Workers

查考阮一峰文章：[http://www.ruanyifeng.com/blog/2018/07/web-worker.html](http://www.ruanyifeng.com/blog/2018/07/web-worker.html)

## TypeScript

`interface` 定义的接口名称可以重复（和类名重复也行），默认是合并约束效果。`type` 定义类型则不能重名。

## 浏览器进程线程关系

<img :src="$withBase('/imgs/21.png')">

> 具体请查阅：[https://segmentfault.com/a/1190000012925872](https://segmentfault.com/a/1190000012925872)

## 压测工具

<img :src="$withBase('/imgs/22.png')">

## CDN 加速原理

1、全局负载均衡：通过智能调度`dns`，让客户端去访问最佳的`cdn`节点
2、缓存：命中率越高，回源率越低，则缓存效果越好。（命中率：是指在`cdn`节点之接能拿到资源的几率。回源率：是指`cdn`节点无资源，需要从源站点获取资源的几率）

未使用 CDN 站点和 使用 CDN 站点 访问流程图，如下：
**未使用 CDN**
<img :src="$withBase('/imgs/23.jpg')">
**使用 CDN** ：
<img :src="$withBase('/imgs/24.png')">

## 迭代器与生成器

### 迭代器

很多内置类型都实现了 `Iterable` 接口（属性必须使用特殊的 `Symbol.iterator` 作为键）:

- 字符串
- 数组
- 映射
- 集合
- `arguments`对象
- `NodeList` 等`DOM` 集合类型

---

实际写代码过程中，不需要显式调用`Symbol.iterator` 函数来生成迭代器。实现可迭代协议的所有类型都会自动兼容接收可迭代对象的任何语言特性。接收可迭代对象的原生语言特性包括：

- `for-of` 循环
- 数组解构
- 扩展操作符
- `Array.from()`
- 创建集合(set)
- 创建映射(map)
- `Promise.all()` 接收由期约组成的可迭代对象
- `Promise.race()` 接收由期约组成的可迭代对象
- `yield*` 操作符，在生成器中使用

---

迭代器也实现了 `Iterable` 接口

```
let arr = ['foo', 'bar', 'baz'];
let iter1 = arr[Symbol.iterator]();
console.log(iter1[Symbol.iterator]); // f values() { [native code] }
let iter2 = iter1[Symbol.iterator]();
console.log(iter1 === iter2); // true

// 所以这样使用也可以
let arr = [3, 1, 4];
let iter = arr[Symbol.iterator]();

for (let item of arr ) { console.log(item); }; // 3、1、4
for (let item of iter ) { console.log(item); } // 3、1、4
```

---

提前终止迭代器

可选的 `return()`方法用于指定在迭代器提前关闭时执行的逻辑。执行迭代的结构在想让迭代器知道它不想遍历到可迭代对象耗尽时，就可以“关闭”迭代器。可能的情况包括：

- `for-of` 循环通过 `break`、`continue`、`return` 或 `throw` 提前退出；
- 解构操作并未消费所有值。

`return()`方法必须返回一个有效的 `IteratorResult` 对象。简单情况下，可以只返回`{ done: true }`。

### 生成器

生成器的形式是一个函数，函数名称前面加一个星号（ \* ）表示它是一个生成器。调用生成器函数会产生一个生成器对象。与迭代器相似，生成器对象也实现了 `Iterator` 接口，因此具有 `next()` 。
`yield` 关键字可以让生成器停止和开始执行，也是生成器最有用的地方。遇到这个关键字后，执行会停止，函数作用域的状态会被保留。停止执行的生成器函数只能通过在生成器对象上调用 `next()` 方法来恢复执行。

- 生成器对象作为可迭代对象
  在生成器对象上显式调用 `next()` 方法的用处并不大。其实，如果把生成器对象当成可迭代对象，那么使用起来会更方便

  ```
  function* generatorFn() {
    yield 1; yield 2; yield 3;
  }
  // 使用for of 来消费
  for (const x of generatorFn()) {
    console.log(x);  // 1 、2 、3
  }
  ```

- 使用 `yield` 实现输入和输出
  除了可以作为函数的中间返回语句使用， `yield` 关键字还可以作为函数的中间参数使用。上一次让生成器函数暂停的 `yield` 关键字会接收到传给 `next()` 方法的第一个值。这里有个地方不太好理解：第一次调用 `next()` 传入的值不会被使用，因为这一次调用是为了开始执行生成器函数

  ```
  function* generatorFn(initial) {
    console.log(initial);
    console.log(yield);
    console.log(yield);
  }
  const generatorObject = generatorFn('foo');
  generatorObject.next('bar'); // foo
  generatorObject.next('baz'); // baz
  generatorObject.next('qux'); // qux
  ```

- 用星号增强 `yield` 的行为
  可以使用星号增强 `yield` 的行为，让它能够迭代一个可迭代对象，从而一次产出一个值：
  `function* f1() { for (const x of [1, 2, 3]) { yield x; } } function* f2() { yield* [1, 2, 3]; } // 这里的f2和f1的作用是等价的，“*”增强了yield 的行为`

- 生成器作为默认迭代器
  因为生成器对象实现了 `Iterable` 接口，而且生成器函数和默认迭代器被调用之后都产生迭代器，所以生成器格外适合作为默认迭代器。

````

class Foo {
constructor() {
this.values = [1, 2, 3];
}
_ [Symbol.iterator]() {
yield_ this.values;
}
}
const f = new Foo();
for (const x of f) {
console.log(x); // 1、2、3
}

      ```

````

- 提前终止生成器
  与迭代器类似，生成器也支持“可关闭”的概念。一个实现 `Iterator` 接口的对象一定有 `next()`
  方法，还有一个可选的 `return()` 方法用于提前终止迭代器。生成器对象除了有这两个方法，还有第三个方法： `throw()` 。
  `return()` 和 `throw()` 方法都可以用于强制生成器进入关闭状态。
  **return()**：提供给 `return()` 方法的值，就是终止迭代器对象的值

```
function * fn() {
  yield * [1,2,3]
}
const f = fn();
console.log(f); // fn {<suspended>}
console.log(f.return(4));// { done: true, value: 4 }
console.log(f); // fn {<closed>}
```

与迭代器不同，所有生成器对象都有 `return()` 方法，只要通过它进入关闭状态，就无法恢复了。后续调用 `next()` 会显示 `done: true` 状态
**throw()**：`throw()`方法会在暂停的时候将一个提供的错误注入到生成器对象中。如果错误未被处理，生成器就会关闭。

```
function * fn() {
  yield * [1,2,3]
}
var f = fn();
console.log(f); // fn {<suspended>} f.throw('is fail');
console.log(f); // fn {<closed>}
```

## Promise

### 实例方法：

- `then()`
- `catch()`
- `finally()` 这个方法在期约转换为解决或拒绝状态时都会执行，但是该方法没有办法知道期约的状态是解决还是拒绝。它被设计为一个状态无关的方法，所以在大多数情况下它将表现为父期约的传递。对于已解决状态和被拒绝状态都是如此。

**pis：** 这些实例方法的返回值都是一个新的`promise`。因为`finally` 跟状态无关，所以它的返回值没有任何意义的，最终都是对父 promise 结果的一中传递。

### 静态方法：

- `Promise.resolve()`
- `Promise.reject()`
- `Promise.all()` 方法创建的期约会在一组期约全部解决之后再解决。这个静态方法接收一个可迭代对象，返回一个新期约(结果数组)。但如果有一个包含的`promise`为`reject`状态，结果的也会是`reject`（不再是结果数组）

- `Promise.race()`方法返回一个包装期约，是一组集合中最先解决或拒绝的期约的镜像。这个
  方法接收一个可迭代对象，返回一个新期约。

```
async function foo() {
  console.log(await Promise.resolve('foo'));
}
async function bar() {
  console.log(await 'bar');
}
async function baz() {
  console.log('baz');
}

foo();
bar();
baz();

// 输出顺序：baz 、bar、foo
```

JavaScript 运行时在碰到 `await` 关键字时，会记录在哪里暂停执行。等到 `await` 右边的值可用了，JavaScript 运行时会向消息队列中推送一个任务。
如果 `await` 后面是一个期约，实际上会有两个任务被添加到消息队列并被异步求值。
第一个添加的任务：`promise` 有结果了，可以走 `then()` 处理程序了
第二个添加的任务：`await` 右边的值（`promise` 结果）可用了
参考：js 高级程序设计四 的第 355 页

```

```
