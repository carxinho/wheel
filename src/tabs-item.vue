<template>
    <div class="tabs-item" @click="onClick" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name:'WheelTabsItem',
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
    this.eventBus.$on('update:selected', (name) => {
      this.active = name === this.name;
    })
  },
  computed:{
    classes(){
      return {
        active : this.active,
        disabled: this.disabled
      }
    }
  },
  methods: {
    onClick() {
      if(this.disabled){ return }
      this.eventBus.$emit("update:selected", this.name, this);
    }
  }
};
</script>
<style lang="scss" scoped>
$blue: blue;
$disabled-color: grey;
.tabs-item {
    flex-shrink: 0;
    padding: 0 2em;
    cursor:pointer;
    height: 100%;
    display: flex;
    align-items: center;
    cursor: pointer;
    &.active{
      color: $blue;
      font-weight: bold;
    }
    &.disabled{
      color: $disabled-color;
      cursor: not-allowed;
    }
}
</style>
