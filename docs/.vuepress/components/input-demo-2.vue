<template>
  <div>
    <h3>2. 支持Input事件</h3>
    <p>
      <strong>预览</strong>
    </p>
    <p>Input支持的事件触发包括：change、blur、focus、input</p>
    <div>
      <g-input placeholder="支持事件触发" ></g-input>
    </div>
    <p>
      <strong>代码</strong>
    </p>  
  </div>
</template>
<script>
import Input from "../../../src/input";
import Button from "../../../src/button";
export default {
  components: {
    "g-input": Input,
    "g-button": Button
  }
};
</script>
<style lang="scss" scoped>
</style>

