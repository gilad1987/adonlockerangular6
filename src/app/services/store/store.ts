import {State} from './state';
import {BehaviorSubject, Observable} from 'rxjs/index';
import {distinctUntilChanged, map} from 'rxjs/internal/operators';

const state: State = {
    user: undefined
};

export class Store {

    private subject = new BehaviorSubject<State>(state);
    private store = this.subject.asObservable().pipe(distinctUntilChanged());

    get value() {
        return this.subject.value;
    }

    getValue(prop?: string) {
        return prop ? this.subject.value[prop] : this.subject.value;
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