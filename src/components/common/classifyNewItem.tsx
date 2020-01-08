import React from 'react';
import {
  Item,
  Title,
  HeadPic,
  HeadText,
  Content,
  ContentTitle,
  ContentText,
  Bottom
} from './style';

interface IProps {
  
}

interface IState {

}

class ClassifyNewItem extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {

    }
  }

  public render() {
    return (
      <Item>
        <Title>
          <HeadPic src="http://www.ainzdm.com/uploads/users/20191126/b0fa8e023515a3c56d163450276350b2.jpg"></HeadPic>
          <HeadText>发布了文章  ·  2019-11-12 18:54:36</HeadText>
        </Title>

        <Content>
          <ContentTitle>一看网红直播就想买，如何控制购物欲？</ContentTitle>
          <ContentText>购物平台直播间有多疯狂？几万件库存量的商品，只需要几秒钟就能卖到下架。据说，没有任何一个女生能够抵挡...</ContentText>
        </Content>

        <Bottom>
          0收藏 · 2热度
        </Bottom>
      </Item>
    )
  }

}

export default ClassifyNewItem;