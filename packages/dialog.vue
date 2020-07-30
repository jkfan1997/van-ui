<template>
  <transition  name="dialog-fade" >
    <div class="van-dialog-wrapper" v-show='visible' @click.self='handleClose'>
    <div class="van-dialog" :style="{width:width ,marginTop:top}">
      <div class="van-dialog-header" >
        <slot name="title">
          <span class="van-dialog-title">{{title}}</span>
        </slot> 
        <button class="van-dialog-headerbtn" @click='handleClose'>
          <i class="van-icon-close"></i>
        </button>
      </div>
      <div class="van-dialog-body">
        <slot>
          <span>这是一个消息</span>
        </slot>
      </div>
      <div class="van-dialog-footer" v-if="$slots.footer">
        <slot name="footer">
         
        </slot>
      </div>
    </div>
  </div>
  </transition>
</template>

<script>
export default {
  name: "VanDialog",
  props:{
    title:{
      type:String,
      default:'提示'
    },
    width:{
      type:String,
      default:'50%'
    },
    top:{
      type:String,
      default:"15vh"
    },
    visible:{
      type:Boolean,
      default:false
    }

  },
  methods:{
    handleClose(){
      this.$emit('update:visible',false)
    }
  }
};
</script>

<style lang="scss" >
.van-dialog-wrapper {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: auto;
  margin: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.5);
  .van-dialog {
    position: relative;
    margin: 15vh auto 50px;
    background: #fff;
    border-radius: 2px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
    box-sizing: border-box;
    width: 30%;
    &-header {
      padding: 20px 20px 10px;
      .van-dialog-title {
        line-height: 24px;
        font-size: 18px;
        color: #303133;
      }
      .van-dialog-headerbtn {
        position: absolute;
        top: 20px;
        right: 20px;
        padding: 0;
        background: transparent;
        border: none;
        outline: none;
        cursor: pointer;
        font-size: 16px;
        .van-icon-close {
          color: #909399;
        }
      }
    }
    &-body {
      padding: 30px 20px;
      color: #606266;
      font-size: 14px;
      word-break: break-all;
    }
    &-footer {
      padding: 10px 20px 20px;
      text-align: right;
      box-sizing: border-box;
      .van-button:first-child {
        margin-right: 20px;
      }
    }
  }
}
.dialog-fade-enter-active {
  animation: dialog-fade-in 0.4s;
}
.dialog-fade-leave-active {
  animation: dialog-fade-out 0.4s;
}
@keyframes dialog-fade-in {
  0% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
}
@keyframes dialog-fade-out {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
  100% {
    transform: translate3d(0, -20px, 0);
    opacity: 0;
  }
}
</style>