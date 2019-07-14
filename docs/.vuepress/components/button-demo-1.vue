<template>
  <div style="padding-top: 16px;">
    <h3>1.简单用法</h3>
    <p>
      <strong>预览</strong>
    </p>
    <g-button>默认按钮</g-button>
    <g-button icon="settings">设置</g-button>
    <g-button :loading="true">加载中</g-button>
    <g-button disabled>禁用</g-button>
    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button
    },

  }
</script>