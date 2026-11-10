import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClaimCardComponent } from './claim-card.component';

describe('ClaimCardComponent', () => {
  let component: ClaimCardComponent;
  let fixture: ComponentFixture<ClaimCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClaimCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClaimCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
