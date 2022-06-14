import { type } from "express/lib/response"

interface IAnimaal {
  nome: string,
  tipo: 'terrestre' | 'aquático',
  executarRugido(alturaEmDecibeis: number): void
}

interface IFelinoo extends IAnimaal {
  visaoNoturna: boolean
}

const animaal: IAnimaal = {
  nome: 'elefante',
  tipo: "terrestre",
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

const felinoo: IFelinoo = {
  nome: 'leao',
  tipo: "terrestre",
  visaoNoturna: true,
  executarRugido: (alturaEmDecibeis) => (`${alturaEmDecibeis}dB`)
}

interface iCanino extends IAnimaal {
  porte: 'pequeno' | 'medio' | 'grande'
}

type IDomestico = IFelinoo | iCanino
