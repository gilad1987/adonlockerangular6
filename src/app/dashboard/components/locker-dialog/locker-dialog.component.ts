import {Component, Inject, Input, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';

@Component({
    selector: 'app-locker-dialog',
    templateUrl: './locker-dialog.component.html',
    styleUrls: ['./locker-dialog.component.scss']
})
export class LockerDialogComponent implements OnInit {

    constructor(
        @Inject(MAT_DIALOG_DATA) public data,
        public dialogRef: MatDialogRef<LockerDialogComponent>) {
    }

    ngOnInit() {
    }

    submit(event) {
        debugger;
    }

    cancel(event) {
        this.dialogRef.close();
    }

}
