import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { ConnectAdminComponent } from './connect-admin/connect-admin.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { HomeComponent } from './home/home.component';
import { ListesFormateurComponent } from './listes-formateur/listes-formateur.component';
import { SessionFormationComponent } from './session-formation/session-formation.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SessionFormateurComponent } from './session-formateur/session-formateur.component';
import { AddSessionComponent } from './add-session/add-session.component';
@NgModule({
  declarations: [AddFormateurComponent, ConnectAdminComponent, AddFormationComponent, HomeComponent, ListesFormateurComponent, SessionFormationComponent, SessionFormateurComponent, AddSessionComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    AdminRoutingModule
  ],
  exports: [
    RouterModule
  ],

})
export class AdminModule { }
