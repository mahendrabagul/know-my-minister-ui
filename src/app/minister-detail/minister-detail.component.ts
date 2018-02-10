import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MinisterDetailService } from './minister-detail.service';
import { Minister } from '../minister-list/minister';

@Component({
  selector: 'app-minister-detail',
  templateUrl: './minister-detail.component.html',
  styleUrls: ['./minister-detail.component.css']
})
export class MinisterDetailComponent implements OnInit {
  id: number;
  minister: Minister = new Minister();
  videoUrl: string = "http://localhost:1337/assets/videos/indian.mp4";
  speechUrl = "https://www.youtube.com/embed/8Z72UenFOrAdsds?autoplay=1";

  constructor(private ministerDetailService: MinisterDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadMinisterDetails();
  }

  getCurrentPageUrl() {
    // return window.location.href;
    return 'https://mahendrabagul.github.io/knowmyminister/';
  }

  getTwSharePageUrl() {
    return "https://twitter.com/intent/tweet?text=I like this page";
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
