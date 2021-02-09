import { Component, OnInit } from '@angular/core';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-acceuil',
  templateUrl: './acceuil.component.html',
  styleUrls: ['./acceuil.component.scss']
})
export class AcceuilComponent implements OnInit {

  constructor(private dbS:DatabaseService) {
    this.dbS.createdatabase()
   }

  ngOnInit(): void {
  }

}
