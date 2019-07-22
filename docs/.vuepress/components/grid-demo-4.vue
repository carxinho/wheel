<template>
  <div style="padding-top: 16px;">
    <h3>4.响应式网格</h3>
    <p>
      <strong>预览</strong>
    </p>
  <div class="demo">
    <g-row>
      <g-col offset="5" span="6" :ipad="{offset:2,span:12}" :narrow-pc="{offset:8,span:2}"
        :pc="{offset:6,span:6}" :wide-pc="{offset:7,span:7}">
      col-6
      </g-col>
      <g-col offset="5" span="8" :ipad="{offset:8,span:2}" :narrow-pc="{offset:10,span:2}"
        :pc="{offset:6,span:6}":wide-pc="{offset:2,span:7}">
        col-8
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
  .col {
  border: 1px solid #d0e6e0;
  border-radius: 4px;
  background-color: #92beb3;
  }
}
</style>
