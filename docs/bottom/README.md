<bottom/>

## 使用 flexbox

> [flex - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/flex)

```html
<body>
  <div class="content">
    content
  </div>
  <footer class="footer"></footer>
</body>
```

```scss
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex: 1;
}
```

## 在 footer 上用负的 margin-top

```html
<body>
  <article>
    <div class="poem">
      ...
    </div>
  </article>
  <footer>底部始终在文档末尾，当文档较长时跟随在文档末尾，当文档较短时在窗口底部。</footer>
</body>
```

```scss
html,
body {
  height: 100%;
}
article {
  min-height: 100%;
  .poem {
    padding-bottom: 64px; // 这里应当是footer的固定高度
    zoom: 1;
  }
}
footer {
  padding: 10px;
  margin-top: -64px; // 这里应当是footer的固定高度
}
```

## 通过 calc( ) 减少 wrapper 高度

```html
<body>
  <div class="content">
    content
  </div>
  <footer class="footer"></footer>
</body>
```

```scss
.content {
  min-height: calc(100vh - 70px);
}
.footer {
  height: 50px;
}
```

:::tip
这里用 calc( ) 扣除了 70px，把 footer 固定为 50px。这是假设内容中的最后一个元素有一个 20px 的 margin-bottom。这个 margin-bottom 和 footer 的高度要加在一起从 viewport 高度中扣除
:::

## 使用 grid

> [grid - CSS（层叠样式表） | MDN](https://developer.mozilla.org/zh-CN/docs/Web/CSS/grid)

```html
<body>
  <div class="content">
    content
  </div>
  <footer class="footer"></footer>
</body>
```

```scss
html {
  height: 100%;
}
body {
  min-height: 100%;
  display: grid;
  grid-template-rows: 1fr auto;
}
.footer {
  grid-row-start: 2;
  grid-row-end: 3;
}
```
