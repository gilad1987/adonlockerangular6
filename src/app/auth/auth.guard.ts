import {Injectable} from '@angular/core';
import {CanLoad, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router';

import {AuthService} from './auth.service';
import {Observable} from "rxjs/index";

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanLoad, CanActivate {
    constructor(private authService: AuthService, private route: Router) {
    }

    canLoad(): Observable<boolean> | boolean {
        debugger;
        const hasPermission$ = this.authService.checkPermissions();
        hasPermission$.subscribe((hasPermission) => {
            console.log('hasPermission', hasPermission);
            this.route.navigateByUrl('/login');
        });
        return hasPermission$;
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        const canActivate$ = this.authService.isLoggedIn();
        canActivate$.subscribe((canActivate) => {
            this.route.navigateByUrl('/login');
        });

        return canActivate$;
    }
}