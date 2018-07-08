import {trigger, state, animate, transition, style} from '@angular/animations';

export const pageFadeInOutAnimation =
    trigger('pageFadeInOutAnimation', [
        transition('void => *', [
            // 'From' Style
            style({ opacity: 0.2}),
            animate('250ms ease-in')
        ]),
        transition('* => void', [
            animate('250ms ease-in',
                // 'To' Style
                style({ opacity: 1 }),
            )
        ])
    ]);
