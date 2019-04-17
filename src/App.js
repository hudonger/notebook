import React, { Component, Fragment } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import TabBar, { TabItem } from './components/TabBar';
import Home from './pages/Home/Home';
import Category from './pages/Category/Category';
import Detail from './pages/Detail/Detail';
import axios from 'axios';
import { CSSTransition } from 'react-transition-group';

export const AppContext = React.createContext();

class App extends Component {
  state = {
    noteList: [],
    action: {
      // 加载列表
      loadData: () => {
        axios.get('http://localhost:4000/noteList').then(res => {
          this.setState({
            noteList: res.data
          })
        })
      }
    }
  }

  componentDidMount () {
    this.state.action.loadData();
  }

  render() {
    return (
      <AppContext.Provider value={{
        state: this.state
      }}>
        <BrowserRouter>
          <Fragment>
            <Route path="/" exact component={ Home } />
            <Route path="/detail" component={ Detail } />
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
      </AppContext.Provider>
    );
  }
}

export default App;
