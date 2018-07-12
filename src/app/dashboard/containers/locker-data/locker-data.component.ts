import {Component, Input, OnInit} from '@angular/core';
import {Field} from '../../components/dynamic-form-builder/dynamic-field-builder/field.interface';
import {Validators} from '@angular/forms';

@Component({
    selector: 'app-locker-data',
    templateUrl: './locker-data.component.html',
    styleUrls: ['./locker-data.component.scss']
})
export class LockerDataComponent implements OnInit {

    @Input('locker') locker;

    public fields: Field[] = [
        {
            type: 'input',
            name: 'first_name',
            placeholder: 'שם פרטי',
            value: '',
            validations: [
                {
                    name: 'required',
                    fn: Validators.required,
                    text: 'שדה חובה'
                },
                {
                    name: 'minlength',
                    fn: Validators.minLength(2),
                    text: 'חובה להכניס לפחות 2 תווים'
                }
            ]
        }
        , {
            type: 'input',
            name: 'last_name',
            placeholder: 'שם משפחה',
            value: '',
            validations: [
                {
                    name: 'minlength',
                    fn: Validators.minLength(2),
                    text: 'חובה להכניס לפחות 2 תווים'
                }
            ]
        },
        {
            type: 'input',
            name: '_class',
            placeholder: 'כיתה',
            value: '',
            validations: [
                {
                    name: 'minlength',
                    fn: Validators.minLength(2),
                    text: 'חובה להכניס לפחות 2 תווים'
                }, {
                    name: 'required',
                    fn: Validators.required,
                    text: 'שדה חובה'
                }
            ]
        },
        {
            type: 'input',
            name: 'email',
            placeholder: 'אימייל',
            value: '',
            validations: [
                {
                    name: 'email',
                    fn: Validators.email,
                    text: 'כתובת המייל אינה תקינה.'
                }
            ],
        },
        {
            type: 'input',
            name: 'phone_number',
            placeholder: 'טלפון',
            value: '',
            validations: [
                {
                    name: 'minlength',
                    fn: Validators.minLength(2),
                    text: 'חובה להכניס לפחות 2 תווים'
                }, {
                    name: 'required',
                    fn: Validators.required,
                    text: 'שדה חובה'
                }
            ]
        },
        {
            type: 'input',
            name: 'paid',
            placeholder: 'סכום שהתקבל',
            value: '',
            validations: [
                {
                    name: 'phoneNumber',
                    fn: Validators.required,
                    text: 'מספר הטלפון אינו תקין.'
                }
            ]
        },
        {
            type: 'textarea',
            name: 'note',
            placeholder: 'הערות',
            value: '',
            validations: [
                {
                    name: 'required',
                    fn: Validators.required,
                    text: 'מספר הטלפון אינו תקין.'
                }
            ]
        }
    ];

    constructor() {
    }

    ngOnInit() {
        console.log(this.locker);
    }

}
