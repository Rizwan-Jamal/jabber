import { NgModule } from '@angular/core';
import { AppLoginComponent } from './login/login.component';
import { AppMaterialModule } from '../angular-material/material.module';

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
  providers: [],
})
export class AppAuthModule {
}
