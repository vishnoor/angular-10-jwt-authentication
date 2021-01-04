import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardModeratorComponent } from './board-moderator/board-moderator.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import {NoaccessComponent} from './security/noaccess/noaccess.component';

import {RouteGuard} from './_guard/route.guard';
import {AdminGuard} from './_guard/admin.guard';

const routes: Routes = [
  { path: 'home', component: HomeComponent , canActivate : [RouteGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent , canActivate : [RouteGuard]},
  { path: 'user', component: BoardUserComponent , canActivate : [RouteGuard]},
  { path: 'mod', component: BoardModeratorComponent , canActivate : [RouteGuard]},
  { path: 'admin', component: BoardAdminComponent , canActivate : [AdminGuard]},
  { path: 'noaccess', component: NoaccessComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
