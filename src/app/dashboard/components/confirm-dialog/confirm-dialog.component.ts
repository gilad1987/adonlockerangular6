import {Component, Inject, Input, OnInit} from '@angular/core';
import {FormControl, FormGroup} from "@angular/forms";
import {CustomValidatorsService} from "../../services/custom-validators/custom-validators.service";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent implements OnInit {

    public confirmForm: FormGroup;

    constructor(public customValidatorsService: CustomValidatorsService,
                public dialogRef: MatDialogRef<ConfirmDialogComponent>,
                @Inject(MAT_DIALOG_DATA) public data) {
    }

    ngOnInit() {

        this.confirmForm = new FormGroup({
            _delete: new FormControl('', this.customValidatorsService.checkInputBeforeConfirmDelete)
        });
    }

    cancel() {
        this.dialogRef.close(false);
    }

    approve() {
        this.dialogRef.close(true);
    }

}
