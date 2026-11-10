import { Component, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { QuoteComponent } from "../quote/quote.component";
import { AuthService } from '@auth0/auth0-angular';
import { LoginService } from '../../services/login.service';
import { Observable, Subscription } from 'rxjs';
import { LoginComponent } from "../login/login.component";

@Component({
  selector: 'app-header',
  imports: [RouterLink, QuoteComponent, LoginComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit{
  isQuote = false;

  constructor(private auth: LoginService){}

  public isAuth: boolean = false;

  ngOnInit(){
    this.auth.getAuth().subscribe({
      next: value => {this.isAuth = value; console.log("Value of isAuthenticated$: " + this.isAuth);},
      error: value => console.log(value)
    }
    );
  }

  toggleNav(){
    let nav = document.getElementById("pop_nav");
    let logo = document.getElementById("logo_wrap");
    let quote = document.getElementById("quote");
    if(nav==null || logo==null || quote==null) { return;}
    if(nav.style.display=="none"){
        nav.style.display = "block";
        logo.style.display = "none";
        quote.style.display = "none";
    } else {
        nav.style.display = "none";
        logo.style.display = "block";
        quote.style.display = "block";
    }
  }

  quote() {
    if(this.isQuote){
      this.isQuote = false;
    } else {
      this.isQuote = true;
    }
  }
}
