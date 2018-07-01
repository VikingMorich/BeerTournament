import React, { Component } from 'react';

class PayBeer extends Component {
  render() {
    return (
      <div className="PayContainer">
        <h2>
          <u>Pay a Beer</u>
        </h2>
        <div className="AddPayment">
          <form>
            <table className="AddBeerForm">
              <thead />
              <tbody>
                <tr>
                  <td>From:</td>
                  <td>
                    <input type="text" name="from" />
                  </td>
                </tr>
                <tr>
                  <td>To:</td>
                  <td>
                    <input type="text" name="to" />
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
      </div>
    );
  }
}

export default PayBeer;
