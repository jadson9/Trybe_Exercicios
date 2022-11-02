const convertCapacidade = (valor: number, unidadebase: string, unidadeConversao: string): number => {
    const tabelaConvesao: any = { kl: 1000, hl: 100, dal: 10, l: 1, dl: 0.1, cl: 0.01, ml: 0.001 };
    return (valor * tabelaConvesao[unidadebase]) / tabelaConvesao[unidadeConversao];
}