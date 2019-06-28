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
  }
};
</script>
<style lang="scss" scoped>
.tabs {
}
</style>
