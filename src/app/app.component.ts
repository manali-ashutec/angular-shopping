import { ArrayType } from '@angular/compiler/compiler';
import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { CardService } from './card.service';
import { ChildCallComponent } from './child-call/child-call.component';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  buy: any = [];
  quantity;
  foodItems: object = [
    {
      id: 1,
      name: 'Samosa',
      price: '18',
    },
    {
      id: 2,
      name: 'pau bhagi',
      price: '18',
    },
    {
      id: 3,
      name: 'Dabeli',
      price: '18',
    },
  ];
  @ViewChild('callMe') callMe: ChildCallComponent;

  constructor(private cardService: CardService) {}

  buyItems(event): void {
    event.quantity = this.quantity;
    console.log(event);
    this.buy.push(event);
    this.cardService.changeFood(this.buy.length);
  }

  callToChild() {
    this.callMe.callToParent();
  }

  showToChild() {
    this.callMe.showToParent();
  }

  hideToChild() {
    this.callMe.hideToParent();
  }

  onSubmit(event) {
    this.quantity = event.target.value;
  }
}
