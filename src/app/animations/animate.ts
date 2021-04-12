import {style, transition, animate, trigger, query, state,group} from '@angular/animations';

export const introAnimationTrigger = trigger('introAnimation', [
    transition(':enter', [
        group([
            query('.image-container', [
                style({ 
                    'transform': 'translateY(20px)'
                }),
                animate(800, style({
                    'transform': 'translateY(0)'
                })),animate(500)
            ]),
            query('.intro-el-1', [
                style({ 
                    'transform': 'translateX(-50px)',
                    'opacity':0,
                }),
                animate('1000ms 500ms ease-out', style({
                    'transform': 'translateY(0)',
                    'opacity':1
                })),animate(1000)
            ]),
            query('.intro-el-2', [
                style({ 
                    'transform': 'translateY(-50px)',
                    'opacity':0,
                }),
                animate('1500ms 800ms ease-out', style({
                    'transform': 'translateY(0)',
                    'opacity':1
                })),animate(800)
            ])
        ])
    ])
]);

export const closeMenuTrigger = trigger('closeMenu', [
    state('default', style({ 
        'opacity': 0, 
        'background-color': 'rgb(62 62 62 / 0%)',
        'border': '2px solid transparent'
    })),
    state('clicked', style({ 
        'opacity': 1,
        'background-color': 'rgb(62 62 62 / 50%)', 
        'border': '2px solid var(--color-secondary)'
    })),
    transition('default => clicked' , animate('500ms 500ms ease-out'))
])


