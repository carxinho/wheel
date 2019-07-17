---
title: Input - 输入框
---

# Input - 输入框

### :books: 简述
常用的基础输入框，用于输入数据

### :chestnut: 举例  
<ClientOnly>
  <input-demo-1></input-demo-1>
</ClientOnly>

```vue
<g-input placeholder="请输入内容"></g-input>
<g-input placeholder="这是disabled状态" disabled></g-input>
<g-input placeholder="这是readonly状态" readonly></g-input>
<g-input placeholder="错误提示显示" error="我是错误提醒文字"></g-input>
```

<ClientOnly>
  <input-demo-2></input-demo-2>
</ClientOnly>

```vue
<g-input placeholder="支持事件触发" 
  @change="onChange" 
  @blur="onBlur" 
  @focus="onFocus" 
  @input="onInput"
></g-input>
<script>
  export defalut{
    methods:{
      onChange($event){
        //得到change的event对象
      },
      onBlur($event){
        //得到blur的event对象
      },
      onFocus($event){
        //得到focus的event对象
      },
      onInput(value){
        //得到Input事件触发时的value值
      }
    }
  }
</script>
```

###  :clipboard: 属性

  - 输入框的属性说明如下：
  
  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | value | 输入框内容 | String |自定义|自定义|
  | placeholder | 输入框占位符 | String |自定义|自定义|
  | error | 显示输入框错误状态 | String / Boolean |true / false| false |
  | disabled | 表示禁用状态 | Boolean |true / false| false |
  | readonly | 表示只读状态 | Boolean |true / false| false |