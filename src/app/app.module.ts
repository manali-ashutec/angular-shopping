import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ChildComponent } from './child/child.component';
import { CardService } from './card.service';
import { CardComponent } from './card/card.component';
import { ChildCallComponent } from './child-call/child-call.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, ChildComponent, CardComponent, ChildCallComponent ],
  providers: [CardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
