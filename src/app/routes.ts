import {Route, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

import {LoginComponent} from "./containers/login/login.component";

export const ROUTES: Routes = [
    {
        path: '**',
        redirectTo: 'login'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        canLoad: [AuthGuard],

    },
    {
        path: 'login', component: LoginComponent
    }
];