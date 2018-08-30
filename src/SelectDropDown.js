import React, { Component } from 'react';

class SelectDropDown extends Component {
  render() {
    const { data } = this.props;

    const selectOptions = data.map(option => (
      <option key={option.id}>{option.name}</option>
    ));

    return (
      <div className="form-group">
        <h1>For Smaller Needs</h1>
        <select>{selectOptions}</select>
      </div>
    );
  }
}

export default SelectDropDown;
