import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-minister-detail',
  templateUrl: './minister-detail.component.html',
  styleUrls: ['./minister-detail.component.css']
})
export class MinisterDetailComponent implements OnInit {
  id: number;
  constructor(private _activeRoute: ActivatedRoute) { }

  ngOnInit() {
    this.id = this._activeRoute.snapshot.params['id'];
  }
}
