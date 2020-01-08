import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Index from "../pages/index/index";
import Category from '../pages/index/category';

class AppRouter extends React.Component {
  public render() {
    return (
      <HashRouter>
        <Switch>
          <Route exact path="/" component={Index}></Route>
          <Route path="/category/:id/:name" component={Category}></Route>
        </Switch>
      </HashRouter>
    )
  }
}

export default AppRouter