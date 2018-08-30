import React, { Component } from 'react';
import DropDown from './DropDown';

class Options extends Component {
  state = {
    data: [
      {
        id: 1,
        name: 'Lambda Labs',
      },
      {
        id: 2,
        name: 'Patrick',
      },
      {
        id: 3,
        name: 'Sean',
      },
      {
        id: 4,
        name: 'BEEJ',
      },
      {
        id: 5,
        name: 'Debt Collector',
      },
    ],
  };

  render() {
    const { data } = this.state;
    return (
      <div>
        <DropDown data={data} />
      </div>
    );
  }
}

export default Options;
