# 首页

[![Build Status](https://www.travis-ci.org/carxinho/wheel.svg?branch=master)](https://www.travis-ci.org/carxinho/wheel)

## 介绍
这是我通过使用 Vue 2.x 搭建起的一个前端 UI 框架，其提供了button / input / popover 等多款常用组件，适合移动端以及 PC 端使用。

## 支持环境
- wheel 是基于Vue2.x 开发的，故支持 Chrome 等浏览器和 IE 9 及以上
- wheel 所有组件均使用flex布局，其兼容性详情请看[Can I use](https://caniuse.com/#search=flex)

## 安装
- 使用 npm 安装
```
npm i --save wheel
```

- 使用 yarn 安装
```
yarn add wheel
```

## 开始使用

- 新增 CSS 样式

    使用本框架时，请在CSS中开启 border-box

    ```
    *,*::before,*::after{
        box-sizing: border-box;
    }
    ```
    IE 8 及以上浏览器均支持此样式。
    
    ```
    html {
        --button-height: 32px;
        --font-size: 14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover:#666;
    }
    ```
    IE 15 及以上浏览器均支持此样式。

- 引入 wheel
```
import {Button, } from 'wheel'
import 'wheel/dist/index.css'

export default {
    name:'app',
    components:{
        'g-button': Button,
    }
}
```

## 组件阅览

- button 按钮
- input 输入框
- layout 布局
- grid 网格系统
- toast 提示框
- popover 弹出框
- tabs 标签页
- collapse 折叠面板
