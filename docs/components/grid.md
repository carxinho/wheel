---
title: Grid - 网格系统 
---

# Grid - 网格系统 

### :books: 简述
 24 网格系统通过 row 和 col 来分块信息区域，是一个mobile frist Design。

### :chestnut: 举例  
<ClientOnly>
  <grid-demo-1></grid-demo-1>
</ClientOnly>

```vue
<g-row>
  <g-col span="24">100%</g-col>
</g-row>
<g-row>
  <g-col span="12">50%</g-col>
  <g-col span="12">50%</g-col>
</g-row>
<g-row>
  <g-col span="8">33.3%</g-col>
  <g-col span="8">33.3%</g-col>
  <g-col span="8">33.3%</g-col>
</g-row>
<g-row>
  <g-col span="6">25%</g-col>
  <g-col span="6">25%</g-col>
  <g-col span="6">25%</g-col>
  <g-col span="6">25%</g-col>
</g-row>
<g-row>
  <g-col span="4">16.7%</g-col>
  <g-col span="4">16.7%</g-col>
  <g-col span="4">16.7%</g-col>
  <g-col span="4">16.7%</g-col>
  <g-col span="4">16.7%</g-col>
  <g-col span="4">16.7%</g-col>
</g-row>
<g-row>
  <g-col span="3">12.5%</g-col>
  <g-col span="3">12.5%</g-col>
  <g-col span="3">12.5%</g-col>
  <g-col span="3">12.5%</g-col>
  <g-col span="3">12.5%</g-col>
  <g-col span="3">12.5%</g-col>
  <g-col span="3">12.5%</g-col>
  <g-col span="3">12.5%</g-col>
</g-row>

```

<ClientOnly>
  <grid-demo-2></grid-demo-2>
</ClientOnly>

```vue
  <g-row>
    <g-col span="4" offset="6">col-4</g-col>
    <g-col span="10" offset="4">col-10</g-col>
  </g-row>
  <g-row>
    <g-col span="6" >col-6</g-col>
    <g-col span="8" offset="4">col-8</g-col>
  </g-row>
  <g-row>
    <g-col span="4" offset="3">col-4</g-col>
    <g-col span="10" offset="7">col-10</g-col>
  </g-row>
```

<ClientOnly>
  <grid-demo-3></grid-demo-3>
</ClientOnly>

```vue
  <g-row gutter="20">
    <g-col span="6" >col-6</g-col>
    <g-col span="8" >col-8</g-col>
  </g-row>
```

<ClientOnly>
  <grid-demo-4></grid-demo-4>
</ClientOnly>

```vue
    <g-row>
      <g-col offset="5" span="6" :ipad="{offset:2,span:12}" :narrow-pc="{offset:8,span:2}"
        :pc="{offset:6,span:6}" :wide-pc="{offset:7,span:7}">
      col-6
      </g-col>
      <g-col offset="5" span="8" :ipad="{offset:8,span:2}" :narrow-pc="{offset:10,span:2}"
        :pc="{offset:6,span:6}":wide-pc="{offset:2,span:7}">
        col-8
      </g-col>
    </g-row>
```

###  :clipboard: 属性
  - `<g-row>` Attribute

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | gutter | 网格两侧间隙 | Number |自定义| 无 |


  - `<g-col>` Attribute

  | 参数 | 说明 | 类型 | 举例子 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | span | 网格内容占据的宽度比例 | Number |自定义| 自定义 |
  | offset | 网格内容距左侧偏移的宽度比例 | Number |自定义| 自定义 |
  | ipad |  577px 内响应式网格属性对象 | Object |自定义| 自定义 |
  | narrow-pc |  769px 内响应式网格属性对象 | Object | 自定义| 自定义 |
  | pc | 993px 内响应式网格属性对象 | Object | 自定义| 自定义 |
  | wide-pc |  1200px 内响应式网格属性对象 | Object | 自定义| 自定义 |