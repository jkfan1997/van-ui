<template>
  <label class="van-radio" :class="{'is-checked':label===model}">
    <span class="van-radio-input">
      <span class="van-radio-inner"></span>
      <input type="radio" class="van-radio-original" :value="label" :name="name" v-model="model" />
    </span>
    <span class="van-radio-label">
      <slot></slot>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script>
export default {
  name: "VanRadio",
  props: {
    value: null,
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    name: {
      type: String,
      default: "",
    },
  },
   inject: {
    RadioGroup: {
      default: ''
    }
  },

  computed: {
    model: {
       get () {
        return this.isGroup ? this.RadioGroup.value : this.value
      },
      set (value) {
        // 触发父组件的input事件
        this.isGroup ? this.RadioGroup.$emit('input', value) : this.$emit('input', value)
      }

    },
     isGroup () {
      return !!this.RadioGroup
    }

  },
};
</script>

<style lang="scss">
.van-radio {
  color: #606266;
  font-weight: 500;
  line-height: 1;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  outline: none;
  font-size: 14px;
  margin-right: 30px;
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  .van-radio-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .van-radio-inner {
      border: 1px solid #dcdfe6;
      border-radius: 100%;
      width: 14px;
      height: 14px;
      background-color: #fff;
      position: relative;
      cursor: pointer;
      display: inline-block;
      box-sizing: border-box;
       &:after{
          width: 4px;
          height: 4px;
          border-radius: 100%;
          background-color: #fff;
          content: "";
          position: absolute;
          left: 50%;
          top: 50%;
          transform: translate(-50%,-50%) scale(0);
          transition: transform .15s ease-in;
        }

    }
    .van-radio-original {
      opacity: 0;
      outline: none;
      position: absolute;
      z-index: -1;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      margin: 0;
    }
  }
  .van-radio-label {
    font-size: 14px;
    padding-left: 10px;
  }
}
.van-radio.is-checked {
  .van-radio-input {
    .van-radio-inner {
      border-color: #409eff;
      background-color: #409eff;
      &:after {
        transform: translate(-50%, -50%) scale(1);
      }
    }
  }
  .van-radio-label {
    color: #409eff;
  }
}
</style>