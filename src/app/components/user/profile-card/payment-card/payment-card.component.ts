import { Component, input } from '@angular/core';
import { ProfileCardComponent } from "../profile-card.component";

@Component({
  selector: 'app-payment-card',
  imports: [ProfileCardComponent],
  template: `
    <app-profile-card>
      <h1 class="card-title">Next Payment</h1>
      <p class="card-desc">{{user()}}</p>
    </app-profile-card>
  `,
  styleUrl: './payment-card.component.css'
})
export class PaymentCardComponent {
  user = input();
}
