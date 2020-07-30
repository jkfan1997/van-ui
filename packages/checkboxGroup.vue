<template>
  <div class="van-checkbox-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "VanCheckboxGroup",
  provide() {
    return {
      CheckboxGroup: this,
    };
  },
  props: {
    value: {
      type: Array,
    },
  },
  provid() {
    CheckboxGroup:this
  },
};
</script>
