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

    async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {

        try {
            const isLoggedUser = await this.authService.isLoggedIn();
            if (isLoggedUser) {
                return true;
            }
        } catch (error) {
        }

        this.router.navigate(['login']);

        return false;
    }
}