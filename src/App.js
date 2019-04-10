import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TabBar, { TabItem } from './components/TabBar';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import { CSSTransition } from 'react-transition-group';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Fragment>
          <Route path="/" exact component={ Home } />
          <Route path="/category">
            {({match}) => (
              <CSSTransition
                in={match !== null}
                timeout={500}
                classNames={{
                  enterActive: 'animated slideInUp',
                  exitActive: 'animated slideOutDown'
                }}
                mountOnEnter
                unmountOnExit
              >
                <Category />
              </CSSTransition>
            )}
          </Route>
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
