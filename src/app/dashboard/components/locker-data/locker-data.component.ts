import {Component, EventEmitter, Input, OnDestroy, OnInit, Output, TemplateRef, ViewChild} from '@angular/core';
import {Field} from '../dynamic-form-builder/dynamic-field-builder/field.interface';
import {LockerService} from '../../services/lockers/locker.service';
import {of} from 'rxjs';
import {StudentsService} from '../../services/sudents/students.service';
import {LocksService} from '../../services/locks/locks.service';

@Component({
    selector: 'app-locker-data',
    templateUrl: './locker-data.component.html',
    styleUrls: ['./locker-data.component.scss']
})
export class LockerDataComponent implements OnInit, OnDestroy {

    @Input('locker') locker;

    @Output()
    onSubmit: EventEmitter<any> = new EventEmitter<any>();

    @Output()
    onCancel: EventEmitter<any> = new EventEmitter<any>();

    @ViewChild('customAutoCompleteOption')
    private customAutoCompleteOption: TemplateRef<any>;

    public fields: Field[];

    constructor(
        private lockerService: LockerService,
        private studentsService: StudentsService,
        private locksService: LocksService
    ) {

    }

    ngOnInit() {

        this.locker.type = Number(this.locker.type);

        this.fields = [
            {
                type: 'input',
                name: 'number',
                placeholder: 'תא מספר',
                value: this.locker.number,
                disabled: true,
                validations: []
            },
            {
                type: 'dropdown',
                name: 'type',
                placeholder: 'סוג מנעול',
                value: this.locker.type,
                disabled: true,
                options: of(this.lockerService.TYPES),
                validations: [
                    // {
                    //     name: 'required',
                    //     fn: Validators.required,
                    //     text: 'שדה חובה'
                    // },
                    // {
                    //     name: 'minlength',
                    //     fn: Validators.minLength(2),
                    //     text: 'חובה להכניס לפחות 2 תווים'
                    // }
                ]
            },
            {
                type: 'dropdown',
                name: 'status',
                placeholder: 'סטטוס',
                value: Number(this.locker.is_active),
                options: of(this.lockerService.STATUS),
                validations: [
                    // {
                    //     name: 'required',
                    //     fn: Validators.required,
                    //     text: 'שדה חובה'
                    // },
                    // {
                    //     name: 'minlength',
                    //     fn: Validators.minLength(2),
                    //     text: 'חובה להכניס לפחות 2 תווים'
                    // }
                ]
            },
            {
                type: 'autocomplete',
                name: 'student',
                propToDisplay: 'fullName',
                placeholder: 'סטודנט משויך',
                displayFn: (student) => {
                    return student ? student.fullName : undefined;
                },
                filter: (() => {

                    return (query) => {
                        query = query && query.toLowerCase() || '';
                        return this.studentsService.search(query);
                    };
                })(),
                value: this.locker.student,
                // options: this.studentsService.search(''), // this.subjectStudents.asObservable(),
                validations: []
            },
        ];


        if (this.locker.type === this.lockerService.MECHANIC_TYPE.value) {
            this.fields.push({
                type: 'autocomplete',
                name: 'lock',
                propToDisplay: 'number',
                placeholder: 'מנעול',
                displayFn: (lock) => {
                    return lock ? lock.number : undefined;
                },
                filter: (() => {
                    return (query) => {
                        query = query && query.toLowerCase() || '';
                        return this.locksService.search(query);
                    };
                })(),
                optionTemplate: this.customAutoCompleteOption,
                value: this.locker.lock,
                // options: this.studentsService.search(''), // this.subjectStudents.asObservable(),
                validations: []
            });
        }

        if (this.locker.type === this.lockerService.DIGITAL_TYPE.value) {
            this.fields.push({
                type: 'input',
                name: 'code1',
                placeholder: 'קוד',
                value: this.locker.code,
                validations: [
                    // {
                    //     name: 'required',
                    //     fn: Validators.required,
                    //     text: 'מספר הטלפון אינו תקין.'
                    // }
                ]
            });

            this.fields.push({
                type: 'input',
                name: 'code_master',
                placeholder: 'קוד מאסטר',
                value: this.locker.code_master,
                validations: [
                    // {
                    //     name: 'required',
                    //     fn: Validators.required,
                    //     text: 'מספר הטלפון אינו תקין.'
                    // }
                ]
            });
        }

        this.fields.push({
            type: 'textarea',
            name: 'note',
            placeholder: 'הערות',
            value: this.locker.note,
            validations: [
                // {
                //     name: 'required',
                //     fn: Validators.required,
                //     text: 'מספר הטלפון אינו תקין.'
                // }
            ]
        });

    }

    ngOnDestroy() {
        // this.optionsSub.unsubscribe();
    }

    cancel(event) {
        this.onCancel.emit(event);
    }

    submit(event) {
        this.onSubmit.emit(event);
    }
}
