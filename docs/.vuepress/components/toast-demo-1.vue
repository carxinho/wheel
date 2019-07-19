<template>
  <div>
    <h3>1. 默认提示框自动关闭</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
      <g-button @click="$toast('我是会自动关闭的 toast ')">点我</g-button>    
    </div>
    <p>
      <strong>代码</strong>
    </p>  
  </div>
</template>
<script>
import Button from '../../../src/button'
import Toast from '../../../src/toast'
import plugin from '../../../src/plugin.js'
import Vue from 'vue'
Vue.use(plugin)
export default {
  components:{
    'g-button':Button
  }
}
</script>
<style lang="scss" scoped>
</style>

