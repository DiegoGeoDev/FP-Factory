const pregnant = { babies_amount: 4, city: 'Taubaté' };

// 1 - Object.assign
const unmasked_pregnant_1 = Object.assign({}, pregnant);
unmasked_pregnant_1.babies_amount = 0;
console.log(unmasked_pregnant_1);
// babies_amount = 0 e city = Taubaté

// 2 - Spread Operator
const unmasked_pregnant_2 = { ...pregnant };
unmasked_pregnant_2.babies_amount = 0;
console.log(unmasked_pregnant_2);
// babies_amount = 0 e city = Taubaté

console.log(pregnant);
// babies_amount = 4 e city = Taubaté
