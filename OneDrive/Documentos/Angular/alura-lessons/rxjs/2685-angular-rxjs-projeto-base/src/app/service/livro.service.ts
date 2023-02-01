import { Observable } from 'rxjs';
import { HttpClient, HttpClientModule, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LivroService {

  private readonly apiUrl = 'https://www.googleapis.com/books/v1/volumes'

  constructor(
    private http: HttpClient,
  ) { }

  // serviço para buscar livros na barra de busca
  public bucar(valorDigitado: string): Observable<any> {
    const params = new HttpParams().append('q', valorDigitado)
    return this.http.get(this.apiUrl, { params })
  }

}
