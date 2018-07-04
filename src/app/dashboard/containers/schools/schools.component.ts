import {AfterViewChecked, ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '../../../services/store/store';
import {Observable} from 'rxjs/index';
import {SchoolsService} from '../../services/schools/schools.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';

@Component({
    selector: 'app-schools',
    templateUrl: './schools.component.html',
    styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, OnDestroy, AfterViewChecked {

    private render: boolean = false;

    public schools$: Observable<any> = this.store.select('schools');
    public schoolId: number;
    public selected = {};

    constructor(private store: Store,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private cdRef: ChangeDetectorRef,
                private schoolsService: SchoolsService) {
    }

    ngOnInit() {
        this.schoolsService.get$();
        this.schoolId = Number(this.route.snapshot.params.schoolId);
    }

    onPanelOpen(school) {
        this.selected = school;

            console.log(school);
        // if (this.router.url.indexOf('sections') === -1) {
        //     this.location.replaceState(`dashboard/schools/${school._id}`);
        //     setTimeout(() => {
        //         this.cdRef.detectChanges();
        //     }, 0);
        // }
    }

    ngOnDestroy() {
    }

    ngAfterViewChecked() {
    }

    isDisplayExpanded(school) {
        return school._id === this.schoolId;
    }

}


