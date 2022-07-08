import { People } from './../../models/people';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-people-form',
  templateUrl: './people-form.component.html',
  styleUrls: ['./people-form.component.css']
})
export class PeopleFormComponent implements OnInit {

  peoples: Array<People> = [{
    fistName: 'Rafael',
    lastName: 'Magalhaes',
    email: 'magal@gmail.com'
  },
  {
    fistName: 'Gabriel',
    lastName: 'Ribeiro',
    email: 'rafa@jura.com'
  }]

  constructor() { }

  ngOnInit(): void {
  }

}
