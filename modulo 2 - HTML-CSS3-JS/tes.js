var paises = [{lancamento: true, id: 121}, {lancamento: false, id: 212}]

function alterarStatus (array, id, newStates){

  for (let index = 0; index < array.length; index++) {
    if (array[index].id === id) {
      array[index].lancamento = newStates
    }
  }

  return array
}

alterarStatus(paises, 121, false)
console.log(paises)