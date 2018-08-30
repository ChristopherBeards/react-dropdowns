import React, { Component } from 'react';
import './App.css';

import Options from './Options';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <Options />
        </div>
      </div>
    );
  }
}

export default App;
