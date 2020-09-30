import React, { Component } from 'react';
import './app.css';
import Habits from './components/habits';
import NavBar from './components/navBar';
import Input from './components/input';
import Reset from './components/reset';

class App extends Component {
  state = {
    navBar: {
      count: 0,
    },
    habits: [
      { id: 1, name: 'Reading', count: 0 },
      { id: 2, name: 'Running', count: 0 },
      { id: 3, name: 'coding', count: 0 },
    ],
  };

  handleIncrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    habits[index].count++;

    const count = this.state.navBar.count + 1;
    const navBar = { count };

    this.setState({ navBar, habits });
  };

  handleDecrement = (habit) => {
    const habits = [...this.state.habits];
    const index = habits.indexOf(habit);
    const habitCount = habits[index].count - 1;

    const count = this.state.navBar.count - (habitCount < 0 ? 0 : 1);
    habits[index].count = habitCount < 0 ? 0 : habitCount;

    const navBar = { count };
    this.setState({ navBar, habits });
  };

  handleDelete = (habit) => {
    const habits = this.state.habits.filter((item) => item.id !== habit.id);
    this.setState({ habits });
  };

  handleResetAll = () => {
    const navBar = { count: 0 };
    const habits = [];
    this.setState({ navBar, habits });
  };

  handleAdd = (name) => {
    const habits = [...this.state.habits];
    habits.push({ id: habits.length + 1, name, count: 0 });
    const navBar = this.state.navBar;
    this.setState({ navBar, habits });
  };

  render() {
    return (
      <>
        <NavBar navBar={this.state.navBar} />
        <Input onAdd={this.handleAdd} />
        <Habits
          habits={this.state.habits}
          onIncrement={this.handleIncrement}
          onDecrement={this.handleDecrement}
          onDelete={this.handleDelete}
        />
        <Reset onResetAll={this.handleResetAll} />
      </>
    );
  }
}

export default App;
