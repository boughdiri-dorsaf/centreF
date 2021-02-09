import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';
import { formateur } from '../model/formateur';

@Component({
  selector: 'app-add-formateur',
  templateUrl: './add-formateur.component.html',
  styleUrls: ['./add-formateur.component.scss']
})
export class AddFormateurComponent implements OnInit {
  oneFormateur=[];
  constructor(private dbS:DatabaseService, private router:Router) { }

  ngOnInit() {
  }

  onSubmit(iformateur:NgForm){
    var ext = iformateur.value.cv.substring(iformateur.value.cv.lastIndexOf('.') + 1);
        if(ext == "pdf"){
          this.oneFormateur.push(new formateur(null,iformateur.value.cin, iformateur.value.name, iformateur.value.prenom, iformateur.value.email,
            iformateur.value.password, iformateur.value.cv, iformateur.value.specialite, iformateur.value.tarifhorraire,iformateur.value.num_phone ,
            iformateur.value.photo))

          this.dbS.addFormateur(this.oneFormateur)
          alert("Formateur Ajouter Avec Succes")
          this.router.navigate(["/admin"])
        }else{
            alert("Upload pdf files only in cv !!");
        }
  }

}
