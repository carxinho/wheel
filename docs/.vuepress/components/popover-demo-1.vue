<template>
  <div style="padding-top: 16px;">
    <h3>1.基本用法：点击（默认）或悬浮形式触发</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
      <g-popover>
        <g-button>我是被点击后弹出的</g-button>
        <template slot="content">
        弹出内容
        </template>
      </g-popover>
      <g-popover trigger="hover">
        <g-button>我是悬浮后弹出的</g-button>
        <template slot="content">
        弹出内容
        </template>
      </g-popover>
    </div>
    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
  import Button from '../../../src/button'
  import Popover from '../../../src/popover'
  export default {
    components: {
      'g-button': Button,
      'g-popover': Popover
    },

  }
</script>