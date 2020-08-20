const woody_woodpecker = () => {
	return {
		slogan_1: {
			text: 'Essa gente inventa cada coisa',
		},
		slogan_2: {
			text: () => 'Essa vai ser a minha melhor vigarice',
		},
	};
};

let woody_woodpecker_1 = woody_woodpecker();
console.log(woody_woodpecker_1.slogan_1.text);
// Essa gente inventa cada coisa
console.log(woody_woodpecker_1.slogan_2.text());
// Essa vai ser a minha melhor vigarice

woody_woodpecker_1 = null;
delete woody_woodpecker_1;

let woody_woodpecker_2 = woody_woodpecker();

let woody_woodpecker_3 = woody_woodpecker();
