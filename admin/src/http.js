import axios from 'axios'
import Vue from "vue"
import router from './routers'
const http = axios.create({
    baseURL: "http://localhost:1906/admin/api"
})
// 请求拦截：发送token
http.interceptors.request.use(function (config) {
    // 每次利用axios发起的请求，都会进入到这里
    // 添加token
    if (localStorage.token) {
        config.headers.Authorization = localStorage.token
    }
    // console.log(config)
    return config;


}, function (error) {
    return Promise.reject(error)
})


// 响应拦截：校验token
http.interceptors.response.use(res => {
    return res
}, err => {
    // 判断token是否校验成功
    // 校验不成功：过期或被伪造
    if (err.response.data.message) {
        Vue.prototype.$message({

            type: "error",
            message: err.response.data.message
        })

        // console.log(err.response)
        if (err.response.status == 401) {
            router.push('/login')
        }
    }

    return Promise.reject(err)
})

export default http