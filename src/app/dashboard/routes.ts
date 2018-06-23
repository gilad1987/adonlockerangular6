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
        component: DashboardComponent,
        children: [
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
                component: StudentsComponent
            }
        ]
    }
];
