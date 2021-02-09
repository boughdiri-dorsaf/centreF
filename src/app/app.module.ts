import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front/front-rounting.module';
import { AdminRoutingModule } from './admin/admin-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';
import { ConnectAdminComponent } from './admin/connect-admin/connect-admin.component';
import { AddFormationComponent } from './admin/add-formation/add-formation.component';
import { AddFormateurComponent } from './admin/add-formateur/add-formateur.component';
import { AddSessionComponent } from './admin/add-session/add-session.component';
import { SessionFormateurComponent } from './admin/session-formateur/session-formateur.component';
import { HomeComponent } from './admin/home/home.component';
import { AcceuilComponent } from './front/acceuil/acceuil.component';
import { SearchFormationComponent } from './front/search-formation/search-formation.component';
import { DetailFormationComponent } from './front/detail-formation/detail-formation.component';
import { AboutComponent } from './front/about/about.component';
import { FormateurRoutingModule } from './formateur/formateur-rounting.module';
import { ConnectFormateurComponent } from './formateur/connect-formateur/connect-formateur.component';
import { EspaceCondidatComponent } from './condidat/espace-condidat/espace-condidat.component';
import { EspaceFormateurComponent } from './formateur/espace-formateur/espace-formateur.component';
import { ConnectCondidatComponent } from './condidat/connect-condidat/connect-condidat.component';
import { SignupCondidatComponent } from './condidat/signup-condidat/signup-condidat.component';
import { CondidatRoutingModule } from './condidat/condidat-rounting.module';


@NgModule({
  declarations: [
    AppComponent,
    ConnectAdminComponent,
    AddFormationComponent,
    AddFormateurComponent,
    AddSessionComponent,
    SessionFormateurComponent,
    HomeComponent,
    AcceuilComponent,
    SearchFormationComponent,
    DetailFormationComponent,
    ConnectFormateurComponent,
    EspaceCondidatComponent,
    EspaceFormateurComponent,
    AboutComponent,
    ConnectCondidatComponent,
    SignupCondidatComponent
    ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    AdminRoutingModule,
    FrontRoutingModule,
    FormateurRoutingModule,
    CondidatRoutingModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
