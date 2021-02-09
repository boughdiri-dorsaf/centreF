import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormateurRoutingModule } from './formateur-rounting.module';

import { ConnectFormateurComponent } from './connect-formateur/connect-formateur.component';
import { EspaceFormateurComponent } from './espace-formateur/espace-formateur.component';



@NgModule({
  declarations: [ConnectFormateurComponent, EspaceFormateurComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FormateurRoutingModule
  ]
})
export class FormateurModule { }
