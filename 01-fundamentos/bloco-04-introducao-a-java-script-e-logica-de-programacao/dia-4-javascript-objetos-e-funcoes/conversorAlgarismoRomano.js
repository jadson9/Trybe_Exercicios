function algarismoRomano(algarismoEntrada) {
    let algarismoSaida = 0;
    algarismoEntrada = algarismoEntrada.toUpperCase()
    algarismoEntrada = algarismoEntrada.split('');
    let regraI = 0;
    let regraX = 0;
    let regraC = 0;
    let regraV = 0;
    let regraD =0;
    let regraL = 0;
    for (let i = 0; i < algarismoEntrada.length; i += 1) {
        let status = true;
        switch (algarismoEntrada[i]) {

        case 'I':
            if ('IV' === algarismoEntrada[i] + algarismoEntrada[i+1]) {
            algarismoSaida += 4;
            i += 1;
            break
            }else if ('IX' === algarismoEntrada[i] + algarismoEntrada[i+1]) {
            algarismoSaida += 9;
            i += 1;
            break  
            }
            algarismoSaida += 1;
            regraI += 1;
            break;


        case 'V':
            algarismoSaida += 5;
            regraV += 1;
            break
        case 'X':
            if ('XL' === algarismoEntrada[i] + algarismoEntrada[i+1]) {
                algarismoSaida += 40;
                i += 1;
                break
            }else if ('XC' === algarismoEntrada[i] + algarismoEntrada[i+1]) {
                algarismoSaida += 90;
                i += 1;
                break  
            }
            algarismoSaida += 10;
            regraX += 1;
            break
        case 'L':
            algarismoSaida += 50;
            regraL += 1;
            break
        case 'C':
            if ('CD' === algarismoEntrada[i] + algarismoEntrada[i+1]) {
                algarismoSaida += 400;
                i += 1;
                break
            }else if ('CM' === algarismoEntrada[i] + algarismoEntrada[i+1]) {
                algarismoSaida += 900;
                i += 1;
                break  
            }
            algarismoSaida += 100;
            regraC += 1;
            break
        case 'D':
            algarismoSaida += 500;
            cont += 1;
            break
        case 'M':
            algarismoSaida += 1000;
            regraD += 1;
            break
        
        default:
            status = false;
        }
        if (status === false || regraC > 3 || regraD > 1 || regraI > 3 || regraL > 1 || regraV > 1 || regraX > 3) {
            algarismoSaida = 'Erro: Dados incorretos'
            break
        }
        
    }
    return algarismoSaida
}
