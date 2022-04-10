let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let newNumbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]
let aux2 = []

for (let i = 1; i < numbers.length; i += 1){
    for (let toi = 0; toi < i; toi += 1){
        if (numbers[i] < numbers[toi]){
            let aux = numbers[toi]
            numbers[toi] = numbers[i]
            numbers[i] = aux
        }
    }

}
console.log("Ordem crescente", numbers)

for (let i = 1; i < numbers.length; i += 1){
    for (let toi = 0; toi < i; toi += 1){
        if (numbers[i] > numbers[toi]){
            let aux = numbers[toi]
            numbers[toi] = numbers[i]
            numbers[i] = aux
        }
    }

}

console.log("Ordem decrescente", numbers)

for (let index = 0 ; index < newNumbers.length  ; index += 1) {
        aux2.push(newNumbers[index] * newNumbers[index+1]) 
    
    
}

console.log("Valores multiplicados pelo valor seguinte", aux2)