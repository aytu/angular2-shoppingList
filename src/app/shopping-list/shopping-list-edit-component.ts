import {Component} from '@angular/core';
import {Ingredient} from '../shared/ingredient';
import {ShoppigListService} from '../shared/shopping-list-service';

@Component({
  selector:'shopping-list-edit',
  template:`
  <form (ngSubmit)="onSubmit(f.value)" #f="ngForm">
      <h1>{{ingredient !==null ? 'Edit' : 'Add'}}</h1>
      <label for="item.name">Name</label>
      <input id="item.name" name="name" type="text" required value="{{ingredient?.name}}" ngControl/>
      <label for="item.amount">Amount</label>
      <input id="item.amount" name="amount" type="number" required value="{{ingredient?.amount}}" ngControl/>
      <button class="btn" (click)="onSubmit(ingredient)">{{ingredient!==null ? 'Edit' : 'Add'}}</button>
      <button (click)="onDelete()">Delete</button>
  </form>
  `,
  inputs:['ingredient'],
  providers:[ShoppigListService]

})
export class ShoppingListEdit{
  constructor(private _ShoppigListService:ShoppigListService){}
  ingredient :Ingredient;
  onSubmit(item:Ingredient){
    console.log("hjh",item);
    var index=this._ShoppigListService.getIndexOfItem(item);
    if(index>=0){
        this._ShoppigListService.updateIngredient(index,item);
    }else{
        this._ShoppigListService.insertItem(item);
    }

  }
}
