import {Injectable} from '@angular/core';
import {CanLoad, CanActivate, Router} from '@angular/router';

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

    canActivate() {
        const canActivate$ = this.authService.isLoggedIn();
debugger;
        canActivate$.subscribe((canActivate) => {
            console.log('hasPermission', canActivate);
            this.route.navigateByUrl('/login');
        });

        return canActivate$;
    }
}