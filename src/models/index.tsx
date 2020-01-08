import axios from "../utils/http";

const Index = {
  //首页数据
  indexData() {
    return axios.post(`v3/index/category`);
  },
  //分类
  categoryArt(params: object) {
    return axios.post(`v3/article/categoryArt`, params);
  }



}

export default Index;