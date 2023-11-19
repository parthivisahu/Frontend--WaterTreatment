import { Component, Input, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl
} from '@angular/forms';
import { SupervisorInterface, UserInterface } from 'src/app/services/interfaces/role';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  user!: UserInterface;
  supervisor!: SupervisorInterface;
  @Input() data!: UserInterface | SupervisorInterface;

  userForm!: FormGroup;

  constructor(private fb: FormBuilder,
    private router: Router,
    private snackBar: MatSnackBar) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      company: ['', Validators.required],
      location: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted successfully!', this.userForm.value);
      // Add logic to send data to the backend or perform other actions
      this.showSnackBar('Submission completed successfully!');
      
      // Redirect to the landing page after showing the snackbar
      setTimeout(() => {
        this.router.navigate(['/landing']);
      }, 2000); // Redirect after 2 seconds (adjust as needed)
    } else {
      console.log('Invalid form! Please check the fields.');
      // Display error messages or handle invalid form
    }
  }
  
  checkRole() {
    if (this.data.hasOwnProperty('employeeType')) {
      this.user = this.data as UserInterface;
    } else if (this.data.hasOwnProperty('department')) {
      this.supervisor = this.data as SupervisorInterface;
    }
  }

  reset(){
    this.userForm.reset();
  }

  showSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds for the snackbar to be visible
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });
  }
}
