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
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(value) {
        return ["horizontal", "vertical"].indexOf(value) >= 0;
      }
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
  mounted () {
    this.eventBus.$emit('update:selected', this.selected)
    this.$children.forEach((vm) => {
      if (vm.$options.name === 'WheelTabsHead') {
        vm.$children.forEach((childVm) => {
          if (childVm.$options.name === 'WheelTabsItem'
            && childVm.name === this.selected) {
            console.log('line', this.selected, childVm)
            this.eventBus.$emit('update:selected', this.selected, childVm)
          }
        })
      }
    })
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
