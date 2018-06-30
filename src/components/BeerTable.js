import React, { Component } from 'react';
import BeerList from './BeerList';

class BeerTable extends Component {
  render() {
    return (
      <div>
        <h3>Counter</h3>
        <div className="BeerList">
          <BeerList />
        </div>
      </div>
    );
  }
}

export default BeerTable;
