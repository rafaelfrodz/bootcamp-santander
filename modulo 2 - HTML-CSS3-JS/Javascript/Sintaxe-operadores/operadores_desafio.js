var express = require('express')

var num1 = 20
var num2 = 8

function teste (num1, num2) {
  let verificionIgualdade = num1 === num2 ? ('') : (' não')
  let verificionSomaMaior = num1 + num2 > 10 ? ('maior') : ('menor')
  let verificionSomaMenor = num1 + num2 < 20 ? ('menor') : ('maior')

  let retorno = `Os números ${num1} e ${num2}${verificionIgualdade} são iguais. Sua soma é ${num1+num2}, que é ${verificionSomaMaior} que 10 e ${verificionSomaMenor} que 20` 

  return retorno
}

console.log(teste(num1, num2))