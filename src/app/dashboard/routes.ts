import {Route, Routes} from '@angular/router';
import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {AuthGuard} from "../auth/auth.guard";


export const ROUTES: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    }
];