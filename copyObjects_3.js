const villain = {
	slogan_1: {
		text: 'Ahhhh!!! to com depressão!!!',
	},
	slogan_2: {
		text: 'Mentira!!!',
	},
};

// 1 - Object.assign
const villain_1 = Object.assign({}, villain);
villain_1.slogan_1.text = 'Mentira to aqui com minha Buduvieser!!!';
console.log(villain_1);
// Mentira to aqui com minha Buduvieser!!!, Mentira!!!

// 2 - Spread Operator
const villain_2 = { ...villain };
villain_2.slogan_2.text = 'Mentira to aqui com minha Buduvieser!!!';
console.log(villain_2);
// Mentira to aqui com minha Buduvieser!!!, Mentira to aqui com minha Buduvieser!!!

console.log(villain);
// Mentira to aqui com minha Buduvieser!!!, Mentira to aqui com minha Buduvieser!!!
