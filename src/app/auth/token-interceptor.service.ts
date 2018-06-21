import {Injectable} from '@angular/core';
import {
    HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest,
    HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs/index";
import {AuthService} from "./auth.service";
import {tap} from "rxjs/internal/operators";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

    constructor(private auth: AuthService,
                private router: Router) {
    }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: `Bearer ${this.auth.token}`
            }
        });

        return next.handle(request)
            .pipe(tap((event: HttpEvent<any>) => {

                    if (event instanceof HttpResponse && event.body.token) {
                        localStorage.setItem('token', event.body.token);
                    }
                    return event;

                }, (err: any) => {
                    if (err instanceof HttpErrorResponse) {
                        if (err.status === 401) {
                            this.router.navigate(['login']);
                        }
                    }
                }
            ));
    }
}
