import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import App from '../assets/js/views/App'
import Hello from '../assets/js/views/Hello'
import Home from '../assets/js/views/Home'
import UsersIndex from '../assets/js/views/UsersIndex'
import UsersEdit from '../assets/js/views/UsersEdit'
import NotFound from '../assets/js/views/NotFound'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/hello',
            name: 'hello',
            component: Hello,
        },
        {
            path: '/users',
            name: 'users.index',
            component: UsersIndex,
        },
        {
            path: '/users/:id/edit',
            name: 'users.edit',
            component: UsersEdit,
        },
        { path: '/404', name: '404', component: NotFound },
        { path: '*', redirect: '/404' },
    ],
});

const app = new Vue({
    el: '#app',
    components: { App },
    router,
});