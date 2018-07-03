import {Injectable} from '@angular/core';
import {throwError} from 'rxjs/index';
import {Store} from '../services/store/store';
import {HttpClient} from '@angular/common/http';
import {catchError, tap} from 'rxjs/internal/operators';
import {Router} from '@angular/router';
import {User} from './user.interface';
import {isDevMode} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

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
        // return new Observable((obs) => {
        //     debugger;
        //     const user = this.store.value.user;
        //
        //     if (!this.token) {
        //         obs.next(false);
        //         obs.complete();
        //         return;
        //     }
        //
        //     if (!user) {
        //         this.getUser$().subscribe(
        //             (_user) => obs.next(typeof _user !== 'undefined'),
        //             (error) => obs.error(error));
        //     }
        // });

    }

    private getUser$() {
        return this.http
            .get(`${this.BASE_URL}/api/users/me`)
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
            .post(`${this.BASE_URL}/auth/local`, {email, password})
            .pipe(catchError((err, caught) => throwError(err)));
    }

    public logout() {
        localStorage.removeItem('token');
        this.store.set('user', undefined);
        this.router.navigate(['login']);
    }
}
