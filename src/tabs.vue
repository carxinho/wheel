<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
import Vue from "Vue";
export default {
  props: {
    selected: {
      type: String,
      required: false
    }
  },
  data() {
    return {
      eventBus: new Vue()
    };
  },
  provide() {
    return {
      eventBus: this.eventBus
    };
  },
  methods: {
    checkChildren(){
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
       }
    },
    selectTab(){
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'WheelTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'WheelTabsItem'
            && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected,  childVm)
          }
        })
      }
    })
    }
  },
  mounted () {
    this.eventBus.$emit('update:selected', this.selected)
    this.checkChildren();
    this.selectTab();
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
