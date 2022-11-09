import axios from 'axios'

const service = axios.create({
  // 统一请求前缀 （基准api）
  baseURL: process.env.VUE_APP_API_URL,
  // 统一请求超时
  timeout: 8000
})

// 请求拦截
service.interceptors.request.use(
  (config) => {
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应拦截
service.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)
export default service
