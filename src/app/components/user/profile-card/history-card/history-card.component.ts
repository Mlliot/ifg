import { Component, input } from '@angular/core';
import { ProfileCardComponent } from "../profile-card.component";

@Component({
  selector: 'app-history-card',
  imports: [ProfileCardComponent],
  template: `
    <app-profile-card>
      <h1 class="card-title">Account History</h1>
      <p class="card-desc">User Since {{user()}}</p>
    </app-profile-card>
  `,
  styleUrl: './history-card.component.css'
})
export class HistoryCardComponent {
  user = input();
}
