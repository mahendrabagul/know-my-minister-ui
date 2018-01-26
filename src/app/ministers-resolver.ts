import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Minister } from './minister';
import { SearchService } from './search.service';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class MinistersResolver implements Resolve<Observable<Minister[]>> {
    constructor(private searchService: SearchService) { }
    public resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<Minister[]> {
        return this.searchService.getAllMinisters();
    }
}