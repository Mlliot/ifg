import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ClaimService {

  constructor() { }

  claims = [
    {
      claimNum: 3,
      type: 'General',
      beneficiary: 'Elliot Simmons',
      policy: 12348765,
      currentAction: 'Under Review'
    },
    {
      claimNum: 2,
      type: 'General',
      beneficiary: 'Edwin Martinez',
      policy: 21347865,
      currentAction: 'Under Review'
    },
    {
      claimNum: 1,
      type: 'General',
      beneficiary: 'Elliot Simmons',
      policy: 12348765,
      currentAction: 'Closed'
    }
  ];

  addClaim(claimNum: number, type: string, beneficiary: string, policy: number, currentAction: string) {
    this.claims.push({
      claimNum: claimNum,
      type: type,
      beneficiary: beneficiary,
      policy: policy,
      currentAction: currentAction
    });
  }

  removeClaim(claimNum: number) {
    this.claims = this.claims.filter(claim => claim.claimNum !== claimNum);
  }

  getClaims() {
    return this.claims;
  }
}
