<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions-wrapper">
      <slot name="actions"></slot>
    </div>
  </div>
</template>
<script>
export default {
  inject: ["eventBus"],
  mounted() {
  }
};
</script>
<style lang="scss" scoped>
$tab-height: 40px;
.tabs-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: $tab-height;
  .actions-wrapper{
    margin-left: auto;
  }
}
</style>
