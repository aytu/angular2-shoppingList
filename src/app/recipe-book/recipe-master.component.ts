import {Component,OnInit} from '@angular/core';
import { Recipe } from '../shared/recipe';
import {RecipeService} from '../recipe-book/recipe.service';
import {Router} from '@angular/router';
@Component({
  moduleId:module.id,
  selector:'my-master-recipe',
  template: `
    <div *ngFor="#recipe of recipes" class="showdiv" (click)="onSelect(recipe)">
        <img style="width:100px;" [src]="recipe.imageUrl"/>
        <b style="font-size:18px">{{recipe.name}}</b>
    </div>
  `,
  styleUrls:['my-recipe.css']

})
export class MyMasterRecipesComponent implements OnInit{
  recipes:Recipe[];
  constructor(private _RecipeService :RecipeService,private _router :Router){}
  onSelect(item: Recipe){
    var idx=this._RecipeService.getRecipeIndex(item);
    this._router.navigate(['RecipeDetail',{'recipeIdx': Number(idx)}]); 
  }
  ngOnInit(){
     this.recipes=this._RecipeService.getALlRecipes();
  }
}
