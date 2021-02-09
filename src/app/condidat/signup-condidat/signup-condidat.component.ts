import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Condidat } from 'src/app/admin/model/condidat';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-signup-condidat',
  templateUrl: './signup-condidat.component.html',
  styleUrls: ['./signup-condidat.component.scss']
})
export class SignupCondidatComponent implements OnInit {
  iCondidat=[];

  constructor(private dbS : DatabaseService, private router:Router) { }

  onSubmit(icondidat: NgForm){
    var ext = icondidat.value.cv.substring(icondidat.value.cv.lastIndexOf('.') + 1);
    if(ext == "pdf"){
      this.iCondidat.push(new Condidat(null, icondidat.value.cin, icondidat.value.name, icondidat.value.prenom, icondidat.value.email,icondidat.value.password, icondidat.value.cv,icondidat.value.photo,
))

      this.dbS.addCondidat(this.iCondidat)
      alert("Condidat Ajouter Avec Succes")
      this.router.navigate(["/connect_condidat"])
    }else{
      alert("Upload pdf files only in cv !!");
    }
  }

  ngOnInit(){}

}
