import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-connect-admin',
  templateUrl: './connect-admin.component.html',
  styleUrls: ['./connect-admin.component.scss'],
})
export class ConnectAdminComponent implements OnInit {

  constructor(private dbS : DatabaseService, private route:Router) { }

  ngOnInit(): void {
    if(sessionStorage.adminConnect == "active"){
      this.route.navigate(["/admin"])
    }else{
      this.route.navigate(["/connect_admin"])
    }
  }

  onSubmit(f: NgForm) {
    const email = f.value.email;
    const password = f.value.password;

    this.dbS.verifyAdmin(email,password);

    this.route.navigate(["/admin"])

  }

}
