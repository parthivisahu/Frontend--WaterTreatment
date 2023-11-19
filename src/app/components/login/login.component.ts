import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth/auth.service';
import { UserDTO } from 'src/app/services/interfaces/role';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  user: UserDTO = { username: '', password: '' };
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  onLogin() {
    this.user.username = this.loginForm.value.username;
    this.user.password = this.loginForm.value.password;

    this.authService.register(this.user).subscribe(
      (response:any) => {
        // Handle successful login response
        console.log('Login successful!', response);
        // Redirect to the home/dashboard or any other route after successful login
        this.router.navigate(['/landing']);

        // Send data to MongoDB (this section is just an example)
        this.authService.login(this.user).subscribe((response: any) => {
          console.log('Data sent to MongoDB:', response);
        }, (error: any) => {
          console.error('Error sending data to MongoDB:', error);
        });
      },
      (error:any) => {
        // Handle login error
        this.errorMessage = error.message || 'An error occurred during login.';
        console.error('Login error:', error);
      }
    );
  }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(20),
        Validators.pattern(/[A-Za-z0-9@$!%*#?&]/),
      ]]
    });
  }
}
