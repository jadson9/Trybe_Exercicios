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