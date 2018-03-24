import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinisterDetailService } from './minister-detail.service';
import { Minister } from '../minister-list/minister';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { environment } from '../../environments/environment';
const STATIC_ASSETS_URL = environment.staticAssetsUrl;

@Component({
  selector: 'app-minister-detail',
  templateUrl: './minister-detail.component.html',
  styleUrls: ['./minister-detail.component.css']
})
export class MinisterDetailComponent implements OnInit {
  id: number;
  minister: Minister = new Minister();
  videoUrl: string = STATIC_ASSETS_URL + "/videos/indian.mp4";

  constructor(private sanitizer: DomSanitizer, private ministerDetailService: MinisterDetailService, private activatedRoute: ActivatedRoute) { }

  isValueEmpty(passedValue) {
    return passedValue === undefined
      || passedValue === ""
      || passedValue === null;
  }

  getSanitizedUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadMinisterDetails();
  }

  getCurrentPageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl(window.location.href);
  }

  getTwSharePageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://twitter.com/intent/tweet?text=I like this page");
  }

  getFBSharePageUrl() {
    return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.facebook.com/sharer/sharer.php?u="
      + window.location.href + "&src=sdkpreparse");
  }

  loadMinisterDetails() {
    this.ministerDetailService.getMinisterDetails(this.id).subscribe((result) => {
      this.minister = result;
    });
  }
}
