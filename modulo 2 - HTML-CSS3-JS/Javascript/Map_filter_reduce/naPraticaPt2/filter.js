const numeros = [1, 21, 34, 43, 45, 5, 3, 10, 2002, 8080]

function filtrarNumerosPares (arr) {
  return arr % 2 === 0
}

console.log(numeros.filter(filtrarNumerosPares))