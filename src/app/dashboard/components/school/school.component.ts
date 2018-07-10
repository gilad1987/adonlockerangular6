import {AfterViewInit, Component, Input, NgZone, OnChanges, OnInit} from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';
import {SchoolsService} from '../../services/schools/schools.service';

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.scss'],
})
export class SchoolComponent implements OnInit {

    @Input('schoolId') schoolId: number;

    @Input('selected') selected;

    constructor(private schoolsService: SchoolsService) {

    }

    ngOnInit() {
        this.loadSchool();
    }

    loadSchool() {
        this.schoolsService.getById$(this.schoolId).subscribe();
    }

}
