import {Injectable} from '@angular/core';
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';

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
                return await true;
            }
        } catch (error) {
            // this.router.navigate(['login']);
        }

        const referrer = window.location.href.replace(window.location.origin, '');
        this.router.navigate(['login'], {queryParams: {referrer: referrer}});

        return await false;
    }
}