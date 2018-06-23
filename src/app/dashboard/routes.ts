import {Route, Routes} from '@angular/router';
import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {AuthGuard} from "../auth/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SchoolsComponent} from "./containers/schools/schools.component";
import {StudentsComponent} from "./containers/students/students.component";

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardComponent
    },
    {
        path: 'dashboard/schools/:id',
        canActivate: [AuthGuard],
        component: SchoolsComponent
    },
    {
        path: 'dashboard/schools',
        canActivate: [AuthGuard],
        component: SchoolsComponent
    },
    {
        path: 'dashboard/students',
        canActivate: [AuthGuard],
        component: StudentsComponent
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
