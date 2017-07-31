import { Component } from '@angular/core';

@Component({
  selector: 'app-shell',
  template: `
    <div class="container-fluid">
      <app-header></app-header>
    </div>

    <div class="container">
      <router-outlet></router-outlet>
    </div>
  `
})
export class ShellComponent {
}
