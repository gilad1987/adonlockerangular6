import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
    selector: 'app-cabinet',
    templateUrl: './cabinet.component.html',
    styleUrls: ['./cabinet.component.scss'],
})
export class CabinetComponent implements OnInit, OnChanges {

    @Input('cabinet') cabinet;

    constructor() {

    }

    ngOnInit() {
    }

    ngOnChanges(changes) {
        if (changes.cabinet) {
            this.cabinet = Object.assign({}, changes.cabinet.currentValue);
        }
    }

}
