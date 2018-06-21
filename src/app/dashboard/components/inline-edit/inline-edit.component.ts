import {Component, ElementRef, EventEmitter, Host, Input, OnInit, Optional, Output, ViewChild} from '@angular/core';
import {SatPopover} from "@ncstate/sat-popover";
import {filter} from "rxjs/internal/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/index";
import {MatOption, MatSelect} from "@angular/material";

@Component({
    selector: 'app-inline-edit',
    templateUrl: './inline-edit.component.html',
    styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements OnInit {

    @Input()
    model: any;

    @Input()
    type: string;

    @Input()
    placeholder: string = '';

    @Input('collection')
    collection$: Observable<[any]>;

    @Input()
    selected: any;

    @Output()
    update: EventEmitter<string> = new EventEmitter<string>();

    @ViewChild('popover') popover: SatPopover;
    @ViewChild('select') select: MatSelect;

    private form: FormGroup;

    public toggleDisplayInlineEdit: boolean = false;

    constructor() {
    }

    get f() {
        return this.form.controls;
    }

    get isTypeField() {
        return this.type === 'field';
    }

    get isTypeSelect() {
        return this.type === 'select';
    }

    ngOnInit() {
        this.form = new FormGroup({
            formModel: new FormControl(this.model, [
                Validators.minLength(2),
                Validators.required
            ]),
        });
    }

    onSubmit() {
        if (this.popover) {
            this.popover.close();
            this.update.emit(this.f.formModel.value);
        }
    }

    onCancel() {
        if (this.popover) {
            this.popover.close();
            this.update.emit();
        }
    }

    displayInlineEdit() {
        this.toggleDisplayInlineEdit = !this.toggleDisplayInlineEdit;
        setTimeout(() => {
            if (this.popover) {
                this.popover.open();
            }

            if (this.select) {
                this.select.open();
            }
        }, 0);
    }


    selectionChange(selected) {
        this.update.emit(selected.value);
    }
}
