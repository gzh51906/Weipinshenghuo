

### (易果生鲜)团队分工

###  组长：阳灿，组员：黄楚燕，叶群，罗志杰

###  官网地址      :https://h5homepage.yiguo.com/?channel=5&appName=3000025

###  webApp地址   ：http://39.107.43.32:1908

###  后台管理系统  : http://39.107.43.32:1909

###  GitHuo仓库地址：https://github.com/gzh51906/Weipinshenghuo


## 项目文件分布

    1.admin 后台管理系统
        views   视图文件夹
        routers  路由
    2.server 后端文件夹

    2.wpsh  webApp文件夹
## 负责与模块说明

## 阳灿  : 项目搭建,负责模块：详情页、购物车,使用了 Vue 的组件化、Vuex、vue-router、axios 以及vant-ui等插件，完成了页面跳转，数据渲染等功能 

## 叶群  ：负责模块：首页、我的、后台管理系统，部分后端接口，使用了 Vue 的组件化、Vuex、vue-router、axios 以及vant-ui等插件，完成了页面跳转，数据渲染等功能 

## 黄楚燕：负责爬取数据、编写列表页和吃饭吧页面，使用了 Vue 的组件化、Vuex、vue-router、axios 以及 vant-ui 等插件，完成了页面跳转，数据渲染等功能

## 罗志杰: 负责模块:登录、注册界面 ，部分后端接口，使用技术:Vue 组件化开发、vue-router、axios、vant-ui。完成页面跳转、数据渲染、手机验证码登录注册、权限管理等功能。

##项目截图
![Image text](http://39.107.43.32:1906/img-folder/_20190910123105.png)
![Image text](http://39.107.43.32:1906/img-folder/_20190910123152.png)
![Image text](http://39.107.43.32:1906/img-folder/_20190910123202.png)
![Image text](http://39.107.43.32:1906/img-folder/_20190910123214.png)
![Image text](http://39.107.43.32:1906/img-folder/_20190910123224.png)
![Image text](http://39.107.43.32:1906/img-folder/_20190910123246.png)


###项目结构
 Weipinshenghuo
├── admin
│   ├── babel.config.js
│   ├── dist1
│   │   ├── css
│   │   │   ├── app.17bee404.css
│   │   │   └── chunk-vendors.728eb7d9.css
│   │   ├── favicon.ico
│   │   ├── fonts
│   │   │   ├── element-icons.535877f5.woff
│   │   │   └── element-icons.732389de.ttf
│   │   ├── index.html
│   │   └── js
│   │       ├── app.457ed368.js
│   │       ├── app.457ed368.js.map
│   │       ├── chunk-vendors.6feca52d.js
│   │       └── chunk-vendors.6feca52d.js.map
│   ├── package-lock.json
│   ├── package.json
│   ├── public
│   │   ├── favicon.ico
│   │   └── index.html
│   ├── README.md
│   └── src
│       ├── App.vue
│       ├── assets
│       │   └── logo.png
│       ├── components
│       │   ├── app.vue
│       │   ├── cotegoryedit.vue
│       │   ├── cotegorylist.vue
│       │   ├── login.vue
│       │   └── userlist.vue
│       ├── http.js
│       ├── main.js
│       └── routers
│           └── index.js
├── img-folder
│   ├── _20190910123105.png
│   ├── _20190910123152.png
│   ├── _20190910123202.png
│   ├── _20190910123214.png
│   ├── _20190910123224.png
│   └── _20190910123246.png
├── README.md
├── server
│   ├── api
│   │   ├── mock
│   │   │   └── db.json
│   │   ├── package-lock.json
│   │   ├── package.json
│   │   ├── src
│   │   │   ├── config.json
│   │   │   ├── db
│   │   │   │   └── mongo.js
│   │   │   ├── index.html
│   │   │   ├── router
│   │   │   │   ├── chifanba.js
│   │   │   │   ├── getindexdata.js
│   │   │   │   ├── goods.js
│   │   │   │   ├── index.js
│   │   │   │   └── user.js
│   │   │   ├── server.js
│   │   │   └── utils
│   │   │       ├── index.js
│   │   │       └── token.js
│   │   └── yarn.lock
│   ├── desktop.ini
│   ├── package-lock.json
│   └── package.json
├── tet.txt
└── wpsh
    ├── babel.config.js
    ├── dist
    │   ├── css
    │   │   ├── app.7777e99f.css
    │   │   └── chunk-vendors.598da5eb.css
    │   ├── favicon.ico
    │   ├── img
    │   │   ├── 586030925119660372_120x96.a029f2ee.png
    │   │   ├── 586030925119693140_120x96.951d66e6.png
    │   │   └── 586030925119725908_120x96.f843abb3.png
    │   ├── index.html
    │   └── js
    │       ├── app.f78f6977.js
    │       ├── app.f78f6977.js.map
    │       ├── chunk-vendors.3b59fd5a.js
    │       └── chunk-vendors.3b59fd5a.js.map
    ├── package-lock.json
    ├── package.json
    ├── public
    │   ├── favicon.ico
    │   └── index.html
    ├── README.md
    └── src
        ├── App.vue
        ├── assets
        │   ├── imgs
        │   │   ├── chifanba
        │   │   │   ├── 586030925119660372_120x96.png
        │   │   │   ├── 586030925119693140_120x96.png
        │   │   │   ├── 586030925119725908_120x96.png
        │   │   │   └── 586030927703745073_120x96.png
        │   │   └── icon
        │   │       ├── blackhome.png
        │   │       ├── cart.png
        │   │       ├── chifan.png
        │   │       ├── download
        │   │       ├── edit_bg.png
        │   │       ├── footer_icon_5.png
        │   │       ├── footer_icon_7.png
        │   │       ├── home.png
        │   │       ├── kind.png
        │   │       ├── kind1.png
        │   │       ├── nav_classify_.png
        │   │       ├── nav_classify_active.png
        │   │       ├── nav_home_active.png
        │   │       ├── nav_home_selected.png
        │   │       ├── nav_list_.png
        │   │       ├── nav_list_active.png
        │   │       ├── nav_user_.png
        │   │       ├── nav_user_active.png
        │   │       ├── redcapationl1.png
        │   │       └── service.png
        │   └── rem.js
        ├── components
        │   ├── Cart
        │   │   └── Cart.vue
        │   ├── Category
        │   │   ├── Category.vue
        │   │   ├── Goodlist.vue
        │   │   ├── Search.vue
        │   │   └── Tab.vue
        │   ├── Chifanba
        │   │   ├── chifanba.js
        │   │   └── Chifanba.vue
        │   ├── Details
        │   │   └── Details.vue
        │   ├── Home
        │   │   ├── banner.vue
        │   │   ├── con1.vue
        │   │   ├── fenlei.vue
        │   │   ├── Home.vue
        │   │   ├── index.json
        │   │   ├── kuanghuan.vue
        │   │   ├── list.vue
        │   │   ├── same.vue
        │   │   ├── top.vue
        │   │   ├── tuijian.vue
        │   │   └── xinpin.vue
        │   ├── Login
        │   │   └── Login.vue
        │   ├── Mine
        │   │   ├── Mine.vue
        │   │   ├── pay.vue
        │   │   ├── top.vue
        │   │   └── youhui.vue
        │   └── Reg
        │       └── Reg.vue
        ├── main.js
        ├── router
        │   └── index.js
        └── vuex
            ├── cart.js
            ├── common.js
            └── index.js


