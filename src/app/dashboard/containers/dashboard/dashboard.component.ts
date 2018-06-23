import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {SchoolsService} from "../../services/schools/schools.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public user$ = this.userService.user$;

    constructor(private userService: UserService) {
    }

    ngOnInit() {
    }

}
