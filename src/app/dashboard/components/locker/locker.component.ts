import {Component, HostBinding, HostListener, Input, OnChanges, OnDestroy, OnInit} from '@angular/core';
import {LockerDialogComponent} from '../locker-dialog/locker-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-locker',
    templateUrl: './locker.component.html',
    styleUrls: ['./locker.component.scss'],

})
export class LockerComponent implements OnInit, OnChanges, OnDestroy {

    public lockerNumber: number;

    private dialogRef;

    @Input('school') school;
    @Input('section') section;
    @Input('cabinet') cabinet;
    @Input('locker') locker;
    @Input('columnIndex') columnIndex;
    @Input('index') index;
    @HostBinding('class.active') hasRegisterClass: boolean;

    public isDigital: boolean;

    @HostListener('click', ['$event'])
    onClick(e): void {
        this.dialogRef = this.dialog.open(LockerDialogComponent, {
            data: {
                locker: this.locker,
                cabinet: this.cabinet,
                section: this.section,
                school: this.school,
            }
        });

        this.dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed', this.locker);
        });
    }

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
        this.locker.number = this.lockerNumber = (100 * (this.index + 1)) + (this.columnIndex + 1);
        this.hasRegisterClass = (this.locker.student !== null);
        this.isDigital = (Number(this.locker.type) === 1);
    }

    ngOnChanges(changes) {
        if (changes.locker) {
            this.locker = Object.assign({}, changes.locker.currentValue);
        }
    }

    ngOnDestroy() {
        if (this.dialogRef) {
            this.dialogRef.close();
        }
    }

}
