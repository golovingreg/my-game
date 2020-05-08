import React from 'react';
import knight from '../../characters/players';



class Player extends React.Component {
	constructor() {
		super();
		this.state = {
			hp: knight.hp,
			def: knight.def,
			str: knight.str,
			dex: knight.dex,
			wis: knight.wis
		}
	}


	render() {
		return(
			<div>
				<h1>Your character:</h1>
				<ul>
					<li>{knight.name}</li>
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

export default Player;