import React, { Component } from 'react';
import './App.css';

import TaskMenu from './Components/TaskMenu'

class App extends Component {
  
  render(){

    return (
      <div className="App">
        <header className="App-header">
            <p>To-Do List</p>
        </header>
        <TaskMenu />
      </div>
    );
  }
}

export default App;
