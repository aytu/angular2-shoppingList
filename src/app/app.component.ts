import { Component } from '@angular/core';
import {MyRecipesComponent} from './recipe-book/my-recipes';
import {MyShoppingListComponent} from './shopping-list/shopping-list.component';
import {RouterConfig,provideRouter,ROUTER_DIRECTIVES} from '@angular/router';
export const routes: RouterConfig = [
    {path: '',component: MyRecipesComponent},
    {path: 'recipes/...', component: MyRecipesComponent},
    {path: 'shoppingList', component: MyShoppingListComponent}
];
export const APP_ROUTER_PROVIDERS = [provideRouter(routes)];

@Component({
  moduleId: module.id,
  selector: 'app-root',
  template: `
    <div class="header">
        <ul>
           <li><a [routerLink]="['recipes']">Recipes</a></li>
           <li><a [routerLink]="['shoppingList']">Shopping List</a></li>
        </ul>
    </div>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['app.component.css'],
  directives:[MyRecipesComponent,MyShoppingListComponent,ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
