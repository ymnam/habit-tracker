import React, { Component } from 'react';

class Input extends Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    const name = event.target.value;
    this.setState({ name });
  };

  handleAdd = () => {
    this.props.onAdd(this.state.name);
  };

  render() {
    return (
      <>
        <input
          placeholder="Habit"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <button onClick={this.handleAdd}>add</button>
      </>
    );
  }
}

export default Input;
