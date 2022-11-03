type possiblesFatias = 4 | 6 | 8

interface pizza {
  flavor: string;
  slices: possiblesFatias;
}


const pizza1: pizza = {
    flavor: 'Calabresa',
    slices: 8,
}

const pizza2: pizza = {
    flavor: 'Marguerita',
    slices: 6,
}

const pizza3: pizza = {
    flavor: 'Nutela',
    slices: 4,
}