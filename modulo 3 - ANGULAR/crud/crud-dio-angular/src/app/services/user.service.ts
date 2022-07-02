import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL = 'https://sheet.best/api/sheets/352378c0-49f8-4df5-bc3d-736421f182f2'
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  }

  constructor(private httpClient: HttpClient) { }

  // C.R.U.D - CREATE, READ, UPDATE, DELETE

  // Retorna a lista de users - READ
  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.apiURL)
  }

  // Salvar usuário no banco - CREATE
  postUser(user: User): Observable<User> {
    return this.httpClient.post<User>(this.apiURL, user, this.httpOptions)
  }

  // Exclur o usuario do banco - DELETE
  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>(`${this.apiURL}/id/${id}`)
  }

  // Edita o usuario do banco - UPDATE
  updateUser(id: string, user: User): Observable<User> {
    return this.httpClient.put<User>(`${this.apiURL}/id/${id}`, user, this.httpOptions)
  }

  // Lista usuario unico
  getUser(id: string): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.apiURL}/id/${id}`)
  }
}
