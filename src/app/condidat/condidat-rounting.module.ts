import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectCondidatComponent } from './connect-condidat/connect-condidat.component';
import { EspaceCondidatComponent } from './espace-condidat/espace-condidat.component';
import { SignupCondidatComponent } from './signup-condidat/signup-condidat.component';


const routes: Routes = [
  {path: 'connect_condidat', component: ConnectCondidatComponent},
  {path: 'espace_condidat', component: EspaceCondidatComponent},
  {path: 'signup_condidat', component: SignupCondidatComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CondidatRoutingModule { }
