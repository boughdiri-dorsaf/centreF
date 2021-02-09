import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';
import { formation } from '../model/formation';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.scss'],
})
export class AddFormationComponent implements OnInit {

  itemFormation = [];
  niveauSelect = "debutant";
  constructor(private dbS : DatabaseService, private router : Router) {
  }

  ngOnInit() {
    //console.log(this.niveauSelect)
  }

  public onSubmit(formationInfo:NgForm){
    var ext = formationInfo.value.program.substring(formationInfo.value.program.lastIndexOf('.') + 1);
        if(ext == "pdf"){
          this.itemFormation.push(new formation(null, formationInfo.value.titre, formationInfo.value.desc, formationInfo.value.nbrh, formationInfo.value.program, formationInfo.value.niveau, formationInfo.value.tags))
          this.dbS.addFormation(this.itemFormation);
          alert("Formation Ajouter Avec Succes")
          this.router.navigate(["/admin"])
        }else{
            alert("Upload pdf files only in programm !!");
        }
  }

}
