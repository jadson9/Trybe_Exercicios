const convertMassa = (valor: number, unidadebase: string, unidadeConversao: string): number => {
    const tabelaConvesao: any = { kg: 1000, hg: 100, dag: 10, g: 1, dg: 0.1, cg: 0.01, mg: 0.001 };
    return (valor * tabelaConvesao[unidadebase]) / tabelaConvesao[unidadeConversao];
}