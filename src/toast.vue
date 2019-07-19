<template>
    <div class="toast" ref="toast" :class="toastClasses">
        <div class="message">
            <slot v-if="!enablehtml"></slot>
            <div v-else v-html="$slots.default[0]"></div>
        </div>
        <div class="buttonWrapper" v-if="closeButton">
          <div class="line" ref="line"></div>
          <span class="close" @click="onClickClose">    
            {{closeButton.text}}    
          </span>
        </div>

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
    },
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "middle"].indexOf(value) >= 0;
      }
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
  },
  computed: {
    toastClasses() {
      return [`position-${this.position}`];
    }
  }
};
</script>
<style lang="scss" scoped>
$font-size: 14px;
$toast-min-height: 40px;
$toast-bg: rgba(0, 0, 0, 0.75);
$animation-duration: 300ms;
@keyframes fade-in {
    0% {opacity: 0;}
    100% {opacity: 1;}
}
.toast {
  animation: fade-in $animation-duration;
  position: fixed;
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
  z-index:30;
  &.position-top {
    top: 0;
  }
  &.position-bottom {
    bottom: 0;
  }
  &.position-middle {
    top: 50%;
    transform: translate(-50%, -50%);
  }
  .message {
    padding: 8px 0;
  }
  .buttonWrapper{
    display: inline-flex;
    justify-content: center;
    align-items: center;
    .line {
      margin-left: 16px;
      margin-right: 16px;
      border: 1px solid #666;
      height: 100%;
    }
  }
}
</style>
