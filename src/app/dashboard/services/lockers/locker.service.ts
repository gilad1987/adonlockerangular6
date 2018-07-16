import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LockerService {

    public MECHANIC_TYPE = {
        value: 0,
        text: 'מכני'
    };

    public DIGITAL_TYPE = {
        value: 1,
        text: 'דיגיטלי'
    };

    public TYPES = [
        this.DIGITAL_TYPE,
        this.MECHANIC_TYPE
    ];

    private STATUS_ACTIVE = {
        value: 1,
        text: 'תקין'
    };

    private STATUS_INACTIVE = {
        value: 0,
        text: 'לא תקין'
    };

    public STATUS = [
        this.STATUS_ACTIVE,
        this.STATUS_INACTIVE
    ];

    constructor() {
    }
}
