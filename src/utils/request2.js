import axios from 'axios'
import store from '@/store/index'
import { Promise } from 'core-js'
import router from '@/router'
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
let request = axios.create({
  baseURL,
  timeout: '5000'
})
request.interceptors.request.use((config) => {
  //业务拦截
  //如果本地有token就在请求头中携带
  if (store.state.user.profile.token) {
    //Bearer 定义token类型
    config.headers.Authorization = `Bearer ${store.state.user.profile.token}`
  }
  //把请求头返回出去
  return config
}),
  (err) => {
    return Promise.reject(err)
  }
// 响应对象有俩个参数 一个成功一个失败
// 响应成功 把请求的数据你内容 return 给res
request.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response && err.response.status === 401) {
      // 给 mutations派发一个空对象把仓库里用户信息清空
      store.commit('user/setUser', {})
      // $router.path是跳转地址
      // $router.fullPath是跳转地址加上后面参数
      //把从什么地方跳转的地址通过query参数带给登录页路由
      // 组件里我们可以用$route.fullPath拿到当前路径的地址和所有参数
      //js中用router.currentRouter 但 router.currentRouter 是响应式的 所有我们要拿他。value字符串 router.currentRouter.value
      const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
      console.log(fullPath)
      // 加上fullPath是以为 router.currentRoute.value=$router 加上fullPath才能拿到后面的参数要不然只有路由地址
      //参数里有= + - 等等一些乱七八糟的的参数 防止浏览器解析错误用encodeURIComponent转换成url编码
      router.push('/login?mutations=' + fullPath)
    }
    return Promise.reject(err)
  }
)
//负责发送请求 3个参数 地址 方式 数据 给服务器传参
export default (url, method, submitData) => {
  return request({
    url,
    method,
    //判断发送数据方式
    //如果是get有params 放到路径里给服务器 请求体传参
    //如果不是get用data传参
    // []写表达式
    //但写请求的时候有大小写 以防混轮统一转成小写 toLowerCase()
    [method.toLowerCase() == 'get' ? 'params' : 'data']: submitData
  })
}
