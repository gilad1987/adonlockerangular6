import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LockerService {

    private MECHANIC_TYPE = {
        value: 0,
        text: 'מכני'
    };

    private DIGITAL_TYPE = {
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
