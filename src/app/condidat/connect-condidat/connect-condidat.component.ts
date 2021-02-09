import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-connect-condidat',
  templateUrl: './connect-condidat.component.html',
  styleUrls: ['./connect-condidat.component.scss']
})
export class ConnectCondidatComponent implements OnInit {

  constructor(private dbS : DatabaseService, private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.condidatConnect == "active"){
      this.route.navigate(["/espace_condidat"])
    }else{
      this.route.navigate(["/connect_condidat"])
    }
  }

  onSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    this.dbS.verifyCandidat(email,password);

    if(sessionStorage.condidatConnect == "active"){
      this.route.navigate(["/espace_condidat"])
    }

  }
}
