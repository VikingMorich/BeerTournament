import React, { Component } from 'react';

class AddBeer extends Component {
  render() {
    return (
      <div className="AddPayment">
        <form>
          <table className="AddBeerForm">
            <thead />
            <tbody>
              <tr>
                <td>Winner:</td>
                <td>
                  <input type="text" name="winner" />
                </td>
              </tr>
              <tr>
                <td>Loser:</td>
                <td>
                  <input type="text" name="loser" />
                </td>
              </tr>
              <tr>
                <td>Number of beers:</td>
                <td>
                  <input type="number" name="xbeers" />
                </td>
              </tr>
            </tbody>
          </table>
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default AddBeer;
