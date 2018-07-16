import {State} from './state';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {distinctUntilChanged, map} from 'rxjs/internal/operators';

const state: State = {
    user: undefined,
    users: undefined,
    schools: undefined,
    students: undefined,
    school: undefined,
    studentsSearchResults: undefined,
    transactions: undefined,
    notifications: undefined,
    locks: undefined,
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    select<T>(name: string): Observable<T> {
        return this.store.pipe(map(s => s[name]));
    }

    set(name: string, state: any) {
        this.subject.next({
            ...this.value, [name]: state
        });
    }

}