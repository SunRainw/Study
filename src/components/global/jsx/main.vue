<script>
export default {
  name: "simple-jsx",
  render(h) {
    return h("h" + this.level, this.$slots.default);
  },
  props: ["level"]
};
</script>

<style>
</style>