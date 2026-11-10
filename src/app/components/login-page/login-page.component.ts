import { Component } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { RouterLink } from '@angular/router';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login-page',
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

    loginForm = new FormGroup({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  
    constructor( private auth: AuthService){}
  
    public isAuth: boolean = false;
  
    // ngOnInit(){
    //   this.auth.getAuth().subscribe({
    //     next: value => {this.isAuth = value; console.log("Value of isAuthenticated$: " + this.isAuth);},
    //     error: value => console.log(value)
    //   }
    //   );
    // }

    submit(){
      console.log("here!");
      this.auth.login(this.loginForm.value.username!, this.loginForm.value.password!);
      console.log(this.auth.getAuth());
      this.isAuth = this.auth.getAuth();
    }
  
}
