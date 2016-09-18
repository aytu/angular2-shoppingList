import {RECIPES} from '../mock/recipes';
import {Recipe} from '../shared/recipe';
import {Injectable} from '@angular/core';
@Injectable()
export class RecipeService{
  getALlRecipes(){
    return RECIPES;
  }
  getRecipe(index:number){
    return RECIPES[index];
  }
  getRecipeIndex(item:Recipe){
    return RECIPES.indexOf(item);
  }
  insertRecipe(item:Recipe){
    RECIPES.push(item);
  }
  deleteRecipe(index:number){
    RECIPES.splice(index,1);
  }
  updateRecipe(index:number,item:Recipe){
    RECIPES[index]=item;
  }
}
