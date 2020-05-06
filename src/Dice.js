// import React from 'react';



const Dice = {
	set: [4,6,8,10,12,20],
	bigRoll: (how, one) => {
		let result = [];
		for (let i = 0; i < how; i++) {
			Dice.set.forEach(item => {
				if (one === item) {
					result.push(Math.floor(Math.random() * (one - 1) ) + 1);
				} 
			});
		}
		return result;
	},
	roll: (one) => {
		let result;
		Dice.set.forEach(item => {
			if (one === item) {
				result = (Math.floor(Math.random() * (one - 1) ) + 1);
			} 
		});
		return result;	
	}

}


export default Dice;