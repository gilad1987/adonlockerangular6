import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthModule} from './auth/auth.module';

import {AppComponent} from './app.component';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './containers/login/login.component';
import {ROUTES} from './routes';

import {Store} from './services/store/store';

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
        RouterModule.forRoot(ROUTES, {
                enableTracing: true,
            }
        ),
    ],
    providers: [
        Store
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

