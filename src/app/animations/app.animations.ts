import {
  trigger,
  transition,
  style,
  animate,
  query,
  stagger,
} from '@angular/animations';

export const userCardsAnimation = trigger('userCardsAnimation', [
  transition('* => *', [
    query('.user-card', [
      style({ opacity: 0, transform: 'translateY(-20px)' }),
      stagger(100, [
        animate(
          '300ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
    ]),
  ]),
]);
