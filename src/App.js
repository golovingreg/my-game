import React, { Component } from 'react';
import './App.css';
import Main from './components/main/Main';
import Player from './components/player/Player';
import Actions from './components/actions/Actions';
import Info from './components/info/Info';
import Dice from './Dice';
import Enemy from './components/main/Enemy';


class App extends Component {
    constructor() {
    super();
    this.state = {
      display: 'story'
    }
  };

  toBattle = () => {
    this.setState({ display: 'battle' });
  };

  toStory = () => {
    this.setState({ display: 'story' });
  };

  toStory2 = () => {
    this.setState({ display: 'story2' });
  };

  attack = () => {
    let check;
    let damage;
    check = Dice.roll(20);
    if (check > Enemy.state.def) {
      damage = Dice.roll(6) + (Player.state.str / 2);
      Enemy.state.hp = Enemy.state.hp - damage;
    } else {
        console.log('block')
      }
  }

  render() {
    return (
      <div className="app">
        <div className="part"><Main attack={this.attack}
                                    display={this.state.display}/></div>
        <div className="part"><Player /></div>
        <div className="part"><Actions toBattle={this.toBattle} 
                                       toStory={this.toStory}
                                       toStory2={this.toStory2}
                                       attack={this.attack}
                                       display={this.state.display}/></div>
        <div className="part"><Info /></div>
      </div>
    );
  }
}

export default App;
