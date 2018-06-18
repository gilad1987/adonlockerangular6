import {NgModule} from '@angular/core';

import {AuthService} from './auth.service';
import {AuthGuard} from './auth.guard';


import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import {TokenInterceptorService} from './token-interceptor.service';

@NgModule({
    imports: [
        HttpClientModule
    ],
    providers: [
        AuthService,
        AuthGuard,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: TokenInterceptorService,
            multi: true
        }
    ]
})
export class AuthModule {}
