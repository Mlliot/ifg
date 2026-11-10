import { Component, inject, input } from '@angular/core';
import { ClaimService } from '../../../services/user/claim.service';

@Component({
  selector: 'app-claim-card',
  imports: [],
  template: `
      
        <!-- <li>
          <div>{{claim.claimNum}}</div>
          <div>{{claim.type}}</div>
          <div>{{claim.beneficiary}}</div>
          <div>{{claim.policy}}</div>
          <div>{{claim.currentAction}}</div>
        </li> -->
      
      <div>
        <p>{{claimNum()}}</p>
        <p>{{type()}}</p>
        <p>{{beneficiary()}}</p>
        <p>{{policy()}}</p>
        <p>{{currentAction()}}</p>
      </div>
  `,
  styleUrl: './claim-card.component.css'
})
export class ClaimCardComponent {

  claimNum = input();
  type = input();
  beneficiary = input() ;
  policy = input();
  currentAction = input();
  
  constructor() {

  }

}
