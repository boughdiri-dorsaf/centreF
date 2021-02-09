import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-connect-formateur',
  templateUrl: './connect-formateur.component.html',
  styleUrls: ['./connect-formateur.component.scss']
})
export class ConnectFormateurComponent implements OnInit {

  constructor(private dbS : DatabaseService, private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.formateurConnect == "active"){
     this.route.navigate(["/espace_formateur"])
    }else{
      this.route.navigate(["/connect_formateur"])
    }
  }

  onSubmit(f: NgForm) {
    const cin = f.value.cin;
    const password = f.value.password;

    this.dbS.verifyFormateur(cin,password);

    if(sessionStorage.formateurConnect == "active"){
      this.route.navigate(["/espace_formateur"])
     }
  }

}
