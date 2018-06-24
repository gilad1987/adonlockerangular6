import { Component, OnInit } from '@angular/core';
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit {

  public user$ = this.userService.user$;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

}
