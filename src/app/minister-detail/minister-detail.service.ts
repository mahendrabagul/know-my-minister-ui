import { Injectable } from '@angular/core';
import { ApiService } from '../api.service';
import { Observable } from 'rxjs/Observable';
import { Minister } from '../minister-list/minister';

@Injectable()
export class MinisterDetailService {
  constructor(private api: ApiService) {
  }
  getMinisterDetails(id): Observable<Minister> {
    return this.api.getMinisterDetails(id);
  }
}
