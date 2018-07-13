import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Field} from './dynamic-field-builder/field.interface';

@Component({
    selector: 'app-dynamic-form-builder',
    templateUrl: './dynamic-form-builder.component.html',
    styleUrls: ['./dynamic-form-builder.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFormBuilderComponent implements OnInit {

    @Input()
    fields;

    @Input()
    initialData = {};

    @Output()
    onSubmit: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    onCancel: EventEmitter<string> = new EventEmitter<string>();

    public form: FormGroup;

    constructor() {
    }

    ngOnInit() {

        const controls = this.fields.reduce((fields, field) => {
            fields[field.name] = new FormControl({value: field.value, disabled: field.disabled}, field.validations.map((v) => v.fn));
            return fields;
        }, {});

        this.form = new FormGroup(controls);
    }

    reset() {
        this.form.reset();
    }

    cancel() {
        this.onCancel.emit();
    }

    submit() {
        this.onSubmit.emit(this.form.value);
    }

}
