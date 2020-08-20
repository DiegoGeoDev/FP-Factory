const fighter_input = document.getElementById('fighter-input');
const fighter_button = document.getElementById('fighter-button');

let is_there_some_task_running = false;

function getFighter(id) {
	if (!is_there_some_task_running) {
		is_there_some_task_running = true;

		console.log(`Lutador Id = ${id}`);

		setTimeout(() => {
			is_there_some_task_running = false;
			console.table({ name: 'Kakaroto', ki: 'Mais de 8000' });
		}, 5000);
	} else {
		console.warn('Já existe uma tarefa sendo executada');
	}
}

fighter_button.addEventListener('click', () => {
	const fighter_id = fighter_input.value;
	getFighter(fighter_id);
}); // {name: 'Kakaroto', ki: 'Mais de 8000'}
