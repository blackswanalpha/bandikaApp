// import { animate, group, query, style } from '@angular/animations';

// const ANIMATION_SPEED = '500ms';

// export const slideLeft = [
//   query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
//   group([
//     query(':enter', [
//       style({ transform: 'translateX(150%)' }),
//       animate(
//         `${ANIMATION_SPEED} ease-in-out`,
//         style({ transform: 'translateX(0)' })
//       ),
//     ]),
//     query(':leave', [
//       animate(
//         `${ANIMATION_SPEED} ease-in-out`,
//         style({ transform: 'translateX(-150%)' })
//       ),
//     ]),
//   ]),
// ];

// export const slideRight = [
//   group([
//     query(':enter, :leave', style({ position: 'fixed', width: '100%' })),
//     query(':enter', [
//       style({ transform: 'translateX(-150%)' }),
//       animate(
//         `${ANIMATION_SPEED} ease-in-out`,
//         style({ transform: 'translateX(0%)' })
//       ),
//     ]),
//     query(':leave', [
//       animate(
//         `${ANIMATION_SPEED} ease-in-out`,
//         style({ transform: 'translateX(150%)' })
//       ),
//     ]),
//   ]),
// ];
import {
  trigger,
  animate,
  transition,
  style,
  query,
  animateChild,
  group,
  state
} from '@angular/animations';

export const routeTransitionAnimations = trigger('triggerName', [
	transition('lecturer=> users, users=> department, department =>institution ,lecturer=>institution ,users=>institution,lecturer=>planner, users=> planner, department =>planner,institution=>planner,planner=>mode,lecturer=>mode,users=>mode,department=>mode,institution=>mode,lecturer=> department', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				right: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ right: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	]),
	transition('planner=> institution,institution=> department,department => users, users=> lecturer,mode=> lecturer,planner=> lecturer,mode=> institution,institution=> lecturer,mode=> department,mode=>planner,mode=>users ,planner=> department,department => lecturer,institution=> users,institution=> users', [
		style({ position: 'relative' }),
		query(':enter, :leave', [
			style({
				position: 'absolute',
				top: 0,
				left: 0,
				width: '100%'
			})
		]),
		query(':enter', [style({ left: '-100%', opacity: 0 })]),
		query(':leave', animateChild()),
		group([
			query(':leave', [animate('1s ease-out', style({ left: '100%', opacity: 0 }))]),
			query(':enter', [animate('1s ease-out', style({ left: '0%', opacity: 1 }))])
		]),
		query(':enter', animateChild())
	])
]);

// export const routeTransitionAnimations = trigger('triggerName', [
// 	transition('lecturer=> Two, users=> department', [
// 		style({ position: 'relative' }),
// 		query(':enter, :leave', [
// 			style({
// 				position: 'absolute',
// 				top: 0,
// 				right: 0,
// 				width: '100%'
// 			})
// 		]),
// 		query(':enter', [style({ right: '-100%', opacity: 0 })]),
// 		query(':leave', animateChild()),
// 		group([
// 			query(':leave', [animate('1s ease-out', style({ right: '100%', opacity: 0 }))]),
// 			query(':enter', [animate('1s ease-out', style({ right: '0%', opacity: 1 }))])
// 		]),
// 		query(':enter', animateChild())
// 	])
// 	// ,
// 	// transition('* <=> FilterPage', [
// 	// 	style({ position: 'relative' }),
// 	// 	query(':enter, :leave', [
// 	// 		style({
// 	// 			position: 'absolute',
// 	// 			top: 0,
// 	// 			left: 0,
// 	// 			width: '100%'
// 	// 		})
// 	// 	]),
// 	// 	query(':enter', [style({ left: '-100%' })]),
// 	// 	query(':leave', animateChild()),
// 	// 	group([
// 	// 		query(':leave', [animate('200ms ease-out', style({ left: '100%' }))]),
// 	// 		query(':enter', [animate('300ms ease-out', style({ left: '0%' }))])
// 	// 	]),
// 	// 	query(':enter', animateChild())
// 	// ])
// ]);



// import { trigger, state, style, transition,
//     animate, group, query, stagger, keyframes
// } from '@angular/animations';

export const SlideInOutAnimation = [
    trigger('slideInOut', [
        state('in', style({
            'max-height': '500px', 'opacity': '1', 'visibility': 'visible'
        })),
        state('out', style({
            'max-height': '0px', 'opacity': '0', 'visibility': 'hidden'
        })),
        transition('in => out', [group([
            animate('400ms ease-in-out', style({
                'opacity': '0'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '0px'
            })),
            animate('700ms ease-in-out', style({
                'visibility': 'hidden'
            }))
        ]
        )]),
        transition('out => in', [group([
            animate('1ms ease-in-out', style({
                'visibility': 'visible'
            })),
            animate('600ms ease-in-out', style({
                'max-height': '500px'
            })),
            animate('800ms ease-in-out', style({
                'opacity': '1'
            }))
        ]
        )])
    ]),
]