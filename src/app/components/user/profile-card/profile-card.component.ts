import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-card',
  imports: [],
  template: `
    <div> 
      <ng-content select=".card-title" id="card_title"></ng-content>
      <ng-content select=".card-desc" id="card_desc"></ng-content>
    </div>
  `,
  styleUrl: './profile-card.component.css'
})
export class ProfileCardComponent {

}
