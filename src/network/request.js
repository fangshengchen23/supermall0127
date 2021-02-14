import axios from 'axios'
import qs from 'qs'

export function request(config) {
  const instance = axios.create({
    baseURL: 'xxx',
    // xxx填写自己的真实接口
    timeout: 5000
  })

  // 请求拦截
  instance.interceptors.request.use(config => {
    return config
  }, err => {
    return err
  })
  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    return err
  })

  return instance(config)
}

export function requestCate(config) {
  const instance1 = axios.create({
    baseURL: '/plm',
    timeout: 5000
  })

  // 请求拦截
  instance1.interceptors.request.use(config => {
    if(config.method === 'post' && config.data) {
      config.data = qs.stringify(config.data)
    }
    return config
  }, err => {
    return err
  })
  // 响应拦截
  instance1.interceptors.response.use(res => {
    return res.data
  }, err => {
    return err
  })

  return instance1(config)
}
