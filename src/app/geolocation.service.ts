import { Injectable } from '@angular/core';
declare var google: any;

@Injectable()
export class GeolocationService {
  geographicalAreas: string[] = [];
  constructor() {
    if (navigator.geolocation) {
      var options = {
        enableHighAccuracy: true
      };
      navigator.geolocation.getCurrentPosition(position => {
        let geocoder = new google.maps.Geocoder();
        let latlng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        let request = {
          latLng: latlng
        };
        geocoder.geocode(request, (results, status) => {
          if (status == google.maps.GeocoderStatus.OK) {
            if (results[0] != null) {
              let city = results[0].address_components[results[0].address_components.length - 4].short_name;
              for (var location in results[0].address_components) {
                if (results[0].address_components[location].hasOwnProperty("types")) {
                  if ((results[0].address_components[location].types.indexOf("administrative_area_level_1") > -1) || (results[0].address_components[location].types.indexOf("administrative_area_level_2") > -1) ||
                    (results[0].address_components[location].types.indexOf("sublocality_level_1") > -1) ||
                    (results[0].address_components[location].types.indexOf("neighborhood") > -1) ||
                    (results[0].address_components[location].types.indexOf("postal_code") > -1)) {
                    this.geographicalAreas.push(results[0].address_components[location].long_name);
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
  getGeoLocation() {
    return this.geographicalAreas;
  }
}
