import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/components/index.js'
import vueBus from '@/utils/vueBus';
/* import Antd from 'ant-design-vue'
// import 'ant-design-vue/dist/antd.less';
Vue.use(Antd) */
import { Button, Card, Input } from 'ant-design-vue'
Vue.use(Button)
Vue.use(Card)
Vue.use(Input)
Vue.use(vueBus)
Vue.config.productionTip = false
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: '<button @click="count++">第{{count}}次点我</button>'
})

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
