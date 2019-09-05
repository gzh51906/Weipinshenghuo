import Vue from 'vue'
import Router from 'vue-router'

import main from '../components/app.vue';
import Login from '../components/login.vue';   //用户登录

import cotegoryedit from "../components/cotegoryedit.vue";  //编辑商品
import CategoryList from '../components/cotegorylist.vue';   //商品列表



// import ItemEdit from './views/ItemEdit.vue'
// import ItemList from './views/ItemList.vue'


// import AdminUserEdit from './views/AdminUserEdit.vue'
// import AdminUserList from './views/AdminUserList.vue'




Vue.use(Router);

let router = new Router({
    routes: [{
            name: 'main',
            path: "/",
            component: main,
            children: [{
                    path: '/categories/create',
                    component: cotegoryedit
                },
                {
                    path: "/login",
                    component: Login
                },

                // {
                //     path: '/categories/edit/:id',
                //     component: CategoryEdit,
                //     props: true
                // },
                {
                    path: '/categories/list',
                    component: CategoryList
                },



                // {
                //     path: '/items/create',
                //     component: ItemEdit
                // },
                // {
                //     path: '/items/edit/:id',
                //     component: ItemEdit,
                //     props: true
                // },
                // {
                //     path: '/items/list',
                //     component: ItemList
                // },


                // {
                //     path: '/admin_users/create',
                //     component: AdminUserEdit
                // },
                // {
                //     path: '/admin_users/edit/:id',
                //     component: AdminUserEdit,
                //     props: true
                // },
                // {
                //     path: '/admin_users/list',
                //     component: AdminUserList
                // },
                // {
                //     path: '/',
                //     redirect: {
                //         name: 'Login'
                //     }
                // },
            ]
        },
        {
            path: "/login",
            component: Login
        },

    ]


    // routes: [{
    //         name: 'Home',
    //         path: '/home',
    //         // component:Home
    //         components: {
    //             default: Home,
    //         }
    //     },
    //     {
    //         name: 'Chifanba',
    //         path: '/chifanba',
    //         component: Chifanba,
    //     },
    //     {
    //         name: 'Category',
    //         path: '/category',
    //         component: Category,
    //     },
    //     {
    //         name: 'Cart',
    //         path: '/cart',
    //         component: Cart,
    //     },
    //     {
    //         name: 'Mine',
    //         path: '/mine',
    //         component: Mine,
    //         meta: {
    //             requiresAuth: true
    //         }
    //     },
    //     {
    //         path: '/',
    //         redirect: {
    //             name: 'Login'
    //         }
    //     },
    //     {
    //         name: 'Login',
    //         path: '/login',
    //         component: Login
    //     },
    //     {
    //         name:'GoodList',
    //         path:'/GoodList/:datalist',
    //         component:GoodList
    //     }

    // ]
})
export default router;