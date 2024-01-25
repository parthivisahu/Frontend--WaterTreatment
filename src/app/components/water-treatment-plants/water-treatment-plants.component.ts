import { Component, OnInit } from '@angular/core';
import { BackendService } from 'src/app/services/backend.service';
// import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-water-treatment-plants',
  templateUrl: './water-treatment-plants.component.html',
  styleUrls: ['./water-treatment-plants.component.scss'],
})
export class WaterTreatmentPlantsComponent implements OnInit {
  waterTreatmentPlantsData: any[] = [];
  plantForm!: FormGroup;

  constructor(
    private backendService: BackendService,
    // private dialog: MatDialog,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.fetchWaterPlants();
    this.initializeForm();
  }

  initializeForm(): void {
    this.plantForm = this.formBuilder.group({
      name: ['', Validators.required],
      location: ['', Validators.required],
      temperature: ['', Validators.required],
      gallonsPresent: ['', Validators.required],
      coagulation:['',Validators.required],
      flocculation:['',Validators.required],
      sedimentation:['',Validators.required],
      filtration:['',Validators.required],
      disinfection:['',Validators.required],
    });
  }

  fetchWaterPlants(): void {
    this.backendService.getWaterPlants().subscribe(data => {
      this.waterTreatmentPlantsData = data;
    });
  }

  addWaterPlant(): void {
    if (this.plantForm.valid) {
      this.backendService.addWaterPlant(this.plantForm.value).subscribe(() => {
        console.log('Plant added');
        this.fetchWaterPlants();
        // Optionally, you can reset the form after successful addition:
        this.plantForm.reset();
      });
    }
  }

  deleteWaterPlant(_id: string): void {
    if (confirm("Are you sure you want to delete this water treatment plant?")) {
      this.backendService.deleteWaterPlant(_id).subscribe(() => {
        console.log('Plant deleted');
        this.fetchWaterPlants();
      });
    }
  }

  // Implement other methods for editing and deleting plants if needed
}
