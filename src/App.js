import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
// using ES6 modules
import { Router, Route, Switch } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">🤘🏼🍺 - Beer Tournament - 🍺🤘🏼</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
