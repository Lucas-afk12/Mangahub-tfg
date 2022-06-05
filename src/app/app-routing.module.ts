import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritosComponent } from './favoritos/favoritos.component';

import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main/main.component';
import { ProfileDashboardComponent } from './profile-dashboard/profile-dashboard.component';
import { ReaderComponent } from './reader/reader.component';
import { RegisterComponent } from './register/register.component';
import { UserGuardGuard } from './user-guard.guard';

const routes: Routes = [
  { path: '', component: ProfileDashboardComponent },
  { path: 'home', component: MainComponent , canActivate: [UserGuardGuard] },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'reader/:MangaID/:chapterID', component: ReaderComponent, canActivate: [UserGuardGuard]},
  { path: 'profile', component: ProfileDashboardComponent, canActivate: [UserGuardGuard]},
  { path: 'profile/favorites', component: FavoritosComponent, canActivate: [UserGuardGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
