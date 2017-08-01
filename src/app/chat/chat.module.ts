import { NgModule } from '@angular/core';
import { AppChatComponent } from './chat.component';
import { AppMaterialModule } from '../angular-material/material.module';
import { CommonModule } from '@angular/common';
import { ChatRoutingModule } from './chat-routing.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    AppMaterialModule,
    CommonModule,
    ChatRoutingModule,
    FormsModule
  ],
  exports: [
    AppChatComponent,
    ChatRoutingModule
  ],
  declarations: [AppChatComponent],
  providers: [],
})
export class ChatModule {
}
