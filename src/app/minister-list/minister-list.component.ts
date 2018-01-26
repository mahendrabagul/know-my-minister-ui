import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';
import { Minister } from '../minister';

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
  ngOnInit() {
    // this.setCurrentPosition();
    // this.searchTerm$.next("{\"longitude\":" + this.longitude + ", \"latitude\":" + this.latitude + "} ");
    // this.searchService.searchMinisters(this.searchTerm$).subscribe((result) => {
    //   // this.results = result;
    // });
    // this.searchService.searchMinisters(this.searchTerm$).subscribe((result) => {
    //   this.ministers = result;
    // });
  }
  constructor(private searchService: SearchService) {
    this.searchService.searchMinisters(this.searchTerm$).subscribe((result) => {
      this.ministers = result;
    });
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
