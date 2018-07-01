import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// using ES6 modules
import { Link, BrowserRouter, Route } from 'react-router-dom';
import { Router, Switch } from 'react-router';
import BeerTable from './components/BeerTable';
import AddBeer from './components/AddBeer';
import PayBeer from './components/PayBeer';
import MyBeers from './components/MyBeers';
import Footer from './components/Footer';

class App extends Component {
  constructor() {
    super();
    this.state = {
      menuOptions: [
        { id: 1, name: 'Add a payment', link: '/add' },
        { id: 2, name: 'Pay a beer', link: '/pay' },
        { id: 4, name: 'Beer List', link: '/' },
        { id: 3, name: 'My beers', link: '/mybeers' }
      ]
    };
  }
  render() {
    const menuItems = this.state.menuOptions.map(item => (
      <Link className="MenuOption" key={item.id} to={item.link}>
        <p>
          <b>{item.name}</b>
        </p>
      </Link>
    ));
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">🤘🏼🍺 Beer Tournament 🍺🤘🏼</h1>
          </header>
          <div className="TopMenu">{menuItems}</div>
          <Route exact path="/" component={BeerTable} />
          <Route exact path="/add" component={AddBeer} />
          <Route exact path="/pay" component={PayBeer} />
          <Route exact path="/mybeers" component={MyBeers} />
          <Route path="/" component={Footer} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
