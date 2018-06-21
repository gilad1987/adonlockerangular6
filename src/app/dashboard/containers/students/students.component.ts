import {Component, OnInit, ViewChild, Input} from '@angular/core';
import {StudentsService} from "../../services/sudents/students.service";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, merge, Observable, of} from "rxjs/index";
import {catchError, map, startWith, switchMap, tap} from "rxjs/internal/operators";
import {MatPaginator, MatSort} from "@angular/material";
import {DataSource} from "@angular/cdk/collections";
import {SchoolsService} from "../../services/schools/schools.service";

@Component({
    selector: 'app-students',
    templateUrl: './students.component.html',
    styleUrls: ['./students.component.scss']
})
export class StudentsComponent implements OnInit {

    displayedColumns = ['id', 'first_name', 'last_name', 'school_name', 'locker_id', 'class', 'phone_number', 'email', 'note'];
    exampleDatabase: ExampleHttpDao | null;

    resultsLength = 0;
    isLoadingResults = true;
    isRateLimitReached = false;

    @ViewChild(MatPaginator) paginator: MatPaginator;
    @ViewChild(MatSort) sort: MatSort;

    dataSource: ExampleDataSource;

    public totalStudents$: BehaviorSubject<number> = this.studentService.totalStudents$;

    public schools$ = this.schoolsService.get$();

    constructor(private http: HttpClient,
                private schoolsService: SchoolsService,
                private studentService: StudentsService) {
    }

    update(prop: string, value: string, item) {

        if (typeof value === 'undefined') {
            return;
        }

        setTimeout(() => {
            this.studentService.update({
                ...item, [prop]: value
            });
        }, 0);
    }

    ngOnInit() {

        this.dataSource = new ExampleDataSource(this.studentService.students$);
        // // If the user changes the sort order, reset back to the first page.
        this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 1);


        merge(this.paginator.page)
            .pipe(
                startWith({}),
                switchMap(() => {
                    this.isLoadingResults = true;
                    return this.studentService.get$(true, this.paginator.pageIndex + 1);
                    // this.exampleDatabase!.getRepoIssues(
                    //     this.sort.active, this.sort.direction, this.paginator.pageIndex);
                }),
                map(res => {
                    // Flip flag to show that loading has finished.
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
}


/** An example database that the data source uses to retrieve data for the table. */
export class ExampleHttpDao {
    constructor(private http: HttpClient) {
    }

    getRepoIssues(sort: string, order: string, page: number): Observable<any> {
        const href = 'https://api.github.com/search/issues';
        const requestUrl =
            `${href}?q=repo:angular/material2&sort=${sort}&order=${order}&page=${page + 1}`;

        return this.http.get('http://localhost:9091/api/students');
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
