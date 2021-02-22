import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import * as L from 'leaflet';
import { baseUrl } from 'src/environments/environment';
import { icon, Marker } from 'leaflet';

// fix icons bag
(function fixIcons() {
  const iconRetinaUrl = 'assets/marker-icon-2x.png';
  const iconUrl = 'assets/marker-icon.png';
  const shadowUrl = 'assets/marker-shadow.png';
  const iconDefault = icon({
    iconRetinaUrl,
    iconUrl,
    shadowUrl,
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    tooltipAnchor: [16, -28],
    shadowSize: [41, 41]
  });
  Marker.prototype.options.icon = iconDefault;
})();

@Injectable({
  providedIn: 'root'
})
export class MarkerService {
  markersUrl: string = `${baseUrl}markers`;

  constructor(private http: HttpClient) {

   }

   makeMarkers(map: L.map): void {
     this.http.get(this.markersUrl).subscribe((res: any) => {

        for(const c of res) {
          const lat = c.coordinates[0];
          const lon = c.coordinates[1];
          const marker = L.marker([lon, lat]).addTo(map);
          marker.bindPopup(`<b>${c.desc}!</b><br>I am a popup.`);
        }
     })
   }
}
