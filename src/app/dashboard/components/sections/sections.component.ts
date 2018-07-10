import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../../animations/slide-in-out';
import {Store} from '../../../services/store/store';
import {Location} from '@angular/common';
import {Subscription} from 'rxjs';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';

@Component({
    selector: 'app-sections',
    templateUrl: './sections.component.html',
    styleUrls: ['./sections.component.scss'],
    animations: [slideInOutAnimation],
    host: {'[@slideInOutAnimation]': ''}
})
export class SectionsComponent implements OnInit, OnDestroy {

    public school$: any = this.store.select('school');
    public school: any;
    private bodyRef = document.querySelector('body');

    private paramsSub: Subscription;

    constructor(
        private location: Location,
        private router: Router,
        private route: ActivatedRoute,
        private store: Store) {
    }

    ngOnInit() {
        this.school$.subscribe((school) => {
            this.school = school;
        });

        this.bodyRef.classList.add('prevent-scrolling');

        // console.log('route',this.route);
        // this.paramsSub = this.router.events.subscribe((event) => {
        //     if (event instanceof NavigationEnd) {
        //         console.log(event);
        //     }
        // });
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.bodyRef.classList.remove('prevent-scrolling');
    }


}
