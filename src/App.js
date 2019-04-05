import React, { Component } from 'react';
import TabBar, { TabItem } from './components/TabBar';
import Home from './pages/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Home />
        <TabBar>
          <TabItem icon="iconicon--">明细</TabItem>
          <TabItem icon="icontubiao">图表</TabItem>
        </TabBar>
      </div>
    );
  }
}

export default App;
