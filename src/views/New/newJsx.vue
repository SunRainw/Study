<script>
export default {
  data() {
    return {
      id: 0,
      list: [
        <div>
          <span>第一道题</span>
        </div>,
        <div>
          <section>第二道题</section>
        </div>,
        <div>
          <p>第三道题</p>
        </div>
      ],
      testList: [1, 2, 3]
    };
  },
  methods: {
    next() {
      this.id++;
    },
    prev() {
      this.id--;
    }
  },
  render() {
    return (
      <div>
        <testItem data={this.list[this.id]}>
          {this.testList.map(item => (
            <p>{item}</p>
          ))}
          <div slot="test">{this.testList[this.id]}</div>
        </testItem>
        {this.id <= 0 ? "" : <a-button onClick={this.prev}>上一题</a-button>}
        {this.id >= this.list.length - 1 ? (
          ""
        ) : (
          <a-button onClick={this.next}>下一题</a-button>
        )}
      </div>
    );
  }
};
</script>

<style>
</style>