<template>
    <div class="col" :class="[span && `col-${span}`, offset && `offset-${offset}`]" :style="{paddingLeft:gutter/2+'px',paddingRight:gutter/2+'px'}">
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    }
  },
  data(){
    return {
      gutter: 0
    }
  }
};
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
  $class-prefix: offset-;
  @for $n from 1 through $grid-columns {
    &.#{$class-prefix}#{$n} {
      margin-left: percentage($n / $grid-columns);
    }
  }
}
</style>
