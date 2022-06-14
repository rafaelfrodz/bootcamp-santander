interface IAnimal {
  nome: string,
  tipo: 'terrestre' | 'aquático',
  executarRugido(alturaEmDecibeis: number): void
}

interface IFelino extends IAnimal {
  visaoNoturna: boolean
}

const animal: IAnimal = {
  nome: 'elefante',
  tipo: "terrestre",
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

animal.executarRugido(12)

const felino: IFelino = {
  nome: 'leao',
  tipo: "terrestre",
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}