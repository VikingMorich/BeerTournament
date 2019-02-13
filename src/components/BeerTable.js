import React, { Component } from 'react';
import BeerList from './BeerList';

class BeerTable extends Component {
  render() {
    return (
      <div>
        <h2>
          <u>InteriorFIFA Counter</u>
        </h2>
        <div className="BeerList">
          <BeerList />
        </div>
      </div>
    );
  }
}

export default BeerTable;
