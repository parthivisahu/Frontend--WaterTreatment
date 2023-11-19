import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WaterTreatmentPlantsComponent } from './water-treatment-plants.component';

describe('WaterTreatmentPlantsComponent', () => {
  let component: WaterTreatmentPlantsComponent;
  let fixture: ComponentFixture<WaterTreatmentPlantsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WaterTreatmentPlantsComponent]
    });
    fixture = TestBed.createComponent(WaterTreatmentPlantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
