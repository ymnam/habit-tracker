import React, { Component } from 'react';

class NavBar extends Component {
  render() {
    return (
      <div className="nav-bar">
        <button className="title">
          <i className="fas fa-leaf"></i>
        </button>
        <span className="habit">Habit Tracker</span>
        <span className="count">{this.props.navBar.count}</span>
      </div>
    );
  }
}

export default NavBar;
