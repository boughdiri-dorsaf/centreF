import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AcceuilComponent } from './acceuil/acceuil.component';
import { FrontRoutingModule } from './front-rounting.module';



@NgModule({
  declarations: [AcceuilComponent],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule,
    FrontRoutingModule
  ],
  exports: [
    RouterModule
  ],
})
export class FrontModule { }
