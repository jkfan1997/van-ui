<template>
  <div class="van-radio-group">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "VanRadioGroup",
  provide() {
    return {
      RadioGroup: this,
    };
  },
  props: {
    value: null
  },

};
</script>
