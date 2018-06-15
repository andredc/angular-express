import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './components/auth/register/register.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UtentiService } from './services/utenti.service';
import { LoginComponent } from './components/auth/login/login.component';
import { AppRoutingModule } from './app-routing.module'

import {
  MatButtonModule, MatToolbarModule, MatFormFieldModule,
  MatInputModule, MatListModule, MatSelectModule, MatTabsModule,
  MatTableModule, MatSortModule, MatPaginatorModule, MatIconModule, MatSnackBarModule
} from '@angular/material';

import { FlexLayoutModule } from "@angular/flex-layout";
import { DipendentiComponent } from './components/dipendenti/dipendenti/dipendenti.component';
import { DipendenteComponent } from './components/dipendenti/dipendente/dipendente.component';
import { AddTags } from './components/dipendenti/dipendenti/addTagsDipendente.pipe'
import { AddSkills } from './components/skills/skillsmatrix/addSkillsDipendente.pipe';

import { TeamsComponent } from './components/teams/teams/teams.component';
import { FormTeamComponent } from './components/teams/form-team/form-team.component';
import { TeamComponent } from './components/teams/team/team.component';
import { RuoliDipendenteComponent } from './components/ruoli/ruoli-dipendente/ruoli-dipendente.component';
import { AddRuoliDipendenteComponent } from './components/ruoli/add-ruoli-dipendente/add-ruoli-dipendente.component';
import { AddSkillDipendenteComponent } from './components/skills/add-skill-dipendente/add-skill-dipendente.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material';
import { SkillsDipendenteComponent } from './components/skills/skills-dipendente/skills-dipendente.component';
import { SkillsmatrixComponent } from './components/skills/skillsmatrix/skillsmatrix.component';
import { DetailsDipendenteComponent } from './components/dipendenti/details-dipendente/details-dipendente.component';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { TagsDipendenteComponent } from './components/tags/tags-dipendente/tags-dipendente.component';
import { AddSkillComponent } from './components/skills/add-skill/add-skill.component';
import { HeaderComponent } from './components/header/header.component';
import {AuthService} from './services/auth.service'

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    DipendentiComponent,
    DipendenteComponent,
    AddTags,
    AddSkills,
    TeamsComponent,
    FormTeamComponent,
    TeamComponent,
    RuoliDipendenteComponent,
    AddRuoliDipendenteComponent,
    AddSkillDipendenteComponent,
    SkillsDipendenteComponent,
    SkillsmatrixComponent,
    DetailsDipendenteComponent,
    AdminPanelComponent,
    TagsDipendenteComponent,
    AddSkillComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTabsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    FlexLayoutModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],

  exports: [],
  providers: [
    UtentiService,
    AuthService
  ],
  entryComponents: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
