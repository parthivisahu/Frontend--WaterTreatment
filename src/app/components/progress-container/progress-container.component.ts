import { AfterViewInit, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProgressComponent } from 'src/app/progress/progress.component';
import { MatDialog } from '@angular/material/dialog';
import { TreatmentCompleteDialogComponent } from '../treatment-complete-dialog/treatment-complete-dialog.component';
import { PdfGeneratorService } from 'src/app/services/pdf/pdf-generator.service';
@Component({
  selector: 'app-progress-container',
  templateUrl: './progress-container.component.html',
  styleUrls: ['./progress-container.component.scss'],
  
})
export class ProgressContainerComponent implements OnInit, AfterViewInit {
  
  constructor(private dialog: MatDialog, private pdfGeneratorService: PdfGeneratorService) {}
  
  testForm = new FormGroup({
    food: new FormControl('', Validators.required),
    comment: new FormControl('', Validators.required),
  });
  ngOnInit() {}

  goNext(progress: ProgressComponent) {
    progress.next();
  }

  onStateChange(event:any) {
    console.log(event);
  }

  onCompleteTreatment() {
    const dialogRef = this.dialog.open(TreatmentCompleteDialogComponent);

    dialogRef.afterClosed().subscribe(() => {
      console.log('The dialog was closed');
      // Perform any actions after dialog close if needed
    });
  }
  generatePlantPdf(): void {
  

    this.pdfGeneratorService.generatePdf();
  }

  ngAfterViewInit() {}
}
