import { Injectable } from "@angular/core"
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Book } from "./model/book"

@Injectable()

export class BooksService {
  private url = 'https://sheet.best/api/sheets/f8667644-8a82-4bda-aaee-3c2f986f51c8'

  httpOptions = {
    Headers: new HttpHeaders({ 'content-type': 'application/json' })
  }

  constructor(private http: HttpClient) {

  }

  getBook() {
    return this.http.get(this.url)

  }

}