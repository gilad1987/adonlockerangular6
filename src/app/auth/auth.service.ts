import {Injectable} from '@angular/core';
import {throwError} from "rxjs/index";
import {Store} from "../services/store/store";
import {HttpClient} from "@angular/common/http";
import {catchError,tap} from "rxjs/internal/operators";
import {UserService} from "../services/user/user.service";
import {Router} from "@angular/router";
import {User} from "./user.interface";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private store: Store,
                private http: HttpClient,
                private router: Router) {
    }

    public get token() {
        return localStorage.getItem('token');
    }

    async isLoggedIn() {
        let user = this.store.value.user;

        if (this.token && !user) {
            user = await this.getUser$().toPromise();
        }

        return await !!user;
    }

    private getUser$() {
        return this.http
            .get('http://localhost:9091/api/users/me')
            .pipe(tap(
                (user: User) => this.store.set('user', user),
                (error) => {
                    if (error.status === 401) {
                        this.logout();
                    }
                    return catchError(error);
                }
            ));
    }

    public login(email, password) {
        return this.http
            .post('http://localhost:9091/auth/local', {email, password})
            .pipe(catchError((err, caught) => throwError(err)));
    }

    public logout() {
        localStorage.removeItem('token');
        this.store.set('user', undefined);
        this.router.navigate(['login']);
    }
}
