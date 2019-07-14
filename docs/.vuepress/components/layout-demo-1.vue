<template>
  <div style="padding-top: 16px;">
    <h3>1.常见布局（上中下）</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
        <g-layout class="g-layout">
            <g-header class="g-header">Header</g-header>
            <g-content class="g-content">Content</g-content>
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
    export default {
        components: {
            'g-layout': Layout,
            'g-header': Header,
            'g-content': Content,
            'g-footer': Footer
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
        .g-header {
          background: rgb(230, 144, 144);  
          justify-content: center;
          align-items: center;
        }
        .g-content {
          align-items: center;
          justify-content: center;
          background: rgb(238, 228, 228);
        }
        .g-footer {
          justify-content: center;
          align-items: center;
          background: #999;
        }
    }
}
</style>