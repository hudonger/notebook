import React from 'react';
import CountTo from '@/components/CountTo';
import './index.less'

const TotalPrice = ({ income, outcome }) => {
  return (
    <section className="total-price">
      <section className="income">
        <section className="title">收入</section>
        <section className="number">
          <CountTo id="incomeCount" duration={.5} end={income} />
        </section>
      </section>
      <section className="outcome">
        <section className="title">支出</section>
        <section className="number">
          <CountTo id="outcomeCount" duration={.5} end={outcome} />
        </section>
      </section>
    </section>
  )
}

export default TotalPrice;
