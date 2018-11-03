import React, { Component } from 'react';


class App extends Component {

  state = {
    "Ivel Z3": {
      manufacturer: "Ivasim",
      year: 1969,
      origin: "Croatia"
    },
    "Bally Astrocade": {
      manufacturer: "Bally Consumer Products",
      year: 1977,
      origin: "USA"
    },
    "Sord M200 Smart Home Computer": {
      manufacturer: "Sord Computer Corporation",
      year: 1971,
      origin: "Japan"
    },
    "Commodore 64": {
      manufacturer: "Commodore",
      year: 1982,
      origin: "USA"
    }
  }
  
  updateSelection = (event) => {
    event.preventDefault();
    this.setState({
      selectedValue: event.target.value
    })
    
  }

  render() {
    return (
      <div className="App">
        <select value={this.state.selectedValue} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {Object.keys(this.state).map(computer =>
            <option key={computer} value={computer}>{computer} ({this.state[computer].year})</option>
          )}
        </select>
        {console.log(this.state)}
      </div>

    );
  }
}

export default App;
