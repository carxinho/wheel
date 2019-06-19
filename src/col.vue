<template>
    <div class="col" :class="colClass" :style="colStyle">
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
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset } = this;
      return [span && `col-${span}`, offset && `offset-${offset}`];
    },
    colStyle() {
      let { gutter } = this;
      return {
        paddingLeft: gutter / 2 + "px",
        paddingRight: gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.col {
  min-height: 100px;
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
