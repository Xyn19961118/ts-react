import React from 'react';
import axios from 'axios';


interface IState {

}

interface IProps {

}

class App extends React.Component<IProps, IState> {

  public componentDidMount() {
    axios.defaults.headers.post['Content-Type'] = 'application/json';
    //  axios.create({
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'app-key':'RdshydjBvcYZhMZC'
    //   }
    // });

    console.log("aa")
    let data = {
      id: 1,
      page: 1,
      pagesize: 20
    };
    // let options = {
    //   method: 'GET',//post请求 
    //   headers: {
    //     'Accept': 'application/json',
    //     'Content-Type': 'application/json'
    //   },
    //   body: data
    // }
    axios.get("v3/article/categoryArt", {
      headers: {
        // token: '7c0f892b8bd4078b00d6f6ba88f4658b',
        'app-key': "RdshydjBvcYZhMZC"
      },
      params: data

    }).then(res => {
      console.log(res)
    })
  }

  public constructor(props: any) {
    super(props);
    this.state = {

    }
  }

  public render() {
    return (
      <div>

      </div>
    )
  }

}

export default App;
