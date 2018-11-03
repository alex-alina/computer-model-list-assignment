import React, { Component } from 'react';
import { connect } from 'react-redux';
import ModelDetails from './ModelDetails';

class App extends Component {

  state = {
    compModels: {
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
  }

  updateSelection = (event) => {
    event.preventDefault();
    this.setState({
      selectedValue: event.target.value
    })

  }

  addSelectedModel = (event) => {
    this.props.dispatch({
      type: "ADD_MODEL",
      payload: {
        ...this.state.compModels[this.state.selectedValue],
        name: this.state.selectedValue
      }
      
    })
  }

  render() {
    return (
      <div className="App">
        {this.props.selectedModels.map(
          model => < ModelDetails key={model.name} modelSpecs={model} />
        )}
        <select value={this.state.selectedValue} onChange={this.updateSelection}>
          <option value="">-- pick a model --</option>
          {Object.keys(this.state.compModels).map(computer =>
            <option key={computer} value={computer}>{computer} ({this.state.compModels[computer].year})</option>
          )}
        </select>
        <button onClick={this.addSelectedModel}>Add</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedModels: state
  }
}

export default connect(mapStateToProps)(App);
