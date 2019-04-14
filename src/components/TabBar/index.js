import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './index.less';

export const TabItem = props => {
  const {to = '/', icon, active, onClick} = props;
  const activeStyle = {
    color: active ? '#ffda44' : '#666',
  };

  return (
    <Link to={to}>
      <section className="tab-item" style={activeStyle} onClick={onClick}>
        <i className={`icon iconfont ${icon}`}></i>
        <span>{props.children}</span>
      </section>
    </Link>
  )
};

class TabBar extends Component {
  state = {
    activeIndex: 0
  }

  render () {
    const newChildren = React.Children.map(this.props.children, (child, index) => {
      if (child.type) {
        return React.cloneElement(child, {
          active: this.state.activeIndex === index,
          onClick: () => this.setState({activeIndex: index})
        })
      } else {
        return child;
      }
    })
    if (newChildren.length % 2 === 0) {
      const splitIndex = (newChildren.length / 2)
      newChildren.splice(splitIndex, 0, <TabItem key="tabBar-split" />)
    }
    return (
      <section className="tab-bar">
        <section className="add-item">
          <Link to="/category">
            <i className="icon iconfont iconjiahao"></i>
          </Link>
        </section>
        {newChildren}
      </section>
    )
  }
}

TabItem.defaultProps = {
  icon: ''
};

export default TabBar;
