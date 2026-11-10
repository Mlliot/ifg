import { Component } from '@angular/core';
import { ProfileCardComponent } from "../profile-card.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-file-card',
  imports: [ProfileCardComponent, RouterLink],
  template: `
    <app-profile-card>
      <h1 class="card-title">File A Claim</h1>
      <p class="card-desc">Need to file a claim? Please visit <a routerLink="claims">claims</a>.</p>
    </app-profile-card>
  `,
  styleUrl: './file-card.component.css'
})
export class FileCardComponent {

}
