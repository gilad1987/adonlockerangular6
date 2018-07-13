import {ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Observable} from "rxjs/index";

export interface DropdownOption {
    text: string;
    value: number;
}

export interface InputValidator {
    name: string;
    fn: ValidatorFn | ValidationErrors;
    text: string;
}

export interface Field {
    name: string;
    disabled?: boolean;
    type: 'textarea' | 'input' | 'radio' | 'checkboxs' | 'dropdown' | 'autocomplete';
    inputType?: 'text' | 'number' | 'email';
    value?: string;
    placeholder?: string;
    // options?: Array<DropdownOption> | Observable<[DropdownOption]>;
    options?:  Observable<any>;
    validations?: Array<InputValidator>;
}
