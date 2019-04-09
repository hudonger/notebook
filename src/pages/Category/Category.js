import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Tabs from './components/Tabs';
import IconList from './components/IconList';
import './Category.less';

class Category extends Component {
  state = {
    currentTab: 'outcome'
  }

  handleTabChange = tab => {
    this.setState({
      currentTab: tab
    })
  }

  handleSelect = item =>{
    console.log(item);
  }

  render () {
    return (
      <section className="category-page" style={{zIndex: 999}}>
        <header className="category-header">
          <Tabs active={ this.state.currentTab } onTabChange={ this.handleTabChange } />
          <section className="category-close">
            <Link to="/">取消</Link>
          </section>
        </header>
        <IconList list={[]} onSelect={ this.handleSelect } />
      </section>
    )
  }
}

export default Category;
