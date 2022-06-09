var express = require('express')

var array = [1, 3, 4, 6, 80, 33, 23, 90]

function verificarPares(data) {
  let verificarTamanhoArray = Number(data.length)

  if (verificarTamanhoArray === 0 ) {
    console.log(-1)
  }else {
    for (let index = 0; index < data.length; index++) {
      if (data[index] % 2 === 0 ) {
        data[index] = 0
      }   
    }
    console.log(array)
  }
}

verificarPares(array)


