import {Component, OnInit} from '@angular/core';
import {Field} from '../dynamic-form-builder/dynamic-field-builder/field.interface';
import {Validators} from '@angular/forms';
import {Subject} from 'rxjs/index';
import {SchoolsService} from '../../services/schools/schools.service';
import {MatDialogRef} from '@angular/material';
import {StudentsService} from '../../services/sudents/students.service';

@Component({
    selector: 'app-add-new-student',
    templateUrl: './add-new-student.component.html',
    styleUrls: ['./add-new-student.component.scss']
})
export class AddNewStudentComponent implements OnInit {

    public loading: boolean = false;
    public subjectSchools = new Subject();

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
            type: 'dropdown',
            name: 'school_id',
            placeholder: 'שם בית ספר',
            value: '',
            options: this.subjectSchools.asObservable(),
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

    constructor(
        private schoolsService: SchoolsService,
        private studentsService: StudentsService,
        public dialogRef: MatDialogRef<AddNewStudentComponent>) {
        this.schoolsService.get$().subscribe((schools) => {

            if (!schools) {
                return;
            }

            const options = schools.map((school) => {
                return {
                    text: school.name,
                    value: school._id,
                };
            });

            this.subjectSchools.next(options);
        });
    }

    ngOnInit() {

    }

    onSubmit(event) {
        this.loading = true;
        const sub = this.studentsService.add(event).subscribe(() => {
            this.loading = true;
            this.dialogRef.close();
        }, () => {
            this.loading = false;
            // this.dialogRef.close();
        });
    }

    onCancel($event) {
        this.dialogRef.close();
    }

}
