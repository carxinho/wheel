<template>
  <div>
    <h3>3. 可自定义设置弹出位置</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
      <g-button @click="$toast('我是默认上方弹出的 toast ')">上方弹出</g-button>    
      <g-button @click="$toast('我是默认中间弹出的 toast ', {position:'middle'})">中间弹出</g-button>    
      <g-button @click="$toast('我是默认下方弹出的 toast ', {position:'bottom'})">下方弹出</g-button>    
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

