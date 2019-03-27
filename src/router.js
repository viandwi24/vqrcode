import Vue from 'vue'
import VueRouter from 'vue-router'

import HomeComponent from './components/Home.vue'
import CreateComponent from './components/Create.vue'
import ReaderComponent from './components/Reader.vue'


Vue.use(VueRouter)

const routes = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeComponent
        },
        {
            path: '/create',
            name: 'create',
            component: CreateComponent
        },
        {
            path: '/reader',
            name: 'reader',
            component: ReaderComponent
        },
    ]
})


export default routes;