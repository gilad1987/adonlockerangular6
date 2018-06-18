import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardModule} from './dashboard/dashboard.module';
import {SiteModule} from './site/site.module';
import {AuthModule} from './auth/auth.module';

import {AppComponent} from './app.component';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './dashboard/components/login/login.component';
import {ROUTES} from './routes';

import {Store} from './services/store/store';
import {HttpModule} from "@angular/http";
import {HttpClientModule} from "@angular/common/http";

import {UserService} from "./services/user/user.service";

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
    ],
    imports: [
        BrowserAnimationsModule,
        BrowserModule,
        AuthModule,
        ReactiveFormsModule,
        MaterialModule,
        DashboardModule,
        HttpClientModule,
        SiteModule,
        RouterModule.forRoot(ROUTES, {
                // enableTracing: true,
            }
        ),
    ],
    providers: [
        Store,
        UserService
    ],
    exports: [
        // RouterModule
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

