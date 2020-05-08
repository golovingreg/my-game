import Dice from '../Dice';

const dragon = {
	name: "Dragon",
	str: 12,
	def: 5,
	hp: 50,
	wis: 10,
	dex: 10,
// 	attack(target) {
// 		console.log(`${this.name} attacks ${target.name}`);
// 		let check;
// 		let damage;
// 		check = Dice.roll(20);
// 		if (check > target.def) {
// 			console.log(
// `attack check is ${check}
// ${target.name}'s def is ${target.def}
// ${this.name} attacks`);
// 			damage = Dice.roll(6) + (this.str / 2);
// 			target.hp = target.hp - damage;
// 			console.log(`${damage} damade dealt and ${target.name} has ${target.hp} hp points left`);
// 		} else {
// 			console.log(
// `attack check is ${check}
// ${target.name}'s def is ${target.def}
// ${target.name} blocks`
// 			);
// 		}
// 	},
// 	flee(target) {
// 		console.log(`${this.name} tries to escape from ${target.name}`);
// 		let escCheck = Dice.roll(20) + (this.dex/2);
// 		if (escCheck > target.wis) {
// 			console.log(
// `escape check is ${escCheck}
// ${target.name}'s wisdom is ${target.wis}
// ${this.name} escapes`);
// 		} else {
// 			console.log(
// `escape check is ${escCheck}
// ${target.name}'s wisdom is ${target.wis}
// ${this.name} can't escape and the fight continues`
// 				);
// 		}
// 	}
}


export default dragon;