import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs/index";
import {User} from "./user.interface";
import {Store} from "../services/store/store";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private user: Observable<User> = this.store.select('user');

    constructor(private store: Store) {
    }

    checkPermissions() {
        return of(false);
    }

    isLoggedIn() {
        return of(true);
    }
}
