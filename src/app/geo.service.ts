import { Injectable } from '@angular/core';

@Injectable()
export class GeoService {
  constructor() { }
  locationObj: any;
  setLocationDetails(locationObj) {
    this.locationObj = locationObj;
  }
  getLocationDetails() {
    return this.locationObj;
  }
}
