let array = ['java', 'javascript', 'python', 'html', 'css'];
let auxMax = 0
let maior = ''
let menor = ''
let auxMin = array[0].length

for (let i = 0; i < array.length; i += 1){
    if (array[i].length > auxMax){
        auxMax = array[i].length
        maior = array[i]
    }
}
console.log("Maior palavra da lista:", maior)

for (let i2 = 0; i2 < array.length; i2 += 1){
    if (array[i2].length < auxMin){
        auxMin = array[i2].length
        menor = array[i2]
    }
}
console.log("Menor palavra da lista:", menor)