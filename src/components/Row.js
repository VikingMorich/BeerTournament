import React, { Component } from 'react';

class Row extends Component {
  constructor(props) {
    super();
    this.props = props;
  }
  render() {
    return (
      <div className="ListRow">
        <h2 className="ListElementDebt">
          {this.props.data.loser} -> {this.props.data.winner}
        </h2>
        <h2 className="ListElementNumber">{this.props.data.beers}</h2>
      </div>
    );
  }
}

export default Row;
