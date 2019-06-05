<template>
    <div class="col" :class="`col-${span}`">
        <slot></slot>
    </div>
</template>
<script>
export default {
    props:{
        span: {
            type: [Number, String]
        }
    }
}
</script>

<style lang="scss" scoped>
.col {
  height: 100px;
  background: gray;
  border: 1px solid red;
  width: 50%;
  $grid-columns: 24;
  $class-prefix: col-;
  @for $n from 1 through $grid-columns {
    &.#{$class-prefix}#{$n} {
      width: percentage($n / $grid-columns);
    }
  }
}
</style>
