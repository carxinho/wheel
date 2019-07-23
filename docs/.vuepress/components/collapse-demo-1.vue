<template>
  <div style="padding-top: 16px;">
    <h3>1.默认只能显示单个面板</h3>
    <p>
      <strong>预览</strong>
    </p>
    <div class="demo">
      <g-collapse :selected.sync="selectedTab" single>
        <g-collapse-item title="标题一" :name="1">
          <div>内容一</div>
        </g-collapse-item>
        <g-collapse-item title="标题二" :name="2">
          <div>内容二</div>
        </g-collapse-item>
        <g-collapse-item title="标题三" :name="3">
          <div>内容三</div>
        </g-collapse-item>
      </g-collapse>
    </div>
    <p>
      <strong>代码</strong>
    </p>
  </div>
</template>
<script>
import Collapse from '../../../src/collapse'
import CollapseItem from '../../../src/collapse-item'
export default {
  components: {
    'g-collapse': Collapse,
    'g-collapse-item':CollapseItem
  },
  data(){
    return{
      selectedTab: [1] 
    }
  }
};
</script>