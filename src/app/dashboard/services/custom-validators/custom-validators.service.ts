import {Injectable} from '@angular/core';
import {AbstractControl} from "@angular/forms";

@Injectable({
    providedIn: 'root'
})
export class CustomValidatorsService {

    constructor() {
    }

    checkInputBeforeConfirmDelete(control: AbstractControl) {
        return control.value === 'DELETE' ? null : {'invalidDelete': true};
    }
}
