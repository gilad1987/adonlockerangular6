import {AfterViewInit, Component, OnDestroy, OnInit} from '@angular/core';
import {Overlay} from "@angular/cdk/overlay";
import {StudentsComponent} from "../../containers/students/students.component";
import {ComponentPortal} from "@angular/cdk/portal";

@Component({
    selector: 'app-students-page',
    templateUrl: './students-page.component.html',
    styleUrls: ['./students-page.component.scss']
})
export class StudentsPageComponent implements OnInit, AfterViewInit, OnDestroy {

    constructor(private overlay: Overlay) {
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

}
