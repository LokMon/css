## 消除图片下方间隙

:::tip

通过设置给 `img` 元素设置 `vertical-align: top` 消除行内元素的间隙（仅对 `img` 元素有用）
[vertical-align--MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/vertical-align)
:::

<vertical-clearWhite/>

## 图文居中

<vertical-verticalMiddle/>

```html
<div class="container">
  <img src="../../public/images/bg1.jpg" />
  <span>安能摧眉折腰事权贵，使我不得开心颜</span>
</div>
```

```scss
.container {
  padding: 15px 0;
  img {
    vertical-align: middle;
  }
}
```
