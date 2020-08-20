function createBox(amount) {
	const boxes = Array(amount).fill('Caixa');
	return { boxes };
}

let boxes = createBox(4);
console.log(boxes); // { boxes: [ 'Caixa', 'Caixa', 'Caixa', 'Caixa' ] }
