import { Component, OnInit } from '@angular/core';
import {NotificationsService} from '../../services/notifications/notifications.service';
import {Observable} from 'rxjs';
import {LocksService} from '../../services/locks/locks.service';

@Component({
  selector: 'app-lock-page',
  templateUrl: './locks-page.component.html',
  styleUrls: ['./locks-page.component.scss']
})
export class LocksPageComponent implements OnInit {

    public columns: Array<any> = [
        '_id', 'code', 'code2', 'number'
    ];
    public locks$: Observable<[any]> = this.locksService.locks$;

    constructor(public locksService: LocksService) {
    }

    ngOnInit() {
        this.locksService.get$();
    }

}
