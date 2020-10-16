import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const part1 = ()=>import("@/components/part1.vue")
const part2 = ()=>import("@/components/part2.vue")
const part3 = ()=>import("@/components/part3.vue")


const routes = [
    {
        path: '',
        redirect: '/part1'
    },
    {
        path: '/part1',
        component: part1
    },
    {
        path: '/part2',
        component: part2
    },
    {
        path: '/part3',
        component: part3
    },
]


const router = new VueRouter({
    routes: routes,
    mode: 'history'
})

export default router