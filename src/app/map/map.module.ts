import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './components/map-page/map-page.component';



@NgModule({
  declarations: [MapPageComponent],
  imports: [
    CommonModule
  ],
  exports: [MapPageComponent]
})
export class MapModule { }
