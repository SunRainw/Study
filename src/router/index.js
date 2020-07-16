import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home/home'
import Animate from '@/views/New/animate'
import Jsx from '@/views/New/jsx'
import NewJsx from '@/views/New/newJsx'
Vue.use(VueRouter)

const routes = [
    {
        path: "/home",
        component: Home
    },
    {
        path: '/animate',
        component: Animate
    },
    {
        path: '/jsx',
        component: Jsx
    },
    {
        path: '/newJsx',
        component: NewJsx
    }
]
const router = new VueRouter({
    routes,
    mode: 'history'
})

export default router