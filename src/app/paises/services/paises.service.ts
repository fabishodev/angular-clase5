import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SearchByNameCountry } from '../interfaces/by-name.interfaces';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  private baseUrl: string = "https://restcountries.com/v2";

  constructor(private http: HttpClient) { }

  buscarPais(query: string): Observable<SearchByNameCountry[]>{
    const url = `${this.baseUrl}/name/${query}`;
    return this.http.get<SearchByNameCountry[]>(url);
  }

  buscarCapital(query: string): Observable<SearchByNameCountry[]>{
    const url = `${this.baseUrl}/capital/${query}`;
    return this.http.get<SearchByNameCountry[]>(url);
  }
}
