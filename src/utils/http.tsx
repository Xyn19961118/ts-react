import axios from 'axios';
import { config } from './config';

console.log(config)
// // 创建axios实例
var instance = axios.create({
  timeout: 1000 * 12,
  headers: { 'app-key': config.appkey }
});

// 设置post请求头
instance.defaults.headers.post['Content-Type'] = 'application/json';


// // 添加请求拦截器
// axios.interceptors.request.use(function (config) {
//   // 在发送请求之前做些什么

//   return config;
// }, function (error) {
//   // 对请求错误做些什么
//   return Promise.reject(error);
// });

// 响应拦截器
instance.interceptors.response.use(
  // 请求成功
  res => res.status === 200 ? Promise.resolve(res) : Promise.reject(res),
  // 请求失败
  error => {
    const {
      response
    } = error;
    if (response) {
      return Promise.reject(response);
    }

  });

export default instance;



// class Http {

//   public request(url: string, methods: string, params: object) {
//     const method = methods || "get";
//     // axios({
//     //   method,
//     //   url,
//     //   data: params
//     // }).then(res=>{
//     //   console.log(res)
//     // });
//   }
// }

// export default Http;