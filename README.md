# wheel - 这是一个 vue ui 组件

[![Build Status](https://www.travis-ci.org/carxinho/wheel.svg?branch=master)](https://www.travis-ci.org/carxinho/wheel)

## 介绍
这是我通过使用 Vue 搭建起的一个 UI 框架。

## 开始使用

1.新增 CSS 样式

    使用本框架时，请在CSS中开启 border-box

    ```
    *,*::before,*::after{box-sizing: border-box;}
    ```
    IE 8 及以上浏览器均支持此样式。
    你还需要设置默认颜色等变量（后续会修改）
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

2.安装 wheel
```
npm i --save wheel-1-1
```
3.引入 wheel
```
import {Button, ButtnGroup, Icon} from 'wheel-1-1'
import 'wheel-1-1/dist/index.css'

export default {
    name:'app',
    components:{
        'g-button': Button,
        'g-icon': Icon
    }
}
```

## 文档

## 提问

## 变更记录

## 联系方式

## 贡献代码
