import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  @Input() cart: Food[] = [];
  @Output() DeleteFoodItem = new EventEmitter<Food>();

  fontSize="1em";
  fontSizeChanged($event: any){
  
    this.fontSize=`${$event.target.value}em`;
    console.warn(this.fontSize);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
