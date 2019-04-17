import React, { Component } from 'react';
import './Detail.less';

class Detail extends Component {
  render () {
    return (
      <section className="detail-page" style={{zIndex: 2}}>
        <header>
          <section className="back">&lt;</section>
          <section className="icon-wrap">
            <i className="icon iconfont icon92"></i>
          </section>
          <h2>餐饮</h2>
        </header>
        <section className="content">
          <ul>
            <li>
              <span className="label">类型</span>
              <span>支出</span>
            </li>
            <li>
              <span className="label">金额</span>
              <span>700</span>
            </li>
            <li>
              <span className="label">日期</span>
              <span>2019年3月20日 星期六</span>
            </li>
            <li>
              <span className="label">备注</span>
              <span>哈哈哈哈啊哈哈哈啊哈哈啊哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</span>
            </li>
          </ul>
        </section>
        <section className="btns">
          <section className="btn edit">编辑</section>
          <section className="btn delete">删除</section>
        </section>
      </section>
    )
  }
}

export default Detail;
