import React, { Component } from 'react';
import dragon from '../characters/monsters';


class Enemy extends Component {

		
	render() {
		return(
			<div>
				<h2>Your enemy:</h2>
				<ul>
					<li>{dragon.name}</li>
					<li>HP: {dragon.hp}</li>
					<li>Defense: {dragon.def}</li> 
					<li>Strength: {dragon.str}</li> 
					<li>Dexterity: {dragon.dex}</li> 
					<li>Wisdom: {dragon.wis}</li> 
				</ul>
			</div>
		)
	}
}

export default Enemy;