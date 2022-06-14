const multiplicacao = {
  num1: 8,
}

const numbers = [1, 2]

function mapComThis (arr, thisArg) {
  return arr.map(function (item) {return item * this.num1}, thisArg)
}

function mapSemThis(arr, multiplicador) {
  return arr.map(function (item) {return item * multiplicador.num1})
}

console.log(mapComThis(numbers, multiplicacao))
console.log(mapSemThis(numbers, multiplicacao))