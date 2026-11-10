import { Component, inject } from '@angular/core';
import { ClaimCardComponent } from "../claim-card/claim-card.component";
import { ClaimService } from '../../../services/user/claim.service';

@Component({
  selector: 'app-claim',
  imports: [ClaimCardComponent],
  template: `
      @for(claim of claims; track claim.claimNum){
        <app-claim-card
          [claimNum]="claim.claimNum"
          [type]="claim.type"
          [beneficiary]="claim.beneficiary"
          [policy]="claim.policy"
          [currentAction]="claim.currentAction">
          <p>test</p>
        </app-claim-card>
      }
  `,
  styleUrl: './claim.component.css'
})
export class ClaimComponent {

  claim = inject(ClaimService);
  claims = this.claim.getClaims(); // Get claims from the ClaimService

}
