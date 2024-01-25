import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSupervisorComponent } from './login-supervisor.component';

describe('LoginSupervisorComponent', () => {
  let component: LoginSupervisorComponent;
  let fixture: ComponentFixture<LoginSupervisorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSupervisorComponent]
    });
    fixture = TestBed.createComponent(LoginSupervisorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
