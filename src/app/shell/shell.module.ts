import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { ShellComponent } from './shell.component';
import { AppMaterialModule } from '../angular-material/material.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    AppMaterialModule
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
