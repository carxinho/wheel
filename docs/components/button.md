---
title: Button - 按钮 
---

# Button - 按钮

### :books: 使用方法

引入需要的组件并声明(注意更新文件所在路径)：
```vue
import ButtonGroup from 'path/button-group'
import Button from 'path/button'
export default {
  components: {
    'g-button': Button,
    'g-button-group': ButtonGroup
  }
}

```

### :chestnut: 举例  
<ClientOnly>
  <button-demo-1></button-demo-1>
</ClientOnly>

```vue
  <g-button>默认按钮</g-button>
  <g-button icon="settings">设置</g-button>
  <g-button :loading="true">加载中</g-button>
  <g-button disabled>禁用</g-button>
```

<ClientOnly>
  <button-demo-2></button-demo-2>
</ClientOnly>

```vue
  <g-button icon="settings">设置</g-button>
  <g-button icon="error">错误</g-button>
  <g-button icon="download">下载</g-button>
  <g-button icon="thumbs-up">赞</g-button>
  <g-button icon="info">info</g-button>
  <g-button icon="left">left</g-button>
  <g-button icon="right" icon-position="right">right</g-button>
  <g-button icon="down">down</g-button>
```

<ClientOnly>
  <button-demo-3></button-demo-3>
</ClientOnly>

```vue
  <g-button-group>
    <g-button icon="left">上一页</g-button>
    <g-button icon="right" icon-position="right">下一页</g-button>
  </g-button-group>
```
###  :clipboard: 属性
  通过设置 Button 的属性来控制按钮样式

  - 按钮的属性说明如下：

  | 参数 | 说明 | 类型 | 可选值 | 默认值 |
  | ---- |:----:|:----:|:----:|:----:|
  | icon | 选择是否使用图标 | String | 见本章第二小节|无|
  | icon-position | 选择图标显示位置 | String | left / right | left |
  | loading | 是否显示加载(loading状态与icon不可共存) | Boolean | true / false| false |