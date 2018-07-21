import {Component, HostListener, OnDestroy, OnInit, ViewChild} from '@angular/core';
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

    @ViewChild('content') content;

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
    }

    goBack() {
        this.location.back();
    }

    ngOnDestroy() {
        this.bodyRef.classList.remove('prevent-scrolling');
    }

    onSectionOpen(event) {
        const element = this.content.nativeElement;
        // const x = Math.max(-(window.outerWidth - element.offsetWidth), -(window.outerWidth - element.offsetWidth + 300));
        const x = Math.max(-500, -(window.outerWidth - element.offsetWidth));
        element.animate(
            [
                {transform: 'translate(0px, 0)'},
                {transform: `translate(${x}px, 0)`}
            ], {
                duration: 300,
                fill: 'forwards',
            }
        );
    }

    onSectionClose(event) {
        const element = this.content.nativeElement;
        const x = Math.max(-500, -(window.outerWidth - element.offsetWidth));
        element.animate(
            [
                {transform: `translate(${x}px, 0)`},
                {transform: 'translate(0px, 0)'},
            ], {
                duration: 400,
                fill: 'forwards',
            }
        );
    }


}
