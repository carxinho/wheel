<template>
  <div style="padding-top: 16px;">
    <h3>2.带图标的按钮</h3>
    <p>
      <strong>预览</strong>
    </p>
    <g-button icon="settings">设置</g-button>
    <g-button icon="error">错误</g-button>
    <g-button icon="download">下载</g-button>
    <g-button icon="thumbs-up">赞</g-button>
    <g-button icon="info">info</g-button>
    <g-button icon="left">left</g-button>
    <g-button icon="right" icon-position="right">right</g-button>
    <g-button icon="down">down</g-button>
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