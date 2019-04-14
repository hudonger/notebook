import React from 'react';
import PropTypes from 'prop-types';
import './index.less';

const renderContentList = (items, onTap) => {
  return items.map(item => (
    <section key={item.id} className="content" onClick={() => {onTap(item)}}>
      <span className={`icon iconfont ${item.icon}`}></span>
      <span className="title">{item.title}</span>
      <span className="price">{item.category.type === 'income' ? '+' : '-'}{item.price}</span>
    </section>
  ))
};

const PriceList = ({list, onTap}) => {
  return (
    <ul className="list-group">
      {
        list.map(item => (
          <li key={item.id} className="list-item">
            <section className="header">
              <section className="date">{item.date}</section>
            </section>
            {renderContentList(item.items, onTap)}
          </li>
        ))
      }
    </ul>
  )
};

PriceList.propTypes = {
  list: PropTypes.array.isRequired,
  onTap: PropTypes.func.isRequired,
};

PriceList.defaultProps = {
  list: []
};

export default PriceList;
