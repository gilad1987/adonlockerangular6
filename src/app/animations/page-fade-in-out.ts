import {trigger, state, animate, transition, style} from '@angular/animations';

export const pageFadeInOutAnimation =
    trigger('pageFadeInOut', [
        transition(':enter', [
            style({transform: 'translateY(-100%)'}),
            animate('200ms ease-in', style({transform: 'translateY(0%)'}))
        ]),
        transition(':leave', [
            animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
        ])
    ]);
