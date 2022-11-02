enum tabelaConvesao  { kg = 1000, hg = 100, dag = 10, g = 1, dg = 0.1, cg = 0.01, mg = 0.001 };
type posibilesMassa = 'kg' | 'hg' | 'dag' | 'g' | 'dg' | 'cg' | 'mg';

const convertMassa = (valor: number,to: posibilesMassa, from: posibilesMassa): number => {;
    return (valor * tabelaConvesao[to]) / tabelaConvesao[from];
}