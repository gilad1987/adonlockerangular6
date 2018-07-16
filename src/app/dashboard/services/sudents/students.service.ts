import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, Subject, throwError} from 'rxjs/index';
import {Store} from '../../../services/store/store';
import {HttpClient} from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/internal/operators';

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

    get students(): [Student] | undefined {
        return this.store.value.students;
    }

    public totalStudents$: BehaviorSubject<number> = new BehaviorSubject<number>(0);

    private BASE_URL = isDevMode() ? 'http://localhost:9091' : 'https://devapi.adonlockerrent.co.il';

    private loading: boolean = false;

    constructor(private store: Store,
                private http: HttpClient) {
    }

    get$(force = false, page: number = 0, query: string | null = '', filter: object = {}, full = 0): Observable<any> {

        console.log('get', query);
        if ((this.loading && query === '') || (!force && this.store.value.students && this.store.value.students.length)) {
            // debugger;
            // return this.students$;
        }


        this.loading = true;
        return this.http.get(`${this.BASE_URL}/api/students?page=${page}&query=${query}&full=${full}`)
            .pipe(tap(
                (res: StudentPage) => {
                    this.totalStudents$.next(res.total);
                    this.store.set('students', res.students);
                    return res.students;
                },
                (error) => {
                    console.error('StudentsService.get$', error);
                    return catchError(error);
                },
                () => {
                    this.loading = true;
                })
            ).pipe(map(res => {
                return res.students;
            }))
            .pipe(catchError((err, caught) => throwError(caught)));
    }

    search(query) {
        return this.get$(true, 0, query, {}, 0);
    }

    getPage(number = 1, query = '') {
        return this.get$(true, number, query);
    }


    update(newStudent: Student) {
        return this.http.patch(`${this.BASE_URL}/api/students/${newStudent._id}`, newStudent)
            .pipe(
                tap(
                    (res: Student) => {
                        const students = this.store.value.students.slice().map((student) => student._id === newStudent._id ? res : student);
                        this.store.set('students', students);
                        return students;
                    },
                    (error) => {
                        console.error('StudentsService.update', error);
                        return catchError(error);
                    }
                )
            )
            // .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();
    }

    remove(student: Student) {
        return this.http.delete(`${this.BASE_URL}/api/students/${student._id}`)
            .pipe(
                tap(
                    (res: boolean) => {
                        const students = this.store.value.students.slice().filter((s) => s._id !== student._id);
                        this.store.set('students', students);
                    },
                    (error) => {
                        console.error('StudentsService.delete', error);
                        return catchError(error);
                    }
                )
            )
            // .pipe(catchError((err, caught) => throwError(err)))
            .subscribe();
    }

    add(student: Student) {
        return this.http.post(`${this.BASE_URL}/api/students/`, student)
            .pipe(
                tap(
                    (newStudent: Student) => {
                        const students = this.store.value.students.slice();
                        students.unshift(newStudent);
                        debugger;
                        this.store.set('students', students);
                    },
                    (error) => {
                        console.error('StudentsService.delete', error);
                        return catchError(error);
                    }
                )
            );
        // .pipe(catchError((err, caught) => throwError(err)))
        // .subscribe();
    }

}
