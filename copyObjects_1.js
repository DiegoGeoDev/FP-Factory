const pregnant = { babies_amount: 4, city: 'Taubaté' };

const unmasked_pregnant = pregnant;

unmasked_pregnant.babies_amount = 0;

console.log(pregnant); // babies_amount = 0 e city = Taubaté
console.log(unmasked_pregnant); // babies_amount = 0 e city = Taubaté
