<template>
  <div style="padding-top: 16px;">
    <h3>2.错位网格</h3>
    <p>
      <strong>预览</strong>
    </p>
  <div class="demo">
    <g-row>
      <g-col span="4" offset="6">col-4</g-col>
      <g-col span="10" offset="4">col-10</g-col>
    </g-row>
    <g-row>
      <g-col span="6" >col-6</g-col>
      <g-col span="8" offset="4">col-8</g-col>
    </g-row>
  <g-row>
    <g-col span="4" offset="3">col-4</g-col>
    <g-col span="10" offset="7">col-10</g-col>
  </g-row>
  </div>
    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
import Col from "../../../src/col";
import Row from "../../../src/row";
export default {
  components: {
    "g-col": Col,
    "g-row": Row
  }
};
</script>
<style lang="scss" scoped>
*{box-sizing: border-box;}
.demo {
  box-shadow: 0 0 46px 0px rgba(0, 0, 0, 0.1);
  .col {
  border: 1px solid #d0e6e0;
  border-radius: 4px;
  background-color: #92beb3;
  }
}
</style>
