import axios from 'axios'
import store from '@/store'
import router from '@/router'
// 导出基准地址，原因：其他不是通过axios发送的请求也需要基准地址
export const baseURL = 'http://pcapi-xiaotuxian-front-devtest.itheima.net/'
const instance = axios.create({
  baseURL,
  timeout: 5000
})

// 请求拦截器
instance.interceptors.request.use(config => {
  // 拦截成功要做的事
  // 进行请求配置的修改
  // 如果本地有token，则携带在头部
  // 1.获取用户信息对象
  const { profile } = store.state.user
  // 2.判断是否有token
  if (profile.token) {
    // 3.设置token
    config.headers.Authorization = `Bearer ${profile.token}`
  }
  return config
}, err => {
  return Promise.reject(err)
})
// 响应拦截器
// 直接返回res.data，方便组件调用
instance.interceptors.response.use(res => res.data, err => {
  // 401状态码进入该函数
  if (err.response && err.response.status === 401) {
    // 1.清空无效用户信息
    // 2.跳转到登录页面
    // 3.跳转需要传参给登录页码，参数为当前地址，因为登陆成功后要返回当前路由
    store.commit('user/setUser', {})
    // 考虑到url参数可能会携带特殊字符，比如&，需要进行转码
    const fullPath = encodeURIComponent(router.currentRoute.value.fullPath)
    router.push('/login?redirectUrl=' + fullPath)
  }
})

// 请求工具函数,发请求时参数有请求地址，请求方法和提交的数据
export default (url, method, submitData) => {
  return instance({
    url,
    method,
    // 如果是get请求，需要使用params来传递submitData,因为是放在路径里的
    // 如果不是get请求，则使用data来传递
    // 设置一个动态的key，写js表达式来控制
    [method.toLowerCase() === 'get' ? 'params' : 'data']: submitData
  })
}
