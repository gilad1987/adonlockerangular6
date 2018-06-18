import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {Store} from "../store/store";
import {HttpClient} from "@angular/common/http";
import {catchError, first, tap} from "rxjs/internal/operators";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public user$: Observable = this.store.select('user');

    constructor(private store: Store,
                private http: HttpClient,
                private router: Router) {

    }

    public get token() {
        return localStorage.getItem('token');
    }

    public get$() {
        return this.http
            .get('http://localhost:9091/api/users/me')
            .pipe(tap(
                (user) => this.store.set('user', user),
                (error) => {
                    if (error.status === 401) {
                        this.logout();
                    }
                    return catchError(error);
                }
            ));
    }

    logout() {
        localStorage.removeItem('token');
        this.store.set('user', undefined);
        console.log('redirect from logout');
        this.router.navigate(['login']);
    }
}
