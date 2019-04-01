import React, { Component } from 'react';
import PriceList from './components/PriceList';
import Header from './containers/Header/index';

const list = [
  {
    "id": 1,
    "date": "2019-03-20",
    "items": [
      {
        "id": 10001,
        "title": "海底捞",
        "price": 300,
        "category": {
          "name": "餐饮",
          "type": "outcome"
        }
      },
      {
        "id": 10002,
        "title": "买衣服",
        "price": 500,
        "category": {
          "name": "购物",
          "type": "outcome"
        }
      }
    ]
  },
  {
    "id": 2,
    "date": "2019-03-10",
    "items": [
      {
        "id": 20001,
        "title": "工资收入",
        "price": 10000,
        "category": {
          "name": "工资",
          "type": "income"
        }
      }
    ]
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <PriceList list={list} onTap={(i) => {console.log(i)}} />
      </div>
    );
  }
}

export default App;
