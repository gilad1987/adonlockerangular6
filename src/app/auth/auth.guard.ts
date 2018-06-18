import {Injectable} from '@angular/core';
import {CanLoad, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';
import {Observable} from "rxjs/index";
import {HttpErrorResponse} from "@angular/common/http";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {
    constructor(private authService: AuthService,
                private router: Router) {
    }

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

        try {
            const isLoggedUser = await this.authService.isLoggedIn();
            if (isLoggedUser) {
                return true;
            }
        } catch (error: HttpErrorResponse) {}
        console.log('redirect from canActivate');
        this.router.navigate(['login']);
    }
}