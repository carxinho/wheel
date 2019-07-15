---
title: Layout - 布局 
---

# Layout - 布局 

### :books: 简述
常见的几种布局

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
