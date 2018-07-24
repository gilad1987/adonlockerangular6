import {AfterViewInit, ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Field} from './field.interface';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {delayWhen, map, startWith} from 'rxjs/operators';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/internal/operators';

@Component({
    selector: 'app-dynamic-field-builder',
    templateUrl: './dynamic-field-builder.component.html',
    styleUrls: ['./dynamic-field-builder.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DynamicFieldBuilderComponent implements OnInit, AfterViewInit {

    @Input() field: Field;
    @Input() form: FormGroup;
    @Input() control: FormControl;

    public loading: boolean = false;

    private filteredOptions: Observable<any[any]>;

    get isDirty() {
        return this.control.dirty;
    }

    constructor() {

    }

    hasError(errorName) {
        return this.isDirty && this.control.hasError(errorName);
    }

    ngOnInit() {
        if (this.field.type === 'autocomplete') {
            this.filteredOptions = this.control.valueChanges
                .pipe(
                    startWith(null),
                    debounceTime(1250),
                    distinctUntilChanged(),
                    switchMap(value => {
                        // #TODO check all version to not go to server
                        if (typeof value === 'object' && value !== null && this.control.value === value) {
                            return of([this.control.value]);
                        }
                        this.loading = true;
                        return this.field.filter(value);
                    }),
                    map((response) => {
                        this.loading = false;
                        return response;
                    })
                );
        }
    }

    trackByFn(index, item) {

        // return item.authcompleteIndex ? item.authcompleteIndex : (item.authcompleteIndex = Math.random());
    }

    ngAfterViewInit() {

    }

}
