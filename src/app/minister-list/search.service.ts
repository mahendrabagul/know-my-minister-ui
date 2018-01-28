import { Injectable } from '@angular/core';
import { Minister } from './minister';
import { Observable } from 'rxjs/Observable';
import { ApiService } from '../api.service';

@Injectable()
export class SearchService {
  constructor(private api: ApiService) { }
  searchMinisters(terms: Observable<string>): Observable<Minister[]> {
    return this.api.searchMinisters(terms);
  }
  getAllMinisters(): Observable<Minister[]> {
    return this.api.getAllMinisters();
  }
}
