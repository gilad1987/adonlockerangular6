import {Route, Routes} from '@angular/router';
import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {AuthGuard} from "../auth/auth.guard";
import {LoginComponent} from "./components/login/login.component";

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
