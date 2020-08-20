const woody_woodpecker = (slogan = 'slogan_1') => {
	const _private_state = {
		slogan_1: 'E lá vamos nós!',
		slogan_2: 'Ora Frank, falando francamente, sejamos amigos em?',
	};

	const _private_method = (key) => {
		return _private_state[key] || 'Yo no lo conozco, señor';
	};

	return {
		slogan_1: {
			text: 'Essa gente inventa cada coisa',
		},
		slogan_2: {
			text: () => 'Essa vai ser a minha melhor vigarice',
		},
		slogan_3: {
			text: () => {
				const option = _private_method(slogan);
				return `Frase Selecionada: ${option}`;
			},
		},
	};
};

let woody_woodpecker_1 = woody_woodpecker();
console.log(woody_woodpecker_1.slogan_1.text);
console.log(woody_woodpecker_1.slogan_2.text());
console.log(woody_woodpecker_1.slogan_3.text());
// Frase Selecionada: E lá vamos nós!

woody_woodpecker_1 = null;
delete woody_woodpecker_1;

let woody_woodpecker_2 = woody_woodpecker('slogan_1');
console.log(woody_woodpecker_2.slogan_3.text());
// Frase Selecionada: E lá vamos nós!

let woody_woodpecker_3 = woody_woodpecker('slogan_2');
console.log(woody_woodpecker_3.slogan_3.text());
// Frase Selecionada: Ora Frank, falando francamente, sejamos amigos em?

let woody_woodpecker_4 = woody_woodpecker('slogan_3');
console.log(woody_woodpecker_4.slogan_3.text());
// Frase Selecionada: Yo no lo conozco, señor
