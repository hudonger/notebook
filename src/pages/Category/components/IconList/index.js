import React from 'react';
import './index.less';

const mapList = (list, onSelect) => {
  return list.map(item => (
    <li key={item.id} className="list-item" onClick={ () => {onSelect(item)} }>
      <section className="icon-wrap">
        <i className={`icon iconfont ${item.icon}`}></i>
      </section>
      <span className="type">{ item.name }</span>
    </li>
  ))
}

const IconList = ({list, onSelect}) => {
  return (
    <ul className="icon-list">
      { mapList(list, onSelect) }
    </ul>
  )
}

export default IconList;
