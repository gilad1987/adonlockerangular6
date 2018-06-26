import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
    selector: 'app-tooltip',
    templateUrl: './tooltip.component.html',
    styleUrls: ['./tooltip.component.scss']
})
export class TooltipComponent implements OnInit {

    @Input()
    label;

    @HostListener('mouseenter')
    onMouseEnter(): void {
        console.log('onMouseEnter');
    }

    @HostListener('mouseleave')
    onMouseLeave(): void {
        console.log('onMouseLeave');
    }

    constructor() {
    }



    ngOnInit() {
    }

}
