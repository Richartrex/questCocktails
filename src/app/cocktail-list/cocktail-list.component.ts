import { Component, OnInit } from '@angular/core';
import { Cocktail } from '../cocktail';
import { CocktailService } from '../cocktail.service';

@Component({
  selector: 'app-cocktail-list',
  templateUrl: './cocktail-list.component.html',
  styleUrls: ['./cocktail-list.component.css']
})
export class CocktailListComponent implements OnInit {

  public cocktails:Cocktail[];
  private myService:CocktailService;

  constructor( param_service:CocktailService ) {
    this.myService = param_service;
    this.cocktails = []; 
  }

  ngOnInit() {
    this.myService.getCocktails().subscribe(
      (param_cocktails:Cocktail[]) => {
        this.cocktails = param_cocktails;
      }
    );
  }

}
