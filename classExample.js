const monster_button = document.getElementById('monster-button');

class Monster {
	constructor() {
		this.sound = 'BIRL!!!';
		this.age = 37;
		this.enemy = 'Árvores do parque Ibirapuera';
	}
	train() {
		console.log(this.sound);
		console.log(this.age);
		console.log(this.enemy);
	}
}

const bodybuilder = new Monster();
bodybuilder.train();
// BIRL!!!, 37, Árvores do parque Ibirapuera

monster_button.addEventListener('click', bodybuilder.train);
// undefined, undefined, undefined
monster_button.addEventListener('click', bodybuilder.train.bind(bodybuilder));
// BIRL!!!, 37, Árvores do parque Ibirapuera
monster_button.addEventListener('click', () => bodybuilder.train());
// BIRL!!!, 37, Árvores do parque Ibirapuera
