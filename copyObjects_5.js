const woody_woodpecker = {
	slogan_1: {
		text: 'Essa gente inventa cada coisa',
	},
	slogan_2: {
		text: () => 'Essa vai ser a minha melhor vigarice',
	},
};

try {
	console.log(woody_woodpecker.slogan_2.text());
	// Essa vai ser a minha melhor vigarice

	// 3 - JSON
	const woody_woodpecker_1 = JSON.parse(JSON.stringify(woody_woodpecker));
	console.log(woody_woodpecker_1);
	// Essa gente inventa cada coisa, {}
	woody_woodpecker_1.slogan_2.text();
	// Código quebra => catch
} catch (error) {
	console.error(error.message);
	// woody_woodpecker_1.slogan_2.text is not a function
}
