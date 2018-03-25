import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinisterDetailService } from './minister-detail.service';
import { Minister } from '../minister-list/minister';
import { BrowserModule, DomSanitizer } from '@angular/platform-browser'
import { environment } from '../../environments/environment';
import { Location } from '@angular/common';
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
  currentPath: string = '';
  constructor(private sanitizer: DomSanitizer, private ministerDetailService: MinisterDetailService, private activatedRoute: ActivatedRoute, location: Location) {
    this.currentPath = location.prepareExternalUrl(location.path());
  }

  isValueEmpty(passedValue) {
    return passedValue === undefined
      || passedValue === ""
      || passedValue === null;
  }

  getSanitizedUrl(url) {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url.trim());
  }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadMinisterDetails();
  }
  getMinisterFBProfile(ministerFBUrl) {
    return this.getSanitizedUrl("https://www.facebook.com/plugins/page.php?href=" + ministerFBUrl + "&tabs=timeline&width=340&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId");
  }
  getCurrentPageUrl() {
    return this.getSanitizedUrl(this.currentPath);
  }

  getTwSharePageUrl() {
    return this.getSanitizedUrl("https://twitter.com/share?url=" + this.currentPath);
  }

  getFBSharePageUrl() {
    return this.getSanitizedUrl("https://www.facebook.com/sharer.php?u=" + this.currentPath);
  }

  getGPSharePageUrl() {
    return this.getSanitizedUrl("https://plus.google.com/share?url=" + this.currentPath);
  }

  getMinisterTWProfile(ministerTWUrl) {
    return this.getSanitizedUrl(ministerTWUrl);
  }

  loadMinisterDetails() {
    this.ministerDetailService.getMinisterDetails(this.id).subscribe((result) => {
      this.minister = result;
    });
  }
}
