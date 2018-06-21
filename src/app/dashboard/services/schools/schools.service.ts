import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Store} from "../../../services/store/store";
import {Observable, throwError} from "rxjs/index";
import {catchError, tap} from "rxjs/internal/operators";
import {isDevMode} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class SchoolsService {

    public schools$: Observable<any> = this.store.select('schools');

    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

    constructor(private store: Store,
                private http: HttpClient) {
    }

    get$(force = false) {

        if (force && this.store.value.schools) {
            return this.schools$;
        }

        this.http.get(`${this.BASE_URL}/api/schools`)
            .pipe(
                tap(
                    (schools) => this.store.set('schools', schools),
                    (error) => {
                        return catchError(error);
                    }
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();

        return this.schools$;
    }
}
