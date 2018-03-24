import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinisterDetailService } from './minister-detail.service';
import { Minister } from '../minister-list/minister';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { environment } from '../../environments/environment';
const API_URL = environment.apiUrl;

@Component({
  selector: 'app-minister-detail',
  templateUrl: './minister-detail.component.html',
  styleUrls: ['./minister-detail.component.css']
})
export class MinisterDetailComponent implements OnInit {
  id: number;
  minister: Minister = new Minister();
  videoUrl: string = API_URL + "/api/v1/assets/videos/indian.mp4";
  //speechUrl: string = "http://www.youtube.com/embed/8Z72UenFOrA?autoplay=1";

  constructor(private sanitizer: DomSanitizer, private ministerDetailService: MinisterDetailService, private activatedRoute: ActivatedRoute) { }

  isValueEmpty(passedValue) {
    return passedValue === undefined
      || passedValue === ""
      || passedValue === null;
  }

  getSpeechUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(this.minister.speechUrl);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadMinisterDetails();
  }

  getCurrentPageUrl() {
    return window.location.href;
  }

  getTwSharePageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://twitter.com/intent/tweet?text=I like this page");
  }

  getFBSharePageUrl() {
    return "https://www.facebook.com/sharer/sharer.php?u=" + this.getCurrentPageUrl() + "&amp;src=sdkpreparse";
  }

  loadMinisterDetails() {
    this.ministerDetailService.getMinisterDetails(this.id).subscribe((result) => {
      this.minister = result;
    });
  }
}
