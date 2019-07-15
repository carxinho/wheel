<template>
  <div style="padding-top: 16px;">
    <h3>1.常见用法</h3>
    <p>
      <strong>预览</strong>
    </p>
  <div class="demo">
    <g-tabs selected="first-tab">
      <g-tabs-head>
        <g-tabs-item name="first-tab">Tab 1</g-tabs-item>
        <g-tabs-item name="2">Tab 2</g-tabs-item>
        <g-tabs-item name="third-tab">Tab 3</g-tabs-item>
      </g-tabs-head>
      <g-tabs-body>
        <g-tabs-pane name="first-tab">content of Tab 1</g-tabs-pane>
        <g-tabs-pane name="2">content of Tab 2</g-tabs-pane>
        <g-tabs-pane name="third-tab">content of Tab 3</g-tabs-pane>
      </g-tabs-body>
    </g-tabs>
  </div>  
    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
import Tabs from '../../../src/tabs'
import TabsHead from '../../../src/tabs-head'
import TabsBody from '../../../src/tabs-body'
import TabsItem from '../../../src/tabs-item'
import TabsPane from '../../../src/tabs-pane'
export default {
  components:{
    'g-tabs':Tabs,
    'g-tabs-head':TabsHead,
    'g-tabs-item':TabsItem,
    'g-tabs-body':TabsBody,
    'g-tabs-pane':TabsPane,
  }
};
</script>
<style lang="scss" scoped>
.demo{
  box-shadow: 0 0 46px 0px rgba(0, 0, 0, 0.1);
  padding: 16px;
  padding-bottom: 0;
  border-radius: 6px;
}
</style>