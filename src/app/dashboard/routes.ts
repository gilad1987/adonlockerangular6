import {Route, Routes} from '@angular/router';
import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {AuthGuard} from "../auth/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SchoolsComponent} from "./containers/schools/schools.component";

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'dashboard/school/:id',
        canActivate: [AuthGuard],
        component: SchoolsComponent
    },
    {
        path: 'dashboard/schools',
        canActivate: [AuthGuard],
        component: SchoolsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
