<template>
  <div style="padding-top: 16px;">
    <h3>3.Sider 单独一列作为侧边栏</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
        <g-layout>
            <g-sider class="g-sider">Sider</g-sider>
            <g-layout class="g-layout">
              <g-header class="g-header">Header</g-header>
              <g-content class="g-content">Content</g-content>
              <g-footer class="g-footer">Footer</g-footer>
            </g-layout>
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
  }
  .g-header {
    background: rgb(230, 144, 144);  
    justify-content: center;
    align-items: center;
  }
  .g-footer {
    justify-content: center;
    align-items: center;
    background: #999;
  }  
  .g-sider{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    background: rgb(216, 187, 159);
  }   
}
</style>