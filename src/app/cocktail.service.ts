import { Injectable } from '@angular/core';
import { Cocktail } from './cocktail';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CocktailService {

  private myService:HttpClient;

  constructor(param_http:HttpClient) {
    this.myService = param_http;
   }

  public getCocktails():Observable<Cocktail[]>{
    return this.myService.get<Cocktail[]>("assets/cocktails.json");
  }
  
}
