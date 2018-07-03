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

    getLockers(cabinets) {
        return cabinets.reduce((collection, item) => {
            return collection.concat((item.columns || []));
        }, []).reduce((collection, item) => {
            return collection.concat((item.lockers || []));
        }, []);
    }


    getAvailableLockers(cabinets) {
        return this.filterLockerByStatus(cabinets, 0);
    }

    getAssignedLockers(cabinets) {
        return this.filterLockerByStatus(cabinets, 2);
    }

    getReservedLockers(cabinets) {
        return this.filterLockerByStatus(cabinets, 1);
    }

    filterLockerByStatus(cabinets, status) {
        const lockers = this.getLockers(cabinets);
        return lockers.filter((locker) => locker.status === status);
    }


}
