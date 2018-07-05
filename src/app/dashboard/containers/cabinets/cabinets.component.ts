import {Component, OnInit} from '@angular/core';
import {slideInOutAnimation} from '../../../animations/slide-in-out';

@Component({
    selector: 'app-cabinets',
    templateUrl: './cabinets.component.html',
    styleUrls: ['./cabinets.component.scss'],
    animations: [slideInOutAnimation],
    host: {'[@slideInOutAnimation]': ''}
})
export class CabinetsComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
    }

}
