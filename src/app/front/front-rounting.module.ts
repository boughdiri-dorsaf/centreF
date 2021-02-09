import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConnectCondidatComponent } from '../condidat/connect-condidat/connect-condidat.component';
import { ConnectFormateurComponent } from '../formateur/connect-formateur/connect-formateur.component';
import { AboutComponent } from './about/about.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { DetailFormationComponent } from './detail-formation/detail-formation.component';
import { SearchFormationComponent } from './search-formation/search-formation.component';


const routes: Routes = [
  {path: '', component: AcceuilComponent,
    children: [
      {path: '', component: AboutComponent},
      {path: 'about', component: AboutComponent},
      {path: 'search_formation', component: SearchFormationComponent},
      {path: 'detail_formation/:id', component: DetailFormationComponent},
    ]
  },
  {path: 'connect_condidat', component: ConnectCondidatComponent},
  {path: 'connect_formateur', component: ConnectFormateurComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class FrontRoutingModule { }
