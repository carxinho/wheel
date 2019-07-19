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
```