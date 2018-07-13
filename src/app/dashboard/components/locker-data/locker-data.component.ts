import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {DropdownOption, Field} from '../dynamic-form-builder/dynamic-field-builder/field.interface';
import {Validators} from '@angular/forms';
import {LockerService} from '../../services/lockers/locker.service';
import {BehaviorSubject, of, Subscription} from 'rxjs';
import {StudentsService} from '../../services/sudents/students.service';

@Component({
    selector: 'app-locker-data',
    templateUrl: './locker-data.component.html',
    styleUrls: ['./locker-data.component.scss']
})
export class LockerDataComponent implements OnInit, OnDestroy {

    @Input('locker') locker;

    public fields: Field[];

    public subjectStudents = new BehaviorSubject<DropdownOption[]>(undefined);
    private optionsSub: Subscription;

    constructor(
        private lockerService: LockerService,
        private studentsService: StudentsService
    ) {

    }

    ngOnInit() {

        // #TODO need to pass from resolver
        this.optionsSub = this.studentsService.get$().subscribe((students) => {

            if (!students) {
                this.subjectStudents.next([]);
                return;
            }

            const options: DropdownOption[] = students.map((student) => {
                return {
                    text: student.fullName,
                    value: student._id,
                };
            });

            options.splice(0, 0, {value: null, text: 'ריק'});

            this.subjectStudents.next(options);
        });

        this.locker.type = Number(this.locker.type);

        this.fields = [
            {
                type: 'dropdown',
                name: 'type',
                placeholder: 'סטטוס',
                value: this.locker.active,
                options: of(this.lockerService.STATUS),
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
                options: of(this.lockerService.TYPES),
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
                type: 'autocomplete',
                name: 'student_id',
                placeholder: 'סטודנט משויך',
                value: this.locker.students ? this.locker.students._id : null,
                options: this.subjectStudents.asObservable(),
                validations: []
            },
            {
                type: 'textarea',
                name: 'note',
                placeholder: 'הערות',
                value: this.locker.note,
                validations: [
                    {
                        name: 'required',
                        fn: Validators.required,
                        text: 'מספר הטלפון אינו תקין.'
                    }
                ]
            }
        ];
    }

    ngOnDestroy() {
        this.optionsSub.unsubscribe();
    }
}
