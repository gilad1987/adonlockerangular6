import {Component, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-section',
    templateUrl: './section.component.html',
    styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnInit {

    @Input('section') section: any = {};

    private lockers: Array<any> | undefined;

    public lockersCount: number = 0;
    public availableCount: number = 0;
    public assignedCount: number = 0;
    public reservedCount: number = 0;

    constructor() {
    }

    ngOnInit() {
        this.lockers = this.getLockers(this.section.cabinets);
        this.lockersCount = this.lockers.length;
        this.availableCount = this.getAvailableLockers().length;
        this.assignedCount = this.getAssignedLockers().length;
        this.reservedCount = this.getReservedLockers().length;
    }

    private getLockers(cabinets) {
        return cabinets.reduce((columns, item) => {
            return columns.concat((item.columns || []));
        }, []).reduce((lockers, item) => {
            return lockers.concat((item.lockers || []));
        }, []);
    }

    private getAvailableLockers() {
        return this.filterLockerByStatus(0);
    }

    private getReservedLockers() {
        return this.filterLockerByStatus(1);
    }

    private getAssignedLockers() {
        return this.filterLockerByStatus(2);
    }


    private filterLockerByStatus(status) {
        const lockers = this.lockers || this.getLockers(this.section.cabinets);
        return lockers.filter((locker) => locker.status === status);
    }


}
