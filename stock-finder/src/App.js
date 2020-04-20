import React, { Component } from 'react';
import Landing from './components/Landing'
import './App.css';
import axios from 'axios';

const token = 'bqeego7rh5rashj8v9tg'


class App extends Component {
  state = {
    stock: []
  }

  async componentDidMount(){
    const res = await axios.get(`https://finnhub.io/api/v1/stock/exchange?token=${token}`)
    console.log(res)
    this.setState({stock: res.data})
    console.log(this.state.stock)
  }




render(){
  return (
    <div className="App">
      <h1>hello</h1>
      <Landing stocks={this.state.stock}/>
    </div>
  );
  }
}
export default App;
