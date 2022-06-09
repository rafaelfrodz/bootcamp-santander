const pessoa1 = {
  nome: "Jose",  
  idade: 78
}


function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

console.log(calculaIdade.apply(pessoa1, [10]))