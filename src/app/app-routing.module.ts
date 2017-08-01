import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppLoginComponent } from './auth/login/login.component';
import { ShellComponent } from './shell/shell.component';
import { AppChatComponent } from './chat/chat.component';
import { AppChatGuard } from './chat/chat.guard';

const routes: Routes = [
  {
    path: '',
    component: ShellComponent,
    children: [
      {
        path: '',
        redirectTo: 'login',
        pathMatch: 'full'
      },
      {
        path: 'login',
        component: AppLoginComponent
      },
      {
        path: 'chat',
        component: AppChatComponent,
        canActivate: [AppChatGuard]
      },
      {
        path: '**',
        redirectTo: 'login'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
