import {Injectable, isDevMode} from '@angular/core';
import {Observable, throwError} from 'rxjs';
import {School} from '../../models/school.interface';
import {HttpClient} from '@angular/common/http';
import {Store} from '../../../services/store/store';
import {catchError, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class PaymentsService {

    public payments$: Observable<[any]> = this.store.select('transactions');

    private loading: boolean = false;

    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

    constructor(private store: Store,
                private http: HttpClient) {
    }

    get$(force = false): Observable<[any]> {

        if (this.loading || (!force && this.store.value.schools)) {
            return this.payments$;
        }

        this.loading = true;
        this.http.get(`${this.BASE_URL}/api/transactions`)
            .pipe(
                tap(
                    (transactions) => this.store.set('transactions', transactions),
                    (error) => {
                        return catchError(error);
                    },
                    () => this.loading = false
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();

        return this.payments$;
    }
}
