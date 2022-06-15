// Como podemos melhorar o esse código usando TS? 


interface Profissionais {
  nome: string,
  idade: number,
  profissao: "Atriz" | "Pedreiro"
}

let pessoa1: Profissionais = {
  nome: "maria",
  idade: 29,
  profissao: "Atriz",
}

let pessoa2: Profissionais = {
  nome: "roberto",
  idade: 19,
  profissao: "Pedreiro"
}


let pessoa3: Profissionais = {
  nome: "laura",
  idade: 32,
  profissao: "Atriz"
};

let pessoa4: Profissionais = {
  nome: "carlos",
  idade: 19,
  profissao: "Pedreiro"
}

