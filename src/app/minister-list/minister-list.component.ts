import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { Minister } from './minister';
import { SearchService } from './search.service';
import { GeoService } from '../geo.service';
import { CurrentLocation } from './currrent-location';
import { forEach } from '@angular/router/src/utils/collection';
import { SimpleChanges } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleChange } from '@angular/core/src/change_detection/change_detection_util';
declare var google: any;

@Component({
  selector: 'app-minister-list',
  templateUrl: './minister-list.component.html',
  styleUrls: ['./minister-list.component.css']
})
export class MinisterListComponent implements OnInit {
  ministers: Minister[];
  searchTerm$ = new Subject<string>();
  latitude: number;
  longitude: number;
  private locations: CurrentLocation[];
  geographicalAreas: any[] = [];
  public getGeoLocation() {
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(position => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(this.latitude, this.longitude);
        let request = {
          latLng: latlng
        };
        geocoder.geocode(request, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0] != null) {
              let city = results[0].address_components[results[0].address_components.length - 4].short_name;
              this.locations = results[0].address_components;
              for (var location in this.locations) {
                if (this.locations[location].hasOwnProperty("types")) {
                  if ((this.locations[location].types.indexOf("administrative_area_level_1") > -1) || (this.locations[location].types.indexOf("administrative_area_level_2") > -1) ||
                    (this.locations[location].types.indexOf("sublocality_level_1") > -1) ||
                    (this.locations[location].types.indexOf("neighborhood") > -1) ||
                    (this.locations[location].types.indexOf("postal_code") > -1)) {
                    this.geographicalAreas.push(this.locations[location].long_name);
                  }
                }
              }
            } else {
              alert("No address available");
            }
          }
        });
      }, error => {
        console.log(error);
      }, options);
    }
  }
  ngOnInit() {
    this.getGeoLocation();
    console.log(this.geographicalAreas);
    this.route.data.map((data) => data['ministers']).subscribe(
      (ministers) => {
        this.ministers = ministers;
      }
    );
  }
  constructor(private searchService: SearchService, private geoService: GeoService, private route: ActivatedRoute) {
    this.searchService.searchMinisters(this.searchTerm$).subscribe((result) => {
      this.ministers = result;
    });
  }
}
