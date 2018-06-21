import {Component, ElementRef, EventEmitter, Host, Input, OnInit, Optional, Output, ViewChild} from '@angular/core';
import {SatPopover} from "@ncstate/sat-popover";
import {filter} from "rxjs/internal/operators";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
    selector: 'app-inline-edit',
    templateUrl: './inline-edit.component.html',
    styleUrls: ['./inline-edit.component.scss']
})
export class InlineEditComponent implements OnInit {

    @Input()
    model: any;

    @Input()
    placeholder: string = '';

    @Output()
    update: EventEmitter = new EventEmitter();

    @ViewChild('element') popover: SatPopover;

    private form: FormGroup;

    public toggleDisplayInlineEdit: boolean = false;

    constructor() {
    }

    get f() {
        return this.form.controls;
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
            this.popover.open();
        }, 0);
    }

}
