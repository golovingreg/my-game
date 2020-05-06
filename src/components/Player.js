import React from 'react';
import knight from '../characters/players.js';



const Player = () => {
	return(
		<div>
			<h1>Your character:</h1>
			<ul>
				<li>{knight.name}</li>
				<li>HP: {knight.hp}</li>
				<li>Defense: {knight.def}</li> 
				<li>Strength: {knight.str}</li> 
				<li>Dexterity: {knight.dex}</li> 
				<li>Wisdom: {knight.wis}</li> 
			</ul>
		</div>
	)
}

export default Player;