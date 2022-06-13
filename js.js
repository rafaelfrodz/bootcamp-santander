const filmes = [{
  codigo: 1,
  titulo: "O amanhã",
  valor: 12,
}, 
{
  codigo: 2,
  titulo: "The King",
  valor: 23,
}]

const validar = ({codigo}, numero) => codigo === numero

const filmePesquisado = filmes.filter((filme) => (validar(filme, 3).length <= 3) ? (validar(filme, 3)) : ('filme n encontrado'))

console.log(filmePesquisado)

const a = {
  codigo: 2,
  titulo: "The King",
  valor: 23,
}

console.log(Object.keys(filme.length))