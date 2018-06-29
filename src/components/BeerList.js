import React, { Component } from 'react';
import Row from './Row';

class BeerList extends Component {
  componentWillMount() {
    this.data = [
      { loser: 'Romo', winner: 'Moriche', beers: 4, id: 1 },
      { loser: 'Moriche', winner: 'Casvil', beers: 2, id: 2 },
      { loser: 'DonCalzon', winner: 'Oylla', beers: 1, id: 3 }
    ];
  }
  render() {
    return this.data.map(item => <Row data={item} key={item.id} />);
  }
}

export default BeerList;
