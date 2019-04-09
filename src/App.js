import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TabBar, { TabItem } from './components/TabBar';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={ Home } />
          <Route path="/category" component={ Category } />
          <TabBar>
            <TabItem to="/" icon="iconicon--">明细</TabItem>
            <TabItem to="/category" icon="icontubiao">图表</TabItem>
          </TabBar>
        </Fragment>
      </BrowserRouter>
    );
  }
}

export default App;
