<template>
  <div v-if="isShow">
    <span @click="close">X</span>
  </div>
</template>

<script>
export default {
  name: "order",
  props: ["visible"],
  data() {
    return {
      isShow: false
    };
  },
  methods: {
    close() {
      this.isShow = false;
      this.$emit("update:visible", false);
    }
  },
  watch: {
    visible: {
      handler(val) {
        this.isShow = val;
      }
    }
  }
};
</script>

<style>
</style>