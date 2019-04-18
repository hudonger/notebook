import React, { Component } from 'react';
import axios from 'axios';
import './Detail.less';

class Detail extends Component {
  state = {
    detail: {}
  }

  componentDidMount () {
    console.log(this.props.match.params.id);
    axios.get('http://localhost:4000/detail').then(res => {
      this.setState({
        detail: res.data
      })
    })
  }

  goBack = () => {
    this.props.history.goBack();
  }

  toEdit = () => {
    this.props.history.push({
      pathname: '/category',
      state: {
        isEdit: true
      }
    });
  }

  render () {
    const {detail} = this.state;
    return (
      <section className="detail-page" style={{zIndex: 2}}>
        <header>
          <section className="back" onClick={this.goBack}>&lt;</section>
          <section className="icon-wrap">
            <i className={`icon iconfont ${detail.icon}`}></i>
          </section>
          <h2>{detail.name}</h2>
        </header>
        <section className="content">
          <ul>
            <li>
              <span className="label">类型</span>
              <span>{detail.type === 'income' ? '收入' : '支出'}</span>
            </li>
            <li>
              <span className="label">金额</span>
              <span>{detail.price}</span>
            </li>
            <li>
              <span className="label">日期</span>
              <span>{detail.date}</span>
            </li>
            <li>
              <span className="label">备注</span>
              <span>{detail.content}</span>
            </li>
          </ul>
        </section>
        <section className="btns">
          <section className="btn edit" onClick={this.toEdit}>编辑</section>
          <section className="btn delete" onClick={this.goBack}>删除</section>
        </section>
      </section>
    )
  }
}

export default Detail;
