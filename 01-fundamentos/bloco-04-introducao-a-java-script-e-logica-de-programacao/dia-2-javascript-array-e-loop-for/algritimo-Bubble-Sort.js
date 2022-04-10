let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let i = 1; i < numbers.length; i += 1){
    for (let toi = 0; toi < i; toi += 1){
        if (numbers[i] < numbers[toi]){
            let aux = numbers[toi]
            numbers[toi] = numbers[i]
            numbers[i] = aux
        }
    }

}
console.log(numbers)