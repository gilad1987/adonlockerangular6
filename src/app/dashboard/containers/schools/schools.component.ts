import {AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '../../../services/store/store';
import {Observable, Subject, Subscription} from 'rxjs/index';
import {SchoolsService} from '../../services/schools/schools.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-schools',
    templateUrl: './schools.component.html',
    styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, OnDestroy, AfterViewChecked {

    private routerSub: Subscription;

    public schools$: Observable<any> = this.store.select('schools');
    public schoolId: number;

    constructor(private store: Store,
                private route: ActivatedRoute,
                private location: Location,
                private schoolsService: SchoolsService) {
    }

    ngOnInit() {
        this.schoolsService.get$();
        this.schoolId = Number(this.route.snapshot.params.id);
    }

    onPanelOpen(school) {
        this.location.replaceState(`dashboard/schools/${school._id}`);

    }

    ngOnDestroy() {
        this.routerSub.unsubscribe();
    }

    ngAfterViewChecked() {
    }

    isDisplayExpanded(school) {
        return school._id === this.schoolId;
    }
}


