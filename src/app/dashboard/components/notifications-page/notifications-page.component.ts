import { Component, OnInit } from '@angular/core';
import {PaymentsService} from '../../services/payments/payments.service';
import {Observable} from 'rxjs';
import {NotificationsService} from '../../services/notifications/notifications.service';

@Component({
  selector: 'app-notifications-page',
  templateUrl: './notifications-page.component.html',
  styleUrls: ['./notifications-page.component.scss']
})
export class NotificationsPageComponent implements OnInit {

    public columns: Array<any> = [
        '_id', 'type', 'message', 'phone_number', 'plivo_api_id', 'plivo_status'
    ];
    public notifications$: Observable<[any]> = this.notificationsService.notifications$;

    constructor(public notificationsService: NotificationsService) {
    }

    ngOnInit() {
        this.notificationsService.get$();
    }

}
