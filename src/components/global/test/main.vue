<script>
export default {
  name: "testItem",
  functional: true,
  render(h, context) {
    return (
      <a-card title="考试题">
        {context.props.data}
        {context.children}
        {context.slots.test}
      </a-card>
    );
  }
};
</script>

<style>
</style>