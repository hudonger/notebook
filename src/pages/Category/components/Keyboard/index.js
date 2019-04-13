import React, { Component } from 'react';
import { DatePicker } from 'antd-mobile';
import keyInfo from './keyboard.config';
import { formatDate } from '@/utils/utils';
import './index.less';

class Keyboard extends Component {
  state = {
    total: '',
    inputValue: '',
    currentDate: new Date()
  }

  // 渲染表格 tr
  renderTable (table) {
    return table.map((item, index) => <tr key={index}>{this.renderCol(item)}</tr>)
  }

  // 渲染 td
  renderCol (column) {
    return column.map(item => {
      let element = item.key
      if (item.type === 'icon') {
        element = <span className={`icon iconfont ${item.key}`}></span>
      } else if (item.type === 'date') {
        element = (
          <section onClick={e => {e.stopPropagation()}}>
            <DatePicker
              mode="date"
              value={this.state.currentDate}
              onChange={this.handleDataSelect}
            >
              <span>{formatDate(this.state.currentDate)}</span>
            </DatePicker>
          </section>
        )
      }
      return (
        <td
          key={item.key}
          className={item.type}
          onClick={() => {this.handleClick(item)}}
        >
          {element}
        </td>
      )
    })
  }

  // 日期选择
  handleDataSelect = date => {
    this.setState({
      currentDate: date
    })
  }

  // 备注信息
  handleInputChange = (e) => {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick = data => {
    const { inputValue, total, currentDate } = this.state
    if (data.type === 'number') { // 点击数字键盘
      if (total.length >= 8) return
      if (total === '' && data.key === '0') return
      this.setState(prevState => ({
        total: prevState.total + data.key
      }))
    } else if (data.type === 'clear') { // 点击清零按钮
      this.setState({
        total: ''
      })
    } else if (data.type === 'icon') { // 点击删除按钮
      const list = total.split('')
      list.pop()
      this.setState({
        total: list.join('')
      })
    } else if (data.type === 'back') {
      this.props.onHide()
    } else if (data.type === 'complete') {
      this.props.onComplete({
        content: inputValue,
        price: Number(total),
        date: currentDate
      })
    }
  }

  render () {
    return (
      <section className="keyboard">
        <section className="input-wrap">
          <input
            type="text"
            placeholder="点击写备注..."
            value={this.state.inputValue}
            onChange={this.handleInputChange}
          />
          <span className="total">{this.state.total || 0}</span>
        </section>
        <table>
          <tbody>
            {this.renderTable(keyInfo)}
          </tbody>
        </table>
      </section>
    )
  }
}

export default Keyboard;
