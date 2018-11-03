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

  render() {
    return (
      <div className="App">
        <select>
          <option value="">-- pick a model --</option>
          {Object.keys(this.state).map(computer =>
            <option key={computer} value={computer}>{computer} ({this.state[computer].year})</option>
          )}
        </select>
      </div>

    );
  }
}

export default App;
