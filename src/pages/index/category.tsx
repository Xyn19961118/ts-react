import React from "react";
import { NavBar, Icon, Tabs, Badge } from 'antd-mobile';
import Index from '../../models/index';
import ClassifyNewItem from "../../components/common/classifyNewItem";
import {
  CategoryWrapper,
  CategoryNewItems,
  CategoryItem
} from "./style";



interface IState {
  NavText: string,
  page: number,
  pagesize: number,
  hotList: Array<object>,
  newList: Array<object>,
  pullStatus: string
}

interface IProps {
  match: any
}

class Category extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {
      NavText: '你知道吗',
      page: 1,
      pagesize: 20,
      hotList: [],
      newList: [],
      pullStatus: 'up'
    }
  }
  public componentDidMount() {
    let { id, name } = this.props.match.params;
    let { page, pagesize } = this.state;
    this.setState({
      NavText: name
    })
    let params = {
      id,
      page,
      pagesize
    }

    Index.categoryArt(params).then(res => {
      let data = res.data;
      page++;
      this.setState({
        hotList: data.hot.data,
        newList: data.new.data,
        page
      })

      console.log(data)
    })


  }
  public render() {
    const tabs = [
      { title: <Badge >最新</Badge> },
      { title: <Badge>热门</Badge> },
    ];
    const { NavText, newList } = this.state;
    // console.log(newList)
    return (
      <CategoryWrapper>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >{NavText}</NavBar>

        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >

          <CategoryNewItems>

            {
              newList.map((item: any) => {
                // console.log(item)
                return (
                  <CategoryItem key={item.id}>
                    <ClassifyNewItem></ClassifyNewItem>
                  </CategoryItem>
                )
              })
            }
          </CategoryNewItems>

          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <div style={{ width: '100%', height: '500px' }}>
              {/* <PullToRefresh></PullToRefresh> */}

            </div>
          </div>
        </Tabs>
      </CategoryWrapper>
    )
  }
}

export default Category;