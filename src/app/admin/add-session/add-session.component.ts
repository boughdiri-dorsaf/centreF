import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';
import { session } from '../model/session';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.scss']
})
export class AddSessionComponent implements OnInit {
  tabSession=[]
  constructor(private dbService:DatabaseService, private router:Router ) { }

  ngOnInit() {
  }

  onSubmit(TabSession:NgForm){
    var ext = TabSession.value.plannig.substring(TabSession.value.plannig.lastIndexOf('.') + 1);
        if(ext == "pdf"){
          this.tabSession.push(new session(null,TabSession.value.nom,TabSession.value.date_debut,TabSession.value.date_fin,TabSession.value.plannig))
          this.dbService.addSession(this.tabSession)
          alert("Success d'ajout !")
          this.router.navigate(["/admin"])
        }else{
            alert("Upload pdf files only in planning !!");
        }
  }

}
