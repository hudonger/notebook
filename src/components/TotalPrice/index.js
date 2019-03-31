import React from 'react';
import './index.less'

const TotalPrice = ({ income, outcome }) => {
  return (
    <section className="total-price">
      <section className="income">
        <section className="title">收入</section>
        <section className="number">{ income }</section>
      </section>
      <section className="outcome">
        <section className="title">支出</section>
        <section className="number">{ outcome }</section>
      </section>
    </section>
  )
}

export default TotalPrice;
