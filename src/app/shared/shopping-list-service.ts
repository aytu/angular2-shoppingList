import {Injectable} from '@angular/core';
import {Ingredient} from './ingredient';
import {SHOPPING_List} from '../mock/shopping-list';
@Injectable()
export class ShoppigListService{
  getAllItems(){
     return SHOPPING_List;
  }
  getItem(index:number){
    return SHOPPING_List[index];
  }
  getIndexOfItem(item:Ingredient){
    return SHOPPING_List.indexOf(item);
  }
  insertItem(item:Ingredient){
   Array.prototype.push(SHOPPING_List,item);
  }
  insertItems(items:Ingredient[]){
    Array.prototype.push(SHOPPING_List,items);
  }
  deleteItem(index:number){
    SHOPPING_List.splice(index,1);
  }
  updateIngredient(index:number,item:Ingredient){
    SHOPPING_List[index]=item;
  }
}
