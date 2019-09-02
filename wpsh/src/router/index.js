import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import Home from '../pages/Home.vue'  //首页
import Mine from '../pages/Mine.vue'   //我的
import Category from '../pages/Category.vue'   //分类
import Cart from '../pages/Cart.vue'   //购物车
import Login from '../pages/Login.vue'   //登录
import Reg from '../pages/Reg.vue'    //注册

import axios from 'axios'
import store from '../vuex'

let router = new VueRouter({
    routes:[
        {
            name:'Home',
            path:'/home',
            // component:Home
            components:{
                default:Home,
            }
        },
        {
            name:'Category',
            path:'/category',
            component:Category,
        },
        {
            name:'Cart',
            path:'/cart',
            component:Cart,
        },
        {
            name:'Mine',
            path:'/mine',
            component:Mine,
            meta: { requiresAuth: true }
        },
        {
            path:'/',
            redirect:{name:'Home'}
        },
        {
            name:'Login',
            path:'/login',
            component:Login
        },
        
    ],
    scrollBehavior (to, from, savedPosition) {     
        if(savedPosition) {
            setTimeout(() => {
                window.scrollTo(savedPosition.x, savedPosition.y)
            }, 200)
        }      
    }
})
// router.beforeEach((to, from, next) => { 
    
//     //显示隐藏菜单
//     if(to.matched[0].path != "/home" && to.matched[0].path !="/category"){
//       store.commit('changeMenuShow',false)
//     }else{
//         store.commit('changeMenuShow',true)
//     }

//     //判断是否需要权限
//     if(to.matched.some(item=>item.meta.requiresAuth)){
//         let token = localStorage.getItem('Authorization');     
//         axios.get('/verify')
//         if(token){
//             next();
//         }else{
//             //没权限，跳到登录页
//             next({path:'/login',query:{des:to.fullPath}})
//         }
//     }else{
//         next();
//     }
    
// })

export default router;