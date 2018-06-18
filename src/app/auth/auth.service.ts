import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs/index";
import {User} from "./user.interface";
import {Store} from "../services/store/store";
import {HttpClient} from "@angular/common/http";
import {catchError, first, map} from "rxjs/internal/operators";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user: Observable<User> = this.store.select('user');

    constructor(private store: Store,
                private http: HttpClient) {
    }

    public get token() {
        return localStorage.getItem('token');
    }

    checkPermissions() {
        return of(false);
    }

    isLoggedIn() {
        return of(false);
    }

    login(email, password) {
        return this.http
            .post('http://localhost:9091/auth/local', {email, password})
            .pipe(catchError((err, caught) => throwError(err)));
    }

    logout() {

    }
}
