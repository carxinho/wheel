<template>
    <div class="col" :class="colClass" :style="colStyle">
      <slot></slot>
    </div>
</template>
<script>
let validator = (value) => {
  let keys = Object.keys(value);
  return keys.every(key => {
    return ["span", "offset"].includes(key);
  });
};
export default {
  props: {
    span: {
      type: [Number, String]
    },
    offset: {
      type: [Number, String]
    },
    ipad: {
      type: Object,
      validator
    },
    narrowPc: {
      type: Object,
      validator
    },
    pc: {
      type: Object,
      validator
    },
    widePc: {
      type: Object,
      validator
    }
  },
  data() {
    return {
      gutter: 0
    };
  },
  computed: {
    colClass() {
      let { span, offset, ipad, narrowPc, pc, widePc } = this;
      return [
        span && `col-${span}`,
        offset && `offset-${offset}`,
        ...(ipad ? [`col-ipad-${ipad.span}`] : []),
        ...(ipad ? [`offset-ipad-${ipad.offset}`] : []),
        ...(narrowPc ? [`col-narrow-pc-${narrowPc.span}`] : []),
        ...(narrowPc ? [`offset-narrow-pc-${narrowPc.offset}`] : []),
        ...(pc ? [`col-pc-${pc.span}`] : []),
        ...(pc ? [`offset-pc-${pc.offset}`] : []),
        ...(widePc ? [`col-wide-pc-${widePc.span}`] : []),
        ...(widePc ? [`offset-wide-pc-${widePc.offset}`] : [])
      ];
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
  min-height: 30px;
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
  @media (min-width: 577px) {
    $class-prefix: col-ipad-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / $grid-columns);
      }
    }
    $class-prefix: offset-ipad-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        margin-left: percentage($n / $grid-columns);
      }
    }
  }
  @media (min-width: 769px) {
    $class-prefix: col-narrow-pc-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / $grid-columns);
      }
    }
    $class-prefix: offset-narrow-pc-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        margin-left: percentage($n / $grid-columns);
      }
    }
  }
  @media (min-width: 993px) {
    $class-prefix: col-pc-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / $grid-columns);
      }
    }
    $class-prefix: offset-pc-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        margin-left: percentage($n / $grid-columns);
      }
    }
  }
  @media (min-width: 1201px) {
    $class-prefix: col-wide-pc-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        width: percentage($n / $grid-columns);
      }
    }
    $class-prefix: offset-wide-pc-;
    @for $n from 1 through $grid-columns {
      &.#{$class-prefix}#{$n} {
        margin-left: percentage($n / $grid-columns);
      }
    }
  }
}
</style>
