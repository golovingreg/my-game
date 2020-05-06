import React, { Component } from 'react';
import './App.css';
import Log from './components/Log';
import Player from './components/Player';
import Actions from './components/Actions';
import Info from './components/Info';
// import Dice from './Dice';


class App extends Component {
  render() {
    return (
      <div className="app">
        <div className="part"><Log /></div>
        <div className="part"><Player /></div>
        <div className="part"><Actions /></div>
        <div className="part"><Info /></div>
      </div>
    );
  }
}

export default App;
