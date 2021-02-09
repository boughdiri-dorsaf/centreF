import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { CondidatRoutingModule } from './condidat-rounting.module';

import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { ConnectCondidatComponent } from './connect-condidat/connect-condidat.component';
import { SignupCondidatComponent } from './signup-condidat/signup-condidat.component';

@NgModule({
  declarations: [EspaceCondidatComponent, ConnectCondidatComponent, SignupCondidatComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    CondidatRoutingModule
  ]
})
export class CondidatModule { }
