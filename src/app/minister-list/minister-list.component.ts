import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { Minister } from './minister';
import { SearchService } from './search.service';
import { GeoService } from '../geo.service';
import { CurrentLocation } from './currrent-location';
import { forEach } from '@angular/router/src/utils/collection';
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
  locations: CurrentLocation[];
  hasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value;
  };
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
              console.log(this.locations.some(function (location) { return this.hasValue(location, "long_name", "Pune"); }));
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
    this.getGeoLocation();
  }
  private setCurrentPosition() {
    if (!!navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
      });
    }
  }
}
