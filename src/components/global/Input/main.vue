<template>
  <div>
    <!-- this.$attrs 是一个属性，其包含了父作用域中不作为 prop 被识别 (且获取) 的特性绑定 (class 和 style 除外)。这些未识别的属性可以通过 v-bind="$attrs" 传入内部组件。未识别的事件可通过v-on="$listeners"传入。 -->
    <input
      type="text"
      v-bind="$attrs"
      v-on="$listeners"
      :flag="flag"
      :tag="tag"
      @input="$emit('input',$event.target.value)"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  inheritAttrs: false,
  props: {
    title: {
      type: String,
      default: ""
    },
    tag: { type: String, default: "" },
    flag: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      firstName: ""
    };
  }
};
</script>

<style>
</style>