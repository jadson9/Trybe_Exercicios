class Car {
    brand: string;
    color: string;
    doors: number;
    constructor( brand: string, color: string, doors: number) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    };

    honk (): string {
        return 'Buzina acionada!'
    };

    turnOn (): string {
        return 'Carro ligado!'
    };

    turnOff (): string {
        return 'Carro desligado!'
    };

    speedUp (): string {
        return 'Acelerando carro!'
    };
    
    speedDown (): string {
        return 'Reduzindo velocidade do carro!'
    };

    stop (): string {
        return 'Parando carro!'
    };

    turn (direction: string): string {
        return `Carro indo para ${direction}`
    };
}

const car1 = new Car('Fiat', 'Preto', 3);


console.log(car1.turnOn());
console.log(car1.speedUp());
console.log('Em 600 metros vire a esquerda');
console.log(car1.turn('Esquerda'));
console.log('Em 200 metros na rotatória pegue a segunda saída a direita');
console.log(car1.turn('Direita'));
console.log('Mantenha em frente pelos próximos 1,2 quilômetros');
console.log('Em 300 metros vire a direita');
console.log(car1.turn('Direita'));
console.log('Em 400 metros você chegará ao seu destino');
console.log('Você chegou ao seu destino');
console.log(car1.speedDown());
console.log(car1.stop());
console.log('//////////////////////////////////////////////////////');
console.log('Passageiro entra no carro');
console.log('//////////////////////////////////////////////////////');
console.log(car1.turnOn());
console.log(car1.speedUp());
console.log('Em 300 metros vire a direita');
console.log(car1.turn('Direita'));
console.log('Mantenha em frente pelos próximos 2 quilômetros');
console.log('Em 200 metros vire a esquerda');
console.log(car1.turn('Esquerda'));
console.log('Em 400 metros vire a direita');
console.log(car1.turn('Direita'));
console.log('Em 100 metros você chegará ao destino');
console.log('Você chegou ao destino');
console.log(car1.speedDown());
console.log(car1.stop());