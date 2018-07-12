import {ChangeDetectionStrategy, Component, HostBinding, HostListener, Input, OnChanges, OnInit} from '@angular/core';
import {LockerDialogComponent} from '../locker-dialog/locker-dialog.component';
import {MatDialog} from '@angular/material';

@Component({
    selector: 'app-locker',
    templateUrl: './locker.component.html',
    styleUrls: ['./locker.component.scss'],

})
export class LockerComponent implements OnInit, OnChanges {

    @Input('locker') locker;

    @Input('columnIndex') columnIndex;

    @Input('index') index;

    @HostBinding('class.active') hasRegisterClass: boolean;

    @HostListener('click', ['$event'])
    onClick(e): void {
        const dialogRef = this.dialog.open(LockerDialogComponent, {
            data: {
                locker: this.locker
            },
            width: '1000px',
        });

        dialogRef.afterClosed().subscribe(result => {
            console.log('The dialog was closed');
        });
    }

    public lockerNumber: number;

    constructor(public dialog: MatDialog) {
    }

    ngOnInit() {
        this.lockerNumber = (100 * (this.index + 1)) + (this.columnIndex + 1);
        this.hasRegisterClass = (this.locker.student !== null);
    }

    ngOnChanges(changes) {
        if (changes.locker) {
            this.locker = Object.assign({}, changes.locker.currentValue);
        }
    }
}
