import React from 'react';
// import knight from '../../characters/players';
// import dragon from '../../characters/monsters';






const Actions = ( {display, toBattle, toStory, toStory2, attack } ) => {
		if (display === 'story') {
			return (
				<div className='actionsPanel'>
					<button onClick={toBattle}>Fight the dragon!</button>
					<button onClick={toStory2}>Look at the mountains</button>
				</div>
			)
		} else if (display === 'story2') {
			return (
				<div className='actionsPanel'>
					<button onClick={toStory}>I'm tired, let's go back</button>
				</div>
			)
		} else if (display === 'battle') {
			return (
				<div className='actionsPanel'>
					<button onclick={attack}>Attack</button>
					<button onClick={toStory}>Flee</button>
				</div>
			)
		}
	}

export default Actions;