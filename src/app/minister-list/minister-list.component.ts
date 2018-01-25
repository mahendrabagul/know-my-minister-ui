import { Component, OnInit } from '@angular/core';
import { SearchService } from '../search.service';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-minister-list',
  templateUrl: './minister-list.component.html',
  styleUrls: ['./minister-list.component.css'],
  providers: [SearchService]

})
export class MinisterListComponent implements OnInit {

  ministers: any[];
  searchTerm$ = new Subject<string>();
  latitude: number;
  longitude: number;
  ngOnInit() {
    this.setCurrentPosition();
    this.searchTerm$.next("{\"longitude\":" + this.longitude + ", \"latitude\":" + this.latitude + "} ");
    this.searchService.searchMinister(this.searchTerm$).subscribe((res) => {
      // this.results = res.results;
    });
  }
  constructor(private searchService: SearchService) {
    this.searchService.searchMinister(this.searchTerm$).subscribe((result) => {
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
