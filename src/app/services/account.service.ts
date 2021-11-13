import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  //loginParams: Login = {database:"",username:"", password:""};
  urlLogin = 'https://localhost:50000/b1s/v1/Login';

  urlLogout = 'https://localhost:50000/b1s/v1/Logout'

  constructor(private http: HttpClient) { }



  login(loginParams: Login){
    return this.http.post(this.urlLogin,loginParams);
  }

  logout(){
    return this.http.post(this.urlLogout,"");
  }

}
