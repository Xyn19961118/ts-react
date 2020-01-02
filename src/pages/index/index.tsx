import React from 'react';
import Index from "../../models/index";
import { Carousel, WingBlank } from 'antd-mobile';
import { Header, SearchWrapper, SearchContent, SearchIcon, SearchPlacehold } from './style';


interface IState {
  dataInfo: {
    activity: [],
    category: []
  },
  imgHeight: number | string
}

interface IProps {

}

class App extends React.Component<IProps, IState> {

  public constructor(props: any) {
    super(props);
    this.state = {
      dataInfo: {
        activity: [],
        category: []
      },
      imgHeight: 178
    }
  }

  public componentDidMount() {
    //加载首页数据
    Index.indexData().then(res => {
      console.log(res)
      const data = res.data;
      console.log(data)
      this.setState({
        dataInfo: data
      })
    })
  }



  public render() {
    const { activity, category } = this.state.dataInfo;
    // console.log(this.state.dataInfo)
    return (
      <div className="index">
        <Header>你知道吗</Header>
        {/*搜索框*/}
        <SearchWrapper>
          <SearchContent>
            <SearchIcon></SearchIcon>
            <SearchPlacehold>请输入搜索内容</SearchPlacehold>
          </SearchContent>
        </SearchWrapper>


        <WingBlank>
          <Carousel
            autoplay={false}
          >
            {activity.map((item: any) => (
              <img
                src={item.activity_img[0].img}
                key={item.activity_img[0].id}
                alt=""
                onLoad={() => {
                  this.setState({ 
                    imgHeight: 'auto' 
                });
                }}
              />
            ))}
          </Carousel>
        </WingBlank>

      </div>
    )
  }

}

export default App;
