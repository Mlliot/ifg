import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../services/login.service';
import { ClaimComponent } from './claim/claim.component';
import { RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HistoryCardComponent } from "./profile-card/history-card/history-card.component";
import { PaymentCardComponent } from "./profile-card/payment-card/payment-card.component";
import { FileCardComponent } from "./profile-card/file-card/file-card.component";

@Component({
  selector: 'app-user',
  imports: [ClaimComponent, RouterLink, HistoryCardComponent, PaymentCardComponent, FileCardComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent implements OnInit{

  user = {
    name: 'Elliot Simmons',
    photo: 'images/photo.jpg',
    insuranceType: 'Liability',
    userSince: '01-03-2002',
    nextPayment: '01-03-2026',
    claims: [],
  }

  isAuth: boolean = false;

  claims = [];
  constructor(private auth: AuthService){}

  ngOnInit(): void {
      // this.auth.getAuth().subscribe({
      //   next: value => this.isAuth = value,
      //   error: value => console.log(value)
      // });
      this.isAuth = this.auth.getAuth();
  }

}
