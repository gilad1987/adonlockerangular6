import {Injectable} from '@angular/core';
import {Observable, of, throwError} from "rxjs/index";
import {User} from "./user.interface";
import {Store} from "../services/store/store";
import {HttpClient} from "@angular/common/http";
import {catchError, first, map} from "rxjs/internal/operators";
import {UserService} from "../services/user/user.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private store: Store,
                private userService: UserService,
                private http: HttpClient) {
    }

    public get token() {
        return localStorage.getItem('token');
    }

    checkPermissions() {
        return of(false);
    }

    async isLoggedIn() {
        let user = this.store.value.user;

        if (this.token && !user) {
            user = await this.userService.get$().toPromise();
        }

        return await !!user;
    }

    login(email, password) {
        return this.http
            .post('http://localhost:9091/auth/local', {email, password})
            .pipe(catchError((err, caught) => throwError(err)));
    }

    logout() {

    }
}
