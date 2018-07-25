import {Component, OnInit} from '@angular/core';
import {UsersService} from '../../services/users/users.service';
import {DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {ExampleDataSource} from '../students/students.component';

@Component({
    selector: 'app-users',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    displayedColumns = ['id', 'first_name', 'last_name', 'email', 'role', 'phone'];
    isLoadingResults = true;
    isRateLimitReached = false;
    dataSource: UsersDataSource;

    constructor(private usersService: UsersService) {
    }

    ngOnInit() {
        this.usersService.get$();
        this.dataSource = new UsersDataSource(this.usersService.users$);
    }

    update(prop: string, value: string, item) {
        // this.studentService.update({
        //     ...item, [prop]: value
        // });
    }

}

export class UsersDataSource extends DataSource<any> {

    constructor(private users$: Observable<any>) {
        super();
    }

    connect(): Observable<any> {
        return this.users$;
    }

    disconnect() {
    }
}