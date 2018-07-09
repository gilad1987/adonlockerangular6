import {Injectable, isDevMode} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Store} from '../../../services/store/store';
import {catchError, tap} from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {

    public notifications$: Observable<[any]> = this.store.select('notifications');

    private loading: boolean = false;

    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

    constructor(private store: Store,
                private http: HttpClient) {
    }

    get$(force = false): Observable<[any]> {

        if (this.loading || (!force && this.store.value.notifications)) {
            return this.notifications$;
        }

        this.loading = true;
        this.http.get(`${this.BASE_URL}/api/notifications`)
            .pipe(
                tap(
                    (notifications) => this.store.set('notifications', notifications),
                    (error) => {
                        return catchError(error);
                    },
                    () => this.loading = false
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();

        return this.notifications$;
    }
}
