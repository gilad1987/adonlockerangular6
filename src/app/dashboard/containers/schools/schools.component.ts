import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit
} from '@angular/core';
import {Store} from '../../../services/store/store';
import {Observable, Subscription} from 'rxjs/index';
import {SchoolsService} from '../../services/schools/schools.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {School} from '../../models/school.interface';

@Component({
    selector: 'app-schools',
    templateUrl: './schools.component.html',
    styleUrls: ['./schools.component.scss'],
})
export class SchoolsComponent implements OnInit, OnDestroy {

    public schools$: Observable<[School]> = this.schoolsService.get$();
    public schoolId: number;
    public selected: School;
    private scrollToCurrentSchoolElement = false;
    private paramsSub: Subscription;

    constructor(private store: Store,
                private route: ActivatedRoute,
                private location: Location,
                private router: Router,
                private elementRef: ElementRef,
                private schoolsService: SchoolsService) {
    }

    ngOnInit() {

        if (this.route.snapshot.params.schoolId) {
            this.schoolId = Number(this.route.snapshot.params.schoolId);
        }

        this.paramsSub = this.route.params.subscribe((params) => {
            if (params.schoolId) {
                this.scrollToCurrentSchoolElement = true;
            }
        });

    }

    onPanelOpen(school) {
        this.selected = school;
        if (this.router.url.indexOf('sections') === -1) {

            /**
             * Change url without load all app
             */
            this.location.replaceState(`dashboard/schools/${school._id}`);

            /**
             * for links will update after replaceState(change url)
             */
            this.router.navigate(['dashboard', 'schools', school._id]);

            if (this.scrollToCurrentSchoolElement) {
                setTimeout(() => {
                    const currentAccordionElem = this.elementRef.nativeElement.querySelector(`[data-schoolId="${this.selected._id}"]`);
                    if (currentAccordionElem) {
                        currentAccordionElem.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
                    }

                    this.scrollToCurrentSchoolElement = false;
                    this.paramsSub.unsubscribe();
                }, 0);
            }

        }
    }

    ngOnDestroy() {
        this.paramsSub.unsubscribe();
    }


    isDisplayExpanded(school) {
        return school._id === this.schoolId;
    }

}


