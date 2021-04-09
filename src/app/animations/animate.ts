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

export const fadeSlideInLeft = trigger('fadeSlideInLeft', [
	transition(':enter', [
		style({ opacity: 0, transform: 'translateX(-20px)' }),
		animate('1000ms 500ms', style({ opacity: 1, transform: 'translateX(0)' })),
	])
]);

export const fadeSlideInDown = trigger('fadeSlideInDown', [
	transition(':enter', [
		style({ opacity: 0, transform: 'translateY(-20px)' }),
		animate('1000ms 800ms', style({ opacity: 1, transform: 'translateX(0)' })),
	])
]);


