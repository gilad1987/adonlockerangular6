import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-locker',
    templateUrl: './locker.component.html',
    styleUrls: ['./locker.component.scss']
})
export class LockerComponent implements OnInit {

    @Input('locker') locker;

    constructor() {
    }

    ngOnInit() {
    }

}
