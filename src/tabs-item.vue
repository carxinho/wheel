<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>
<script>
export default {
  inject: ["eventBus"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    name: {
      type: Number | String,
      required: true
    }
  },
  created() {
    this.eventBus.$on("selected.sync", (name) => {
      console.log(name);
    });
  },
  methods: {
    xxx() {
      this.eventBus.$emit("selected.sync", this.name);
    }
  }
};
</script>
<style lang="scss" scoped>
.tabs-item {
    flex: 1;
}
</style>
