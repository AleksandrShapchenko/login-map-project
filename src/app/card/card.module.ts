import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [CardPageComponent, CardComponent],
  imports: [
    CommonModule
  ],
  exports: [CardPageComponent]
})
export class CardModule { }
