import {Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {slideInOutAnimation} from '../../../animations/slide-in-out';
import {ActivatedRoute, Router} from '@angular/router';
import {Store} from '../../../services/store/store';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {School} from '../../models/school.interface';

@Component({
    selector: 'app-cabinets',
    templateUrl: './cabinets.component.html',
    styleUrls: ['./cabinets.component.scss'],
    animations: [slideInOutAnimation],
    host: {'[@slideInOutAnimation]': ''}
})
export class CabinetsComponent implements OnInit, OnDestroy {

    private routeParamsSub: Subscription;

    public school$: any = this.store.select('school');
    public section: any;
    public school: School;



    constructor(
        private location: Location,
        private router: Router,
        private route: ActivatedRoute,
        private store: Store) {
    }

    ngOnInit() {
        this.routeParamsSub = this.route.params.subscribe((params) => {
            this.school$.subscribe((school) => {
                if (school) {
                    const sectionId = Number(params.sectionId);
                    this.school = school;
                    this.section = school.sections.filter((section) => section._id === sectionId)[0];
                }
            });
        });
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.routeParamsSub.unsubscribe();
    }
}
