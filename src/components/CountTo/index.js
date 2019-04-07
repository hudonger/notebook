import React, { Component } from 'react';
import CountUp from 'countup';
import PropTypes from 'prop-types';

class CountTo extends Component {
  initCounter () {
    const { 
      start = 0, // 起始值
      end = 0, // 结束值
      decimals = 2, // 要保留的小数位
      duration = 1, // 动画持续时间
     } = this.props;

    this.counter =  new CountUp(this.props.id, start, end, decimals, duration);
  }

  componentDidMount () {
    this.initCounter();

    setTimeout(() => {
      this.counter.start()
    }, this.props.delay);
  }

  componentDidUpdate () {
    setTimeout(() => {
      this.counter.update(this.props.end)
    }, this.props.delay);
  }

  render () {
    return <span id={ this.props.id }></span>
  }
}

CountTo.propTypes = {
  end: PropTypes.number.isRequired
};

export default CountTo;
