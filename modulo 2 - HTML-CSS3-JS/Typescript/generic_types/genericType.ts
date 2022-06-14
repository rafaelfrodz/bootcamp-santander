function adicionarValorArray<NaoSei>(array: any[], valor: NaoSei) {
  return array.map(item => item + valor)
}

adicionarValorArray([1, 2, 3], 1)