import { NgModule } from '@angular/core';
import {
  MdButtonModule, MdInputModule, MdLineModule, MdListModule,
  MdProgressSpinnerModule, MdRippleModule
} from '@angular/material';

@NgModule({
  imports: [],
  exports: [
    MdButtonModule,
    MdInputModule,
    MdProgressSpinnerModule,
    MdLineModule,
    MdRippleModule,
    MdListModule
  ],
  declarations: [],
  providers: [],
})
export class AppMaterialModule {
}
