import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { ActivatedRoute } from '@angular/router';
import { Minister } from './minister';
import { MinisterListService } from './minister-list.service';
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
  buttonShowLocations: any = 'Get Ministers by my Location';
  geographicalAreas: string[] = [];

  constructor(private ministerListService: MinisterListService, private geolocationService: GeolocationService, private activatedRoute: ActivatedRoute) {
    this.loadMinisters();
  }

  ngOnInit() {
    this.activatedRoute.data.map((data) => data['ministers']).subscribe(
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
      this.buttonShowLocations = "Get Ministers by my Location";
    }
  }

  getLocationResults(searchTerm) {
    this.searchTerm$.next(searchTerm);
    this.loadMinisters();
  }

  loadMinisters() {
    this.ministerListService.searchMinisters(this.searchTerm$).subscribe((result) => {
      this.ministers = result;
    });
  }
}
