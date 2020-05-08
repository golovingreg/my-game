import React, { Component } from 'react';
import dragon from '../../characters/monsters';


class Enemy extends Component {
	constructor() {
		super();
		this.state = {
			hp: 50,
			def: dragon.def,
			str: dragon.str,
			dex: dragon.dex,
			wis: dragon.wis
		}
	}
	


	render() {
		return(
			<div>
				<h2>Your enemy:</h2>
				<ul>
					<li>{dragon.name}</li>
					<li>HP: {this.state.hp}</li>
					<li>Defense: {this.state.def}</li> 
					<li>Strength: {this.state.str}</li> 
					<li>Dexterity: {this.state.dex}</li> 
					<li>Wisdom: {this.state.wis}</li> 
				</ul>
			</div>
		)
	}
}

export default Enemy;