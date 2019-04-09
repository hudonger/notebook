import React from 'react';
import './index.less'

const Tabs = ({ active, onTabChange }) => {
  return (
    <section className="tabs-component">
      <section
        className={`tab-item ${active === 'outcome' ? 'active' : ''}`}
        onClick={ () => {onTabChange('outcome')} }>
        支出
      </section>
      <section
        className={`tab-item ${active === 'income' ? 'active' : ''}`}
        onClick={ () => {onTabChange('income')} }>
        收入
      </section>
    </section>
  )
}

export default Tabs;
