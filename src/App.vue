<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <router-link to="/home">
      <a-button>home</a-button>
    </router-link>
    <router-link to="/animate">
      <a-button>动画</a-button>
    </router-link>
    <router-link to="/jsx">
      <a-button>JSX</a-button>
    </router-link>
    <router-link to="/newJsx">
      <a-button>JSX函数式组件</a-button>
    </router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'

export default {
  name: "App",
  // components: {
  //   HelloWorld
  // }

  methods: {
    valueChange() {
      console.info(1);
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
