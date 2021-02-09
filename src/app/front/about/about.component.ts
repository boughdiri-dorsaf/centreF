import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  tabFormations;

  constructor(private dbService :DatabaseService, private router:Router) {
    this.tabFormations = this.dbService.listeFormation();
  }

  ngOnInit(): void {
  }

  voirplus(idFormation){
    console.log(idFormation)
    this.router.navigate(["/detail_formation",idFormation])
  }

}
