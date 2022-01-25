import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Food } from './food';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'workshop2';
  data = 'huat666';
  
  menu: Array<Food>;

  constructor(){
    this.menu=[
      {id:1,name:'Breakfast',img:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQemNG4B0Z06gfl4qqC8-Lm2J6Tuo4ANuyzLqT7h8YfLC1TpA1-Nm0oAcAd7mtsh6sZg-Y&usqp=CAU',quantity:1},
      {id:2,name:'Nasi Lemak',img:'https://cdn-icons-png.flaticon.com/512/791/791586.png',quantity:1},
      {id:3,name:'Fruits',img:'https://image.pngaaa.com/354/4908354-middle.png',quantity:1}
    ];
  }

  cart: Map<Food,number> = new Map<Food,number>();
  foodCart: Food[] =[];


  AddFoodItem(food: Food){
    console.warn(food);
    
    // food.quantity=1;


    if (!this.foodCart.includes(food)) {
      this.foodCart.push(food);
      console.warn("Food cart added below");
      console.warn(this.foodCart);
    }
    else{
      this.foodCart[this.foodCart.indexOf(food)].quantity++;
      console.warn("Food cart updated below");
      console.warn(this.foodCart);
    }
  }
  DeleteFoodItem(food: Food){
    
    this.foodCart[this.foodCart.indexOf(food)].quantity--;
    
    if (this.foodCart[this.foodCart.indexOf(food)].quantity==0) {
    this.foodCart.splice(this.foodCart.indexOf(food));  
    }
  }
}
