import Vue from 'vue'
import Router from 'vue-router'

import main from '../components/app.vue';
import Login from '../components/login.vue'; //用户登录

import cotegoryedit from "../components/cotegoryedit.vue"; //编辑商品
import CategoryList from '../components/cotegorylist.vue'; //商品列表

// import AdminUserEdit from '../components/useredit.vue'; //用户编辑
import AdminUserList from '../components/userlist.vue'; //用户列表




Vue.use(Router);

let router = new Router({
    routes: [{
            name: 'main',
            path: "/",
            component: main,
            children: [
                // 商品编辑
                {
                    path: '/categories/create',
                    component: cotegoryedit
                },
                // 商品列表
                {
                    path: '/categories/list',
                    component: CategoryList
                },
                // 用户编辑
                // {
                //     path: '/admin_users/create',
                //     component: AdminUserEdit
                // },
                // 用户列表
                {
                    path: '/admin_users/list',
                    component: AdminUserList
                },
                {
                    path: "/login",
                    component: Login
                },
                {
                    path: "/",
                    component: Login
                },

            ]
        }
    ]
})
export default router;