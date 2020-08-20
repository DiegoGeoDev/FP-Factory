const global = 'A';
const exist = false;

function init() {
	const inner_const = 'B';
	const exist = true;

	return function innerFunction() {
		const innersub_const = 'C';

		console.log('global', global);
		console.log('inner_const', inner_const);
		console.log('exist', exist);
		console.log('innersub_const', innersub_const);
	};
}

const app = init();
app(); // global A, inner_const B, exist true, innersub_const C
