import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DneComponent } from './dne.component';

describe('DneComponent', () => {
  let component: DneComponent;
  let fixture: ComponentFixture<DneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
