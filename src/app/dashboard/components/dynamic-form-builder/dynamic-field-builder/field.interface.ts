import {ValidationErrors, Validator, ValidatorFn} from '@angular/forms';
import {Observable, Subscription} from 'rxjs/index';
import {TemplateRef} from '@angular/core';

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
    displayFn?: Function;
    propToDisplay?: string; // for auto complete display in options
    filter?: Function;
    disabled?: boolean;
    type: 'textarea' | 'input' | 'radio' | 'checkboxs' | 'dropdown' | 'autocomplete';
    inputType?: 'text' | 'number' | 'email';
    value?: string | number | boolean;
    placeholder?: string;
    icon?: string;
    // options?: Array<DropdownOption> | Observable<[DropdownOption]>;
    options?: Observable<any> | Subscription;
    validations?: Array<InputValidator>;
    optionTemplate?: TemplateRef<any>;
}
