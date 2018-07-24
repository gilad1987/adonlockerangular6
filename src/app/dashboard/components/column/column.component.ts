import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit, OnChanges {

    @Input('column') column;

    @Input('index') index;

    @Input('cabinet') cabinet;

    @Input('section') section;

    @Input('school') school;

    constructor() {

    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (changes.column) {
            this.column = Object.assign({}, changes.column.currentValue);
        }

        if (changes.cabinet) {
            this.cabinet = Object.assign({}, changes.cabinet.currentValue);
        }

        if (changes.section) {
            this.section = Object.assign({}, changes.section.currentValue);
        }

        if (changes.school) {
            this.school = Object.assign({}, changes.school.currentValue);
        }

        if (changes.index) {
            this.index =  changes.index.currentValue;
        }
    }

}
