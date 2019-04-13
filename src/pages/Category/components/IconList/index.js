import React from 'react';
import './index.less';

const mapList = (list, active, onSelect) => {
  return list.map(item => {
    const activeClass = active.id === item.id ? 'active' : ''
    return (
      <li key={item.id} className="list-item" onClick={ () => {onSelect(item)} }>
        <section className={`icon-wrap ${activeClass}`}>
          <i className={`icon iconfont ${item.icon}`}></i>
        </section>
        <span className="type">{ item.name }</span>
      </li>
    )
  })
}

const IconList = ({list, active, onSelect}) => {
  return (
    <ul className="icon-list">
      { mapList(list, active, onSelect) }
    </ul>
  )
}

export default IconList;
