# 图片垂直居中

> 需求:图片宽和高未知，要让图片水平和垂直居中在某个容器下，而且，如果图片宽或者高超出容器，需要按照比例进行缩放

## CSS3 方式(移动端)

```scss
img {
  position: relative;
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  top: 50%;
  left: 50%;
  -webkit-transform: translateX(-50%) translateY(-50%);
  transform: translateX(-50%) translateY(-50%);
}
```

## 传统方式

```scss
/**容器的css*/
.box {
  display: table-cell;
  vertical-align: middle;
  text-align: center;
  width: 200px;
  height: 200px;
}
/**图片的css*/
.box img {
  vertical-align: middle;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
}
```
