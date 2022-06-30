import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  constructor() { }

  getPeople(): Observable<any> {
    let peopleArray = [
      {
        fistName: 'Rafael',
        lastName: 'Magalhaes',
        age: 19
      },
      {
        fistName: 'Gabriel',
        lastName: 'Ribeiro',
        age: 17
      },
      {
        fistName: 'Gustavo',
        lastName: 'Rizzi',
        age: 25
      },
      {
        fistName: 'Anna',
        lastName: 'Flavia',
        age: 16
      },
    ]

    return of(peopleArray)
  }
}
