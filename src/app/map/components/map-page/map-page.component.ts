import { AfterViewInit, Component } from '@angular/core';
import * as L from 'leaflet';
import { MarkerService } from '../../services/marker.service';

@Component({
  selector: 'app-map-page',
  templateUrl: './map-page.component.html',
  styleUrls: ['./map-page.component.scss']
})
export class MapPageComponent implements AfterViewInit {
  private map;

  constructor(private markerService: MarkerService) { }

  ngAfterViewInit() {
    this.initMap();
    this.markerService.makeMarkers(this.map)
  }

  private initMap(): void {
    this.map = L.map('map').setView([49.990056, 36.237058], 10);

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);
  }
}
