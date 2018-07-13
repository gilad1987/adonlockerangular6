import {Route, Routes} from '@angular/router';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import {AuthGuard} from '../auth/auth.guard';
import {LoginComponent} from './components/login/login.component';
import {SchoolsComponent} from './containers/schools/schools.component';
import {StudentsPageComponent} from './components/students-page/students-page.component';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {UsersPageComponent} from './components/users-page/users-page.component';
import {SchoolsPageComponent} from './components/schools-page/schools-page.component';
import {SectionsComponent} from './components/sections/sections.component';
import {CabinetsComponent} from './components/cabinets/cabinets.component';
import {TransactionPageComponent} from './components/transaction-page/transaction-page.component';
import {NotificationsPageComponent} from './components/notifications-page/notifications-page.component';
import {SchoolsService} from './services/schools/schools.service';

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
                path: 'schools',
                component: SchoolsPageComponent,
                resolve: {
                    // schools$: SchoolsService
                }
            },
            {
                path: 'schools/:schoolId',
                component: SchoolsPageComponent,
                children: [
                    {
                        path: 'sections',
                        component: SectionsComponent,
                        children: [
                            {
                                path: ':sectionId/cabinets',
                                component: CabinetsComponent
                            },
                        ]
                    },
                ]
            },
            {
                path: 'students',
                component: StudentsPageComponent
            },
            {
                path: 'users',
                component: UsersPageComponent
            },
            {
                path: 'transactions',
                component: TransactionPageComponent
            },
            {
                path: 'notifications',
                component: NotificationsPageComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    }
];
