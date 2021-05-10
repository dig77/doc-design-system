import {style, transition, animate, trigger, query, state, group, keyframes, stagger} from '@angular/animations';

export const routeMainAnimationTrigger = trigger('routeMainAnimation', [
    transition(':enter', [
        style({
            opacity:0
        }), 
        animate('800ms 300ms ease-in')
    ]),
    transition(':leave', [
        animate('500ms 300ms ease-out', style({
            transform: 'translateY(50px)', 
            opacity:0
        }))
    ])
])


