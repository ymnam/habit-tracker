import React, { Component } from 'react';

class Reset extends Component {
  render() {
    return <button onClick={this.props.onResetAll}>reset All</button>;
  }
}

export default Reset;
