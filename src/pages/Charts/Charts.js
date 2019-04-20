import React, { Component } from 'react';
import F2 from '@antv/f2';
import './Charts.less';

const inData = [
  { month: '1月', money: 10000 },
  { month: '2月', money: 10000 },
  { month: '3月', money: 9500 },
  { month: '4月', money: 10000 },
  { month: '5月', money: 10000 },
  { month: '6月', money: 10000 },
  { month: '7月', money: 11000 },
  { month: '8月', money: 10000 },
  { month: '9月', money: 10000 },
  { month: '10月', money: 12000 },
  { month: '11月', money: 12000 },
  { month: '12月', money: 12000 },
];

const outData = [
  { month: '1月', money: 2700 },
  { month: '2月', money: 3000 },
  { month: '3月', money: 2100 },
  { month: '4月', money: 3200 },
  { month: '5月', money: 1800 },
  { month: '6月', money: 2550 },
  { month: '7月', money: 2700 },
  { month: '8月', money: 3000 },
  { month: '9月', money: 2400 },
  { month: '10月', money: 4100 },
  { month: '11月', money: 2000 },
  { month: '12月', money: 2200 },
];

class Charts extends Component {
  state = {
    currentTab: 'income',
    chartData: inData,
    myChart: null
  }

  initChart () {
    this.setState({
      myChart: new F2.Chart({
        id: 'myChart',
        pixelRatio: window.devicePixelRatio
      })
    }, () => {
      const {myChart} = this.state;
      myChart.source(this.state.chartData);
      myChart.interval().position('month*money').color('#ffda44');
      myChart.render();
    })
  }

  updateChart (data) {
    this.state.myChart.changeData(data);
  }

  handleChage = (currentTab) => {
    this.setState({
      currentTab,
      chartData: currentTab === 'income' ? inData : outData
    }, () => {
      this.updateChart(this.state.chartData)
    })
  }

  componentDidMount () {
    this.initChart()
  }

  render () {
    return (
      <section className="charts-page">
        <header>
          <section className="tabs">
            <section
              className={`btn income ${this.state.currentTab === 'income' ? 'active' : ''}`}
              onClick={() => {this.handleChage('income')}}
            >收入</section>
            <section
              className={`btn outcome ${this.state.currentTab === 'outcome' ? 'active' : ''}`}
              onClick={() => {this.handleChage('outcome')}}
            >支出</section>
          </section>
        </header>
        <section className="content">
          <canvas id="myChart"></canvas>
        </section>
      </section>
    )
  }
}

export default Charts;
