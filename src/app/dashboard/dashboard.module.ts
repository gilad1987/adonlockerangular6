import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './containers/dashboard/dashboard.component';

import {RouterModule, Routes} from "@angular/router";

import {AuthModule} from '../auth/auth.module';

import {ROUTES} from './routes';
import { SchoolsComponent } from './containers/schools/schools.component';
import { StudentsComponent } from './containers/students/students.component';
import {MaterialModule} from '../material/custom-material.module';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


@NgModule({
    imports: [
        CommonModule,
        AuthModule,
        MaterialModule,
        BrowserAnimationsModule,
        RouterModule.forChild(<Routes>ROUTES)
    ],
    exports: [
        DashboardComponent,

    ],
    declarations: [
        DashboardComponent,
        SchoolsComponent,
        StudentsComponent,
    ]
})
export class DashboardModule {
}
