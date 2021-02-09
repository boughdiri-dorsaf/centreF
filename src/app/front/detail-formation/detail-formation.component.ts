import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DatabaseService } from 'src/app/database/database.service';
import {jsPDF} from 'jspdf';

@Component({
  selector: 'app-detail-formation',
  templateUrl: './detail-formation.component.html',
  styleUrls: ['./detail-formation.component.scss']
})
export class DetailFormationComponent implements OnInit {

  itemFormation=[];

  constructor(private dbS:DatabaseService, private route: ActivatedRoute) {
    let id= this.route.snapshot.paramMap.get('id');
    this.itemFormation = dbS.getFormation(id);
    console.log(this.itemFormation)
  }

  ngOnInit(): void {
  }

  download(file) {
    console.log("downloading file ...");
    const doc = new jsPDF();
    doc.save(file)
  }

}
