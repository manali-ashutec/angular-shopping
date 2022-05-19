import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
})
export class ChildComponent {
  @Input() item: string = '';
  @Output() buyItem: EventEmitter<object> = new EventEmitter<object>();

  sected(item): void {
    this.buyItem.emit(item);
  }
}
