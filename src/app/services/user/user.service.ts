import {Injectable} from '@angular/core';
import {Observable} from "rxjs/index";
import {Store} from "../store/store";

@Injectable({
    providedIn: 'root'
})
export class UserService {

    public user$: Observable<any> = this.store.select('user');

    constructor(private store: Store) {}

}
