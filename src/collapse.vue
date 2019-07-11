<template>
<div class="collapse">
  <slot></slot>
</div>
</template>
<script>
import Vue from 'vue'
export default {
  props:{
    single:{
      type: Boolean,
      default: false
    },
    selected:{
      type: Array
    }
  },
  data(){
    return {
      eventBus: new Vue()
    }
  },
  provide(){
    return {
      eventBus: this.eventBus
    }
  },
  mounted(){
    this.eventBus.$emit('update:selected', this.selected)
      this.eventBus.$on('update:addSelected', (name) => {
        let selectedTabs = this.selected
        if (this.single) {
          selectedTabs = [name]
        } else {
          selectedTabs.push(name)
        }
        this.eventBus.$emit('update:selected', selectedTabs)
        this.$emit('update:selected', selectedTabs)
      })
      this.eventBus.$on('update:removeSelected', (name) => {
        let selectedTabs = this.selected
        let index = selectedTabs.indexOf(name)
        selectedTabs.splice(index, 1)
        this.eventBus.$emit('update:selected', selectedTabs)
        this.$emit('update:selected', selectedTabs)
    })
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
