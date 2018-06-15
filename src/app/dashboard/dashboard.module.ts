import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './containers/dashboard/dashboard.component';

import {RouterModule, Routes} from "@angular/router";

import {AuthModule} from '../auth/auth.module';

import {ROUTES} from './routes';


@NgModule({
    imports: [
        CommonModule,
        AuthModule,
        RouterModule.forChild(<Routes>ROUTES)
    ],
    exports: [
        DashboardComponent
    ],
    declarations: [
        DashboardComponent,

    ]
})
export class DashboardModule {
}
