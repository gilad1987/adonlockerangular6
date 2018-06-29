import {Component, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomValidatorsService} from "../../services/custom-validators/custom-validators.service";

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

    @Input() data: any = {};

    confirmForm: FormGroup;

    constructor(public customValidatorsService: CustomValidatorsService) {
    }

    ngOnInit() {

        this.confirmForm = new FormGroup({
            _delete: new FormControl('', this.customValidatorsService.checkInputBeforeConfirmDelete)
        });
    }

}
