enum tabelaConvesao  { kl = 1000, hl = 100, dal = 10, l = 1, dl = 0.1, cl = 0.01, ml = 0.001 };
type posibilesCapacidade = 'kl' | 'hl' | 'dal' | 'l' | 'dl' | 'cl' | 'ml';

const convertCapacidade = (valor: number, to: posibilesCapacidade, from: posibilesCapacidade): number => {
    return (valor * tabelaConvesao[to]) / tabelaConvesao[from];
}