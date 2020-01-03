import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Index from "../pages/index/index";
import Category from '../pages/index/category';

class AppRouter extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Route exact path="/" component={Index}></Route>
        <Route path="/category" component={Category}></Route>
      </HashRouter>
    )
  }
}

export default AppRouter