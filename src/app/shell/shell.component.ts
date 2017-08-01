import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <div>
      <app-header></app-header>
    </div>

    <div>
      <router-outlet></router-outlet>
    </div>
  `
})
export class ShellComponent {
}
