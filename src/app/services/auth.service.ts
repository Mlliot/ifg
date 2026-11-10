import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private user = {
    username: 'admin',
    pass:'1234'
  }

  private isAuthenticated: boolean = false;

  login(username: string, password: string){

    if(username === this.user.username){
      this.isAuthenticated = true;
    } else {
      this.isAuthenticated = false;
    }

    return this.isAuthenticated;
  }

  logout(){
    this.isAuthenticated = false;
    return this.isAuthenticated;
  }

  getAuth(){
    return this.isAuthenticated;
  }
}
