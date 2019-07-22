---
title: Toast - 提示框 
---

# Toast - 提示框

### :books: 简述
Toast组件的通过Vue的插件实现了在Vue.prototype中添加了全局方法$toast,在引入```Vue.use(plugin)```后即可用$toast方法。

### :chestnut: 举例  
<ClientOnly>
  <toast-demo-1></toast-demo-1>
</ClientOnly>

```vue
  <g-button @click="$toast('我是会自动关闭的 toast ')">点我</g-button>    
```

<ClientOnly>
  <toast-demo-2></toast-demo-2>
</ClientOnly>

```vue
  <g-button @click="$toast('我是不会自动关闭的 toast ',{autoClose:false})">不会自动</g-button>    
  <g-button @click="$toast('我是可以设置默认自动关闭时间的 toast ',{autoCloseDelay:2})自定义设置默认关闭时间</g-button> 
```

<ClientOnly>
  <toast-demo-3></toast-demo-3>
</ClientOnly>

```vue
  <g-button @click="$toast('点击弹出提示')">上方弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'middle'})">中间弹出</g-button>
  <g-button @click="$toast('点击弹出提示', {position:'bottom'})">下方弹出</g-button>
```

<ClientOnly>
  <toast-demo-4></toast-demo-4>
</ClientOnly>

```vue
  <g-button @click="$toast('我没有 closeButton 哦', {closeButton:false})">我没closeButton 哦</g-button>    
  <g-button @click="$toast('我的 closeButton 内容是自定义的哦', {closeButton:{text:'我变了'}})">自定义 closeButton 内容哦</g-button>    
```

<ClientOnly>
  <toast-demo-5></toast-demo-5>
</ClientOnly>

```vue
<g-button @click="onClickButton">支持 html</g-button>
<script>
  methods:{
    onClickButton(){
      this.$toast("<strong style='color:red;'>我支持 html 哦</strong>",
      {enablehtml:true})
    }
  }
</script>
```
 ###  :clipboard: 属性
$toast接口使用方法： `$toast(message,props)`
- message
  - type类型: `String` 
  - 说明: 弹出框toast的自定义文字信息

- props
  - type类型: `Object`
  - 说明： 弹出框toast的自定义属性及方法

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | autoClose | 选择是否自动关闭 | Boolean | true / false | false |
  | autoCloseDelay | 可自定义设置自动关闭延迟时间 | String | 自定义 | 5 |
  | position | 描述toast弹出方位 | top / middle / botttom | String | top |
  | closeButton | 选择有无 closeButton 及其内容 | Object | 自定义 | 有 closeButton，其内容为 Close |
  | enableHtml | toast是否支持HTML片段 | Boolean | true / false | false |
