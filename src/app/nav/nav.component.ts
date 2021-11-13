import { Component, OnInit } from '@angular/core';
import { Login } from '../models/login';
import { User } from '../models/user';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  loginParams: Login = {CompanyDB:"SBODemoIL",Password:"",UserName:""};

  constructor(private account: AccountService) { }

  ngOnInit(): void {
  }

  login(){
    this.account.login(this.loginParams).subscribe(response => {
      console.log("Login was seccessful")
    });

    console.log(this.loginParams);
  }


  logout(){
    this.account.logout().subscribe(response => {
      console.log("Logout successfully");
    })
  }

}
