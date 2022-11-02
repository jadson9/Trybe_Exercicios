enum tabelaConvesao  { km = 1000, hm = 100, dam = 10, m = 1, dm = 0.1, cm = 0.01, mm = 0.001 };
type posibilesLeng = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm';

const convertMedidas = (valor: number, to: posibilesLeng, from: posibilesLeng): number => {
    return (valor * tabelaConvesao[to]) / tabelaConvesao[from];
}