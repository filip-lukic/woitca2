import { animate, animateChild, group, query, style, transition, trigger } from "@angular/animations";

export const slideInAnimation =
  trigger('routeAnimations', [
    transition('motion => creative', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('600ms ease-in-out', 
          style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('800ms ease-in-out', 
          style({ left: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ]),
    transition('creative => motion', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          right: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ right: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('600ms ease-in-out', 
          style({ right: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('800ms ease-in-out', 
          style({ right: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ]),
    transition('* <=> *', [
      style({ position: 'relative' }),
      query(':enter, :leave', [
        style({
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%'
        })
      ], { optional: true }),
      query(':enter', [
        style({ left: '-100%' })
      ], { optional: true }),
      query(':leave', animateChild(), { optional: true }),
      group([
        query(':leave', [
          animate('600ms ease-in-out', 
          style({ left: '100%', opacity: 0 }))
        ], { optional: true }),
        query(':enter', [
          animate('800ms ease-in-out', 
          style({ left: '0%' }))
        ], { optional: true }),
        query('@*', animateChild(), { optional: true })
      ]),
    ]),
  ]);