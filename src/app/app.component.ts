import { Component } from '@angular/core';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';
import { log } from 'util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [SearchService]

})
export class AppComponent {
  ministers: any[];
  searchTerm$ = new Subject<string>();
  latitude: number;
  longitude: number;
  ngOnInit() {
    this.setCurrentPosition();
    this.searchTerm$.next("{\"longitude\":" + this.longitude + ", \"latitude\":" + this.latitude + "} ");
    this.searchService.search(this.searchTerm$).subscribe((res) => {
      // this.results = res.results;
    });
  }
  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$).subscribe((result) => {
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
