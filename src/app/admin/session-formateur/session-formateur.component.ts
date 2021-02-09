import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';
import { formateur } from '../model/formateur';
import { session } from '../model/session';
import { sessionFormateur } from '../model/session-formateur';

@Component({
  selector: 'app-session-formateur',
  templateUrl: './session-formateur.component.html',
  styleUrls: ['./session-formateur.component.scss']
})
export class SessionFormateurComponent implements OnInit {
  tabFormateurs=[]
  tabSession=[]

  cin_formateur
  nom_formateur
  id_session
  titre_session

  tabSessionFormateur=[]
  //formateurSeelected;

  //[attr.selected]="sessionSelected == ses.nom"


    constructor(private dbService :DatabaseService, private router:Router) {
      this.tabFormateurs = this.dbService.listesformateurs();
      this.tabSession = this.dbService.getSessions();
    }


    ajouter(){
      this.tabSessionFormateur.push(new sessionFormateur(this.cin_formateur,this.nom_formateur,this.id_session,this.titre_session))
      this.dbService.addSession_formateur(this.tabSessionFormateur)
      alert("Success de creation!")
      this.router.navigate(["/admin"])
    }

    ngOnInit() {
     // console.log(this.tabFormateurs)
      //this.formateurSeelected = this.tabFormateurs[1].nom;
    }

    onFormateurSelection(val:formateur){
      this.cin_formateur=val.numcin
      this.nom_formateur=val.nom
    }

    onSessionSelection(val:session){
      this.id_session=val.id
      this.titre_session=val.nom
    }

}
