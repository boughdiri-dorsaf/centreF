import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddFormateurComponent } from './add-formateur/add-formateur.component';
import { AddFormationComponent } from './add-formation/add-formation.component';
import { AddSessionComponent } from './add-session/add-session.component';
import { ConnectAdminComponent } from './connect-admin/connect-admin.component';
import { HomeComponent } from './home/home.component';
import { ListesFormateurComponent } from './listes-formateur/listes-formateur.component';
import { SessionFormateurComponent } from './session-formateur/session-formateur.component';
import { SessionFormationComponent } from './session-formation/session-formation.component';

const routes: Routes = [
  {path: 'connect_admin', component: ConnectAdminComponent},
  {path: 'admin', component: HomeComponent,
    children: [
      {path: 'add_formation', component: AddFormationComponent},
      {path: 'add_formateur', component: AddFormateurComponent},
      {path: 'add_session', component: AddSessionComponent},
      {path: 'session_formateur', component: SessionFormateurComponent},
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
