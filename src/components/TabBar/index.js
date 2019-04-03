import React, { Component } from 'react';
import './index.less';

export const TabItem = (props) => {
  const {icon, active, onClick} = props
  const activeStyle = {
    color: active ? '#ffda44' : '#666',
  }

  return (
    <section className="tab-item" style={activeStyle} onClick={onClick}>
      <i className={`icon iconfont ${icon}`}></i>
      <span>{props.children}</span>
    </section>
  )
}

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
          <i className="icon iconfont iconjiahao"></i>
        </section>
        {newChildren}
      </section>
    )
  }
}

TabItem.defaultProps = {
  icon: ''
}

export default TabBar
