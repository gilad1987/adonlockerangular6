import {Injectable, isDevMode} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {catchError, tap} from 'rxjs/internal/operators';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../../services/store/store';
import {Lock} from '../../models/lock.interface';

@Injectable({
    providedIn: 'root'
})
export class LocksService {

    public locks$: Observable<[Lock]> = this.store.select('locks');

    private loading: boolean = false;
    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

    constructor(private store: Store,
                private http: HttpClient) {

    }

    get$(force = false): Observable<[Lock]> {

        if (this.loading || (!force && this.store.value.locks)) {
            return this.locks$;
        }

        this.loading = true;
        this.http.get(`${this.BASE_URL}/api/locks`)
            .pipe(
                tap(
                    (schools) => {
                        this.store.set('locks', schools);
                        return this.locks$;
                    },
                    (error) => {
                        return catchError(error);
                    },
                    () => this.loading = false
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();

        return this.locks$;
    }

    search(q) {
        return new Observable((obs) => {
            let subc = this.get$().subscribe((locks: [Lock]) => {
                if (locks) {
                    const filterValue = q.toLowerCase();
                    const results = (locks ? locks.filter(lock => Object.values(lock).filter((s) => `${s}`.includes(filterValue)).length) : []).splice(0, 50);

                    obs.next(results);
                    obs.complete();
                    if (subc) {
                        subc.unsubscribe();
                    }
                }

            });
        });
    }
}
