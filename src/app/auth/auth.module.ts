import { NgModule } from '@angular/core';
import { AppLoginComponent } from './login/login.component';
import { AppMaterialModule } from '../angular-material/material.module';
import { AppLoginGuard } from './login.guard';

@NgModule({
  imports: [
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
