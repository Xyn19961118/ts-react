import React from "react";
import { NavBar, Icon, Tabs, Badge } from 'antd-mobile';
import {
  CategoryWrapper
} from "./style";

interface IState {

}

interface IProps {

}

class Category extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props)
    this.state = {

    }
  }

  public render() {
    const tabs = [
      { title: <Badge >最新</Badge> },
      { title: <Badge>热门</Badge> },
    ];
    return (
      <CategoryWrapper>
        <NavBar
          mode="light"
          icon={<Icon type="left" />}
          onLeftClick={() => console.log('onLeftClick')}
        >热点</NavBar>

        <Tabs tabs={tabs}
          initialPage={0}
          onChange={(tab, index) => { console.log('onChange', index, tab); }}
          onTabClick={(tab, index) => { console.log('onTabClick', index, tab); }}
        >
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <div style={{ width: '100%', height: '1000px' }}>
              a
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fff' }}>
            <div style={{ width: '100%', height: '500px' }}>
              b
            </div>
          </div>
        </Tabs>
      </CategoryWrapper>
    )
  }
}

export default Category;