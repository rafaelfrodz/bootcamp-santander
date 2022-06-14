const array = [1, 2, 3, 4, 5, 6]

function validacao(arr, size) {
  try {
    if (!arr && !size) throw new ReferenceError('Envia os parâmetros da função')
    if (typeof arr !== 'object') throw new TypeError('Envia um array do tipo objeto')
    if (typeof size !== 'number') throw new TypeError('Envia um tamanho do tipo number')
    if (size !== arr.length) throw new RangeError('Tamanho invalido')
    return arr
  } catch (error) {
    if (error instanceof ReferenceError) {
      console.log("Este erro é um ReferenceError")
      console.log(error.message)
    } else if (error instanceof TypeError) {
      console.log("Este erro é um TypeError")
      console.log(error.message)
    } else if (error instanceof RangeError) {
      console.log("Este erro é um RangeError")
      console.log(error.message)
    } else {
      console.log(`Tipo de erro não esperado: ${error}`)
    }
  }
}

console.log(validacao([], 1))
