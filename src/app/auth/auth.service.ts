import {Injectable} from '@angular/core';
import {throwError} from "rxjs/index";
import {Store} from "../services/store/store";
import {HttpClient} from "@angular/common/http";
import {catchError} from "rxjs/internal/operators";
import {UserService} from "../services/user/user.service";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private store: Store,
                private userService: UserService,
                private http: HttpClient,
                private router: Router) {
    }

    public get token() {
        return localStorage.getItem('token');
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
        localStorage.removeItem('token');
        this.router.navigate(['/']);
    }
}
