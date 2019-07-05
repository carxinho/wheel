<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
  inject: ["eventBus"],
  data(){
    return {
      active: false
    }
  },
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
      this.active = name ===this.name
    });
  },
  computed:{
    classes(){
      return {
        active : this.active
      }
    }
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
    flex-shrink: 0;
    padding: 0 2em;
}
</style>
