<template>
  <div>
    <h3>4. 可设置 closeButton 的有无及其内容</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
      <g-button @click="$toast('我没有 closeButton 哦', {closeButton:false})">我没有 closeButton 哦</g-button>    
      <g-button @click="$toast('我的 closeButton 内容是自定义的哦', {closeButton:{text:'我变了'}})">自定义 closeButton 内容哦</g-button>    
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

