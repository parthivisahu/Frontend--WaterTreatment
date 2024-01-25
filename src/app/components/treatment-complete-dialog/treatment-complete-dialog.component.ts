import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';

@Component({
  selector: 'app-treatment-complete-dialog',
  template: `
    <h2 style="padding: 5%;">Water Treatment Complete</h2>
    <p style="padding: 5%;">The water treatment process has been completed successfully!
    <br>
      <button  mat-button (click)="closeDialog()">Close</button>
    </p>
  `,
})
export class TreatmentCompleteDialogComponent {
  constructor(public dialogRef: MatDialogRef<TreatmentCompleteDialogComponent>, private router: Router ) {}

  closeDialog(): void {
    this.dialogRef.close();
    this.navigateToLandingPage(); 
  }
  navigateToLandingPage(): void {
    this.router.navigate(['/supervisor']);
  }
}
