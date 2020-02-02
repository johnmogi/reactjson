// FILE: App.js
import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
  constructor() {
    super();
    this.state = { data: [] };
  }

  async componentDidMount() {
    try {
      const res = await fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`);
      // const res = await fetch(`https://sandbox-api.coinmarketcap.com/v1/cryptocurrency/listings/latest`);
      if (!res.ok) {
        throw Error(res.statusText);
      }
      const json = await res.json();
      this.setState({ data: json });
      console.log(this.state.data);
    } catch (error) {
      console.log(error);
    }
  }

  render() {
    return (
      <div>
        <ul>
          {this.state.data.map(el => (
            <li>
              {el.name}: {el.price_usd}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default App;

// ReactDOM.render(<App />, document.getElementById("app"));