import { NgModule } from '@angular/core';
import { AppChatComponent } from './chat.component';
import { AppMaterialModule } from '../angular-material/material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppChatGuard } from './chat.guard';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    AppChatComponent
  ],
  declarations: [AppChatComponent],
  providers: [AppChatGuard],
})
export class ChatModule {
}
