import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-espace-condidat',
  templateUrl: './espace-condidat.component.html',
  styleUrls: ['./espace-condidat.component.scss']
})
export class EspaceCondidatComponent implements OnInit {

  itemSession=[];

  constructor(private dbService :DatabaseService, private router:Router) {
  }

  ngOnInit(): void {
  }

  onLogout(){
    sessionStorage.removeItem("CondidatEmail");
    sessionStorage.removeItem("condidatConnect");

    this.router.navigate(["/connect_condidat"])
  }

}
