import React, { Component } from 'react';
import { LineChart, Line } from 'recharts';
import './Charts.less'

const chartData = [
  {value: 100, name: '一'},
  {value: 200, name: '二'},
  {value: 300, name: '三'},
  {value: 180, name: '四'},
  {value: 220, name: '五'}
]

class Charts extends Component {
  render () {
    return (
      <section className="charts-page">
        <LineChart
          width={300}
          height={300}
          data={chartData}
        >
          <Line type="monotone" dataKey="value" stroke="#ccc" />
        </LineChart>
      </section>
    )
  }
}

export default Charts;
