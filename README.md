### 面试题

1. typeof能判断那些类型？

Number、String、Object、Symbol、Boolean、Undefined、BigInt
BigInt 1n表示

``` 
111===111n // false
111==111n // true
```

2. 何时使用===，何时使用==

==只比较值，而===比较值和类型，==会先将类型转化为相同在进行===比较

3. window.onload和DOMContentLoaded的区别

DOMContentLoaded事件在html文档加载完毕并且所有内联以及外链js的同步代码都执行完毕之后触发
window.onload事件是在DOM结构中js、css、图片，以及js异步加载的js、css、图片都加载完毕后才会触发，video、audio、flash 不会影响 load 事件触发。

4. js创建10个a标签，点击的时候弹出对应的序号

``` javascript
for (let i = 0; i < 10; i++) {
    const a = document.createElement('a')
    a.apendChild(document.createTextNode('123'))
    document.body.appendChild(a)
    a.onClick = function() {
        alert(i)
    }
}
```
