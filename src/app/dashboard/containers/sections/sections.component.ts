import {Component, HostListener, OnDestroy, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../../animations/slide-in-out';
import {Store} from '../../../services/store/store';
import {Location} from '@angular/common';

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

    constructor(
        private location: Location,
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



}
