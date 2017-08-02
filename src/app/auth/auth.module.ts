import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppLoginComponent } from './login/login.component';
import { AppMaterialModule } from '../angular-material/material.module';
import { AppLoginGuard } from './login.guard';

@NgModule({
  imports: [
    CommonModule,
    AppMaterialModule
  ],
  exports: [
    AppLoginComponent
  ],
  declarations: [
    AppLoginComponent
  ],
  providers: [
    AppLoginGuard
  ],
})
export class AppAuthModule {
}
