# vue-music-box

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Lints and fixes files

```
npm run lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

dependencies 会打包到代码里

devDependencies 不会打包到代码里 辅助开发

1. 浏览器禁止缩放

```html
<meta
  name="viewport"
  content="width=device-width,initial-scale=1.0,maximum-scale=1.0,minimum-scale=1.0,user-scalable=no"
/>
```

2. 添加图标字体
   把 svg 通过 iconMoon 导成目标字体

3. scss

- 实体样式（css 能直接使用的）
  base.scss
  icon.scss
  reset.scss

- 非实体样式（给 sass 提供的东西）
  定义 sass 变量
  mixin css 函数

* 引入使用图标字体文件
* 引入实体样式，不要引入变量和 mixin

```js
// vue
import "@/assets/scss/index.scss";
```

- 使用 mixin,变量为非实体变量（给 sass 提供的东西，css 不认）
- 2x 3x 图片的使用

```css
@include bg-image("logo");
```

```css
// 背景图片
@mixin bg-image($url) {
  background-image: url($url+"@2x.png");
  @media (-webkit-min-device-pixel-ratio: 3), (min-device-pixel-ratio: 3) {
    background-image: url($url+"@3x.png");
  }
}
```

- 全局性引入 sass 样式文件，
  配置 vue.config.js 文件，
  可以额外配置 webpack

```js
// vue.config.js

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        // 全局引入变量和 mixin
        additionalData: `
              @import "@/assets/scss/variable.scss";
              @import "@/assets/scss/mixin.scss";
            `,
      },
    },
  },
};
```

## 2021 年 04 月 14 日

1. 创建 Tab 组件
2. 定义页面
3. 定义页面路由

4) 路由视图的使用

```html
<router-view></router-view>
```

5. 路由重定向

```js
const router = new VueRouter({
  routes: [{ path: "/a", redirect: "/b" }],
});
```

## 2021 年 04 月 15 日

1. 第三方禁止跨域请求，通过自己搭建 WEBserver 来进行请求
2. 如何在 CIL 中创建 WEBserver

   - vue.config.js 进行配置

3. 后端处理数据。前端只做数据渲染和交互

### 轮播图数据请求流程

1. 后端数据处理
2. 前端请求函数封装
   - axios get 函数的封装
3. 轮播图数据的请求
4. 轮播图组件的使用

- 调用轮播图数据请求在 created 生命周期中

## 2021 年 04 月 16 日

1. 创建组件 slider
2. 使用 better-scroll [https://better-scroll.github.io/docs]
3. 在创建节点是用 setup 函数 获轮播图 DOM，创建 use-slider.js 封装第三方库
4. 在 use-slider.js 中 onMounted 创建 ，在 onUnmounted 销毁
