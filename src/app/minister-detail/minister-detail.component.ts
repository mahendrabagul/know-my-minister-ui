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
  constructor(private ministerDetailService: MinisterDetailService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.loadMinisterDetails();
  }

  loadMinisterDetails() {
    this.ministerDetailService.getMinisterDetails(this.id).subscribe((result) => {
      this.minister = result;
    });
  }
}
