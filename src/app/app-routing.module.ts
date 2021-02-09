import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectAdminComponent } from './admin/connect-admin/connect-admin.component';
import { ConnectCondidatComponent } from './condidat/connect-condidat/connect-condidat.component';
import { ConnectFormateurComponent } from './formateur/connect-formateur/connect-formateur.component';
import { AboutComponent } from './front/about/about.component';
import { AcceuilComponent } from './front/acceuil/acceuil.component';

const routes: Routes = [
  {path: 'connect_admin', component: ConnectAdminComponent},
  {path: '', redirectTo: '/about', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
