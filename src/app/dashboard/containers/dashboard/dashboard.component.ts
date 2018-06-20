import {Component, OnInit} from '@angular/core';
import {UserService} from "../../../services/user/user.service";
import {SchoolsService} from "../../services/schools/schools.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    public user$ = this.userService.user$;
    public schools$ = this.schoolsService.get$();

    constructor(private userService: UserService,
                private schoolsService: SchoolsService) {
    }

    ngOnInit() {
    }

}
