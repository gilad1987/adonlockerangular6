import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Field} from './field.interface';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
    selector: 'app-dynamic-field-builder',
    templateUrl: './dynamic-field-builder.component.html',
    styleUrls: ['./dynamic-field-builder.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFieldBuilderComponent implements OnInit {

    @Input() field: Field;
    @Input() form: FormGroup;
    @Input() control: FormControl;

    get isDirty() {
        return this.control.dirty;
    }

    constructor() {

    }

    hasError(errorName) {
        return this.isDirty && this.control.hasError(errorName);
    }

    ngOnInit() {
        console.log('field',this.field);
        // console.log('control',this.control);
    }

}
