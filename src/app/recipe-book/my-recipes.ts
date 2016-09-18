import {Component,OnInit} from '@angular/core';
import { Recipe } from '../shared/recipe';
import {RecipeService} from '../recipe-book/recipe.service';
import {MyMasterRecipesComponent} from './recipe-master.component';
import {MyRecipeDetailComponent} from '../recipe-book/my-recipe-detail.component';
import {RouterConfig,provideRouter,ROUTER_DIRECTIVES} from '@angular/router';

export const routes: RouterConfig = [
    {path: '/RecipeDetail',component: MyRecipeDetailComponent},
    {path: '/:editMode', component: MyRecipeDetailComponent}
];
export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];

@Component({
  moduleId:module.id,
  selector:'my-recipes',
  template: `
  <div class="master">
    <h2>My recepies</h2>
     <my-master-recipe></my-master-recipe>
  </div>
  <div class="details">
     <h2>Details</h2>
     <router-outlet></router-outlet>
  </div>
  `,
  styleUrls:['my-recipe.css'],
  directives:[MyMasterRecipesComponent,MyRecipeDetailComponent],
  providers:[RecipeService]

})

export class MyRecipesComponent implements OnInit{
  recipes:Recipe[];
  constructor(private _RecipeService :RecipeService){}
  ngOnInit(){
     this.recipes=this._RecipeService.getALlRecipes();
  }
}
