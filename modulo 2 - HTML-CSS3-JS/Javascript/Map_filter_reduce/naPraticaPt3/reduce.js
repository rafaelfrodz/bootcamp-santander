const array = [1000, 7, 1]

function somaTotal (arr) {
  return arr.reduce((numero, somaTotal) => numero + somaTotal)
}


function calcCompras(listaPrecos, saldo) {
   return saldo - somaTotal(listaPrecos)
}

console.log(somaTotal(array))
console.log(calcCompras(array, 17))