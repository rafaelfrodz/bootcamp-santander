import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/352378c0-49f8-4df5-bc3d-736421f182f2'

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE

  // Retorna a lista de users - READ
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL)
  }
}
