import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  contador = 0

  nome = 'Rafael C S Magalhães'

  text: string = ''

  pessoas = [
    {
      nome: 'Ivagay',
      sobrenome: 'Matos'
    },
    {
      nome: 'Divan',
      sobrenome: 'Souza'
    },
    {
      nome: 'Lucas',
      sobrenome: 'Silva'
    }
  ]

  constructor() { }

  ngOnInit(): void {
    let interval = setInterval(() => {
      this.contador++
      if (this.contador === 13) {
        clearInterval(interval)
      }
    }, 1000)
  }

  clicou(nome: string): void {
    console.log('Clicou em mim', nome)
  }

}
