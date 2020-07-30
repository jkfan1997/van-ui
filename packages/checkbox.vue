<template>
  <label class="van-checkbox" :class="{'is-checked':isChecked}">
    <span class="van-checkbox-input">
      <span class="van-checkbox-inner"></span>
      <input
        type="checkbox"
        class="van-checkbox-original"
        :name="name"
        v-model="model"
        :value="label"
      />
    </span>
    <span class="van-checkbox-label">
      <slot></slot>
     <template v-if="!$slots.default">
     {{label}}
      </template>

    </span>
  </label>
</template>

<script>
export default {
  name: "vanCheckbox",
  inject: {
    CheckboxGroup: {
      default: "",
    },
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.CheckboxGroup.value : this.value;
      },
      set(value) {
        this.isGroup
          ? this.CheckboxGroup.$emit("input", value)
          : this.$emit("input", value);
        
      },
    },
    isGroup() {
      return !!this.CheckboxGroup;
    },
    isChecked() {
      // 如果十group包裹，判断label是否在model中
      // 如果没有group包裹,直接使用model
      return this.isGroup ? this.model.includes(this.label) : this.model;
    },
  },
  props: {
    value: {
      type: Boolean,
      default: false,
    },

    label: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      defualt: "",
    },
  },
};
</script>

<style lang="scss">
.van-checkbox {
  color: #606266;
  font-weight: 500;
  font-size: 14px;
  position: relative;
  cursor: pointer;
  display: inline-block;
  white-space: nowrap;
  user-select: none;
  margin-right: 30px;
  .van-checkbox-input {
    white-space: nowrap;
    cursor: pointer;
    outline: none;
    display: inline-block;
    line-height: 1;
    position: relative;
    vertical-align: middle;
    .van-checkbox-inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      border-radius: 2px;
      box-sizing: border-box;
      width: 14px;
      height: 14px;
      background-color: #fff;
      z-index: 1;
      transition: border-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46),
        background-color 0.25s cubic-bezier(0.71, -0.46, 0.29, 1.46);
      &:after {
        box-sizing: content-box;
        content: "";
        border: 1px solid #fff;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        transform: rotate(45deg) ;
        width: 3px;
        transition: transform 0.15s ease-in 0.05s;
        transform-origin: center;
      }
    }
    .van-checkbox-original {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
  }
  .van-checkbox-label {
    display: inline-block;
    padding-left: 10px;
    line-height: 19px;
    font-size: 14px;
  }
}
// 选中的样式
.van-checkbox.is-checked {
  .van-checkbox-input {
    .van-checkbox-inner {
      background-color: #409eff;
      border-color: #409eff;
    }
    &:after {
      transform: rotate(45deg) ;
    }
  }
  .van-checkbox-label {
    color: #409eff;
  }
}
</style>
