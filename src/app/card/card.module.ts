import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardPageComponent } from './components/card-page/card-page.component';
import { CardComponent } from './components/card/card.component';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [CardPageComponent, CardComponent],
  imports: [
    CommonModule,
    MatCardModule,
    HttpClientModule,
    FlexLayoutModule,
    MatProgressSpinnerModule,
    InfiniteScrollModule
  ],
  exports: [CardPageComponent]
})
export class CardModule { }
