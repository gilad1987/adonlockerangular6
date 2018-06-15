import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CustomMaterialModule} from './custom-material/custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DashboardModule} from './dashboard/dashboard.module';
import {AuthModule} from './auth/auth.module';

import {AppComponent} from './app.component';
import {PreloadAllModules, RouterModule, Routes} from "@angular/router";
import {LoginComponent} from './containers/login/login.component';
import {ROUTES} from './routes';

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
        CustomMaterialModule,
        DashboardModule,
        RouterModule.forRoot(ROUTES, {
                enableTracing: true,
            }
        ),
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}

