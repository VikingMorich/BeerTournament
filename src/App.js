import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// using ES6 modules
import { Link } from 'react-router-dom';
import { Router, Route, Switch } from 'react-router';
import BeerList from './components/BeerList';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOptions: [
        { id: 1, name: 'Add a payment' },
        { id: 2, name: 'Pay a beer' },
        { id: 3, name: 'My beers' },
        { id: 4, name: 'Beer List' }
      ]
    };
  }
  render() {
    const menuItems = this.state.menuOptions.map(item => (
      <p className="MenuOption" key={item.id}>
        <p>{item.name}</p>
      </p>
    ));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">🤘🏼🍺 Beer Tournament 🍺🤘🏼</h1>
        </header>
        <div className="TopMenu">{menuItems}</div>
        <h3>Counter</h3>
        <div className="BeerList">
          <BeerList />
        </div>
        <div className="AddPayment">
          <form>
            Winner:
            <input type="text" name="winner" />
            Loser:
            <input type="text" name="loser" />
            Number of beers:
            <input type="number" name="xbeers" />
            <input type="submit" value="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
