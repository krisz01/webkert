import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { BundesligateamsComponent } from './bundesligateams/bundesligateams.component';
import { LaligaTeamsComponent } from './laligateams/laligateams.component';
import { Ligue1teamsComponent } from './ligue1teams/ligue1teams.component';
import { LoginComponent } from './login/login.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { PremierleagueteamsComponent } from './premierleagueteams/premierleagueteams.component';
import { RegisterComponent } from './register/register.component';
import { SeriaateamsComponent } from './seriaateams/seriaateams.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/mainpage', pathMatch: 'full' },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'mainpage', component: MainpageComponent },
  { path: 'laligateams', component: LaligaTeamsComponent, canActivate: [AuthGuard] },
  { path: ':page/detail/:id', component: TeamDetailComponent, canActivate: [AuthGuard] },
  { path: 'seriaateams', component: SeriaateamsComponent, canActivate: [AuthGuard] },
  { path: 'ligue1teams', component: Ligue1teamsComponent, canActivate: [AuthGuard] },
  { path: 'bundesligateams', component: BundesligateamsComponent, canActivate: [AuthGuard] },
  { path: 'premierleagueteams', component: PremierleagueteamsComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/mainpage', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
