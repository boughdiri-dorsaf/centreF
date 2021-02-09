import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listes-formateur',
  templateUrl: './listes-formateur.component.html',
  styleUrls: ['./listes-formateur.component.scss']
})
export class ListesFormateurComponent implements OnInit {

  mode : string;

  constructor() { }

  ngOnInit(): void {
  }

  add(){
    this.mode = 'add';
  }

}
