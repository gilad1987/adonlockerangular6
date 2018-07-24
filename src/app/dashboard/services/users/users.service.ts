import {Injectable, isDevMode} from '@angular/core';
import {catchError, tap} from 'rxjs/internal/operators';
import {Observable, throwError} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../../services/store/store';

@Injectable({
    providedIn: 'root'
})
export class UsersService {

    public users$: Observable<any> = this.store.select('users');
    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

    constructor(private store: Store,
                private http: HttpClient) {

    }

    get$(force = false) {

        if (!force && this.store.value.users) {
            return this.users$;
        }

        this.http.get(`${this.BASE_URL}/api/users`)
            .pipe(
                tap(
                    (schools) => this.store.set('users', schools),
                    (error) => {
                        return catchError(error);
                    }
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();

        return this.users$;
    }
}
