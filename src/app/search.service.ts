import { Injectable } from '@angular/core';
import { Minister } from './minister';
import { ApiService } from './api.service';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {
  constructor(private api: ApiService) { }
  searchMinisters(terms: Observable<string>): Observable<Minister[]> {
    return this.api.searchMinisters(terms);
  }

}
