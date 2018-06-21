import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, throwError} from "rxjs/index";
import {Store} from "../../../services/store/store";
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/internal/operators";

import {Student} from '../../models/student.interface';
import {isDevMode} from '@angular/core';

interface StudentPage {
    total: number;
    students: [Student];
    page: number;
}

@Injectable({
    providedIn: 'root'
})
export class StudentsService {

    public students$: Observable<[Student]> = this.store.select('students');
    public totalStudents$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    private BASE_URL = isDevMode ? 'http://localhost:9091' : 'http://https://devapi.adonlockerrent.co.il';

    constructor(private store: Store,
                private http: HttpClient) {
    }

    get$(force = false, page = 0): Observable<any> {

        if (!force && this.store.value.students && this.store.value.students.length) {
            return this.students$;
        }

        return this.http.get(`${this.BASE_URL}/api/students?page=${page}`)
            .pipe(tap(
                (res: StudentPage) => {
                    this.totalStudents$.next(res.total);
                    this.store.set('students', res.students);
                },
                (error) => {
                    return catchError(error);
                })
            ).pipe(map(res => {
                return res.students;
            }))
            .pipe(catchError((err, caught) => throwError(err)));
    }

    update(newStudent) {


        return this.http.patch(`${this.BASE_URL}/api/students/${newStudent._id}`, newStudent)
            .pipe(
                tap(
                    (res: Student) => {
                        const students = this.store.value.students.slice().map((student) => student._id === newStudent._id ? res : student);
                        this.store.set('students', students);
                    },
                    (error) => {
                        return catchError(error);
                    }
                )
            )
            .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();
    }

}
