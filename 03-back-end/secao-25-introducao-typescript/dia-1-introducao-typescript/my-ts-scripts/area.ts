enum tableArea  { km = 10**6, hm = 10**4, dam = 10**2, m = 1, dm = 10**-2, cm = 10**-4, mm = 10**-6 };
type posibilesArea = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm';

const convertArea = (valor: number, to: posibilesArea, from: posibilesArea): number => {
    return (valor * tableArea[to]) / tableArea[from];
}

console.log(convertArea(1, 'm', 'km'))