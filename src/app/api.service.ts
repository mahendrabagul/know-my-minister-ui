import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Minister } from './minister';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/observable/throw';
import { NavBar } from './nav-bar';

const API_URL = environment.apiUrl;

@Injectable()
export class ApiService {
  queryUrl: string = '?q=';
  ministerUrl: string = '/minister';
  navbarUrl: string = '/navbar';
  API_URL1: string = 'http://localhost:1337'
  constructor(private httpClient: HttpClient) { }
  searchMinisters(terms: Observable<string>) {
    return terms.debounceTime(400)
      .distinctUntilChanged()
      .switchMap(term => this.searchEntries(term));
  }
  searchEntries(term) {
    // return this.httpClient
    //   .get<Minister[]>(API_URL + "/minister").catch(this.handleError);
    return this.httpClient
      .get<Minister[]>(this.API_URL1 + this.ministerUrl + this.queryUrl + term);
  }
  getAllMinisters() {
    return this.httpClient
      .get<Minister[]>(this.API_URL1 + this.ministerUrl);
  }
  getNavbar() {
    return this.httpClient
      .get<NavBar>(API_URL + this.navbarUrl);
  }
  private handleError(error: Response | any) {
    console.error('ApiService::handleError', error);
    return Observable.throw(error);
  }
}
