<template>
  <div style="padding-top: 16px;">
    <h3>3.按钮组合</h3>
    <p>
      <strong>预览</strong>
    </p>
    <g-button-group>
      <g-button icon="left">上一页</g-button>
      <g-button icon="right" icon-position="right">下一页</g-button>
    </g-button-group>
    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
  import ButtonGroup from '../../../src/button-group'
  import Button from '../../../src/button'
  export default {
    components: {
      'g-button': Button,
      'g-button-group': ButtonGroup
    }
  }
</script>