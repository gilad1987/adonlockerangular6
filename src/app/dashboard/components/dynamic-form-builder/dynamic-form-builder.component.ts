import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";

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
    initialData;

    @Output()
    submit: EventEmitter<string> = new EventEmitter<string>();

    @Output()
    cancel: EventEmitter<string> = new EventEmitter<string>();

    public form: FormGroup;

    constructor() {
    }

    ngOnInit() {

        const controls = this.fields.reduce((fields, item) => {
            fields[item.name] = new FormControl(item.value || '', item.validations.map((v) => v.fn));
            return fields;
        }, {});

        this.form = new FormGroup(controls);
    }

}
