<template>
  <div class="van-input" :class="{'van-input--suffix': showSuffix}">
    <input
      class="van-input__inner"
      :class="{'is-disabled': disabled}"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text':'password'): type"
      :disabled="disabled"
      :value="value"
      @input="handleInput"
    >
    <span class="van-input__suffix" v-if="showSuffix">
      <i v-if="clearable && this.value"
        class="van-input__icon van-icon-circle-close van-input__clear"
        @click="clear"
      ></i>
      <i v-if="showPassword"
        class="van-input__icon van-icon-view van-input__clear"
        @click="handlePasswordVisible"
        :class="{'van-icon-view-active':passwordVisible}"
      ></i>
    </span>
  </div>
</template>

<script>
export default {
  name: 'VanInput',
  data () {
    return {
      passwordVisible: false
    }
  },
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: [String, Number],
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    showSuffix () {
      return this.clearable || this.showPassword
    }
  },
  methods: {
    handleInput (e) {
      this.$emit('input', e.target.value)
    },
    clear () {
      // console.log('123')
      this.$emit('input', '')
    },
    handlePasswordVisible () {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style lang="scss">
.van-input {
  width: 180px;
  position: relative;
  font-size: 14px;
  display: inline-block;
  .van-input__inner {
    cursor: pointer;
    -webkit-appearance: none;
    background-color: #fff;
    background-image: none;
    border-radius: 4px;
    border: 1px solid #dcdfe6;
    box-sizing: border-box;
    color: #000;
    display: inline-block;
    font-size: inherit;
    height: 40px;
    line-height: 40px;
    outline: none;
    padding: 0 15px;
    transition: border-color .2s cubic-bezier(.645,.045,.355,1);
    width: 100%;

    &:focus {
      outline: none;
      border-color: #409eff;
    }
    &.is-disabled {
      background-color: #f5f7fa;
      border-color: #e4e7ed;
      color: #c0c4cc;
      cursor: not-allowed;
    }
  }

}

.van-input--suffix {
  .van-input__inner {
    padding-right: 30px;
  }
  .van-input__suffix {
    position: absolute;
    height: 100%;
    right: 10px;
    top: 0;
    line-height: 40px;
    text-align: center;
    color: #c0c4cc;
    transition: all .3s;
    z-index: 900;
    i {
      color: #c0c4cc;
      font-size: 14px;
      cursor: pointer;
      transition: color .2s cubic-bezier(.645,.045,.355,1);
    }
    .van-icon-view-active{
      color: rgb(18, 211, 236);
    }
  }
}

</style>
