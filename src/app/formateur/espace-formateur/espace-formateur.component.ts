import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-espace-formateur',
  templateUrl: './espace-formateur.component.html',
  styleUrls: ['./espace-formateur.component.scss']
})
export class EspaceFormateurComponent implements OnInit {
  itemSession=[];

  constructor(private dbService :DatabaseService, private router:Router) {
    this.itemSession = this.dbService.getSessionFormateur();
  }

  ngOnInit(): void {
  }
  onLogout(){
    sessionStorage.removeItem("formateurConnect");
    this.router.navigate(["/connect_formateur"])
  }

}
