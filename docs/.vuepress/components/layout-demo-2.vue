<template>
  <div style="padding-top: 16px;">
    <h3>2.Sider 与 Content 平齐</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
        <g-layout>
            <g-header class="g-header">Header</g-header>
            <g-layout class="g-layout">
              <g-sider class="g-sider">Sider</g-sider>
              <g-content class="g-content">Content</g-content>
            </g-layout>
            <g-footer class="g-footer">Footer</g-footer>
        </g-layout>
    </div>
    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
    import Layout from '../../../src/layout'
    import Header from '../../../src/header'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
    import Sider from '../../../src/sider'
    export default {
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-content': Content,
            'g-footer': Footer,
            'g-sider': Sider
        },
    }
</script>
<style lang="scss" scoped>
.demo {
  margin: 16px 0;
  .g-layout {
    text-align: center;
    font-size: 14px;
    font-weight: 500;
    .g-content {
    background: rgb(238, 228, 228);
    }
    .g-sider{
      background: rgb(216, 187, 159);
    }
  }
  .g-header {
    display: inline-flex;
    background: rgb(230, 144, 144);  
    justify-content: center;
    align-items: center;
  }
  .g-footer {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: #999;
  }     
}
</style>