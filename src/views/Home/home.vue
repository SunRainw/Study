<template>
  <div>
    <!-- 组件传值 -->
    <div v-show="false">
      <Input @input="getValue" v-bind.sync="doc" />
      <base-layout>
        <template v-slot:header>
          <h1>具名插槽的使用</h1>
        </template>

        <!-- 绑定在 <slot> 元素上的 attribute 被称为插槽 prop。现在在父级作用域中，我们可以使用带值的 v-slot 来定义我们提供的插槽 prop 的名字： -->
        <template v-slot:default="slotProps">{{slotProps.user.firstName}}</template>
        <!-- 任何没有被包裹在带有 v-slot 的 <template> 或 带有v-slot:default 中的内容都会被视为默认插槽的内容。 -->
        <template v-slot:footer>
          <strong>我是底部</strong>
        </template>
      </base-layout>
      <!-- v-slot:header 可以被重写为 #header -->
      <base-layout>
        <template #header>我是缩写</template>
      </base-layout>
      <!-- 当被提供的内容只有默认插槽时，组件的标签才可以被当作插槽的模板来使用。这样我们就可以把 v-slot 直接用在组件上： -->
      <base-layout v-slot="slotProps">
        <h1>作用域插槽</h1>
        {{ slotProps.user.firstName }}
      </base-layout>
      <!-- 使用 ES2015 解构来传入具体的插槽 prop -->
      <base-layout v-slot="{user}">{{ user.lastName }} 解构赋值方式</base-layout>
      <!-- prop重命名 -->
      <base-layout v-slot="{user:person}">{{ person.lastName }}</base-layout>
      <base-layout v-slot:item="{row}">{{ row }}</base-layout>
      <!-- v-slot:header 只能在template或者components上 -->
      <base-layout ref="containerTest">
        <h1 slot="header">具名插槽的使用</h1>
      </base-layout>
      <button @click="tips">访问子组件</button>
    </div>
    <!-- 指令 -->
    <!-- 1. attributeName可以动态修改属性名-->
    <a :[attributeName]="url">指令集合</a>
    <p @[evenName]="doSomething">动态参数绑定事件</p>
    <!-- 修饰符 -->
    <!-- 计算熟悉 -->
    <div>
      <p>原数据:{{message}}</p>
      <input type="text" v-model="message" />
      <p>使用计算属性倒序：{{reverseMessage}}</p>
      <p>computed：{{now}}</p>
      <p @click="fullName='Sun Rain'">{{fullName}}</p>
    </div>
    <input type="text" v-model="question" />
    <!-- 只会渲染数组中最后一个被浏览器支持的值 此例为color: blue; -->
    <p :style="{color:['red','blue','1']}">{{ answer }}</p>
    <template v-if="loginType">
      <label>Username</label>
      <input placeholder="输入用户名" />
    </template>
    <tempalte v-else>
      <label>Email</label>
      <input placeholder="输入Email" />
    </tempalte>
    <button @click="loginType=!loginType">切换</button>
    <!-- 修饰符 -->
    <div>
      <!-- 在blur时msg发生变化 -->
      <input v-model.lazy="msg" />
      {{msg}}
      <!-- 将msg变为num类型 -->
      <input type="text" v-model.number="msg" />
      {{typeof msg}}
      <!-- string->number -->
      <!-- 过滤头尾的空格 -->
      <input type="text" v-model.trim="msg" />
      {{msg}}
      <!--   123  ->123 -->
    </div>
    <button-counter></button-counter>
    <div class="activeComponent">
      <h2>动态组件</h2>
      <div class="tab">
        <span
          v-for="(item,index) in tabList"
          :key="item"
          @click="currentComponent=componentList[index]"
        >組件{{item}}</span>
      </div>
    </div>

    <component :is="currentComponent"></component>
    <button @click="show=!show">切换</button>
    <!-- <order :visible="show" @update:visible="show=$event"></order> -->
    <order :visible.sync="show"></order>
    <base-layout></base-layout>
  </div>
</template>

<script>
import debounce from "lodash/debounce";
import capitalize from "lodash/capitalize";
import axios from "axios";
export default {
  provide() {
    // 依赖
    return {
      getanswer: this.answer
    };
  },
  data() {
    return {
      show: true,
      tabList: [1, 2, 3],
      currentComponent: "Input",
      componentList: ["Input", "base-layout", "button-counter"],
      msg: "",
      loginType: true,
      doc: {
        tag: "ha",
        flag: "w"
      },
      attributeName: "href",
      url: "https://cn.vuejs.org/v2/guide/syntax.html",
      evenName: "click",
      message: "123456",
      firstName: "Ha",
      lastName: "Tom",
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  created() {
    this.debouncedGetAnswer = debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "问题需要问号";
        return;
      }
      this.answer = "Thinking...";
      // eslint-disable-next-line no-debugger
      // debugger;
      axios
        .get("https://yesno.wtf/api")
        .then(res => {
          // 转换字符串string首字母为大写，剩下为小写。
          this.answer = capitalize(res.data.answer);
        })
        .catch(function(error) {
          this.answer = "Error! Could not reach the API. " + error;
        });
    },
    getValue(a) {
      console.info(a);
    },
    tips() {
      //访问子组件实例的data中的user
      let user = this.$refs.containerTest.user;
      console.info(user);
    },
    doSomething() {
      alert("动态参数绑定事件");
    }
  },
  computed: {
    // 计算属性的getter
    reverseMessage() {
      // 倒序
      return this.message
        .split("")
        .reverse()
        .join("");
    },
    now() {
      return Date.now();
    },
    fullName: {
      // getter
      get() {
        return this.firstName + " " + this.lastName;
      },
      // setter
      set(newValue) {
        const names = newValue.split(" ");
        this.firstName = names[0];
        this.lastName = names[names.length - 1];
      }
    }
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question: function() {
      this.answer = "Waiting for you to stop typing...";
      this.debouncedGetAnswer();
    }
  }
};
</script>

<style lang="scss" scoped>
.activeComponent {
  margin: 10px;
  .tab {
    width: 200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    span {
      text-align: center;
      border: 1px solid #000;
      width: 60px;
    }
  }
}
</style>