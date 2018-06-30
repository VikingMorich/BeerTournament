import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// using ES6 modules
import { Link, HashRouter, Route } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import BeerTable from './components/BeerTable';
import AddBeer from './components/AddBeer';
import Footer from './components/Footer';

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
      <div className="MenuOption" key={item.id}>
        <p>
          <b>{item.name}</b>
        </p>
      </div>
    ));
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">🤘🏼🍺 Beer Tournament 🍺🤘🏼</h1>
          </header>
          <div className="TopMenu">{menuItems}</div>
          <Route exact path="/" component={BeerTable} />
          <Route exact path="/add" component={AddBeer} />
          <Route path="/" component={Footer} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
