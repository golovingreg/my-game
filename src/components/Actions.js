import React, { Component } from 'react';
import knight from '../characters/players.js';
import dragon from '../characters/monsters.js';






class Actions extends Component {
	render() {
		return(
		<div>
			<button onClick={() => knight.attack(dragon)}>Attack</button>
			<button onClick={() => knight.flee(dragon)}>Flee</button>
		</div>	
		)
	}	
}

export default Actions;