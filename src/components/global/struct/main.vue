<template>
  <div class="container">
    <header @click="getParent">
      <slot name="header"></slot>
    </header>
    <main>
      <!-- 为了让 user 在父级的插槽内容中可用，我们可以将 user 作为 <slot> 元素的一个 attribute 绑定上去： -->
      <slot :user="user">{{user.lastName}}</slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
    <ul>
      {{getanswer}}
      <li v-for="item in bookList" :key="item">
        <slot name="item" :row="item"></slot>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "base-layout",
  inject: ["getanswer"],
  data() {
    return {
      user: {
        firstName: "Jack",
        lastName: "Aboe"
      },
      bookList: [1, 2, 3, 4]
    };
  },
  methods: {
    getParent() {
      // 访问父组件的数据
      console.info(this.$parent.doc);
    }
  }
};
</script>

<style>
</style>