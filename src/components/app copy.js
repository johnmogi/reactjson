// import React { Component } from 'react';
import React ,{ Component } from 'react';

class App extends Component {
  state = {
    coins: []
    }
  componentDidMount() {
    // fetch('https://min-api.cryptocompare.com/data/all/exchanges') //this
    fetch('https://api.coingecko.com/api/v3/coins/list/') //this returns an arr
    .then(res => res.json())
    .then((data) => {
      // console.log(data)
// for (const i in data) {
// while(this.state.coins.length<11){
//     this.state.coins.push(i)
// }


      // this.state.coins.push(data)
      
      this.setState({ coins: data.splice(0,10) })
      // console.log(this.state.coins)
    })
    .catch(console.log)
  }
  render() {

    return (
       <div className="container">
        <h1>My coins</h1>
        <div className="row">
        {this.state.coins.map((coin) => (
          <div className="col-4"  >
          <div className="card" id={coin.id}>
            <div className="card-body">
              <h5 className="card-title">{coin.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">
              { coin.symbol  }

              </h6>
            </div>
          </div>
        </div>
        ))}
        </div>
        </div>
    );
  }

}
export default App;