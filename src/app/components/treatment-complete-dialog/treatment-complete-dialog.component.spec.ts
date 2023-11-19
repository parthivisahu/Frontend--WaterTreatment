import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TreatmentCompleteDialogComponent } from './treatment-complete-dialog.component';

describe('TreatmentCompleteDialogComponent', () => {
  let component: TreatmentCompleteDialogComponent;
  let fixture: ComponentFixture<TreatmentCompleteDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TreatmentCompleteDialogComponent]
    });
    fixture = TestBed.createComponent(TreatmentCompleteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
