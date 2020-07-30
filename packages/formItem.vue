<template>
  <div class="van-form-item">
    <label :style="labelStyle" class="van-form-item-label">{{label}}</label>
    <div class="van-form-item-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
export default {
  name: 'VanFormItem',
  props: {
    label: {
      type: String,
      default: ''
    }
  },
  inject: ['Form'],
  computed: {
    labelStyle () {
      return {
        width: this.Form.labelWidth
      }
    }
  }
}
</script>
 
<style lang="scss" scoped>
  .van-form-item{
    margin-bottom: 25px;
    .van-form-item-label{
      text-align: right;
      vertical-align: middle;
      float: left;
      font-size: 14px;
      color: #606266;
      line-height: 40px;
      padding: 0 12px 0 0;
      box-sizing: border-box;
    }
    .van-form-item-content{
      line-height: 40px;
      position: relative;
      font-size: 14px;
      overflow: hidde;
    }
  }
</style>