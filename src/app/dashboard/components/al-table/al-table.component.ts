import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';

@Component({
    selector: 'app-al-table',
    templateUrl: './al-table.component.html',
    styleUrls: ['./al-table.component.scss']
})
export class AlTableComponent implements OnInit {

    @Input('displayedColumns') displayedColumns: Array<[any]>;

    @Input('data') data: Observable<[any]>;

    dataSource: AlDataSource;

    constructor() {
    }

    ngOnInit() {
        this.dataSource = new AlDataSource(this.data);
    }


}

class AlDataSource extends DataSource<any> {

    constructor(private collections$: Observable<any>) {
        super();
    }

    connect(): Observable<any> {
        return this.collections$;
    }

    disconnect() {
    }
}
