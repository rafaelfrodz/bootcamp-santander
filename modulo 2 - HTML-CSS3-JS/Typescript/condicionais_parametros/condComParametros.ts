interface IUsuario {
  id: 'string',
  email: 'string'
}

interface IAdmin extends IUsuario {
  cargo: 'gerente' | 'cordenador' | 'supervisor'
}

function redirecione(usuario: IUsuario | IAdmin) {
  if ('cargo' in usuario) {
    // redireiconar para  área de adm
  } else {
    // redirecionar para área normal
  }
}


interface IColaborador {
  id: 'string',
  email: 'string'
  cargo?: 'gerente' | 'cordenador' | 'supervisor'
}

function redirecioneColaboradores(usuario: IColaborador) {
  if (usuario.cargo) {
    // redireiconar(usuario.cargo)
  } else {
    // redireiconar para a área do usuario
  }
}