<template>
<div class="collapseItem">
  <div class="title" @click="toggle">
    {{title}}
  </div>
  <div class="content" v-if="open">
    <slot></slot>
  </div>
</div>
</template>
<script>
export default {
  props:{
    title:{
      type: String,
      required:true
    },
    name:{
      type: Number,
      required: true
    }
  },
  data() {
    return {
      open:false
    }
  },
  inject:['eventBus'],
  methods:{
    toggle(){
      if(this.open){
        this.eventBus.$emit('update:removeSelected', this.name)
      }else{
        this.eventBus.$emit('update:addSelected', this.name)
      }
    }
  },
  mounted(){
    this.eventBus.$on('update:selected', (names) => {
      console.log('this.name', this.name)
      console.log('names', names)
      if (names.indexOf(this.name) >= 0) {
        this.open = true
      }else{
        this.open = false
      }
    })
  }
}
</script>
<style lang="scss" scoped>
  $border-color: #ddd;
  $border-radius: 4px;
  .collapseItem{
    .title{
      border:1px solid $border-color;
      margin-top: -1px;
      margin-left: -1px;
      margin-right: -1px;
      min-height: 32px;
      display: flex;
      align-items: center;
      padding: 8px;
    }
    &:first-child{
      .title{
        border-top-left-radius: $border-radius;
        border-top-right-radius: $border-radius;
      }
    }
    &:last-child{
      .title:last-child{
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
      }
      .content:last-child{
        border-bottom-left-radius: $border-radius;
        border-bottom-right-radius: $border-radius;
        border-bottom: 1px solid $border-color;
      }
    }
    .content{
      padding: 8px;
    }
  }
</style>