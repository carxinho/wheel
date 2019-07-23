---
title: Collapse - 折叠面板 
---

# Collapse - 折叠面板
用于控制折叠或展示信息。

### :books: 简述


### :chestnut: 举例  
<ClientOnly>
  <collapse-demo-1></collapse-demo-1>
</ClientOnly>

```vue
<g-collapse :selected.sync="selectedTab" single>
  <g-collapse-item title="标题一" :name="1">
    <div>内容一</div>
  </g-collapse-item>
  <g-collapse-item title="标题二" :name="2">
    <div>内容二</div>
  </g-collapse-item>
  <g-collapse-item title="标题三" :name="3">
    <div>内容三</div>
  </g-collapse-item>
</g-collapse>
<script>
  data(){
    return{
      selectedTab: [1] 
    }
  }
</script>
```

<ClientOnly>
  <collapse-demo-2></collapse-demo-2>
</ClientOnly>

```vue
<g-collapse :selected.sync="selectedTab">
  <g-collapse-item title="标题一" :name="1">
    <div>内容一</div>
  </g-collapse-item>
  <g-collapse-item title="标题二" :name="2">
    <div>内容二</div>
  </g-collapse-item>
  <g-collapse-item title="标题三" :name="3">
    <div>内容三</div>
  </g-collapse-item>
</g-collapse>
<script>
  data(){
    return{
      selectedTab: [1,3] 
    }
  }
</script>
```

 ###  :clipboard: 属性

 - `g-ollapse` 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | single | 选择是否只显示单个内容区 | Boolean |true / false| false |
  | selected | 被选中初始展示面板的 name 数组集合 | Array | 自定义 |自定义|

- `g-collapse-item` 的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | title ( required ) | 表示展示面板的标题 | String |自定义|自定义|
  | name ( required ) | 表示面板的唯一标识 | Number |自定义|自定义|