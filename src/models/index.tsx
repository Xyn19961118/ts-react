import axios from "../utils/http";

const Index = {
  //首页数据
  indexData(){
    return axios.post(`v3/index/category`);
  }

  

}

export default Index;