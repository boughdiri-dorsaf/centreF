import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';

@Component({
  selector: 'app-search-formation',
  templateUrl: './search-formation.component.html',
  styleUrls: ['./search-formation.component.scss']
})
export class SearchFormationComponent implements OnInit {
  tabFormations;

  constructor(private dbService :DatabaseService, private router:Router) {
    this.tabFormations = this.dbService.listeFormation();
  }

  ngOnInit(): void {
    console.log(this.tabFormations)
  }

  rechercher(val){
    if(val){
      this.tabFormations=this.dbService.getSearchFormation(val)
    }else{
      this.tabFormations = this.dbService.listeFormation();
    }
  }

  voirplus(idFormation){
    this.router.navigate(["/detail_formation",idFormation])
  }

}
