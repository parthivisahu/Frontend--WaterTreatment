import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDTO } from 'src/app/services/interfaces/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm!: FormGroup;
  errorMessage: string = '';
  selectedRole: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) {}

  user: UserDTO = { username: '', password: ''};
  
  onSignUp() {
    this.authService.register(this.user).subscribe(
      (response: any) => {
        console.log('User registered successfully!', response);
        console.log(this.selectedRole);
        this.router.navigate(['/login-main']);
      },
      (error: any) => {
        this.errorMessage = error.message || 'An error occurred during signup.';
        console.error('Signup error:', error);
      }
    );
  }

  ngOnInit(): void {
    this.signupForm = this.fb.group({
      username: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/[A-Za-z0-9@$!%*#?&]/)
      ]],
      'confirm-password': ['', Validators.required], // Add a confirm password field
      phone: ['', Validators.required]
    });
  }
}
