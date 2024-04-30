import { Component } from '@angular/core';
import { userCardsAnimation } from './animations/app.animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  animations: [userCardsAnimation],
})
export class AppComponent {
  name = 'angular-dashboard';
}
