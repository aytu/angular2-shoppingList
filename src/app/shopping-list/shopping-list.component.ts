import {Component,OnInit} from '@angular/core';
import {ShoppingListEdit} from './shopping-list-edit-component';
import {Ingredient} from '../shared/ingredient';
import {ShoppigListService} from '../shared/shopping-list-service';
@Component({
  moduleId: module.id,
  selector:'my-shopping-list',
  template: `
    <h2>My Shoping List</h2>
    <div class="panel">
      <shopping-list-edit [ingredient]="selectedItem"></shopping-list-edit>
    </div>

    <div class="panel" >
     <button class="btn" (click)="addNewItem()">Add new item</button>
          <ul>
             <li *ngFor="#item of shoppingList" (click)="onselectItem(item)">{{item.name}}  ({{item.amount}})</li>
          </ul>
    </div>
  `,
  styleUrls: ['shopping-list.css'],
  directives:[ShoppingListEdit],
  providers:[ShoppigListService]
})
export class MyShoppingListComponent implements OnInit{
   shoppingList:Ingredient[];
   selectedItem:Ingredient;
   constructor(private _ShoppigListService:ShoppigListService){}
   addNewItem(){
          this.selectedItem=null;
   }
   onselectItem(item:Ingredient){
     this.selectedItem=item;
   }
   ngOnInit(){
     this.shoppingList=this._ShoppigListService.getAllItems();
   }
}
