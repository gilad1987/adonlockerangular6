import {Component, OnInit, ViewChild, Input, AfterViewInit, OnDestroy} from '@angular/core';
import {StudentsService} from "../../services/sudents/students.service";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, fromEvent, merge, Observable, of, Subscription} from "rxjs/index";
import {
    catchError, debounceTime, distinctUntilChanged, map, pluck, startWith, switchMap
} from "rxjs/internal/operators";
import {MatPaginator, MatSort} from "@angular/material";
import {DataSource} from "@angular/cdk/collections";
import {SchoolsService} from "../../services/schools/schools.service";
import {flatMap} from "tslint/lib/utils";

import {Fuse} from 'Fuse.js';
import {Store} from "../../../services/store/store";

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit, AfterViewInit, OnDestroy {

    displayedColumns = ['id', 'first_name', 'last_name', 'school_name', 'locker_id', 'class', 'phone_number', 'email', 'note'];

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

        setTimeout(() => {
            this.studentService.update({
                ...item, [prop]: value
            });
        }, 0);
    }

    ngAfterViewInit() {
        this.initFilter(this.filter.nativeElement);
    }

    ngOnInit() {

        this.dataSource = new ExampleDataSource(this.studentService.studentsSearchResults$);
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

        this.filterSubscription$ = fromEvent(el, "keyup")
            .pipe(
                pluck("target"),
                pluck("value"),
                debounceTime(750),
                distinctUntilChanged(),
                switchMap((query: string) => {


                    const newObs = Observable((obs) => {
                        const options = {
                            shouldSort: true,
                            threshold: 0.6,
                            location: 0,
                            distance: 100,
                            maxPatternLength: 32,
                            minMatchCharLength: 1,
                            keys: [
                                "title",
                                "author.firstName"
                            ]
                        };
                        const fuse = new Fuse(this.store.value.students, options); // "list" is the item array
                        const results = fuse.search(query);

                        obs.next(results);
                        obs.complete();
                    });

                    return newObs; // this.studentService.get$(true, this.paginator.pageIndex + 1, query);
                }),
                catchError((err, caught) => {
                    console.log('err', err);
                    console.log('caught', caught);
                    return of(err);
                })).subscribe();
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
