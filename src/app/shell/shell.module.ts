import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule
  ],
  exports: [
    HeaderComponent
  ],
  declarations: [
    HeaderComponent,
    ShellComponent
  ],
  providers: [],
})
export class ShellModule {
}
