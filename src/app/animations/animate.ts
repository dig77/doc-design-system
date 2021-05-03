import {style, transition, animate, trigger, query, state, group, keyframes, stagger} from '@angular/animations';

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
]);

export const showExpandableTrigger = trigger('expandable', [
    transition(':enter', [
        style({
            height: 0, 
            opacity: 0
        }), group([
            animate(500, style({height:'*'})),
            animate(800, style({opacity: 0.5}))
        ]),
        animate('600ms ease-out', style({opacity:1}))
        ]),
        transition(':leave', [
            style({
                height: '*', 
                opacity: 1
            }), group([
                animate('300ms ease-in', style({opacity: 0.1}))
            ]),
            animate(600, style({height:0,opacity:0}))
        ])
]);

export const emptyElementTrigger = trigger('emptyElement', [
    transition(':enter', [
        style({
            opacity:0,
            transform: 'scale(.95)'
        }),
        animate('1000ms 300ms ease-out', style({opacity:1, transform: 'scale(1)'}))
    ])
]);

export const classStagger = trigger('classStagger', [
    transition('void => *', [
        query('.child', style({opacity: 0, transform: 'translateX(-30px)'})),
        query('.child', stagger('300ms', [
            animate('500ms ease-in-out', style({opacity: 1, transform: 'translateX(0)'}))
        ]))
    ])
]);

export const simpleFade = trigger('simpleFade', [
    transition('void => *', [
        style({
            opacity:0
        }), 
        animate('500ms ease-in', style({
            opacity:1
        }))
    ]),
    transition('* => void', [
        style({
            opacity:1
        }), 
        animate('300ms ease-out', style({
            opacity:0
        }))
    ])
])

export const fadingTrigger = trigger('isFade', [
    transition('* => *', [
        animate(500, keyframes([
            style({opacity:0}),
            style({opacity:0.5}),
            style({opacity:1})
          ]))
      ]),
])




