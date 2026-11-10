import { Component } from '@angular/core';
// import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  imports: [RouterLink],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor( private auth: AuthService){}

  public isAuth: boolean = true;

  // ngOnInit(){
  //   this.auth.getAuth().subscribe({
  //     next: value => {this.isAuth = value; console.log("Value of isAuthenticated$: " + this.isAuth);},
  //     error: value => console.log(value)
  //   }
  //   );
  // }

  login(){
    // this.auth.login();
  }

  logout(){
    this.isAuth = this.auth.logout();
    
  }

}
