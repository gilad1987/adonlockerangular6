import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-column',
    templateUrl: './column.component.html',
    styleUrls: ['./column.component.scss']
})
export class ColumnComponent implements OnInit, OnChanges {

    @Input('column') column;

    @Input('index') index;

    constructor() {

    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (changes.column) {
            this.column = Object.assign({}, changes.column.currentValue);
        }
    }

}
