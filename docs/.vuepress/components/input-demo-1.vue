<template>
  <div style="padding-top: 16px;">
    <h3>1.简单用法</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="example">
      <div>
        <p>普通状态</p>
        <g-input placeholder="请输入内容"></g-input>
      </div>
      <div>

        <p>禁用状态</p>
        <g-input   placeholder="这是disabled状态" disabled></g-input>
      </div>
      <div>
        <p>只读状态</p>
        <g-input placeholder="这是readonly状态" readonly></g-input>
      </div>
      <div>
        <p>错误提醒状态</p>
        <g-input placeholder="错误提示显示" error="我是错误提醒文字"></g-input>
      </div>
    </div> 
    <p>
      <strong>代码</strong>
    </p>  
    </div>  
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

.example {
  display: flex;
  flex-wrap: wrap;
  div{
    flex: 0 0 50%;
  }

}
</style>

