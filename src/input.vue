<template>
    <div class="wrapper">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly" :class="{error}"
         @change="$emit('change', $event.target.value)"
         @input="$emit('input', $event.target.value)"
         @focus="$emit('focus', $event.target.value)"
         @blur="$emit('blur', $event.target.value)">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
import Icon from "./icon";

export default {
  components: { Icon },
  props: {
    value: {
      type: String
    },
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    error: {
      type: String
    }
  }
};
</script>
<style lang="scss" scoped>
$height: 32px;
$border-color: #999;
$border-color-hover: #666;
$border-radius: 4px;
$font-size: 12px;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$red: #f1453d;
.wrapper {
  display: inline-flex;
  align-items: center;
  :not(:last-child){
      margin-right: 0.5em;
  }
  input {
    height: $height;
    border: 1px solid $border-color;
    border-radius: $border-radius;
    padding: 0 8px;
    font-size: $font-size;
    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &:disabled,
    &:read-only {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
    &.error {
      border-color: $red;
    }
  }
  .icon-error {
    fill: $red;
  }
  .iconMessage {
    color: $red;
  }
}
</style>
