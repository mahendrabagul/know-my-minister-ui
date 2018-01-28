import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { NavBar } from './nav-bar';
import { ApiService } from '../api.service';

@Injectable()
export class NavbarService {
  constructor(private api: ApiService) { }
  getNavBar(): Observable<NavBar> {
    return this.api.getNavbar();
  }
}
