import { TestBed } from '@angular/core/testing';

import { EqualsService } from './equals.service';

describe('EqualsService', () => {
  let service: EqualsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EqualsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
