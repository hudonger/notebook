import React from 'react';
import './index.less';

const mapList = list => {
  return list.map(item => (
    <li key={item} className="list-item">
      <section className="icon-wrap">
        <i className="icon iconfont icon92"></i>
      </section>
      <span className="type">餐饮</span>
    </li>
  ))
}

const IconList = ({list}) => {
  return (
    <ul className="icon-list">
      { mapList(list) }
    </ul>
  )
}

export default IconList;
