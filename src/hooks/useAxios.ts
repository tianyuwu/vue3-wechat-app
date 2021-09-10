import axios from 'axios'
import { redirectTo } from './usePage'


const axiosInstance = axios.create({
  // `baseURL` 将自动加在 `url` 前面，除非 `url` 是一个绝对 URL。
  // 它可以通过设置一个 `baseURL` 便于为 axios 实例的方法传递相对 URL
  baseURL:  '',
  // `transformRequest` 允许在向服务器发送前，修改请求数据
  // 它只能用与 'PUT', 'POST' 和 'PATCH' 这几个请求方法
  // 数组中最后一个函数必须返回一个字符串， 一个Buffer实例，ArrayBuffer，FormData，或 Stream
  // 不传递的时候，系统有默认的处理方式，会自动对数据进行转换处理
  // 你可以修改请求头。
  // transformRequest: [
  //   function (data: any, headers: any) {
  //     // 对发送的 data 进行任意转换处理
  //     return JSON.stringify(data)
  //   },
  // ],
  // `transformResponse` 在传递给 then/catch 前，允许修改响应数据
  // 不传递的时候，系统有默认的处理方式，会自动对响应数据进行转换处理
  // transformResponse: [
  //   function (data: any) {
  //     // 对接收的 data 进行任意转换处理
  //     console.log(data)
  //     return data
  //   },
  // ],
  // 自定义请求头
  // headers: { 'Content-Type': 'application/json;charset=utf-8' },
})

axiosInstance.interceptors.request.use(
  // eslint-disable-next-line @typescript-eslint/no-shadow
  (config: any) => {
    // token认证写在这里
    return config
  },
  (err) => {
    Promise.reject(err)
  },
)

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.data.code === 0) {
      return response.data.data
    } else {
      const code = parseInt(response.data.code)
      const msg = response.data.message
      const errorData = {
        code,
        msg,
      }
      return Promise.reject(errorData)
    }
  },
  (error) => {
    console.log(error)
    if (error.message.includes('timeout')) {
      console.log('超时了')
    } else {
      // 可以展示断网组件
      // console.log('断网了')
      const errorData = {
        code: error.response.status,
        msg: error.response.statusText,
      }
      return Promise.reject(errorData)
    }
  },
)

export function useAxios(options: any): Promise<any> {
  return new Promise((resolve, reject) => {
    axiosInstance
      .request(options)
      .then((res) => {
        resolve(res)
      })
      .catch((error) => {
        // 403时跳回登录页
        if (error.code === 403 || error.code === 401) {
          redirectTo('/login')
        }
        reject(error)
      })
  })
}

useAxios.get = (url: string, params: Recordable = {}, options: any = {}) => {
  return useAxios({
    url,
    params,
    method: 'get',
    ...options,
  })
}

useAxios.post = (url: string, params: Recordable, options: any = {}) => {
  return useAxios({
    url,
    data: params,
    method: 'post',
    ...options,
  })
}
