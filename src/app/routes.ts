import {Route, Routes} from '@angular/router';
import {AuthGuard} from './auth/auth.guard';

import {LoginComponent} from "./dashboard/components/login/login.component";

export const ROUTES: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        loadChildren: './dashboard/dashboard.module#DashboardModule',
        // canLoad: [AuthGuard],

    }
]
