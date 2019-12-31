import axios from 'axios';
import { config } from './config';


// // 创建axios实例
// var instance = axios.create({
//   timeout: 1000 * 12
// });

// // 设置post请求头
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';


// // 响应拦截器
// instance.interceptors.response.use(
//   // 请求成功
//   res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
//   // 请求失败
//   error => {
//     const {
//       response
//     } = error;
//     if (response) {
//       return Promise.reject(response);
//     }

//   });

// export default instance;

interface IConfig {
  url: string,
  methods: string,
  params: object
}

class Http {

  public request<IConfig>(url: string, methods: string, params: object) {
    const method = methods || "get";
    // pubilc axios({
    //   method,
    //   url,
    //   data: params
    // });
  }
}

export default Http;