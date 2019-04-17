import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import Tabs from './components/Tabs';
import IconList from './components/IconList';
import Keyboard from './components/Keyboard';
import { outcomeList, incomeList } from '@/mock';
import withContext from '@/components/withContext';
import './Category.less';

class Category extends Component {
  state = {
    currentTab: 'outcome',
    list: outcomeList,
    activeItem: '',
    showKeyboard: false
  }

  handleTabChange = tab => {
    this.setState({
      showKeyboard: false,
      currentTab: tab,
      list: tab === 'outcome' ? outcomeList : incomeList
    })
  }

  handleSelect = item =>{
    this.setState({
      showKeyboard: true,
      activeItem: item
    })
  }

  hideKeyboard = () => {
    this.setState({
      showKeyboard: false,
    })
  }

  handleComplete = priceData => {
    const {currentTab, activeItem} = this.state;
    
    console.log({
      type: currentTab,
      category: activeItem.type,
      icon: activeItem.icon,
      name: activeItem.name,
      price: priceData.price,
      date: priceData.date,
      content: priceData.content,
    });
  }

  render () {
    const { currentTab, list, activeItem } = this.state
    return (
      <section className="category-page" style={{zIndex: 2}}>
        <header className="category-header">
          <Tabs active={ currentTab } onTabChange={ this.handleTabChange } />
          <section className="category-close">
            <Link to="/">取消</Link>
          </section>
        </header>
        <IconList list={list} active={ activeItem } onSelect={ this.handleSelect } />
        <CSSTransition
          in={this.state.showKeyboard}
          timeout={200}
          classNames={{
            enterActive: 'animated slideInUp',
            exitActive: 'animated slideOutDown'
          }}
          mountOnEnter
          unmountOnExit
        >
          <Keyboard onHide={this.hideKeyboard} onComplete={this.handleComplete} />
        </CSSTransition>
      </section>
    )
  }
};

export default withContext(Category);
