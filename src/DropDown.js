import React, { Component } from 'react';
import classnames from 'classnames';

class DropDown extends Component {
  // Adding default state as a placeholder
  state = {
    toggled: false,
    selected: 'Please Select a Summary',
  };

  // Toggles the drop down menu to appear based on the boolean value of state
  handleToggle = () => {
    this.setState({
      toggled: !this.state.toggled,
    });
  };

  // Allows us to select an li and set our state with the given value
  handleClick = name => {
    this.setState({
      selected: name,
    });
  };

  render() {
    const { data } = this.props;
    const { toggled, selected } = this.state;

    const list = data.map(data => (
      <li
        className="list-group-item"
        key={data.id}
        name={data.name}
        // Bound the this context for scoping due to having a function for each iteration
        onClick={this.handleClick.bind(this, data.name)}
        style={{ cursor: 'pointer' }}
      >
        {data.name}
      </li>
    ));

    return (
      <div className="card card-body mb-3">
        <div className="jumbotron">
          <div className="container">
            <h3 style={{ fontSize: '40px' }} className="text-primary">
              {selected}
            </h3>
          </div>
        </div>
        <h4>
          Lambda School{' '}
          <i
            // Dynamically assigns a classname based on the value of this.toggled
            className={classnames({
              'fa fa-arrow-down': toggled === false,
              'fa fa-arrow-right': toggled === true,
            })}
            style={{ cursor: 'pointer' }}
            onClick={this.handleToggle}
          />
        </h4>
        {toggled ? <ul className="list-group">{list}</ul> : null}
      </div>
    );
  }
}

export default DropDown;
