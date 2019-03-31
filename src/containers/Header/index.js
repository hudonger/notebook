import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';
import TotalPrice from '../../components/TotalPrice/index';
import './index.less'

class Header extends Component {
  state = {
    date: '',
    year: '2019年',
    month: '03'
  }

  handleDataSelect = (date) => {
    console.log(date)
  }

  render () {
    return (
      <header className="home-header">
        <section className="logo">咸鱼账本</section>
        <section className="header-content">
          <section className="date-wrap">
            <DatePicker
              mode="date"
              onChange={ this.handleDataSelect }
            >
              <section>
                <section className="year">{ this.state.year }</section>
                <section className="month">
                  <span>{ this.state.month }</span>
                  <span style={{ fontSize: 12 }}>月</span>
                  <span className="icon iconfont">&#xe62b;</span>
                </section>
              </section>
            </DatePicker>
          </section>
          <section className="space-line"></section>
          <TotalPrice income={ 1000 } outcome={ 20000 } />
        </section>
      </header>
    )
  }
}

export default Header
