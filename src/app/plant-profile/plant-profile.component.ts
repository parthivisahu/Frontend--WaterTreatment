import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { WaterTreatmentService } from 'src/app/services/water-treatment.service';
import { PlantDetails, UserInterface } from 'src/app/services/interfaces/role';
import { BackendService } from 'src/app/services/backend.service';


@Component({
  selector: 'app-plant-profile',
  templateUrl: './plant-profile.component.html',
  styleUrls: ['./plant-profile.component.scss']
})
export class PlantProfileComponent implements OnInit {
  details: UserInterface |undefined ;
  plant: PlantDetails | undefined;
  constructor(
      private activatedRoute: ActivatedRoute,
      private backendservices: BackendService,
    ) {}
  
    ngOnInit(): void {
      const plantId = this.activatedRoute.snapshot.paramMap.get('id');
      if (plantId) {
        this.backendservices
          .getWaterPlants()
          .subscribe((plants: any) => {
            this.plant = plants.find((plant: PlantDetails) => plant.id === plantId);
          });
      }
    }
  }
