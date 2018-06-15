import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/auth/login/login.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { DipendentiComponent } from './components/dipendenti/dipendenti/dipendenti.component'
import { DipendenteComponent } from './components/dipendenti/dipendente/dipendente.component'
import { TeamsComponent } from './components/teams/teams/teams.component';
import { TeamComponent } from './components/teams/team/team.component';
import { FormTeamComponent } from './components/teams/form-team/form-team.component';
import { AddRuoliDipendenteComponent  } from './components/ruoli/add-ruoli-dipendente/add-ruoli-dipendente.component'
import { AddSkillDipendenteComponent } from './components/skills/add-skill-dipendente/add-skill-dipendente.component';
import { SkillsmatrixComponent } from './components/skills/skillsmatrix/skillsmatrix.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { AuthguardService } from './services/authguard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegisterComponent },
  { path: 'dipendenti', component: DipendentiComponent ,canActivate:[AuthguardService]},
  { path: 'dipendenti/:id', component: DipendenteComponent,canActivate:[AuthguardService] },
  { path: 'teams', component: TeamsComponent,canActivate:[AuthguardService] },
  { path: 'teams/:id', component: TeamComponent ,canActivate:[AuthguardService]},

  { path: 'addteams', component: FormTeamComponent, canActivate:[AuthguardService]},
  { path: 'addruolo', component: AddRuoliDipendenteComponent ,canActivate:[AuthguardService] },
  { path: 'dipendenti/:id/addskill', component: AddSkillDipendenteComponent ,canActivate:[AuthguardService]},
  { path: 'skillsmatrix', component: SkillsmatrixComponent,canActivate:[AuthguardService] },
  { path: 'admin', component: AdminPanelComponent, canActivate:[AuthguardService]},

  { path: '', redirectTo: '/login', pathMatch: 'full' }

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
