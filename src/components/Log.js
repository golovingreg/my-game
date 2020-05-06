import React, { Component } from 'react';
import Enemy from './Enemy.js';





class Log extends Component {
	render() {
		return(
		<div className="log">
			<div>
				<h1>log</h1>
			</div>
			<div>
				<Enemy />
			</div>
		</div>
		)
	}	
}

export default Log;