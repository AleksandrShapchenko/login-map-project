import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapPageComponent } from './components/map-page/map-page.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { MapRoutingModule } from './map-routing.module';



@NgModule({
  declarations: [MapPageComponent],
  imports: [
    CommonModule,
    LeafletModule,
    MapRoutingModule
  ],
  exports: [MapPageComponent]
})
export class MapModule { }
