import { Recipe } from '../shared/recipe';
import {Ingredient} from '../shared/ingredient';
export let RECIPES:Recipe[]=[
          new Recipe('Wiener Schinitzel',
                      'A tasty schinitzel',
                      'http://www.humhumbees.com/wp-content/uploads/2016/03/taouk-schinitzel.jpg',
              [
                new Ingredient('pork meat',1),
                new Ingredient('french fries',1)
              ]
            ),
            new Recipe('Super mega burger',
                        'A tasty burger',
                        'https://wallpaperscraft.com/image/burger_meat_vegetables_bread_roll_82904_2560x1600.jpg',
                        [
                          new Ingredient('pork meat',1),
                          new Ingredient('french fries',1)
                        ]
                      )
];
