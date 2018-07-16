import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './components/dashboard/dashboard.component';

import {RouterModule, Routes} from '@angular/router';

import {AuthModule} from '../auth/auth.module';

import {ROUTES} from './routes';
import {SchoolsComponent} from './containers/schools/schools.component';
import {StudentsComponent} from './containers/students/students.component';
import {MaterialModule} from '../material/custom-material.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {InlineEditComponent} from './components/inline-edit/inline-edit.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MenuComponent} from './components/menu/menu.component';
import {StudentsPageComponent} from './components/students-page/students-page.component';
import {OverlayModule} from '@angular/cdk/overlay';
import {DashboardPageComponent} from './components/dashboard-page/dashboard-page.component';
import {UsersPageComponent} from './components/users-page/users-page.component';
import {DynamicFormBuilderComponent} from './components/dynamic-form-builder/dynamic-form-builder.component';
import {DynamicFieldBuilderComponent} from './components/dynamic-form-builder/dynamic-field-builder/dynamic-field-builder.component';
import {AddNewStudentComponent} from './components/add-new-student/add-new-student.component';
import {AddNewSchoolComponent} from './components/add-new-school/add-new-school.component';
import {TooltipComponent} from './components/tooltip/tooltip.component';
import {ConfirmDialogComponent} from './components/confirm-dialog/confirm-dialog.component';
import {SchoolsPageComponent} from './components/schools-page/schools-page.component';
import {SchoolComponent} from './components/school/school.component';
import {SectionsComponent} from './components/sections/sections.component';
import {SectionComponent} from './components/section/section.component';
import {UsersComponent} from './containers/users/users.component';
import {CabinetsComponent} from './components/cabinets/cabinets.component';
import {TransactionPageComponent} from './components/transaction-page/transaction-page.component';
import {AlTableComponent} from './components/al-table/al-table.component';
import {NotificationsPageComponent} from './components/notifications-page/notifications-page.component';
import {LockersComponent} from './components/lockers/lockers.component';
import {LockerComponent} from './components/locker/locker.component';
import {CabinetComponent} from './components/cabinet/cabinet.component';
import {ColumnsComponent} from './components/columns/columns.component';
import {ColumnComponent} from './components/column/column.component';
import {LockerDialogComponent} from './components/locker-dialog/locker-dialog.component';
import {LockerDataComponent} from './components/locker-data/locker-data.component';
import {SchoolsService} from './services/schools/schools.service';
import { LocksPageComponent } from './components/lock-page/locks-page.component';


@NgModule({
    imports: [
        CommonModule,
        AuthModule,
        MaterialModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        OverlayModule,
        RouterModule.forChild(<Routes>ROUTES)
    ],
    exports: [
        DashboardComponent,

    ],
    providers: [
        SchoolsService
    ],
    declarations: [
        DashboardComponent,
        SchoolsComponent,
        StudentsComponent,
        InlineEditComponent,
        MenuComponent,
        StudentsPageComponent,
        DashboardPageComponent,
        UsersPageComponent,
        DynamicFormBuilderComponent,
        DynamicFieldBuilderComponent,
        AddNewStudentComponent,
        AddNewSchoolComponent,
        TooltipComponent,
        ConfirmDialogComponent,
        SchoolsPageComponent,
        SchoolComponent,
        SectionsComponent,
        SectionComponent,
        UsersComponent,
        CabinetsComponent,
        TransactionPageComponent,
        AlTableComponent,
        NotificationsPageComponent,
        LockersComponent,
        LockerComponent,
        CabinetComponent,
        ColumnsComponent,
        ColumnComponent,
        LockerDialogComponent,
        LockerDataComponent,
        LocksPageComponent
    ],
    entryComponents: [
        AddNewStudentComponent,
        ConfirmDialogComponent,
        SchoolComponent,
        LockerDialogComponent

    ]
})
export class DashboardModule {
}
