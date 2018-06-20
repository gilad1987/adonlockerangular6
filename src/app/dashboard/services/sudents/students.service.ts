import {Injectable} from '@angular/core';
import {Observable, throwError} from "rxjs/index";
import {Store} from "../../../services/store/store";
import {HttpClient} from "@angular/common/http";
import {catchError, tap} from "rxjs/internal/operators";

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    public students$: Observable<any> = this.store.select('students');

    constructor(private store: Store,
                private http: HttpClient) {
    }

    get$(force = false) {

        if (!force && this.store.value.students) {
            return this.students$;
        }

        this.http.get('http://localhost:9091/api/students')
            .pipe(
                tap(
                    (schools) => this.store.set('students', schools),
                    (error) => {
                        return catchError(error);
                    }
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();

        return this.students$;
    }
}
