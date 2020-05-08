import React, { Component } from 'react';
import Enemy from './Enemy';



class Log extends Component {
	constructor() {
		super();
		this.state = {
			hp: 50,
			def: 5,
			str: 12,
			dex: 10,
			wis: 10
		}
	}

	render() {
		return(
		<div className="log">
			<div>
				<h1>Battle log will be displayed here if you encounter an enemy. Attack doesn't work for now</h1>
			</div>
			<div>
				<h2>Your enemy:</h2>
				<ul>
					<li>Dragon</li>
					<li>HP: {this.state.hp}</li>
					<li>Defense: {this.state.def}</li> 
					<li>Strength: {this.state.str}</li> 
					<li>Dexterity: {this.state.dex}</li> 
					<li>Wisdom: {this.state.wis}</li> 
				</ul>
			</div>
		</div>
		)
	}	
}

export default Log;