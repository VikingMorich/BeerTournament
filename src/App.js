import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// using ES6 modules
import { HashRouter, Router, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">🤘🏼🍺 Beer Tournament 🍺🤘🏼</h1>
        </header>
        <div className="TopMenu">
          <p className="MenuOption"><b>Add a payment</b></p>
          <p className="MenuOption"><b>Pay a beer</b></p>
          <p className="MenuOption"><b>Beer List</b></p>
        </div>
        <h3>Counter</h3>
        <div className="BeerList">
          <div className="ListRow">
            <h2 className="ListElementDebt">Casvil -> Moriche</h2>
            <h2 className="ListElementNumber">3</h2>
          </div>
          <div className="ListRow">
            <h2 className="ListElementDebt">Romo -> Moriche</h2>
            <h2 className="ListElementNumber">1</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
