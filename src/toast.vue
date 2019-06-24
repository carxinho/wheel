<template>
    <div class="toast" ref="toast">
        <div class="message">
            <slot v-if="!enablehtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="line" ref="line"></div>
        <span class="close" v-if="closeButton" @click="onClickClose">    
            {{closeButton.text}}    
        </span>
    </div>
</template>
<script>
export default {
  props: {
    autoClose: {
      type: Boolean,
      default: true
    },
    autoCloseDelay: {
      type: Number,
      default: 5
    },
    closeButton: {
      type: Object,
      default: () => {
        return {
          text: "Close",
          callback: undefined
        };
      }
    },
    enablehtml: {
      type: Boolean,
      default: false
    }
  },

  mounted() {
    this.updateStyles();
    this.execAutoClose();
  },
  methods: {
    execAutoClose() {
      if (this.autoClose) {
        setTimeout(() => {
          this.close();
        }, this.autoCloseDelay * 1000);
      }
    },
    updateStyles() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      this.$el.remove();
      this.$destroy();
    },
    onClickClose() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
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
  min-height: $toast-min-height;
  background: $toast-bg;
  border-radius: 4px;
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  .message{
      padding:8px 0;
  }
  .close {
    padding-left: 16px;
    flex-shrink: 0;
  }
  .line {
    margin-left: 16px;
    border: 1px solid #666;
    height: 100%;
  }
}
</style>
