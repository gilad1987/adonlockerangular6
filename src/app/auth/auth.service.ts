import { Injectable } from '@angular/core';
import {of} from "rxjs/index";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user = { isAdmin: false };

  checkPermissions() {
    return of(false);
  }
  isLoggedIn() {
    return of(true);
  }
}
