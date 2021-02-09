import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Location } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router, private route: Router,) { }

  ngOnInit(): void {if(sessionStorage.adminConnect == "active"){
    this.route.navigate(["/admin"])
  }else{
    this.route.navigate(["/connect_admin"])
  }
  }

  onLogout(){
    sessionStorage.removeItem("adminConnect");
    this.router.navigate(["/connect_admin"])

  }

}
