import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectFormateurComponent } from './connect-formateur/connect-formateur.component';
import { EspaceFormateurComponent } from './espace-formateur/espace-formateur.component';


const routes: Routes = [
  {path: 'connect_formateur', component: ConnectFormateurComponent},
  {path: 'espace_formateur', component: EspaceFormateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FormateurRoutingModule { }
