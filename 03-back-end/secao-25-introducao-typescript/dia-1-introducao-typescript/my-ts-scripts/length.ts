const convert = (valor: number, unidadebase: string, unidadeConversao: string): number => {
    const tabelaConvesao: any = { km: 1000, hm: 100, dam: 10, m: 1, dm: 0.1, cm: 0.01, mm: 0.001 };
    return (valor * tabelaConvesao[unidadebase]) / tabelaConvesao[unidadeConversao];
}