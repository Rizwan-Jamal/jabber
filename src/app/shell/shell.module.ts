import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';

@NgModule({
  imports: [],
  exports: [HeaderComponent],
  declarations: [HeaderComponent, ShellComponent],
  providers: [],
})
export class ShellModule {
}
