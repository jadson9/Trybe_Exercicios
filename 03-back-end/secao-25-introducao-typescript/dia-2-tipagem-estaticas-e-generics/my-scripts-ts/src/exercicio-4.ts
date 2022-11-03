type possibleSlices = 4 | 6 | 8
type possibleFlavorsComuns = 'Calabresa' | 'Frango' | 'Pepperoni'
type possibleFlavorsVegetarian = 'Marguerita' | 'Palmito' | 'Cogumelo'
type possibleFlavorsDoce = 'Nutela' | 'Goiaba com queijo' | 'Marshmallow'

interface pizzaComum {
  flavor: possibleFlavorsComuns;
  slices: possibleSlices;
}

interface pizzaVegetariana {
  flavor: possibleFlavorsVegetarian;
  slices: possibleSlices;
}

interface pizzaDoce {
  flavor: possibleFlavorsDoce;
  slices: possibleSlices;
}

const pizzaC1: pizzaComum = {
  flavor: 'Calabresa',
  slices: 4,
} 

const pizzaC2: pizzaComum = {
  flavor: 'Frango',
  slices: 6,
} 

const pizzaC3: pizzaComum = {
  flavor: 'Pepperoni',
  slices: 8,
} 

const pizzaV1: pizzaVegetariana= {
  flavor: 'Marguerita',
  slices: 4,
} 

const pizzaV2: pizzaVegetariana= {
  flavor: 'Palmito',
  slices: 6,
} 

const pizzaD: pizzaDoce= {
  flavor: 'Marshmallow',
  slices: 8,
}

const pc = { pizzaC1, pizzaC2, pizzaC3 }
const pv = { pizzaV1, pizzaV2 };
const pd = { pizzaD };

console.log(pc);
console.log(pv);
console.log(pd);