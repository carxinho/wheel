---
title: Layout - 布局 
---

# Layout - 布局 

### :books: 使用方法

引入需要的组件并声明(注意更新文件所在路径)：
```vue
  import Layout from 'path/layout'
  import Header from 'path/header'
  import Content from 'path/content'
  import Footer from 'path/footer'
  import Sider from 'path/sider'
  export default {
    components: {
      'g-layout': Layout,
      'g-header': Header,
      'g-content': Content,
      'g-footer': Footer,
      'g-sider': Sider
    },
  }

```

### :chestnut: 举例  
<ClientOnly>
  <layout-demo-1></layout-demo-1>
</ClientOnly>

```vue
<g-layout>
  <g-header>Header</g-header>
  <g-content>Content</g-content>
  <g-footer>Footer</g-footer>
</g-layout>
```

<ClientOnly>
  <layout-demo-2></layout-demo-2>
</ClientOnly>

```vue
<g-layout>
  <g-header>Header</g-header>
  <g-layout>
    <g-sider>Sider</g-sider>
    <g-content>Content</g-content>
  </g-layout>
  <g-footer>Footer</g-footer>
</g-layout>

```

<ClientOnly>
  <layout-demo-3></layout-demo-3>
</ClientOnly>

```vue
<g-layout>
  <g-sider>Sider</g-sider>
  <g-layout>
    <g-header>Header</g-header>
    <g-content>Content</g-content>
    <g-footer>Footer</g-footer>
  </g-layout>
</g-layout>
```
