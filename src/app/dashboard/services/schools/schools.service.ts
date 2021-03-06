import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../../services/store/store';
import {Observable, throwError} from 'rxjs/index';
import {catchError, tap} from 'rxjs/internal/operators';
import {isDevMode} from '@angular/core';
import {School} from '../../models/school.interface';
import {Resolve} from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class SchoolsService implements Resolve<[School]> {

    public schools$: Observable<[School]> = this.store.select('schools');
    public school$: Observable<[School]> = this.store.select('school');

    private loading: boolean = false;

    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

    constructor(private store: Store,
                private http: HttpClient) {
    }

    get$(force = false): Observable<[School]> {

        if (this.loading || (!force && this.store.value.schools)) {
            return this.schools$;
        }

        this.loading = true;
        this.http.get(`${this.BASE_URL}/api/schools`)
            .pipe(
                tap(
                    (schools) => {
                        this.store.set('schools', schools);
                        return this.schools$;
                    },
                    (error) => {
                        return catchError(error);
                    },
                    () => this.loading = false
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();

        return this.schools$;
    }

    getById$(id) {
        return this.http.get(`${this.BASE_URL}/api/schools/${id}`)
            .pipe(
                tap(
                    (school) => {
                        this.store.set('school', school);
                        return this.school$;
                    },
                    (error) => {
                        return catchError(error);
                    },
                    () => {

                    }
                )
            )
            .pipe(catchError((err, caught) => throwError(err)));
    }

    resolve() {
        return this.get$();
    }
}
