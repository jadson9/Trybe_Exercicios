enum tableVolume  { km = 10**9, hm = 10**6, dam = 10**3, m = 1, dm = 10**-3, cm = 10**-6, mm = 10**-9 };
type posibilesVolume = 'km' | 'hm' | 'dam' | 'm' | 'dm' | 'cm' | 'mm';

const convertVolume = (valor: number, to: posibilesVolume, from: posibilesVolume): number => {
    return (valor * tableVolume[to]) / tableVolume[from];
}