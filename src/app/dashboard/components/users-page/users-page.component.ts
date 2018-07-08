import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {User} from '../../../auth/user.interface';
import {Store} from '../../../services/store/store';
import {UserService} from '../../../services/user/user.service';
import {UsersService} from '../../../services/users/users.service';
import {pageFadeInOutAnimation} from '../../../animations/page-fade-in-out';

@Component({
    selector: 'app-users-page',
    templateUrl: './users-page.component.html',
    styleUrls: ['./users-page.component.scss'],

})
export class UsersPageComponent implements OnInit {

    public users$: Observable<[User]> = this.store.select('users');

    constructor(
        private store: Store,
        private usersService: UsersService) {
    }

    ngOnInit() {
    }

}
