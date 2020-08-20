const villain = {
	slogan_1: {
		text: 'Ahhhh!!! to com depressão!!!',
	},
	slogan_2: {
		text: 'Mentira!!!',
	},
};

// 3 - JSON
const villain_3 = JSON.parse(JSON.stringify(villain));
villain_3.slogan_2.text = 'Mentira to aqui com minha Buduvieser!!!';
console.log(villain_3);
//Ahhhh!!! to com depressão!!!, Mentira to aqui com minha Buduvieser!!!

console.log(villain);
// Ahhhh!!! to com depressão!!!, Mentira!!!
