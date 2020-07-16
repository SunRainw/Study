<template>
  <div>
    <jsx :level="1">哈哈</jsx>
    <new-jsx :items="list"></new-jsx>
    <for-jsx></for-jsx>
    <model-jsx :value="newValue" @input="newValue=$event"></model-jsx>
    <p>{{newValue}}</p>
    <slot-jsx :message="1">
      <template v-slot="{text}">{{text}}</template>
    </slot-jsx>
    <scopedSlot-jsx :message="22">
      <!-- <template v-slot="text">{{text.text}}</template> -->
      <!-- <template v-slot:newSlot="text">{{text}}</template> -->
    </scopedSlot-jsx>
  </div>
</template>

<script>
import Vue from "vue";
Vue.component("jsx", {
  render(h) {
    return h("h" + this.level, this.$slots.default);
  },
  props: ["level"]
});
Vue.component("for-jsx", {
  render(h) {
    return h(
      "div",
      // Array.apply(null, { length: 10 }) =>  [undefined,...,undefined]
      // new Array(10)和 Array(10), 只创建了一个长度为10的空数组，map或者forEach时会跳过
      // 还可以使用 Array.from({ length: 10 })  Array.apply(null,  Array(10))  [...Array(10)]  Array(...Array(10))
      Array.apply(null, { length: 10 }).map(() => {
        return h("p", "haha");
      })
    );
  }
});
Vue.component("new-jsx", {
  render(h) {
    if (this.items.length) {
      return h(
        "ul",
        this.items.map(item => h("li", item))
      );
    } else {
      return h("p", "数组为空");
    }
  },
  props: ["items"]
});
Vue.component("model-jsx", {
  render(h) {
    return h("input", {
      domProps: {
        value: this.value
      },
      on: {
        input: e => {
          console.info(this.value);
          this.$emit("input", e.target.value);
        }
      }
    });
  },
  props: ["value"]
});
Vue.component("slot-jsx", {
  props: ["message"],
  render(h) {
    return h("div", [
      this.$scopedSlots.default({
        text: this.message
      })
    ]);
  }
});
Vue.component("scopedSlot-jsx", {
  props: ["message"],
  render(h) {
    return h("div", [
      h("slot-jsx", {
        scopedSlots: {
          default: props => {
            return h("span", props.text);
          },
          newSlot: text => {
            return h("a", text);
          }
        }
      })
    ]);
  }
});
export default {
  data() {
    return {
      list: [1, 2, 3, 4, 5],
      newValue: ""
    };
  }
};
</script>

<style>
</style>