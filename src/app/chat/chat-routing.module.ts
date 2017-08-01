import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ShellComponent } from '../shell/shell.component';
import { AppChatComponent } from './chat.component';


const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {path: '', redirectTo: 'chat', pathMatch: 'full'},
      {path: 'chat', component: AppChatComponent},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChatRoutingModule {
}
