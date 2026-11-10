import { Injectable } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  // private isAuth: boolean = false;

  constructor(private auth: AuthService) { }

  login(...params: any){
    this.auth.loginWithRedirect(...params);
    // this.isAuth = true;
  }

  logout(...params: any){
    this.auth.logout(...params);
    // this.isAuth = false;
  }

  getAuth(){
    return this.auth.isAuthenticated$;
  }
}
