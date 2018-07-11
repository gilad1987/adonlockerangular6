import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-locker',
    templateUrl: './locker.component.html',
    styleUrls: ['./locker.component.scss'],

})
export class LockerComponent implements OnInit, OnChanges {

    @Input('locker') locker;

    @Input('columnIndex') columnIndex;

    @Input('index') index;

    public lockerNumber: number;

    constructor() {
    }

    ngOnInit() {
        this.lockerNumber = (100 * (this.index + 1)) + (this.columnIndex + 1);
    }

    ngOnChanges(changes) {
        if (changes.locker) {
            this.locker = Object.assign({}, changes.locker.currentValue);
        }
    }
}
