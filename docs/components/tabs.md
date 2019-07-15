---
title: Tabs - 标签页 
---

# Tabs - 标签页

### :books: 简述
常用的选项卡切换组件，用于分类展示不同的数据信息

### :chestnut: 举例  
<ClientOnly>
  <tabs-demo-1></tabs-demo-1>
</ClientOnly>

```vue
  <g-tabs selected="first-tab">
    <g-tabs-head>
      <g-tabs-item name="first-tab">Tab 1</g-tabs-item>
      <g-tabs-item name="second-tab">Tab 2</g-tabs-item>
      <g-tabs-item name="third-tab">Tab 3</g-tabs-item>
    </g-tabs-head>
    <g-tabs-body>
      <g-tabs-pane name="first-tab">content of Tab 1</g-tabs-pane>
      <g-tabs-pane name="second-tab">content of Tab 2</g-tabs-pane>
      <g-tabs-pane name="third-tab">content of Tab 3</g-tabs-pane>
    </g-tabs-body>
  </g-tabs>
```

<ClientOnly>
  <tabs-demo-2></tabs-demo-2>
</ClientOnly>

```vue
    <g-tabs selected="first-tab">
      <g-tabs-head>
        <g-tabs-item name="first-tab">Tab 1</g-tabs-item>
        <g-tabs-item name="second-tab" disabled>Tab 2</g-tabs-item>
        <g-tabs-item name="third-tab">Tab 3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="first-tab">content of Tab 1</g-tabs-pane>
        <g-tabs-pane name="second-tab">content of Tab 2</g-tabs-pane>
        <g-tabs-pane name="third-tab">content of Tab 3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
```

 ###  :clipboard: 属性

  - `<g-tabs>` 属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | selected | 表示初始选中的tab `name`值(requried 必需项)| String |自定义|自定义|

  - `<g-tabs-item>` 属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | name | 表tab的唯一标记，与`<g-tabs-pane>`的`name`属性相对应(必需项)| String |自定义|自定义|
  | disabled | 是否禁用该`tab-item`| Boolean |true/false|false |

  - `<g-tabs-pane>` 属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | name | 与`<g-tabs-item>`的`name`属性相对应(必需项)| String |自定义|自定义|