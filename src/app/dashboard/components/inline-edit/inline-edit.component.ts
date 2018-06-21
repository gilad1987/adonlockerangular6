import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {SatPopover} from "@ncstate/sat-popover";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {Observable} from "rxjs/index";
import {MatSelect} from "@angular/material";

@Component({
    selector: 'app-inline-edit',
    templateUrl: './inline-edit.component.html',
    styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements OnInit {

    @Input()
    model: any = null;

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

    public loading: boolean = false;

    public toggleDisplayInlineEdit: boolean = false;

    constructor() {
    }

    get f() {
        return this.form.controls;
    }

    get isField() {
        return this.type === 'field';
    }

    get isTextarea() {
        return this.type === 'textarea';
    }

    get isSelect() {
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
            this.emitUpdate(this.f.formModel.value);
        }
    }

    onCancel() {
        if (this.popover) {
            this.popover.close();
        }
    }

    selectOpenedChange(isOpen) {
        if (!isOpen) {
            this.toggleDisplayInlineEditable();
        }
    }

    toggleDisplayInlineEditable() {
        this.toggleDisplayInlineEdit = !this.toggleDisplayInlineEdit;
    }

    displayInlineEdit() {
        this.toggleDisplayInlineEditable();

        // setTimeout for run open popover after ui element render
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
        this.emitUpdate(selected.value);
    }

    emitUpdate(value) {

        if (this.model !== value) {
            this.loading = true;
            this.update.emit(value || null);
        }

        if (this.popover) {
            this.popover.close();
        }

        this.toggleDisplayInlineEditable();

    }
}
