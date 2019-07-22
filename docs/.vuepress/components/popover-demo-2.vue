<template>
  <div style="padding-top: 16px;">
    <h3>2.悬浮层弹出位置</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
      <g-popover position="left">
        <g-button>被点击后在左方弹出</g-button>
        <template slot="content">
        弹出内容
        </template>
      </g-popover>
      <g-popover>
        <g-button>被点击后在上方弹出</g-button>
        <template slot="content">
        弹出内容
        </template>
      </g-popover>
      <g-popover trigger="hover" position="bottom">
        <g-button>悬浮后在下方弹出</g-button>
        <template slot="content">
        弹出内容
        </template>
      </g-popover>
      <g-popover trigger="hover" position="right">
        <g-button>悬浮后在右方弹出</g-button>
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