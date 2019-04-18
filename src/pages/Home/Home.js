import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';
import TotalPrice from '@/components/TotalPrice';
import PriceList from '@/components/PriceList';
import { parseToYearAndMonth } from '@/utils/utils';
import withContext from '@/components/withContext';
import './Home.less';


class Home extends Component {
  state = {
    currentDate: new Date()
  }

  handleDataSelect = date => {
    this.setState({
      currentDate: date
    })
  }

  render () {
    const { currentDate } = this.state;
    const { noteList } = this.props.data.state;
    const { year, month } = parseToYearAndMonth(currentDate);
    const showList = noteList.filter(item => item.date.includes(`${year}-${month}`))

    let totalIncome = 0;
    let totalOutcome = 0;
    showList.forEach(item => {
      item.items.forEach(v => {
        if (v.category.type === 'income') {
          totalIncome += v.price;
        } else {
          totalOutcome += v.price;
        }
      })
    })

    return (
      <section className="home-page">
        <header className="home-header">
          <section className="logo">咸鱼账本</section>
          <section className="header-content">
            <section className="date-wrap">
              <DatePicker
                mode="month"
                value={ currentDate }
                onChange={ this.handleDataSelect }>
                <section>
                  <section className="year">{ year }年</section>
                  <section className="month">
                    <span>{ month }</span>
                    <span style={{ fontSize: 12 }}>月</span>
                    <span className="icon iconfont">&#xe62b;</span>
                  </section>
                </section>
              </DatePicker>
            </section>
            <section className="space-line"></section>
            <TotalPrice income={ totalIncome } outcome={ totalOutcome } />
          </section>
        </header>
        <PriceList list={ showList } onTap={ (i) => {console.log(i)} } />
      </section>
    )
  }
}

export default withContext(Home);
