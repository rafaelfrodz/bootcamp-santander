import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {
  text = 'Rafael César'
  imageURL = 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Rio_Pardo_Aguas_de_Santa_Barbara.jpg/1280px-Rio_Pardo_Aguas_de_Santa_Barbara.jpg'
  imageALT = 'Foto de um rio na natureza'


  constructor() { }

  ngOnInit(): void {
  }

}
