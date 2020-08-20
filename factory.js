const monster_button = document.getElementById('monster-button');

const monster = () => {
	const sound = 'BIRL!!!';
	const age = 37;
	const enemy = 'Árvores do parque Ibirapuera';

	return {
		train: () => {
			console.log(sound);
			console.log(age);
			console.log(enemy);
		},
	};
};

const bodybuilder = monster();
bodybuilder.train();
// BIRL!!!, 37, Árvores do parque Ibirapuera

monster_button.addEventListener('click', bodybuilder.train);
// BIRL!!!, 37, Árvores do parque Ibirapuera
