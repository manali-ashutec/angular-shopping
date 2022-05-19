import { Component, OnInit } from '@angular/core';
import { CardService } from '../card.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})
export class CardComponent implements OnInit {
  selecteditems: number;
  constructor(private cardService: CardService) {}

  ngOnInit() {
    this.cardService.currentFood.subscribe((food: number) => {
      this.selecteditems = food;
    });
  }
}
