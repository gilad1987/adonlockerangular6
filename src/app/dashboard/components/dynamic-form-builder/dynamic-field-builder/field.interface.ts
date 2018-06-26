import {ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Observable} from "rxjs/index";

interface DropdownOption {
    value: string;
    text: string;
}

interface InputValidator {
    name: string;
    fn: ValidatorFn | ValidationErrors;
    text: string;
}

export interface Field {
    name: string;
    type: 'textarea' | 'input' | 'radio' | 'checkboxs' | 'dropdown';
    inputType?: 'text' | 'number' | 'email';
    value?: string;
    placeholder?: string;
    options?: Array<DropdownOption> | Observable<any>;
    validations?: Array<InputValidator>;
}
