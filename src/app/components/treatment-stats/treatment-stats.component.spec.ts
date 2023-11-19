import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentStatsComponent } from './treatment-stats.component';

describe('TreatmentStatsComponent', () => {
  let component: TreatmentStatsComponent;
  let fixture: ComponentFixture<TreatmentStatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreatmentStatsComponent]
    });
    fixture = TestBed.createComponent(TreatmentStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
