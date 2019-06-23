<template>
    <div class="toast">
        <slot></slot>
    </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
.toast {
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  font-size: $font-size;
  color: white;
  line-height: 1.8;
  display: inline-flex;
  align-items: center;
  padding: 0 16px;
  height: $toast-height;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
}
</style>
