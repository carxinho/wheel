<template>
  <div>
    <h3>5. 支持 HTML </h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">  
      <g-button @click="onClickButton">支持 html</g-button>    
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
  },
  methods:{
    onClickButton(){
      this.$toast("<strong style='color:red;'>我支持 html 哦</strong>",
      {enablehtml:true})
    }
  }
}

</script>
<style lang="scss" scoped>
</style>

