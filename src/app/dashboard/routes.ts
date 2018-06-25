import {Route, Routes} from '@angular/router';
import {DashboardComponent} from "./containers/dashboard/dashboard.component";
import {AuthGuard} from "../auth/auth.guard";
import {LoginComponent} from "./components/login/login.component";
import {SchoolsComponent} from "./containers/schools/schools.component";
import {StudentsPageComponent} from "./components/students-page/students-page.component";
import {DashboardPageComponent} from "./components/dashboard-page/dashboard-page.component";
import {UsersPageComponent} from "./components/users-page/users-page.component";

export const ROUTES: Routes = [
    {
        path: 'dashboard',
        canActivate: [AuthGuard],
        component: DashboardPageComponent,
        children: [
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'schools/:id',
                component: SchoolsComponent
            },
            {
                path: 'schools',
                component: SchoolsComponent
            },
            {
                path: 'students',
                component: StudentsPageComponent
            },
            {
                path: 'users',
                component: UsersPageComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
