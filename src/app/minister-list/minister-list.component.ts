import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { Minister } from './minister';
import { SearchService } from './search.service';
import { CurrentLocation } from './currrent-location';

import { GeolocationService } from '../geolocation.service';
declare var google: any;

@Component({
  selector: 'app-minister-list',
  templateUrl: './minister-list.component.html',
  styleUrls: ['./minister-list.component.css']
})
export class MinisterListComponent implements OnInit {
  ministers: Minister[];
  searchTerm$ = new Subject<string>();
  showLocations: boolean = false;
  buttonShowLocations: any = 'Get My Location Results';
  geographicalAreas: string[] = [];

  ngOnInit() {
    this.route.data.map((data) => data['ministers']).subscribe(
      (ministers) => {
        this.ministers = ministers;
        this.geographicalAreas = this.geolocationService.getGeoLocation();
      }
    );
  }
  isResultEmpty() {
    return this.ministers && this.ministers.length < 1
  }
  getLocations() {
    this.showLocations = !this.showLocations;
    if (this.showLocations) {
      this.buttonShowLocations = "Clear My Location Results";
    }
    else {
      this.ministers = [];
      this.buttonShowLocations = "Get My Location Results";
    }
  }
  getLocationResults(searchTerm) {
    this.searchTerm$.next(searchTerm);
    this.searchService.searchMinisters(this.searchTerm$).subscribe((result) => {
      this.ministers = result;
    });
  }
  constructor(private searchService: SearchService, private geolocationService: GeolocationService, private route: ActivatedRoute) {
    this.searchService.searchMinisters(this.searchTerm$).subscribe((result) => {
      this.ministers = result;
    });
  }
}
