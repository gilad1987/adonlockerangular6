import {Component, OnInit, ViewChild, Input, AfterViewInit, OnDestroy} from '@angular/core';
import {StudentsService} from '../../services/sudents/students.service';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, fromEvent, merge, Observable, of, Subscription} from 'rxjs/index';
import {
    catchError, debounceTime, distinctUntilChanged, map, pluck, startWith, switchMap
} from 'rxjs/internal/operators';
import {MatPaginator, MatSort} from '@angular/material';
import {DataSource} from '@angular/cdk/collections';
import {SchoolsService} from '../../services/schools/schools.service';
import {flatMap} from 'tslint/lib/utils';

import {Store} from '../../../services/store/store';
import {Overlay} from "@angular/cdk/overlay";
const Fuse = require('fuse.js');

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, AfterViewInit, OnDestroy {

    displayedColumns = ['id', 'first_name', 'last_name', 'school_name', 'locker_id', 'class', 'phone_number', 'email', 'note', 'remove'];

    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;
    @ViewChild('filter') filter;

    dataSource: ExampleDataSource;

    private filterSubscription$: Subscription;
    private paginatorSubscription$: Subscription;

    public totalStudents$: BehaviorSubject<number> = this.studentService.totalStudents$;

    public schools$ = this.schoolsService.get$();

    constructor(private store: Store,
                private schoolsService: SchoolsService,
                private studentService: StudentsService) {
    }

    update(prop: string, value: string, item) {
        this.studentService.update({
            ...item, [prop]: value
        });
    }

    ngAfterViewInit() {
        this.initFilter(this.filter.nativeElement);

    }

    ngOnInit() {

        this.dataSource = new ExampleDataSource(this.studentService.students$);
        // // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 1);


        this.paginatorSubscription$ = merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.studentService.get$(true, this.paginator.pageIndex + 1);
                }),
                map(res => {
                    this.isLoadingResults = false;
                    this.isRateLimitReached = false;
                    // this.resultsLength = res.total;
                    return res;
                }),
                catchError((err, caught) => {
                    this.isLoadingResults = false;
                    this.isRateLimitReached = true;
                    return of(caught);
                })
            ).subscribe();
    }

    ngOnDestroy() {
        this.filterSubscription$.unsubscribe();
        this.paginatorSubscription$.unsubscribe();
    }

    initFilter(el: HTMLElement) {

        this.filterSubscription$ = fromEvent(el, 'keyup')
            .pipe(
                pluck('target'),
                pluck('value'),
                debounceTime(750),
                distinctUntilChanged(),
                switchMap((query: string) => {
                    this.isLoadingResults = true;
                    return this.studentService.get$(true, this.paginator.pageIndex + 1, query);
                }),
                catchError((err, caught) => {
                    console.log('err', err);
                    console.log('caught', caught);
                    return of(err);
                })).subscribe(() => {
                this.isLoadingResults = false;
            });
    }

    localAutocompleteStudentsSerach(query) {
        return new Observable((obs) => {
            const options = {
                shouldSort: true,
                threshold: 0.9,
                location: 0,
                distance: 5,
                maxPatternLength: 32,
                minMatchCharLength: 1,
                includeScore: true,
                keys: [
                    '_id',
                    'first_name',
                    'last_name',
                    'class',
                    'paid',
                    'note',
                    'email',
                    'phone_number',
                    'school.active',
                    'school.address',
                    'school.deposit_price',
                    'school.name',
                    'school.price',
                    'locker.code',
                    'locker.code_master',
                    'locker.lock_id',
                    'locker.note',
                    'locker.column.name',
                    'locker.column.number',
                    'locker.column.cabinet.number',
                    'locker.column.cabinet.description',
                    'locker.column.cabinet.name',
                    'locker.column.cabinet.number',
                    'locker.column.cabinet.section.name',
                    'locker.column.cabinet.section.name',
                    'locker.column.cabinet.section.note',
                    'locker.column.cabinet.section.number',

                ]
            };

            try {
                const fuse = new Fuse(this.store.value.students, options); // 'list' is the item array
                const results = fuse.search(query);
                debugger;
                obs.next(results);
            } catch (err) {
                obs.error(err);
            }

            obs.complete();
        });

    }

    getSectionName(locker) {
        try {
            const column = locker.column;
            const cabinet = column.cabinet;
            const section = cabinet.section;
            return `${section.name}`;
        } catch (e) {
            return '';
        }
    }

    getCabinetName(locker) {
        try {
            const column = locker.column;
            const cabinet = column.cabinet;
            return `${cabinet.name}`;
        } catch (e) {
            return '';
        }
    }

    getColumnNumber(locker) {
        try {
            const column = locker.column;
            const cabinet = column.cabinet;
            return `${cabinet.number}`;
        } catch (e) {
            return '';
        }
    }

    getLockerNumber(locker) {
        try {
            const column = locker.column;
            const lockerNumber = `${locker['order'] + 1}0${column.order + 1}`;
            return `${lockerNumber}`;
        } catch (e) {
            return '';
        }
    }


}


export class ExampleDataSource extends DataSource<any> {

    constructor(private students$: Observable<any>) {
        super();
    }

    /** Connect function called by the table to retrieve one stream containing the data to render. */
    connect(): Observable<any> {
        return this.students$;
    }

    disconnect() {
    }
}
