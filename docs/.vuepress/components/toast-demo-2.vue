<template>
  <div>
    <h3>2. 可设置提示框是否自动关闭和延迟关闭时间</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
      <g-button @click="$toast('我是不会自动关闭的 toast ',{autoClose:false})">不会自动关闭</g-button>    
      <g-button @click="$toast('我是可以设置默认自动关闭时间的 toast ',{autoCloseDelay:2})">自定义设置默认关闭时间</g-button>
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

