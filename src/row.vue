<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
export default {
  props: {
    gutter: {
      type: [Number, String]
    }
  },
  mounted() {
    this.$children.forEach(element => {
      element.gutter = this.gutter;
    });
  },
  computed: {
    rowStyle() {
      let {gutter} = this
      return {
        marginLeft: - gutter / 2 + "px",
        marginRight: - gutter / 2 + "px"
      };
    }
  }
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
}
</style>