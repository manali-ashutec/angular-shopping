import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class CardService {
  constructor() {}
  private buyFood = new BehaviorSubject(0);
  
  currentFood = this.buyFood.asObservable();

  changeFood(food) {
    this.buyFood.next(food);
  }
}
