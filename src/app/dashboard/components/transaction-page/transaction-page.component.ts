import {Component, OnInit} from '@angular/core';
import {PaymentsService} from '../../services/payments/payments.service';
import {Observable} from 'rxjs';

@Component({
    selector: 'app-transaction-page',
    templateUrl: './transaction-page.component.html',
    styleUrls: ['./transaction-page.component.scss']
})
export class TransactionPageComponent implements OnInit {

    public columns: Array<any> = ['_id', 'price', 'status', 'product_type',
        'ErrorMessage', 'StatusCode',
        'TransactionPelecardId','TransactionUpdateTime'
    ];
    public transactions$: Observable<[any]> = this.paymentsService.payments$;

    constructor(public paymentsService: PaymentsService) {
    }

    ngOnInit() {
        this.paymentsService.get$();
    }

}
