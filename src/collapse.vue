<template>
<div class="collapse">
  <slot></slot>
</div>
</template>
<script>
import Vue from 'vue'
export default {
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapse{
    border:1px solid $border-color;
    border-radius: $border-radius;
    border-bottom: 0px;
  }
  
</style>
