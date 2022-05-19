import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-child-call',
  templateUrl: './child-call.component.html',
})
export class ChildCallComponent {
  @Input() showItem;
  data = false;

  constructor() {}

  callToParent(): void {
    console.log('call me!');
  }

  showToParent() {
    this.data = true;
  }

  hideToParent() {
    this.data = false;
  }
}
