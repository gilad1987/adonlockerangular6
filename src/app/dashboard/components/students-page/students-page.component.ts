import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {StudentsComponent} from "../../containers/students/students.component";
import {ComponentPortal} from "@angular/cdk/portal";
import {MatDialog} from "@angular/material";
import {AddNewStudentComponent} from "../add-new-student/add-new-student.component";
import {pageFadeInOutAnimation} from '../../../animations/page-fade-in-out';

@Component({
    selector: 'app-students-page',
    templateUrl: './students-page.component.html',
    styleUrls: ['./students-page.component.scss'],
})
export class StudentsPageComponent implements OnInit, AfterViewInit, OnDestroy {

    constructor(private overlay: Overlay,
                public dialog: MatDialog) {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // const overlayRef = this.overlay.create();
        // const userProfilePortal = new ComponentPortal(StudentsComponent);
        // overlayRef.attach(userProfilePortal);

    }

    ngOnDestroy() {

    }

    openDialogAddStudent() {
        let dialogRef = this.dialog.open(AddNewStudentComponent, {});
    }

}
