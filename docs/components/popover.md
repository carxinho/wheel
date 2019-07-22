---
title: Popover - 弹出框 
---

# Popover - 弹出框

### :books: 简述
通过鼠标点击或悬浮在某元素上可弹出气泡浮层。

### :chestnut: 举例  
<ClientOnly>
  <popover-demo-1></popover-demo-1>
</ClientOnly>

```vue
  <g-popover>
    <g-button>我是被点击后弹出的</g-button>
    <template slot="content">
    弹出内容
    </template>
  </g-popover>
  <g-popover trigger="hover">
    <g-button>我是悬浮后弹出的</g-button>
    <template slot="content">
    弹出内容
    </template>
  </g-popover>
```
<ClientOnly>
  <popover-demo-2></popover-demo-2>
</ClientOnly>

```vue
<g-popover position="left">
  <g-button>被点击后在左方弹出</g-button>
  <template slot="content">
  弹出内容
  </template>
</g-popover>
<g-popover>
  <g-button>被点击后在上方弹出</g-button>
  <template slot="content">
  弹出内容
  </template>
</g-popover>
<g-popover trigger="hover" position="bottom">
  <g-button>悬浮后在下方弹出</g-button>
  <template slot="content">
  弹出内容
  </template>
</g-popover>
<g-popover trigger="hover" position="right">
  <g-button>悬浮后在右方弹出</g-button>
  <template slot="content">
  弹出内容
  </template>
</g-popover>
```

 ###  :clipboard: 属性
   - Popover 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | position | Popover弹出的位置 | String |top / bottom / left / right    | top |
  | trigger | Popover的触发方式 | String |click / hover | click |