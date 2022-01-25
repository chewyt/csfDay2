import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';
import { Food } from '../food';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  @Input() menu: any;
  @Output() AddFoodItem = new EventEmitter<Food>();

  ngOnInit(): void {
  }

}
