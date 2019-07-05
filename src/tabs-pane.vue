<template>
  <div class="tabs-pane" :class="classes" v-if="active">
    <slot></slot>
  </div>
</template>
<script>
export default {
  inject: ["eventBus"],
  data() {
    return {
      active: false
    };
  },
  props: {
    name: {
      type: Number | String,
      required: true
    }
  },
  computed:{
    classes(){
      return {
        active : this.active
      }
    }
  },
  created() {
    this.eventBus.$on("selected.sync", name => {
      this.active = name ===this.name
      })
  }
};
</script>
<style lang="scss" scoped>
.tabs-pane {
}
</style>
