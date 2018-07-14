import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-cabinet',
    templateUrl: './cabinet.component.html',
    styleUrls: ['./cabinet.component.scss'],
})
export class CabinetComponent implements OnInit, OnChanges {

    @Input('cabinet') cabinet;

    @Input('section') section;

    @Input('school') school;

    constructor() {

    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (changes.cabinet) {
            this.cabinet = Object.assign({}, changes.cabinet.currentValue);
        }
        if (changes.section) {
            this.section = Object.assign({}, changes.section.currentValue);
        }

        if (changes.school) {
            this.school = Object.assign({}, changes.school.currentValue);
        }
    }

}
