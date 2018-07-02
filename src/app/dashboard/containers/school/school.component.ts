import {AfterViewInit, Component, OnInit} from '@angular/core';

import {
    trigger,
    state,
    style,
    animate,
    transition
} from '@angular/animations';

@Component({
    selector: 'app-school',
    templateUrl: './school.component.html',
    styleUrls: ['./school.component.scss'],
    animations: [
        trigger('move', [
            state('_in', style({
                backgroundColor: '#blue',
                transform: 'translateX(800px)'
            })),
            state('out', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('_in <=> out', animate('1000ms ease-in')),
        ])
    ]
})
export class SchoolComponent implements OnInit, AfterViewInit {

    animate = '';

    constructor() {
    }

    ngOnInit() {
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.animate = '_in';
        }, 600);
    }


}
