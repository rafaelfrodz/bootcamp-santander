import { PeopleService } from './../../services/people.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'spa-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {

  pessoas = [
    {
      fistName: '',
      lastName: '',
      age: 0
    }
  ]

  constructor(private peopleService: PeopleService) { }

  ngOnInit(): void {
    this.getPeople()
  }

  getPeople() {
    this.peopleService.getPeople().subscribe(people => {
      this.pessoas = people
    })
  }

}
