import React from 'react';
import Index from "../../models/index";
import { Link } from "react-router-dom";
import { Carousel } from 'antd-mobile';
import {
  AllWrap,
  Header,
  SearchWrapper,
  SearchContent,
  SearchIcon,
  SearchPlacehold,
  InterestWrapper,
  InterestTitle,
  InterestContent,
  InterestItemWrap,
  InterestItem,
  InterestItemPic,
  InterestItemText,
} from './style';


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

  public constructor(props: IProps) {
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
      // console.log(res)
      const data = res.data;
      // console.log(data)
      this.setState({
        dataInfo: data
      })
    })
  }



  public render() {
    const { activity, category } = this.state.dataInfo;
    // console.log(this.state.dataInfo)
    return (
      <AllWrap>
        <Header>你知道吗</Header>
        {/*搜索框 start*/}
        <SearchWrapper>
          <SearchContent>
            <SearchIcon></SearchIcon>
            <SearchPlacehold>请输入搜索内容</SearchPlacehold>
          </SearchContent>
        </SearchWrapper>
        {/*搜索框 end*/}


        {/*banner图 start*/}
        <Carousel
          autoplay={false}
        >
          {activity.map((item: any) => (
            <img
              src={item.activity_img[0].img}
              key={item.activity_img[0].id}
              alt={item.title}
              onLoad={() => {
                this.setState({
                  imgHeight: 'auto'
                });
              }}
            />
          ))}
        </Carousel>
        {/*banner图 end*/}

        {/* 兴趣圈子 start */}
        <InterestWrapper>
          <InterestTitle>兴趣圈子</InterestTitle>
          <InterestContent>
            {
              category.map((item: any) => {
                return (
                  <InterestItemWrap key={item.id}>
                    <Link to={
                      {
                        pathname:`category/${item.id}/${item.name}`,
                        state:{
                          id: item.id,
                          name: item.name
                        }
                      }
                    }>
                      <InterestItem>
                        <InterestItemPic src={item.img}  ></InterestItemPic>
                        <InterestItemText>{item.name}</InterestItemText>
                      </InterestItem>
                    </Link>

                  </InterestItemWrap>
                )
              })
            }
          </InterestContent>
        </InterestWrapper>
        {/* 兴趣圈子 start */}



      </AllWrap>
    )
  }

}

export default App;
