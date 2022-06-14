import { type } from "express/lib/response";

interface Cacharro {
  nome: string,
  idade: number,
  parqueFavorito?: string
}

type CacharroSomenteLeitura = {
  readonly [K in keyof Cacharro]: Cacharro[K]
}

class MeuCachorro implements Cacharro {
  idade;
  nome;

  constructor(nome, idade) {
    this.nome = nome;
    this.idade = idade;
  }
}

const cao = new MeuCachorro('Apolo', 14)
