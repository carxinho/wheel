<template>
  <div style="padding-top: 16px;">
    <h3>3.间隙网格</h3>
    <p>
      <strong>预览</strong>
    </p>
  
    <div class="demo">
      <g-row gutter="20">
        <g-col span="6" >
          <div class="content">col-6</div>
        </g-col>
        <g-col span="8" >
          <div class="content">col-8</div>
        </g-col>
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
  .content{
    background-color: #92beb3;
    height: 100%;
  }
  .col {
  border: 1px solid #d0e6e0;
  border-radius: 4px;
  
  }
}
</style>
