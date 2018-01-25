import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
export class SearchService {
  baseUrl: string = 'http://localhost:1337/minister';
  queryUrl: string = '?fullName=';
  constructor(private httpClient: HttpClient) { }

  searchMinister(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.httpClient
      .get<any[]>(this.baseUrl);
    // return this.httpClient
    // .get<any[]>(this.baseUrl + this.queryUrl + term);
  }

}
